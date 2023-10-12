'use client';

import { useEffect, useState } from 'react';

import { IGetComment, TypeLoadClientComments } from './clientComments.types';
import { Container, Row, Text } from './styles';

export function ClientComments() {
  console.log('Comentarios');

  const [loadingState, setLoadingState] = useState<TypeLoadClientComments>('stand_by');
  const [commentsState, setCommentsState] = useState<Array<IGetComment>>([]);

  const isLoading = loadingState === 'pending';

  const getCommentsData = async () => {
    setLoadingState('pending');

    try {
      const response = await fetch('http://localhost:4000/comments', { cache: 'no-store' });
      const array: Array<IGetComment> = await response.json();
      setCommentsState(array);
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoadingState('done');
    }
  };

  useEffect(() => {
    getCommentsData();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <h1>Carregando comentarios...</h1>
      ) : (
        commentsState.map(({ id, comment, evaluation }) => (
          <Row key={id}>
            <Text>{comment}</Text>
            <Text>{evaluation}</Text>
          </Row>
        ))
      )}
      {/* {commentsState.map(({ id, comment, evaluation }) => (
        <Row key={id}>
          <Text>{comment}</Text>
          <Text>{evaluation}</Text>
        </Row>
      ))} */}
    </Container>
  );
}
