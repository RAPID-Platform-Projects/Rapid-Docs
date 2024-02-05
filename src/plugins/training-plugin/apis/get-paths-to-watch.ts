import { IPluginConfig } from "../types";
import { generateSidebar, getDirectory } from "../utils";

export default function getPathsToWatch(plugin: IPluginConfig) {
  return function () {
    const directory = getDirectory(plugin.context.siteDir, plugin.options.dir);
    return [`${directory}/**/*.{ts,tsx,mdx,md}`];
  };
}
