export const colorsDark = {
  WHITE: '#FFF',
  BLACK: '#121214',

  NEUTRAL_50: '#FFF',
  NEUTRAL_100: '#e1e1e6',
  NEUTRAL_200: '#a8a8b3',

  DARK_50: '#323238',
  DARK_100: '#29292e',
  DARK_200: '#1f2729',
  DARK_300: '#121214',

  ERROR: '#d52c2d',

  CYAN_500: '#61dafb',
  YELLOW_400: '#f5c750',
  YELLOW_500: '#f5c400',
};

export const colorsLight = {
  WHITE: '#FFF',
  BLACK: '#121214',

  NEUTRAL_50: '#000',
  NEUTRAL_100: '#1e1e19',
  NEUTRAL_200: '#57574c',

  DARK_50: '#cdcdc7',
  DARK_100: '#d6d6d1',
  DARK_200: '#e0d8d6',
  DARK_300: '#ededeb',

  ERROR: '#d52c2d',

  CYAN_500: '#1490f2',
  YELLOW_400: '#f5c750',
  YELLOW_500: '#f5c400',
};

export enum BreakpointsEnum {
  xs = '(max-width: 575px)',
  sm = '(max-width: 576px)',
  md = '(max-width: 768px)',
  lg = '(max-width: 992px)',
  xl = '(max-width: 1200px)',
  xxl = '(max-width: 1400px)',
}

export enum SpacingEnum {
  '1x' = '4px',
  '2x' = '8px',
  '3x' = '12px',
  '4x' = '16px',
  '5x' = '20px',
  '6x' = '24px',
  '7x' = '32px',
  '8x' = '40px',
  '9x' = '48px',
  '10x' = '56px',
  '12x' = '64px',
  '13x' = '72px',
  '14x' = '80px',
  '15x' = '88px',
  '16x' = '96px',
  '17x' = '104px',
}

export const elevation = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  max: 9999,
};

export type Theme = {
  colors: typeof colorsDark;
  breakpoints: typeof BreakpointsEnum;
  spacing: typeof SpacingEnum;
  elevation: typeof elevation;
};

export const themeDark: Theme = {
  /**
   * Descrição da propriedade.
   * @type {string} - cores utilizado para color, background-color, border-color, etc.
   */
  colors: colorsDark,

  /**
   * Descrição da propriedade.
   * @type {string} - utilizado para responsividade MediaQueries.
   * Exemplo: @media ${theme.breakpoints.sm} { flex-direction: column }
   */
  breakpoints: BreakpointsEnum,

  /**
   * Descrição da propriedade.
   * @type {number} - Níveis de elevação, utilizado para z-Index.
   */
  elevation,

  /**
   * Descrição da propriedade.
   * @type {string} - Níveis de espaçamento para gap, padding, margin, etc.
   */
  spacing: SpacingEnum,
};

export const themeLight: Theme = {
  /**
   * Descrição da propriedade.
   * @type {string} - cores utilizado para color, background-color, border-color, etc.
   */
  colors: colorsLight,

  /**
   * Descrição da propriedade.
   * @type {string} - utilizado para responsividade MediaQueries.
   * Exemplo: @media ${theme.breakpoints.sm} { flex-direction: column }
   */
  breakpoints: BreakpointsEnum,

  /**
   * Descrição da propriedade.
   * @type {number} - Níveis de elevação, utilizado para z-Index.
   */
  elevation,

  /**
   * Descrição da propriedade.
   * @type {string} - Níveis de espaçamento para gap, padding, margin, etc.
   */
  spacing: SpacingEnum,
};
