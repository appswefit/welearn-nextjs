import { ReactNode } from 'react';

import { Footer } from '../Footer';
import { Header } from '../Header';

interface LayoutPublicProps {
  children: ReactNode;
}

export function LayoutPublic({ children }: LayoutPublicProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
