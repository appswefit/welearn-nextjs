'use client';

import { ReactNode } from 'react';

import { ThemeProvider } from 'styled-components';

import { theme } from '@styles/index';

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
