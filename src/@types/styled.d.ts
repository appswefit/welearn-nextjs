import { Theme } from 'src/presentation/styles/index';
import 'styled-components';

declare module 'styled-components' {
  interface DefaultTheme extends Theme {}
}
