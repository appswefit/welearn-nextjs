import { Skeleton } from '@components/index';

import { titleLoading, articleLoading } from './styles';

export function LoadingArticleContent() {
  return (
    <>
      <Skeleton style={titleLoading} />
      <Skeleton style={articleLoading} />
    </>
  );
}
