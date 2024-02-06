import path from 'path';
import fs from 'fs/promises';
import { LoadContext } from '@docusaurus/types';

interface IChapter {
  path: string;
  name: string;
  content?: string;
}

interface ILesson {
  path: string;
  name: string;
  overview?: string;
  chapters: Record<IChapter['name'], IChapter>;
}

interface ITrainingPackage {
  path: string;
  name: string;
  overview?: string;
  lessons: Record<ILesson['name'], ILesson>;
}

async function attemptGetPackOverview(overviewPath: string) {
  const overview = await fs.readFile(overviewPath, { encoding: 'utf8' }).catch((err) => {
    console.log(err);
  });

  return overview
}

async function attemptGetLessonChapters(lessonPath: string) {
  const lessonContents = await fs.readdir(lessonPath);

  const chapters = {};

  for (const chapterName of lessonContents) {
    const chapterPath = path.join(lessonPath, chapterName);

    const content = await attemptGetPackOverview(chapterPath);

    chapters[chapterName] = {
      path: chapterPath,
      name: chapterName,
      content
    }
  }
}

async function attemptGetPackLessons(packPath: string) {
  const packContents = await fs.readdir(packPath);

  const lessons = {};

  for (const lessonName of packContents) {
    if (lessonName.includes('overview.md')) {
      continue;
    }

    const lessonPath = path.join(packPath, lessonName);

    const overviewPath = path.join(lessonPath, 'overview.md');

    const overview = await attemptGetPackOverview(overviewPath);

    const chapters = await attemptGetLessonChapters(lessonPath);

    lessons[lessonName] = {
      path: lessonPath,
      name: lessonName,
      overview,
      chapters,
    }
  }

  return lessons;
}

async function buildTrainingPacks(pathToTraining: string): Promise<Record<string, ITrainingPackage>> {
  const packs = await fs.readdir(pathToTraining);

  const trainingPacakges = {};

  for (const packName of packs) {
    const packPath = path.join(pathToTraining, packName);

    const overviewPath = path.join(packPath, 'overview.md');

    const overview = await attemptGetPackOverview(overviewPath);

    const lessons = await attemptGetPackLessons(packPath);

    trainingPacakges[packName] = {
      path: packPath,
      name: packName,
      overview,
      lessons,
    }
  }

  return trainingPacakges;
}

export default async function rapidTrainingModulesPlugin(context: LoadContext, options: { dir: string }) {
  return {
    name: 'rapid-training-modules-plugin',
    async loadContent() {
      return await buildTrainingPacks(path.join(context.siteDir, options.dir));
    },
    async contentLoaded({ content, actions }) {




    },
  }
}
