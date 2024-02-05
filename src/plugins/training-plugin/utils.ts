import path from "node:path";

export const getDirectory = (siteDir: string, filesDir: string) => {
  return path.resolve(siteDir, filesDir);
};

export const getRelativePath = (baseDir: string, dir: string) => {
  return dir.replace(baseDir, "");
};
