'use client';

import { ReactNode } from 'react';

import { ExternalLayout } from '@components/index';
import { AppProvider } from '@providers/index';

interface PublicLayoutProps {
  children: ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <AppProvider>
      <ExternalLayout>{children}</ExternalLayout>
    </AppProvider>
  );
}
