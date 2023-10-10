import styles from './styles.module.scss';

interface SkeletonLoadingProps {
  colSpan?: number;
}

export function SkeletonLoading({ colSpan }: SkeletonLoadingProps) {
  if (colSpan) {
    return <td className={styles.skeleton} colSpan={colSpan} />;
  }

  return <span className={styles.skeleton} />;
}
