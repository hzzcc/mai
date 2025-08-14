/**
 * Datlas theme tokens.
 * These tokens define the design language for the AI Page Builder.
 */
export function datlasTokens() {
  const tokens = {
    /**
     * Color Palette - A modern, tech-focused palette.
     */
    colors: {
      primary: {
        default: '#4A90E2', // A vibrant, professional blue
        hover: '#5AA0F2', // Lighter for interaction feedback
        active: '#3A80D2', // Darker for pressed state
      },
      secondary: {
        default: '#D8EAFB', // A light, complementary blue
        hover: '#C8E0FA',
        active: '#B8D6F9',
      },
      surface: {
        background: '#F7F9FC', // A very light, clean gray
        primary: '#FFFFFF', // Primary content surface (cards, modals)
        secondary: '#EFF3F8', // Secondary surface for differentiation
      },
      text: {
        primary: '#1C2025', // Dark gray for high readability
        secondary: '#5A6978', // Softer gray for secondary text
        inverse: '#FFFFFF', // White text for dark backgrounds
      },
      status: {
        positive: { default: '#28A745', subtle: '#D4EDDA' },
        negative: { default: '#DC3545', subtle: '#F8D7DA' },
        warning: { default: '#FFC107', subtle: '#FFF3CD' },
        info: { default: '#17A2B8', subtle: '#D1ECF1' },
      },
      overlay: 'rgba(28, 32, 37, 0.6)', // Semi-transparent overlay
    },

    /**
     * Borders and Radius
     */
    borders: {
      default: {
        color: '#DDE3EA', // Subtle border color
        width: '1px',
        style: 'solid',
      },
      focus: {
        color: '#4A90E2', // Use primary color for focus
        width: '2px',
        style: 'solid',
        offset: '2px',
      },
      radius: {
        small: '4px',
        medium: '8px',
        large: '16px',
        circle: '50%',
      },
    },

    /**
     * Typography System
     */
    typography: {
      fontFamily: "'Inter', sans-serif", // Modern, highly readable UI font
      sizes: {
        display: { large: '56px', medium: '44px', small: '36px' },
        heading: {
          h1: '32px',
          h2: '28px',
          h3: '24px',
          h4: '20px',
          h5: '16px',
          h6: '14px',
        },
        body: { large: '18px', medium: '16px', default: '16px', small: '14px' },
        caption: { default: '12px', medium: '14px' },
      },
      lineHeight: {
        base: '1.6', // Generous line height for readability
        heading: '1.3', // Tighter leading for headings
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semiBold: '600',
        bold: '700',
      },
      letterSpacing: {
        tight: '-0.02em',
        normal: '0',
        wide: '0.03em',
      },
    },

    /**
     * Spacing & Layout
     */
    spacing: {
      default: '8px',
      small: '4px',
      large: '16px',
      xl: '24px',
      x2l: '32px',
      x3l: '48px',
      x4l: '64px',
    },
    layout: {
      maxPageWidth: '1440px',
      gutter: '24px',
    },

    /**
     * Visual Effects
     */
    effects: {
      shadows: {
        xs: '0px 1px 2px rgba(28, 32, 37, 0.05)',
        small: '0px 2px 4px rgba(28, 32, 37, 0.08)',
        medium: '0px 4px 8px rgba(28, 32, 37, 0.1)',
        large: '0px 8px 16px rgba(28, 32, 37, 0.12)',
        xLarge: '0px 12px 24px rgba(28, 32, 37, 0.15)',
        inset: 'inset 0px 1px 2px rgba(28, 32, 37, 0.06)',
        raised:
          '0px 4px 12px rgba(28, 32, 37, 0.1), 0px 2px 4px rgba(28, 32, 37, 0.08)',
      },
      opacity: {
        disabled: '0.5',
        hover: '0.8',
        faint: '0.2',
        semiOpaque: '0.7',
      },
      gradients: {
        primary: 'linear-gradient(to right, #4A90E2, #7B68EE)', // Blue to slate blue
        secondary: 'linear-gradient(to bottom, #F7F9FC, #FFFFFF)',
        radial: 'radial-gradient(circle, #4A90E2, #3A5FCD)',
      },
      blur: {
        small: 'blur(4px)',
        medium: 'blur(8px)',
        large: 'blur(16px)',
      },
    },

    /**
     * Interaction & Motion
     */
    interactions: {
      cursor: {
        pointer: 'pointer',
        disabled: 'not-allowed',
        text: 'text',
        grab: 'grab',
        grabbing: 'grabbing',
      },
      zIndex: {
        base: '1',
        modal: '100',
        tooltip: '200',
        overlay: '300',
        sticky: '50',
      },
      transitions: {
        duration: {
          fast: '0.15s',
          medium: '0.3s',
          slow: '0.5s',
          verySlow: '1s',
        },
        easing: {
          easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
          easeOut: 'ease-out',
          easeIn: 'ease-in',
          spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        },
        property: {
          all: 'all',
          transform: 'transform',
          opacity: 'opacity',
          color: 'color',
          shadow: 'box-shadow',
        },
      },
      hoverEffect: {
        scale: 'scale(1.03)',
        translateY: 'translateY(-2px)',
        shadow: '0px 6px 12px rgba(28, 32, 37, 0.12)',
      },
    },
  };

  return tokens;
}

/**
 * A TypeScript schema for the Datlas theme. Use this for type safety and auto-completion.
 * For example, use `surface.background` as css variable `--surface-background`
 */
export type DatlasThemeSchema = ReturnType<typeof datlasTokens>;
