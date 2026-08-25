export const neondoTheme = {
  light: {
    background: '#f4f1e9', surface: '#ffffff', surfaceMuted: '#ebe7dd',
    text: '#11110f', textMuted: '#625e57', border: 'rgba(17,17,17,.16)',
    pink: '#ff5bbe', blue: '#7f8cff', lime: '#d9fe48', danger: '#ff4d3d',
  },
  dark: {
    background: '#101012', surface: '#18181b', surfaceMuted: '#232327',
    text: '#f7f7f5', textMuted: '#b6b6b1', border: 'rgba(255,255,255,.18)',
    pink: '#ff4a9a', blue: '#7194ff', lime: '#c6ff63', danger: '#ff6659',
  },
} as const;

export type NeondoTheme = keyof typeof neondoTheme;
export const THEME_STORAGE_KEY = 'neondo-theme';

export function getInitialTheme(): NeondoTheme {
  if (typeof window === 'undefined') return 'light';
  const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function applyTheme(theme: NeondoTheme) {
  if (typeof document === 'undefined') return;
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  document.body.classList.toggle('dark', theme === 'dark');
  window.localStorage.setItem(THEME_STORAGE_KEY, theme);
}

export function toggleTheme(): NeondoTheme {
  const next = getInitialTheme() === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  return next;
}
