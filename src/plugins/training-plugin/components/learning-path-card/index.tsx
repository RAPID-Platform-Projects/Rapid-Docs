import { useHistory } from "@docusaurus/router";
import styles from "./styles.module.css";

interface IProps {
  title?: string;
  description?: string;
  image?: string;
  tags?: string[];
  time?: string;
  path: string;
}

function LearningPathCard(props: IProps) {
  const history = useHistory();

  const onClick = () => history.push(props.path);

  return (
    <article className={styles.article} onClick={onClick}>
      <aside className={styles.aside}>
        <img src={props.image} />
      </aside>
      <div className={styles.article__content}>
        <header className={styles.header}>
          <span className={styles.header__tag}>{props.tags?.join(", ")}</span>
          <h3 className={styles.header__title}>{props.title}</h3>
        </header>
        <main className={styles.main}>
          <p className={styles.main__content}>{props.description}</p>
        </main>
        <footer className={styles.footer}>
          <span className={styles.time}>{props.time}</span>
        </footer>
      </div>
    </article>
  );
}

export default LearningPathCard;
