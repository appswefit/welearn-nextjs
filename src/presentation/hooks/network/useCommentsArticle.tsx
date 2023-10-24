import { MouseEvent, MutableRefObject, useState } from 'react';

import { TypeLoading } from 'src/presentation/types';

interface IGetComment {
  id: number;
  comment: string;
  evaluation: number;
}

export interface IFormComments {
  comment: HTMLTextAreaElement | null;
}

export function useCommentsArticle() {
  const [loadingState, setLoadingState] = useState<TypeLoading>('stand_by');
  const [commentsState, setCommentsState] = useState<Array<IGetComment>>([]);

  const isLoading = loadingState === 'pending';

  const getCommentsData = async () => {
    setLoadingState('pending');

    try {
      const response = await fetch('http://localhost:4000/comments');
      const array: Array<IGetComment> = await response.json();
      setCommentsState(array);
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoadingState('done');
    }
  };

  const postComment = async (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    formRef: MutableRefObject<IFormComments>,
  ) => {
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

  return {
    commentsState,
    isLoading,
    getCommentsData,
    postComment,
  };
}
