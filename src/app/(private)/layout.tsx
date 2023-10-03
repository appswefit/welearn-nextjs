'use client';

import { ReactNode } from 'react';

import { InternalLayout } from '@components/index';
import { AppProvider } from '@providers/index';

interface PrivateLayoutProps {
  children: ReactNode;
}

export default function PrivateLayout({ children }: PrivateLayoutProps) {
  return (
    <AppProvider>
      <InternalLayout>{children}</InternalLayout>
    </AppProvider>
  );
}
