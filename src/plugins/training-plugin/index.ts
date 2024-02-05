import contentLoaded from "./apis/content-loaded";
import getPathsToWatch from "./apis/get-paths-to-watch";
import loadContent from "./apis/load-content";
import { IPluginContext, IPluginOptions } from "./types";

export default async function (context: IPluginContext, options: Partial<IPluginOptions>) {
  options.dir ??= "training";
  options.include ??= [".mdx", ".md", ".tsx", ".ts"];

  return {
    name: "rapid-training",
    getPathsToWatch: getPathsToWatch({ context, options } as any),
    loadContent: loadContent({ context, options } as any),
    contentLoaded: contentLoaded({ context, options } as any)
  };
}
