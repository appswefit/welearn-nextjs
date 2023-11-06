'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';

import { ThemeProvider } from 'styled-components';

import { themeDark, themeLight } from '@styles/index';

import { AppProviderProps, IThemeContextData } from './types';

export const ThemeContext = createContext<IThemeContextData>({} as IThemeContextData);

export function AppThemeProvider({ children }: AppProviderProps) {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('dark');

  const toggleTheme = useCallback(
    () => setThemeName(prev => (prev === 'light' ? 'dark' : 'light')),
    [],
  );

  useEffect(() => {
    if (themeName === 'dark') {
      document.documentElement.style.setProperty('--NEUTRAL_50', '#fff');
      document.documentElement.style.setProperty('--NEUTRAL_100', '#e1e1e6');
      document.documentElement.style.setProperty('--NEUTRAL_200', '#a8a8b3');
      document.documentElement.style.setProperty('--DARK_50', '#323238');
      document.documentElement.style.setProperty('--DARK_100', '#29292e');
      document.documentElement.style.setProperty('--DARK_200', '#1f2729');
      document.documentElement.style.setProperty('--DARK_300', '#121214');
      document.documentElement.style.setProperty('--ERROR', '#d52c2d');
      document.documentElement.style.setProperty('--CYAN_500', '#61dafb');
      document.documentElement.style.setProperty('--YELLOW_400', '#f5c750');
      document.documentElement.style.setProperty('--YELLOW_500', '#f5c400');
    } else {
      document.documentElement.style.setProperty('--NEUTRAL_50', '#000');
      document.documentElement.style.setProperty('--NEUTRAL_100', '#1e1e19');
      document.documentElement.style.setProperty('--NEUTRAL_200', '#57574c');
      document.documentElement.style.setProperty('--DARK_50', '#cdcdc7');
      document.documentElement.style.setProperty('--DARK_100', '#d6d6d1');
      document.documentElement.style.setProperty('--DARK_200', '#e0d8d6');
      document.documentElement.style.setProperty('--DARK_300', '#ededeb');
      document.documentElement.style.setProperty('--ERROR', '#d52c2d');
      document.documentElement.style.setProperty('--CYAN_500', '#1490f2');
      document.documentElement.style.setProperty('--YELLOW_400', '#f5c750');
      document.documentElement.style.setProperty('--YELLOW_500', '#b88700');
    }
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={themeName === 'light' ? themeLight : themeDark}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useThemeContext must be used within ThemeProvider');
  }

  return context;
}
