'use client';

import { ReactNode } from 'react';

import { AppThemeProvider } from '../contexts';

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return <AppThemeProvider>{children}</AppThemeProvider>;
}
