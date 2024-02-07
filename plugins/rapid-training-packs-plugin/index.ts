import path from 'path';
import fs from 'fs/promises';
import { LoadContext } from '@docusaurus/types';

export interface IPackCard {
  title: string;
  description?: string;
  image?: string;
  reading_time?: number;
}

export interface IPack {
  title: string;
  card: IPackCard;
  overview?: string;
  lessons: Lesson[];
}

export type Lesson = IPackPage | IPackLesson;

export interface IPackPage {
  title: string;
  reading_time: number;
  content: string;
}

export interface IPackLesson {
  title: string;
  overview?: string;
  pages: IPackPage[];
}

async function readFileToString(pathToFile: string, fileName: string) {
  try {
    const string = await fs.readFile(path.join(pathToFile, fileName), { encoding: 'utf8' });
    return string
  } catch (e) {
    console.log(e);
    return '';
  }
}

async function readImageToB64Url(pathToImage: string, imageName: string) {
  try {
    const url = await fs.readFile(path.join(pathToImage, imageName), { encoding: 'base64url' });
    return url
  } catch (e) {
    console.log(e);
    return '';
  }
}

async function generatePage() {

}

async function generateLesson(pathToPack: string, lessonTitle: string, lessons: Lesson[]) {
  if (lessonTitle.match(/\w\.\w/)) {
    await generatePage();
    return;
  }

  const lesson: IPackLesson = {
    title: lessonTitle,
    pages: [],
  };

  const pathToLesson = path.join(pathToPack, lessonTitle);

  const lessonDirContents = await fs.readdir(pathToLesson);

  for (const fileTitle of lessonDirContents) {
    if (fileTitle.includes('overview')) {
      lesson.overview = await readFileToString(pathToLesson, fileTitle);
      continue;
    }

    await generatePage();
  }

  lessons.push(lesson);
}

async function generatePack(title: string, pathToPack: string): Promise<IPack> {
  const pack: IPack = {
    title,
    card: {
      title,
    },
    lessons: []
  };

  const packDirContents = await fs.readdir(pathToPack);

  for (const fileTitle of packDirContents) {
    if (fileTitle.includes('overview')) {
      pack.overview = await readFileToString(pathToPack, fileTitle);
      continue;
    }

    if (fileTitle.includes('image')) {
      pack.card.image = await readImageToB64Url(pathToPack, fileTitle)
      continue;
    }

    if (fileTitle.includes('description')) {
      pack.card.description = await readFileToString(pathToPack, fileTitle);
      continue;
    }

    await generateLesson(pathToPack, fileTitle, pack.lessons);
  }

  return pack
}

async function loadPackContent(pathToTraining: string): Promise<IPack[]> {
  const trainingDirContents = await fs.readdir(pathToTraining);

  const packs: Promise<IPack>[] = [];

  for (const title of trainingDirContents) {
    const pack = generatePack(title, path.join(pathToTraining, title));
    packs.push(pack);
  }

  return await Promise.all(packs);
}

export default async function rapidTrainingModulesPlugin(context: LoadContext, options: { dir: string }) {
  return {
    name: 'rapid-training-packs-plugin',
    async loadContent() {
      return await loadPackContent(path.join(context.siteDir, options.dir));
    },
    async contentLoaded({ content, actions }) {

      const cards: IPackCard[] = [];

      for (const pack of content as IPack[]) {
        cards.push(pack.card);

        const packPath = await actions.createData(`${pack.title}.json`, JSON.stringify(pack));

        actions.addRoute({
          path: `/training/${pack.title}`,
          component: '@theme/Training/PackOverview',
          modules: {
            pack: packPath,
          },
          exact: true,
        });
      }

      const cardsPath = await actions.createData(`packs.json`, JSON.stringify(cards));

      actions.addRoute({
        path: `/training`,
        component: '@theme/Training/Packs',
        modules: {
          packs: cardsPath,
        },
        exact: true,
      });
    },
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'link',
            attributes: {
              rel: "preload",
              href: "https://kit.fontawesome.com/28a2030d60.js",
              as: "script",
              crossorigin: "anonymous",
            }
          }

        ],
        postBodyTags: [
          {
            tagName: 'script',
            attributes: {
              defer: true,
              src: "https://kit.fontawesome.com/28a2030d60.js",
              crossorigin: "anonymous",
            }
          }
        ]
      }
    }
  }
}
