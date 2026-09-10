import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'dark' | 'light';

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export interface ThemeProviderProps {
  children: React.ReactNode;
  /** Clave de localStorage usada para persistir el tema elegido. */
  storageKey?: string;
  /** Tema por defecto si no hay nada guardado todavía. */
  defaultTheme?: Theme;
}

function getInitialTheme(storageKey: string, defaultTheme: Theme): Theme {
  if (typeof window === 'undefined') return defaultTheme;
  const stored = window.localStorage.getItem(storageKey);
  return stored === 'light' || stored === 'dark' ? stored : defaultTheme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  storageKey = 'tup-arcade-theme',
  defaultTheme = 'dark',
}) => {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme(storageKey, defaultTheme));

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme debe usarse dentro de un <ThemeProvider>');
  return ctx;
}
