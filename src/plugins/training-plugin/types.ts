import { RouteConfig } from "@docusaurus/types";

export interface IPluginContext {
  siteDir: string;
  baseUrl: string;

  siteConfig: {
    title?: string;
    tagline?: string;
    favicon?: string;
    url?: string;
    baseUrl?: string;
    organizationName?: string;
    projectName?: string;
    titleDelimiter?: string;
  };
}

export interface IPluginOptions {
  dir: string;
  include: string[];
}

export interface IPluginContent {
  content: { sidebar: Array<ISideBarItem> };
  actions: {
    addRoute(config: RouteConfig): void;
    createData(name: string, data: any): Promise<string>;
    setGlobalData(data: any): void;
  };
}

export type ISideBarItem = { title: string; path: string; items?: Array<ISideBarItem>; routePath?: string };
export type IPluginConfig = { context: IPluginContext; options: IPluginOptions };
