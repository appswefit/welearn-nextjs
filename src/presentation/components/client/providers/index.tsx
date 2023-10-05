'use client';

import { ReactNode } from 'react';

import { ThemeProvider } from 'styled-components';

import { theme } from '@components/client/styles/constants';
import { GlobalStyle } from '@components/client/styles/global';

import StyledComponentsRegistry from '../registry';

interface ProviderStyledComponentsProps {
  children: ReactNode;
}

export function ProviderStyledComponents({ children }: ProviderStyledComponentsProps) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
