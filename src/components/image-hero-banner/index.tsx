
import React from 'react'
import HeroBanner, { IHeroBannerProps } from '../hero-banner'
import './styles.css';

interface IImageHeroBannerProps extends IHeroBannerProps {
  // From hero banner props
  // title: string;
  // subTitle?: string;
  src: string;
}

export default function ImageHeroBanner(props: IImageHeroBannerProps) {
  return (
    <HeroBanner title={props.title} subTitle={props.subTitle} >
      <img src={`data:image/png;base64,${props.src}`} className="image" />
    </HeroBanner>
  )
}
