import styles from './styles.module.scss';

export function LoadingPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader} />
    </div>
  );
}
