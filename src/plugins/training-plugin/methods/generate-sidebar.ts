import fs from "node:fs/promises";
import path from "node:path";
import { IPluginConfig } from "../types";
import { getDirectory } from "../utils";

async function readDirectory(location: string) {
  try {
    return await fs.readdir(location);
  } catch (e) {
    return [];
  }
}

async function isFile(location: string) {
  try {
    return (await fs.stat(location)).isFile();
  } catch (e) {
    return true;
  }
}

async function process(location: string, parentPath: string, include: string[]) {
  const items = await readDirectory(location);
  const processItems: any[] = [];

  for (const item of items) {
    const fullPath = getDirectory(location, item);
    const childPath = `${parentPath}/${item}`;

    const result: any = { title: item, path: childPath };

    if (!(await isFile(fullPath))) {
      result.items = await process(fullPath, childPath, include);
    } else {
      const ext = path.extname(fullPath).toLowerCase();
      const fileName = item.replace(ext, "");
      if (!include.includes(ext)) continue;

      if (fileName === "index") {
        const toReplace = result.path.substring(result.path.lastIndexOf("/"));
        result.routePath = result.path.replace(`${toReplace}`, "");
      }
    }

    processItems.push(result);
  }

  return processItems;
}

export default async (plugin: IPluginConfig) => {
  const location = getDirectory(plugin.context.siteDir, plugin.options.dir);
  const relativePath = plugin.options.dir;
  return await process(location, relativePath, plugin.options.include);
};
