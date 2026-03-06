// src/styled.d.ts
import 'styled-components';
import { theme, typography, secondary, tertiary } from './styles/theme';

// Pegar o tipo do nosso tema automaticamente
type Theme = typeof theme;

// Estender a interface DefaultTheme do styled-components
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}