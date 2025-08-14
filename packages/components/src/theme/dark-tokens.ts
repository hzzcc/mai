import type { DeepPartial } from './theme';
import type { DatlasThemeSchema } from './tokens';

/**
 * override tokens for the dark theme.
 * overrides the default light theme tokens.
 */
export const darkThemeSchema: DeepPartial<DatlasThemeSchema> = {
  colors: {
    primary: {
      default: '#6CABF7', // A lighter blue for contrast on dark backgrounds
      hover: '#7CB7F8',
      active: '#5C9BF6',
    },
    secondary: {
      default: '#2A3B4F', // A dark, muted blue
      hover: '#3A4B5F',
      active: '#4A5B6F',
    },
    surface: {
      background: '#121212', // A near-black for the main background
      primary: '#1E1E1E', // A slightly lighter surface for content areas
      secondary: '#2A2A2A', // A distinct secondary surface
    },
    text: {
      primary: '#EAEAEA', // Off-white for primary text
      secondary: '#A0A0A0', // Gray for secondary text
      inverse: '#1C2025', // Dark text for light backgrounds
    },
    status: {
      positive: { default: '#28A745', subtle: '#2E4B3A' },
      negative: { default: '#DC3545', subtle: '#5A3238' },
      warning: { default: '#FFC107', subtle: '#66512C' },
      info: { default: '#17A2B8', subtle: '#2D4A54' },
    },
    overlay: 'rgba(0, 0, 0, 0.7)', // Darker overlay
  },
  borders: {
    default: {
      color: '#3A3A3A', // Lighter border for dark mode
      width: '1px',
      style: 'solid',
    },
    focus: {
      color: '#6CABF7', // Use the primary dark mode color for focus
      width: '2px',
      style: 'solid',
      offset: '2px',
    },
  },
  effects: {
    shadows: {
      xs: '0px 1px 2px rgba(0, 0, 0, 0.1)',
      small: '0px 2px 4px rgba(0, 0, 0, 0.15)',
      medium: '0px 4px 8px rgba(0, 0, 0, 0.2)',
      large: '0px 8px 16px rgba(0, 0, 0, 0.25)',
      xLarge: '0px 12px 24px rgba(0, 0, 0, 0.3)',
      inset: 'inset 0px 1px 2px rgba(0, 0, 0, 0.1)',
      raised:
        '0px 4px 12px rgba(0, 0, 0, 0.2), 0px 2px 4px rgba(0, 0, 0, 0.15)',
    },
    gradients: {
      primary: 'linear-gradient(to right, #6CABF7, #9B88F9)',
      secondary: 'linear-gradient(to bottom, #1E1E1E, #121212)',
      radial: 'radial-gradient(circle, #6CABF7, #4A7FD9)',
    },
  },
};
