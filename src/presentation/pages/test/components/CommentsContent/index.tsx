import { IGetComment } from './commentsContent.types';
import styles from './styles.module.scss';

export async function CommentsContent() {
  console.log('Comentarios');
  await new Promise(resolve => setTimeout(resolve, 2000));

  const response = await fetch('http://localhost:4000/comments', { cache: 'no-store' });
  const comments: Array<IGetComment> = await response.json();

  return (
    <div>
      {comments.map(({ id, comment, evaluation }) => (
        <div key={id} className={styles.row}>
          <span className={styles.text}>{comment}</span>
          <span className={styles.text}>{evaluation}</span>
        </div>
      ))}
    </div>
  );
}
