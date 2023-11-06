import { ReactNode } from 'react';

import { ThemeNameProps } from '../types';

export interface AppProviderProps {
  children: ReactNode;
}

export interface IThemeContextData extends ThemeNameProps {
  toggleTheme: () => void;
}
