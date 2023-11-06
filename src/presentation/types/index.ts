export enum LoadingEnum {
  done = 'done',
  pending = 'pending',
  stand_by = 'stand_by',
}

export type TypeLoading = keyof typeof LoadingEnum;

export interface ThemeNameProps {
  themeName: 'light' | 'dark';
}
