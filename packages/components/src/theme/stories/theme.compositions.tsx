import { DatlasTheme } from '../theme';
import { useThemeController } from '../theme-controller';
import { useTheme } from '../theme-provider';

import { TokenViewer } from './token-viewer';

function ViewTokens() {
  const theme = useTheme();

  return <TokenViewer theme={theme} />;
}

function ThemedComponentExample() {
  const { themeMode, toggleTheme } = useThemeController();
  const theme = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme.colors.surface.background,
        color: theme.colors.text.primary,
        padding: theme.spacing.x4l,
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing.xl,
      }}
    >
      <h1
        style={{
          fontFamily: theme.typography.fontFamily,
          fontSize: theme.typography.sizes.heading.h1,
          color: theme.colors.text.primary,
        }}
      >
        Welcome to Datlas AI Page Builder
      </h1>
      <p
        style={{
          fontFamily: theme.typography.fontFamily,
          fontSize: theme.typography.sizes.body.default,
          color: theme.colors.text.secondary,
        }}
      >
        Current theme mode is: <strong>{themeMode}</strong>. Use the button
        below to see the magic happen.
      </p>
      <button
        type="button"
        onClick={toggleTheme}
        style={{
          fontFamily: theme.typography.fontFamily,
          fontSize: theme.typography.sizes.body.medium,
          fontWeight: theme.typography.fontWeight.semiBold,
          backgroundColor: theme.colors.primary.default,
          color: theme.colors.text.inverse,
          border: 'none',
          borderRadius: theme.borders.radius.medium,
          padding: `${theme.spacing.large} ${theme.spacing.xl}`,
          cursor: 'pointer',
          boxShadow: theme.effects.shadows.medium,
          transition: `all ${theme.interactions.transitions.duration.fast} ${theme.interactions.transitions.easing.easeInOut}`,
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export const LightTheme = () => {
  return (
    <DatlasTheme initialTheme="light">
      <ViewTokens />
    </DatlasTheme>
  );
};

export const DarkTheme = () => {
  return (
    <DatlasTheme initialTheme="dark">
      <ViewTokens />
    </DatlasTheme>
  );
};

export const InteractiveThemeExample = () => {
  return (
    <DatlasTheme>
      <ThemedComponentExample />
    </DatlasTheme>
  );
};
