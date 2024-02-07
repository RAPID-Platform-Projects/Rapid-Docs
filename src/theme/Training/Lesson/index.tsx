import { IPackLesson } from '@site/plugins/rapid-training-packs-plugin'
import React from 'react'
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

interface ILessonProps {
  lesson: IPackLesson;
}

export default function Lesson(props: ILessonProps) {
  return (
    <Layout>
      <h1>{props.lesson.title}</h1>
      <div>
        {props.lesson.pages.map((p) => (
          <Link key={p.title} to={p.path} >
            {p.title}
          </Link>
        ))}
      </div>
    </Layout>
  )
}
