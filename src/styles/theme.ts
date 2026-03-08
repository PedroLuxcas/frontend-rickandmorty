export const theme = {
  colors: {
    primary: '#6B46C1',        // Roxo principal
    primaryLight: '#9F7AEA',    // Roxo claro
    primaryDark: '#553C9A',     // Roxo escuro
    
    sucess: '#48BB78',
    warning: '#F59E0B',
    danger: '#EF4444',
    info: '#3B82F6',
    
    background: {
      main: '#F7FAFC',          // Fundo principal
      card: '#FFFFFF',          // Fundo dos cards
      secondary: '#F3F4F6',     // Fundo secundário
      tertiary: '#E5E7EB',      // Fundo terciário
      dark: '#1A202C',          // Fundo escuro (footer)
    },
    
    text: {
      primary: '#111827',       // Texto principal (quase preto)
      secondary: '#4B5563',     // Texto secundário (cinza escuro)
      tertiary: '#9CA3AF',      // Texto terciário (cinza médio)
      light: '#FFFFFF',         // Texto claro
      muted: '#A0AEC0',         // Texto neutro
    },
    
    status: {
      alive: '#48BB78',         // Verde
      dead: '#F56565',          // Vermelho
      unknown: '#A0AEC0',       // Cinza
    },
    
    border: '#E2E8F0',          // Cor de borda
    overlay: 'rgba(0, 0, 0, 0.5)',
  },
  
  spacing: {
    xs: '0.5rem',    // 8px
    sm: '1rem',      // 16px
    md: '1.5rem',    // 24px
    lg: '2rem',      // 32px
    xl: '3rem',      // 48px
    xxl: '4rem',     // 64px
    '3xl': '5rem',
  },
  
  borderRadius: {
    sm: '0.375rem',  // 6px
    md: '0.5rem',    // 8px
    lg: '0.75rem',   // 12px
    xl: '1rem',      // 16px
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.12)',
    md: '0 4px 6px rgba(0,0,0,0.1)',
    lg: '0 10px 15px rgba(0,0,0,0.1)',
    xl: '0 20px 25px rgba(0,0,0,0.15)',
  },
  
  typography: {
    fontFamily: {
      sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      mono: 'SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace',
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  transitions: {
    fast: '150ms ease-in-out',
    normal: '300ms ease-in-out',
    slow: '500ms ease-in-out',
  },
} as const;

// Tipo inferido do tema
export type Theme = typeof theme;