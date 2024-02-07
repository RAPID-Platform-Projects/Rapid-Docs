import path from 'path';
import fs from 'fs/promises';
import { LoadContext } from '@docusaurus/types';

export interface IPackCard {
  path: string;
  title: string;
  description?: string;
  image?: string;
  reading_time?: number;
}

export interface IPack {
  path: string;
  title: string;
  card: IPackCard;
  overview?: string;
  lessons: Lesson[];
}

export type Lesson = IPackPage | IPackLesson;

export interface IPackPage {
  path: string;
  title: string;
}

export interface IPackLesson {
  path: string;
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

async function generateLesson(pathToPack: string, lessonTitle: string, pack: IPack) {
  const lessonTitleTrimmed = lessonTitle.replace(/\d-/, '');

  const lessonPath = `${pack.title}/${lessonTitleTrimmed}`;

  if (lessonTitle.match(/\w\.\w/)) {
    pack.lessons.push({
      path: lessonPath,
      title: lessonTitleTrimmed,
    } as IPackPage);
    return;
  }

  const pathToLesson = path.join(pathToPack, lessonTitle);

  const lesson: IPackLesson = {
    path: lessonPath,
    title: lessonTitleTrimmed,
    pages: [],
  };

  console.log('LESSON', lesson);

  const lessonDirContents = await fs.readdir(pathToLesson);

  for (const fileTitle of lessonDirContents) {
    if (fileTitle.includes('overview')) {
      lesson.overview = await readFileToString(pathToLesson, fileTitle);
      continue;
    }

    const fileTitleTrimmed = fileTitle.replace(/\d-/, '').split('.')[0];

    lesson.pages.push({
      path: lessonTitleTrimmed + '/' + fileTitleTrimmed,
      title: fileTitleTrimmed,
    } as IPackPage);
  }

  pack.lessons.push(lesson);
}

async function generatePack(title: string, pathToPack: string): Promise<IPack> {
  const pack: IPack = {
    title,
    path: `training/${title}`,
    card: {
      path: `training/${title}`,
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

    await generateLesson(pathToPack, fileTitle, pack);
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

        console.log(pack);

        const packPath = await actions.createData(`${pack.title}.json`, JSON.stringify(pack));

        actions.addRoute({
          path: `/training/${pack.title}`,
          component: '@theme/Training/PackOverview',
          modules: {
            pack: packPath,
          },
          exact: true,
        });

        for (const lesson of pack.lessons) {
          console.log(lesson);

          const lessonPath = await actions.createData(`${lesson.title}.json`, JSON.stringify(lesson));

          actions.addRoute({
            path: `/training/${pack.title}/${lesson.title}`,
            component: '@theme/Training/Lesson',
            modules: {
              lesson: lessonPath,
            },
            exact: true,
          });
        }
      }

      console.log(cards);

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
    async postBuild({ siteConfig = {}, routesPaths = [], outDir }) {
      // Print out to console all the rendered routes.
      routesPaths.map((route) => {
        console.log(route);
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
