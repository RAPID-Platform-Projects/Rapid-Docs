import React from 'react'
import Layout from '@theme/Layout';
import { IPack } from '@site/plugins/rapid-training-packs-plugin';
import Link from '@docusaurus/Link';

interface IPacksOverviewProps {
  pack: IPack;
}

export default function PacksOverview(props: IPacksOverviewProps) {
  return (
    <Layout>
      <h1>
        {props.pack.title}
      </h1>

      <div>
        {props.pack.lessons.map(lesson => (
          <Link to={lesson.path} >
            {lesson.title}
          </Link>
        ))}
      </div>

    </Layout>
  )
}
