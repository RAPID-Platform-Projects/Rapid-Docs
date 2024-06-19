import clsx from "clsx";
import FeatureCard from "../feature-card";
import styles from "./styles.module.css";

const features: any[] = [
  {
    title: "Wanting to get more from Rapid?",
    Svg: require("@site/static/img/dashboard/Construction Logo.svg").default,
    description: "Take control of your data and your business by shaping your Rapid site.",
    link: "https://docs.rapidplatform.com/docs/Rapid/Keyper%20Manual/Introduction/"
  },
  {
    title: "Developing something new?",
    Svg: require("@site/static/img/dashboard/Spanner Logo.svg").default,
    description: "Check out our developer docs for everything from API integration to full app development.",
    link: "https://docs.rapidplatform.com/docs/Rapid/Developer%20Manual/API%20Concepts/"
  },
  {
    title: "Keep up to date",
    Svg: require("@site/static/img/dashboard/Calendar Logo.svg").default,
    description: "Stay up to date with the latest changes and new features coming to Rapid Platform.",
    link: "https://docs.rapidplatform.com/changelog"
  }
];

function FeatureList() {
  return (
    <section className={styles.container}>
      <div className="row">
        {features.map((feature, i) => (
          <FeatureCard Svg={feature.Svg} description={feature.description} title={feature.title} key={i} link={feature.link} />
        ))}
      </div>
    </section>
  );
}

export default FeatureList;
