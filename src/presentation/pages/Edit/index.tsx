/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { ChangeEvent, useEffect } from 'react';

import {
  ClientButton,
  ClientSkeleton,
  ClientTextInput,
  InstersectionInput,
} from '@components/index';
import { useEdit } from '@hooks/network/useEdit';

import { IFormEdit } from './edit.types';
import { Container, Footer, Wrapper } from './styles';

export function Edit() {
  console.log('Page Edit');

  const { getArticleData, isLoading, formState, putArticle, setFormState } = useEdit();

  const handleChange = (event: ChangeEvent<InstersectionInput>) => {
    const { name } = event.target;
    const { value } = event.target;

    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const clearValue = (nameField: keyof IFormEdit) => {
    return () => {
      setFormState(prev => ({ ...prev, [nameField]: '' }));
    };
  };

  useEffect(() => {
    getArticleData();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <ClientSkeleton />
      ) : (
        <>
          <Wrapper>
            <ClientTextInput
              label="Título"
              name="title"
              value={formState.title}
              onChange={handleChange}
              onClearInput={clearValue('title')}
            />
            <ClientTextInput
              isTextArea
              label="Texto"
              className="textarea"
              name="article"
              value={formState.article}
              onChange={handleChange}
              onClearInput={clearValue('article')}
            />
          </Wrapper>

          <Footer>
            <ClientButton onClick={putArticle}>Atualizar</ClientButton>
          </Footer>
        </>
      )}
    </Container>
  );
}
