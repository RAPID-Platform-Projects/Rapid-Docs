import React, { PropsWithChildren } from "react";
import styles from "./styles.module.css";
import Heading from "@theme/Heading";

export interface IHeroBannerProps {
  title: string;
  subTitle?: string;
}

function HeroBanner(props: PropsWithChildren<IHeroBannerProps>) {
  return (
    <div className={`${styles.bannerContainer} bannerContainer`}>
      <Heading as="h1" className="hero__title">
        {props.title}
      </Heading>
      {!!props.subTitle && <p className="hero__subtitle">{props.subTitle}</p>}
      {props.children}
    </div>
  );
}

export default HeroBanner;
