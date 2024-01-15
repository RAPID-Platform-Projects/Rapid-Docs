import React, { PropsWithChildren } from "react";
import styles from "./styles.module.css";
import Heading from "@theme/Heading";

interface IProps {
  title: string;
  subTitle?: string;
}

function HeroBanner(props: PropsWithChildren<IProps>) {
  return (
    <div className={styles.bannerContainer}>
      <Heading as="h1" className="hero__title">
        {props.title}
      </Heading>
      {!!props.subTitle && <p className="hero__subtitle">{props.subTitle}</p>}
      {props.children}
    </div>
  );
}

export default HeroBanner;
