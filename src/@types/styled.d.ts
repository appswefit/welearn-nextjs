import { Theme } from 'src/presentation/styles/constants';
import 'styled-components';

declare module 'styled-components' {
  interface DefaultTheme extends Theme {}
}
