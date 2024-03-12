import Heading from "@theme/Heading";

interface IProps {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: string;
}

function FeatureCard(props: IProps) {
  return (
    <div className="col">
      <div className="text--center">
        <props.Svg role="img" style={{ height: 200, width: 200 }} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{props.title}</Heading>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
