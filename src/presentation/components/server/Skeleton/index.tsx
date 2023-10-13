import { CSSProperties } from 'react';

import styles from './styles.module.scss';

interface SkeletonProps {
  colSpan?: number | undefined;
  style?: CSSProperties | undefined;
}

export function Skeleton({ colSpan, style }: SkeletonProps) {
  if (colSpan) {
    return <td className={styles.skeleton} style={style} />;
  }

  return <span className={styles.skeleton} style={style} />;
}
