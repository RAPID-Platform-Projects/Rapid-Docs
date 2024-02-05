import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { ISideBarItem } from "../types";
import LearningPaths from "./learning-paths/learning-paths";

function* recursiveFind(sidebar: ISideBarItem[], match: (i: ISideBarItem) => boolean) {
  for (const item of sidebar) {
    if (item.items) {
      yield* recursiveFind(item.items, match);
    }

    if (match(item)) {
      yield item;
    }
  }
}

export default function Page(props: any): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  const item = recursiveFind(props.sidebar, (item) => {
    if (!item.routePath) return false;
    return `/${item.routePath}` === props.location.pathname;
  }).next();

  if (!item.value) {
    return (
      <Layout title={siteConfig.title} description="Description will go into a meta tag in <head />">
        No Page Found
      </Layout>
    );
  }

  const path = item.value.path;

  const fileName = path.substring(path.lastIndexOf("/") + 1);
  const relativePath = path.replace("training/", "").replace(`/${fileName}`, "");
  let Component;

  if (relativePath !== fileName) {
    Component = require(`../../../../training/${relativePath}/${fileName}`).default;
  } else {
    Component = require(`../../../../training/${relativePath}`).default;
  }

  return (
    <Layout title={siteConfig.title} description="Description will go into a meta tag in <head />">
      <Component />
      <LearningPaths sidebar={props.sidebar} />
    </Layout>
  );
}
