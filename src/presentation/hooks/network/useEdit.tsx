import { MouseEvent, useState } from 'react';

import { TypeLoading } from 'src/presentation/types';

interface IGetArticle {
  id: number;
  title: string;
  article: string;
}

interface IFormEdit {
  title: string;
  article: string;
}

const defaultValue: IFormEdit = {
  title: '',
  article: '',
};

export function useEdit() {
  const [loadingState, setLoadingState] = useState<TypeLoading>('stand_by');
  const [formState, setFormState] = useState<IFormEdit>(defaultValue);

  const isLoading = loadingState === 'pending';

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

  return {
    formState,
    isLoading,
    setFormState,
    getArticleData,
    putArticle,
  };
}
