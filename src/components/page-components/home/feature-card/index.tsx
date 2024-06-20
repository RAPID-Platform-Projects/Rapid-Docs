import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";

interface IProps {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: string;
  link: string;
}

function FeatureCard(props: IProps) {
  return (
    <div className="col featureList">
      <Link href={props.link} className="link-no-hover">
      <div className="text--center">
        <props.Svg role="img" style={{ height: 200, width: 200 }} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{props.title}</Heading>
        <p className="featureListDescription">{props.description}</p>
      </div>
      </Link>
    </div>
  );
}

export default FeatureCard;
