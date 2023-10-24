'use client';

import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';

import { TypeLoading } from 'src/presentation/types';

import {
  ClientButton,
  ClientSkeleton,
  ClientTextInput,
  InstersectionInput,
} from '@components/index';

import { defaultValue } from './register.data';
import { IFormRegister, IGetArticle } from './register.types';
import { Container, Footer, Wrapper } from './styles';

export function Register() {
  console.log('Page Register');

  const [loadingState, setLoadingState] = useState<TypeLoading>('stand_by');
  const [formState, setFormState] = useState<IFormRegister>(defaultValue);

  const isLoading = loadingState === 'pending';

  const handleChange = (event: ChangeEvent<InstersectionInput>) => {
    const { name } = event.target;
    const { value } = event.target;

    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const clearValue = (nameField: keyof IFormRegister) => {
    return () => {
      setFormState(prev => ({ ...prev, [nameField]: '' }));
    };
  };

  const getArticleData = async () => {
    setLoadingState('pending');

    try {
      const response = await fetch('http://localhost:4000/article');
      const { title, article }: IGetArticle = await response.json();

      setFormState({ title, article });
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoadingState('done');
    }
  };

  const putArticle = async (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    event.preventDefault();
    setLoadingState('pending');

    try {
      const title = formState.title;
      const article = formState.article;

      if (title.length && article.length) {
        const body = JSON.stringify({ title, article });

        await fetch('http://localhost:4000/article', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body,
        });
      }
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
