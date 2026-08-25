export const neondoTheme = {
  light: {
    background: '#f4f1e9',
    surface: '#ffffff',
    surfaceMuted: '#ebe7dd',
    text: '#11110f',
    textMuted: '#625e57',
    border: 'rgba(17,17,17,.16)',
    pink: '#ff5bbe',
    blue: '#7f8cff',
    lime: '#d9fe48',
    danger: '#ff4d3d',
  },
  dark: {
    background: '#101012',
    surface: '#18181b',
    surfaceMuted: '#232327',
    text: '#f7f7f5',
    textMuted: '#b6b6b1',
    border: 'rgba(255,255,255,.18)',
    pink: '#ff4a9a',
    blue: '#7194ff',
    lime: '#c6ff63',
    danger: '#ff6659',
  },
} as const;

export type NeondoTheme = keyof typeof neondoTheme;
