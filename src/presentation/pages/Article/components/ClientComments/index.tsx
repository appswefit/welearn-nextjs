/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect, useRef } from 'react';

import { ClientButton, ClientTextInput } from '@components/index';
import { IFormComments, useCommentsArticle } from '@hooks/network/useCommentsArticle';

import { ClientLoadingComments } from '../ClientLoadingComments';
import { Container, Row, Text, Wrapper } from './styles';

export function ClientComments() {
  console.log('Comentarios');

  const { commentsState, getCommentsData, isLoading, postComment } = useCommentsArticle();

  const formRef = useRef<IFormComments>({ comment: null });

  const handleClearInput = (name: keyof IFormComments) => {
    return () => {
      const current = formRef.current;
      const currentField = current[name];

      if (currentField) {
        currentField.value = '';
      }
    };
  };

  useEffect(() => {
    getCommentsData();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <ClientLoadingComments />
      ) : (
        <>
          {commentsState.map(({ id, comment, evaluation }) => (
            <Row key={id}>
              <Text>{comment}</Text>
              {evaluation && <Text>{evaluation}</Text>}
            </Row>
          ))}
          <Wrapper>
            <ClientTextInput
              label="Comentário"
              height={46}
              isTextArea
              name="comment"
              ref={(ref: HTMLTextAreaElement | null) => (formRef.current.comment = ref)}
              onClearInput={handleClearInput('comment')}
            />
            <ClientButton onClick={e => postComment(e, formRef)}>Enviar</ClientButton>
          </Wrapper>
        </>
      )}
    </Container>
  );
}
