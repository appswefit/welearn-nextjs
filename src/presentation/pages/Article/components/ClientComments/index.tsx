'use client';

import { useEffect, useRef, useState, MouseEvent } from 'react';

import { ClientButton, ClientTextInput } from '@components/index';

import { ClientLoadingComments } from '../ClientLoadingComments';
import { IFormComments, IGetComment, TypeLoadClientComments } from './clientComments.types';
import { Container, Row, Text, Wrapper } from './styles';

export function ClientComments() {
  console.log('Comentarios');

  const [loadingState, setLoadingState] = useState<TypeLoadClientComments>('stand_by');
  const [commentsState, setCommentsState] = useState<Array<IGetComment>>([]);

  const formRef = useRef<IFormComments>({ comment: null });

  const isLoading = loadingState === 'pending';

  const handleClearInput = (name: keyof IFormComments) => {
    return () => {
      const current = formRef.current;
      const currentField = current[name];

      if (currentField) {
        currentField.value = '';
      }
    };
  };

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

  const postComment = async (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    event.preventDefault();
    setLoadingState('pending');

    try {
      const comment = formRef.current.comment?.value;

      if (comment) {
        const body = JSON.stringify({ comment });

        await fetch('http://localhost:4000/comments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body,
        });

        await getCommentsData();
      }
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
            <ClientButton onClick={e => postComment(e)}>Enviar</ClientButton>
          </Wrapper>
        </>
      )}
    </Container>
  );
}
