'use client';

import { Children, useEffect, useState } from 'react';

import { IGetArticle, TypeLoadArticle } from './article.types';
import { ClientLoadingArticle } from './components/ClientLoadingArticle';
import { Paragraph, Row, StyledArticle, Text, Title } from './styles';

export function Article() {
  console.log('Page Article');

  const [loadingState, setLoadingState] = useState<TypeLoadArticle>('stand_by');
  const [articleState, setArticleState] = useState<IGetArticle>({
    id: 0,
    article: '',
    title: '',
    comments: [],
  });

  const isLoading = loadingState === 'pending';

  const getArticleData = async () => {
    setLoadingState('pending');

    try {
      const response = await fetch('http://localhost:4000/article');
      const article: IGetArticle = await response.json();
      setArticleState(article);
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoadingState('done');
    }
  };

  useEffect(() => {
    getArticleData();
  }, []);

  return (
    <StyledArticle>
      {isLoading ? (
        <ClientLoadingArticle />
      ) : (
        <>
          <Title>{articleState.title}</Title>

          {Children.toArray(
            articleState.article.split(/\n+/).map(paragraph => <Paragraph>{paragraph}</Paragraph>),
          )}

          {articleState.comments.map(({ id, comment, evaluation }) => (
            <Row key={id}>
              <Text>{comment}</Text>
              <Text>{evaluation}</Text>
            </Row>
          ))}
        </>
      )}
    </StyledArticle>
  );
}
