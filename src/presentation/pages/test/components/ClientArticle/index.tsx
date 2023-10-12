import { Children } from 'react';

import styles from './styles.module.scss';

interface ClientArticleProps {
  title: string;
  article: string;
}

export async function ClientArticle({ title, article }: ClientArticleProps) {
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
