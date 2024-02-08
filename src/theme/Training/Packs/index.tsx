import { IPackCard } from '@site/plugins/rapid-training-packs-plugin';
import Layout from '@theme/Layout'
import React from 'react'
import "./packs.css";
import HeroBanner from '@site/src/components/hero-banner';
import PackCard from './pack-card';

interface IPacksProps {
  packs: IPackCard[];
}


export default function Packs(props: IPacksProps) {
  return (
    <Layout>
      <HeroBanner title="Empower Your Team with Rapid Platform Training Packs" subTitle="Train your team to use or build with Rapid Platform" />

      <svg className="swoosh-container" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          className="swoosh"
          d="M 0,0 L 0,100 L 100,100 L 100,0 C 100,0 50,100 0,0"
        />
      </svg>

      <div className="pack-card-grid" >
        {props.packs.map((card) => <PackCard card={card} key={card.title} />)}
      </div>
    </Layout>
  )
}

