import { ReactNode } from 'react';

import { Footer } from '../Footer';
import { Header } from '../Header';
import styles from './styles.module.scss';

interface LayoutPublicProps {
  children: ReactNode;
}

export function LayoutPublic({ children }: LayoutPublicProps) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
