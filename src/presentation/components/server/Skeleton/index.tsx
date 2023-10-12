import styles from './styles.module.scss';

// interface SkeletonProps {
//   colSpan?: number | undefined;
// }

export function Skeleton() {
  // if (colSpan) {
  //   return <td className={styles.skeleton} />;
  // }

  return <span className={styles.skeleton} />;
}
