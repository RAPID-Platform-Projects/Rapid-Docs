import clsx from "clsx";
import FeatureCard from "../feature-card";
import styles from "./styles.module.css";

const features: any[] = [
  {
    title: "Looking to get started?",
    Svg: require("@site/static/img/RPD_logo_STK_2D.svg").default,
    description: "Rapid Platform helps you manage your business. Check out our user manual to help you get the most out of your site."
  },
  {
    title: "Start customizing your site",
    Svg: require("@site/static/img/RPD_logo_STK_2D.svg").default,
    description: "Take control of your data and your business by shaping your Rapid site."
  },
  {
    title: "Keep up to date",
    Svg: require("@site/static/img/RPD_logo_STK_2D.svg").default,
    description: "Stay up to date with the latest changes and new features coming to Rapid Platform."
  }
];

function FeatureList() {
  return (
    <section className={styles.container}>
      <div className="row">
        {features.map((feature, i) => (
          <FeatureCard Svg={feature.Svg} description={feature.description} title={feature.title} key={i} />
        ))}
      </div>
    </section>
  );
}

export default FeatureList;
