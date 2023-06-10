import 'styled-components';

// custom predefined theme
import { theme } from '../theme';

// global typescript declaration for the theme
declare module 'styled-components' {
  type Theme = typeof theme;
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
