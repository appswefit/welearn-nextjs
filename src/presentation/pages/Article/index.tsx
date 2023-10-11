import styles from './styles.module.scss';
interface IGetArticle {
  id: number;
  title: string;
  article: string;
}

export async function Article() {
  console.log('Page Article');

  const response = await fetch('http://localhost:4000/article');
  const { title, article }: IGetArticle = await response.json();

  const paragraphs = article.split(/\n+/);

  const paragraphsElements = paragraphs.map((paragraph, index) => (
    <p key={index} className={styles.paragraph}>
      {paragraph}
    </p>
  ));

  return (
    <article className={styles.article}>
      <h2 className={styles.title}>{title}</h2>
      {paragraphsElements}
    </article>
  );
}
