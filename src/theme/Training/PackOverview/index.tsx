import React from 'react'
import Layout from '@theme/Layout';
import { IPack, IPackLesson } from '@site/plugins/rapid-training-packs-plugin';
import LessonDetails from './lesson-details';
import ImageHeroBanner from '@site/src/components/image-hero-banner';
import './pack-overview.css';

interface IPacksOverviewProps {
  pack: IPack;
}

export default function PacksOverview(props: IPacksOverviewProps) {
  return (
    <Layout wrapperClassName="compact" >
      <ImageHeroBanner title={props.pack.title} subTitle={props.pack.overview.description} src={props.pack.card.thumbnail} />

      <svg className="swoosh-container" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          className="swoosh"
          d="M 0,0 L 0,100 L 100,100 L 100,0 C 100,0 50,100 0,0"
        />
      </svg>

      <div className="centered-content" >
        <p className="PackDescription" >
          {props.pack.overview.overview.split('\n').map((text, index) => (<p key={index} >{text}</p>))}
        </p>

        <div>
          {props.pack.lessons.map(lesson => (
            <LessonDetails lesson={lesson as IPackLesson} />
          ))}
        </div>
      </div>

    </Layout>
  )
}
