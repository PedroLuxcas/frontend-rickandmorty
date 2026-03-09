export const theme = {
  colors: {
    primary: '#00FF00',        // Verde neon
    primaryLight: '#33FF33',
    primaryDark: '#00CC00',
    
    background: {
      main: '#000000',         // Preto
      card: '#0A0A0A',
      secondary: '#111111',
      dark: '#000000',
    },
    
    text: {
      primary: '#00FF00',       // Verde
      secondary: '#33FF33',
      light: '#FFFFFF',
      muted: '#666666',
    },
    
    border: '#00FF00',
    overlay: 'rgba(0, 0, 0, 0.9)',
  },
  
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  
  typography: {
    fontFamily: {
      mono: '"Courier New", Courier, mono', 
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '32px',
      '4xl': '40px',
    },
  },
} as const;

export type Theme = typeof theme;