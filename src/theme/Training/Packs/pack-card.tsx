import Link from "@docusaurus/Link";
import { IPackCard } from "@site/plugins/rapid-training-packs-plugin";
import "./pack-card.css";

interface IPackCardProps {
  card: IPackCard;
}

export default function PackCard(props: IPackCardProps) {
  return (
    <Link to={props.card.path} className="PackCard" >

      {!!props.card.thumbnail ? (
        <img src={`data:image/png;base64,${props.card.thumbnail}`} className="thumbnail image" />
      ) : (
        <i className={`thumbnail icon fas fa-fw ${props.card.overview?.icon ? props.card.overview.icon : 'fa-file'}`} />
      )}

      <div className="PackDetailsContainer" >
        <h4 className="PackTitle" >
          {props.card.title}
        </h4>

        <div className="PackTimeContainer" >
          <p>{props.card.overview?.reading_time} hours</p> <span className="PackTimeDivider" >|</span> <p>{props.card?.count} lessons</p>
        </div>

        <p className="PackDescription" >{props.card.overview?.description}</p>
      </div>

    </Link>
  );
}
