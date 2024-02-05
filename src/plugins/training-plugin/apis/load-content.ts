import generateSidebar from "../methods/generate-sidebar";
import { IPluginConfig } from "../types";

export default function loadContent(plugin: IPluginConfig) {
  return async function () {
    const sidebar = await generateSidebar(plugin);
    return { sidebar };
  };
}
