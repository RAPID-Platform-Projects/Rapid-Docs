import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Looking to get started?',
    Svg: require('@site/static/img/RPD_logo_STK_2D.svg').default,
    description: (
      <>
        Rapid Platform helps you manage your business. Check out our user manual to help you get the most out of your site.
      </>
    ),
  },
  {
    title: 'Start customizing your site',
    Svg: require('@site/static/img/RPD_logo_STK_2D.svg').default,
    description: (
      <>
        Take control of your data and your business by shaping your Rapid site.
      </>
    ),
  },
  {
    title: 'Keep up to date',
    Svg: require('@site/static/img/RPD_logo_STK_2D.svg').default,
    description: (
      <>
        Stay up to date with the latest changes and new features coming to Rapid Platform.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
