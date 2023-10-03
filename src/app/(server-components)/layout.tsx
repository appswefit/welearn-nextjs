import { ReactNode } from 'react';

import { getNameBlog } from 'src/mock';

import styles from './layout.module.scss';

interface ServerComponentsProps {
  children: ReactNode;
}

export default async function ServerComponents({ children }: ServerComponentsProps) {
  const { name } = await getNameBlog();

  return (
    <div className={styles.container}>
      <h1>{name}</h1>
      {children}
    </div>
  );
}
