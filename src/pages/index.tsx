import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HeroBanner from "../components/hero-banner";
import FeatureList from "../components/page-components/home/feature-list";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`${siteConfig.title}`} description="Rapid Platform Documentation">
      <HeroBanner title={siteConfig.title} subTitle={siteConfig.tagline} />

      <svg id="divider" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="m 0,100 h 100 l 0,-90z" id="slant" />
      </svg>

      <main>
        <FeatureList />
      </main>
    </Layout>
  );
}
