'use client';

import { ReactNode } from 'react';

import { InternalLayout } from '@components/index';

interface PrivateLayoutProps {
  children: ReactNode;
}

export default function PrivateLayout({ children }: PrivateLayoutProps) {
  return <InternalLayout>{children}</InternalLayout>;
}
