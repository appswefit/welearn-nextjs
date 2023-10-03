'use client';

import { ReactNode } from 'react';

import { ExternalLayout } from '@components/index';

interface PublicLayoutProps {
  children: ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return <ExternalLayout>{children}</ExternalLayout>;
}
