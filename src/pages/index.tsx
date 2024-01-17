import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HeroBanner from "../components/hero-banner";
import FeatureList from "../components/page-components/home/feature-list";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`${siteConfig.title}`} description="Rapid Platform Documentation">
      <HeroBanner title={siteConfig.title} subTitle={siteConfig.tagline} />

      <main>
        <FeatureList />
      </main>
    </Layout>
  );
}
