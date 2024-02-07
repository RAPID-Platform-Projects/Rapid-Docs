import Link from '@docusaurus/Link';
import { IPackCard } from '@site/plugins/rapid-training-packs-plugin';
import Layout from '@theme/Layout'
import React from 'react'

interface IPacksProps {
  packs: IPackCard[];
}

interface IPackCardProps {
  card: IPackCard;
}

function PackCard(props: IPackCardProps) {
  return (
    <Link to={props.card.path}>
      <div className="PackCard" >
        {!!props.card.image ? <img src={props.card.image} /> : <i className="fas fa-fw fa-file" />}
        <h4>{props.card.title}</h4>
        {props.card.description && <h6>{props.card.description}</h6>}
        {props.card.reading_time && <h6>{props.card.reading_time} minutes</h6>}
      </div>
    </Link>
  );
}

export default function Packs(props: IPacksProps) {
  return (
    <Layout>
      <h1>
        Training Packs
      </h1>
      <div>
        {props.packs.map((card) => <PackCard card={card} key={card.title} />)}
      </div>
    </Layout>
  )
}
