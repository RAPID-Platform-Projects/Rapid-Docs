import { ISideBarItem } from "../../types";
import LearningPathCard from "../learning-path-card";

function createPaths(sidebar: ISideBarItem[]) {
  const cards = [];

  for (const item of sidebar) {
    if (item.items) {
      cards.push(...createPaths(item.items));
    }

    try {
      const path = item.path;

      const fileName = path.substring(path.lastIndexOf("/") + 1);
      const relativePath = path.replace("training/", "").replace(`/${fileName}`, "");

      let Component;

      if (relativePath !== fileName) {
        Component = require(`../../../../../training/${relativePath}/${fileName}`);
      } else {
        Component = require(`../../../../../training/${relativePath}`);
      }

      cards.push(
        <div className="col col--4">
          <LearningPathCard {...Component.frontMatter} key={item.path} path={item.path.replace(`/${fileName}`, "")} />
        </div>
      );
    } catch (e) {}
  }

  return cards;
}

function LearningPaths({ sidebar }: { sidebar: ISideBarItem[] }) {
  const cards = createPaths(sidebar);

  return (
    <section className="container">
      <div className="row">{cards}</div>
    </section>
  );
}

export default LearningPaths;
