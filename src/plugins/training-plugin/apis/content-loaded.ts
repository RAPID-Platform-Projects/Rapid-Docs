import { RouteConfig } from "@docusaurus/types";
import { IPluginConfig, IPluginContent, ISideBarItem } from "../types";

function createNestedRoutes(sidebar: ISideBarItem[], actions: any, modules: any): RouteConfig[] {
  return sidebar.reduce((result, item) => {
    if (item.items) {
      createNestedRoutes(item.items, actions, modules);
    }

    actions.addRoute({
      path: item.path,
      component: "@site/src/plugins/training-plugin/components/page.tsx",
      modules
    });

    return result;
  }, []);
}

export default function contentLoaded(plugin: IPluginConfig) {
  return async function (context: IPluginContent) {
    const sidebar = await context.actions.createData("training-sidebar.json", JSON.stringify(context.content.sidebar));

    context.actions.addRoute({
      path: "/training",
      component: "@site/src/plugins/training-plugin/components/page.tsx",
      modules: { sidebar }
    });

    createNestedRoutes(context.content.sidebar, context.actions, { sidebar });
  };
}
