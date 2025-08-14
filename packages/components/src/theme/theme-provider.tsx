import { createTheme } from './create-theme';
import { type DatlasThemeSchema, datlasTokens } from './tokens';

/**
 * creating and declaring the datlas theme.
 * define the theme schema as a type variable for proper type completions.
 */
export const DatlasThemeProvider = createTheme<DatlasThemeSchema>({
  theme: datlasTokens(),
});

/**
 * a react hook for contextual access to design token
 * from components.
 */
export const { useTheme } = DatlasThemeProvider;
