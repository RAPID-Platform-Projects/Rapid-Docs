import path from 'path';
import fs from 'fs/promises';
import { LoadContext } from '@docusaurus/types';

export interface IPackCard {
  path: string;
  title: string;
  thumbnail?: string;
  overview?: IPackOverview;
  count?: number;
}

export interface IPack {
  path: string;
  title: string;
  card: IPackCard;
  overview?: IPackOverview;
  lessons: Lesson[];
}

export interface IPackOverview {
  icon?: string;
  description?: string;
  overview?: string;
  reading_time?: number;
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
    const url = await fs.readFile(path.join(pathToImage, imageName), { encoding: 'base64' });
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

  const lessonDirContents = await fs.readdir(pathToLesson);

  for (const fileTitle of lessonDirContents) {
    const fileTitleTrimmed = fileTitle.replace(/\d-/, '').split('.')[0];

    lesson.pages.push({
      path: lessonTitleTrimmed + '/' + fileTitleTrimmed,
      title: fileTitleTrimmed,
    } as IPackPage);
  }

  pack.card.count = pack.card.count + 1;

  pack.lessons.push(lesson);
}

async function generatePack(title: string, pathToPack: string): Promise<IPack> {
  const pack: IPack = {
    title,
    path: `training/${title}`,
    card: {
      path: `training/${title}`,
      title,
      count: 0,
    },
    lessons: []
  };

  const packDirContents = await fs.readdir(pathToPack);

  for (const fileTitle of packDirContents) {
    if (fileTitle === 'overview.json') {
      const overviewStr = await readFileToString(pathToPack, fileTitle);

      let overview: IPackOverview;

      try {
        overview = JSON.parse(overviewStr);
      } catch (e) {
        console.log('Error parsing overview for', title, '\n\n', e);
        continue;
      }

      pack.overview = overview;
      pack.card.overview = overview;

      continue;
    }

    if (fileTitle.includes('thumbnail')) {
      pack.card.thumbnail = await readImageToB64Url(pathToPack, fileTitle)
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
      // Adding fontawesome icon kit
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
