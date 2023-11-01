import { Suspense } from 'react';

import { ArticleContent } from './components/ArticleContent';
import { ClientComments } from './components/ClientComments';
import { LoadingArticleContent } from './components/LoadingArticleContent';
import styles from './styles.module.scss';

export function Article() {
  console.log('Page Article');

  return (
    <article className={styles.article}>
      <Suspense fallback={<LoadingArticleContent />}>
        <ArticleContent />
      </Suspense>

      <Suspense>
        <ClientComments />
      </Suspense>
    </article>
  );
}
