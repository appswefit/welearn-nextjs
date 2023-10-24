import { Children } from 'react';

import styles from './styles.module.scss';

interface IGetArticleContent {
  id: number;
  title: string;
  article: string;
}

export async function ArticleContent() {
  const response = await fetch('http://localhost:4000/article', { cache: 'no-store' });
  const { title, article }: IGetArticleContent = await response.json();

  return (
    <>
      <h2 className={styles.title}>{title}</h2>

      {Children.toArray(
        article.split(/\n+/).map((paragraph, index) => (
          <p key={index} className={styles.paragraph}>
            {paragraph}
          </p>
        )),
      )}
    </>
  );
}
