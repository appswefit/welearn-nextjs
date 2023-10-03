'use client';

import { ReactNode } from 'react';

import { AppProvider } from '@providers/index';

import StyledComponentsRegistry from './registry';

interface ClientComponentsProps {
  children: ReactNode;
}

export default function ClientComponents({ children }: ClientComponentsProps) {
  return (
    <StyledComponentsRegistry>
      <AppProvider>{children}</AppProvider>;
    </StyledComponentsRegistry>
  );
}
