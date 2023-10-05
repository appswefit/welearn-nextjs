import { Theme } from '@components/client/styles/constants';
import 'styled-components';

declare module 'styled-components' {
  interface DefaultTheme extends Theme {}
}
