import { ArticleLoading, CommentArticle, TitleLoading } from './styles';

export function ClientLoadingArticle() {
  return (
    <>
      <TitleLoading />
      <ArticleLoading />
      <CommentArticle />
      <CommentArticle />
      <CommentArticle />
    </>
  );
}
