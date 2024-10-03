const { AZURE_INDEX_API_KEY } = require("./authCodes.json");
const fs = require("fs");
const path = require("path");
const { randomUUID } = require("crypto");

async function deleteAllIndexDocuments() {
  const documents = [];
  let complete = false;
  let currUrl = "";
  while (!complete) {
    try {
      const docs = await getAzureIndexDocuments(currUrl);
      if (!docs["@odata.nextLink"]) {
        complete = true;
      }
      documents.push(...docs.value);
      currUrl = docs["@odata.nextLink"];
    } catch (error) {
      console.log("Fail");
    }
  }
  await createAzureIndexDocuments(documents, "delete");
}

async function getAzureIndexDocuments(nextUrl: string = "") {
  const url = nextUrl || "https://rapidsupportaisearch.search.windows.net/indexes/azureblob-index/docs?api-version=2023-11-01";
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "api-key": AZURE_INDEX_API_KEY
    }
  });
  if (res.ok) {
    return await res.json();
  } else {
    throw new Error(await res.text());
  }
}

async function createAzureIndexDocuments(indexArr: any[], action: string = "mergeOrUpload") {
  const response = [];
  const batchSize = 50;
  const numBatches = Math.ceil(indexArr.length / batchSize);

  for (let i = 0; i < numBatches; i++) {
    const batchStart = i * batchSize;
    const batchEnd = Math.min((i + 1) * batchSize, indexArr.length);
    const batch = indexArr.slice(batchStart, batchEnd);

    const body = batch.map((indexObj) => ({
      "@search.action": action,
      ...indexObj
    }));

    await new Promise((r) => setTimeout(r, 500)); // Delay between batches

    const url = "https://rapidsupportaisearch.search.windows.net/indexes/azureblob-index/docs/index?api-version=2023-11-01";
    const req = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "api-key": AZURE_INDEX_API_KEY
      },
      body: JSON.stringify({ value: body })
    });

    if (req.ok) {
      const res = await req.json();
      console.log(res);
      response.push(...res.value);
    } else {
      const res = await req.text();
      console.log(req.status);
      throw new Error(res);
    }
  }
  console.log(response?.length);
}

function generateIndexDocuments() {
  const source: any = {
    id: "",
    slug: "",
    content: "",
    name: "",
    created_at: "",
    updated_at: "",
    url: ""
  };

  const result = {
    files: [],
    rapid_standard: [],
    rapid_core: []
  };

  function traverseFileTree(dir) {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);
      if (stats.isDirectory()) {
        traverseFileTree(filePath);
      } else {
        if (path.extname(file) === ".md") {
          result.files.push(filePath);
        }
      }
    });
  }

  traverseFileTree("./docs/Rapid");

  function getFirstHashTag(strArr) {
    for (const a of strArr) {
      if (a?.trim().startsWith("#")) {
        return a.replace("#", "")?.trim();
      }
    }
  }

  const domain = "https://docs.rapidplatform.com/";

  function parseUrlFromFilePath(str) {
    let returnStr = "";
    const newStr = str?.split(str.includes("\\") ? "docs\\" : "docs/")?.[1]
    const strParts = newStr?.split(newStr.includes("\\") ? "\\" : "/")

    for (let i = 0; i < strParts.length; i++) {
      strParts[i] = strParts[i]?.replace(/^\d+-\b/, "");
    }

    if (strParts[strParts.length - 1].endsWith(".md")) {
      strParts[strParts.length - 1] = strParts[strParts.length - 1].substring(0, strParts[strParts.length - 1].length - 3);
    }

    if (strParts[strParts.length - 1] === strParts[strParts.length - 2]) {
      strParts.pop();
    }

    returnStr = strParts.join("/");
    return domain + "docs/" + returnStr;
  }

  for (let i = 0; i < result.files.length; i++) {
    const file = result.files[i];
    const fileName = file.split("/")[file.split("/").length - 1]?.replace(".md", "");
    const fileContents = fs.readFileSync(file).toString();

    const indexObj = structuredClone(source);

    indexObj.content = fileContents;
    indexObj.created_at = (() => {
      const { birthtime } = fs.statSync(file);
      return birthtime;
    })();
    indexObj.id = randomUUID();
    indexObj.name = getFirstHashTag(fileContents.split("\n"));
    indexObj.slug = fileName;
    indexObj.updated_at = new Date().toISOString();
    indexObj.url = parseUrlFromFilePath(file);
    if (file.includes("2-Rapid Standard")) {
      result.rapid_standard.push(indexObj);
    }
    if (
      file.includes("1-Getting Started") ||
      file.includes("3-User Manual") ||
      file.includes("4-Keyper Manual") ||
      file.includes("5-Developer Manual")
    ) {
      result.rapid_core.push(indexObj);
    }
  }
  return result;
}

(async () => {
  const result = generateIndexDocuments();
  await deleteAllIndexDocuments();
  await createAzureIndexDocuments([...result.rapid_core, ...result.rapid_standard]);
})();
