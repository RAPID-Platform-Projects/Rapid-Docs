import React from 'react'
import Layout from '@theme/Layout';
import { IPack } from '@site/plugins/rapid-training-packs-plugin';

interface IPacksOverviewProps {
  pack: IPack;
}

export default function PacksOverview(props: IPacksOverviewProps) {
  return (
    <Layout>
      <h1>
        {props.pack.title}
      </h1>

    </Layout>
  )
}
