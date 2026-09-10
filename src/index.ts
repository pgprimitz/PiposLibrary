// Estilos: en un proyecto Tailwind, importá "tup-arcade-ui/theme.css" (después de
// "@import tailwindcss;") en tu propio CSS en vez de depender de este bundle.
// Esta importación es solo para que el build de la librería genere un
// dist/tup-arcade-ui.css autocontenido (útil para consumidores sin Tailwind).
import './theme/build-entry.css';

// Tema
export { ThemeProvider, useTheme } from './theme/ThemeContext';
export type { Theme, ThemeProviderProps } from './theme/ThemeContext';

// Componentes UI
export { ArcadeCard } from './components/ArcadeCard';
export type { ArcadeCardProps } from './components/ArcadeCard';

export { ArcadeButton } from './components/ArcadeButton';
export type { ArcadeButtonProps } from './components/ArcadeButton';

export { ArcadeInput } from './components/ArcadeInput';
export type { ArcadeInputProps } from './components/ArcadeInput';

export { ArcadeNavbar } from './components/ArcadeNavbar';
export type { ArcadeNavbarProps } from './components/ArcadeNavbar';

export { Breadcrumb } from './components/Breadcrumb';
export type { BreadcrumbProps, BreadcrumbItem } from './components/Breadcrumb';

export { Footer } from './components/Footer';
export type { FooterProps, FooterLink } from './components/Footer';

// Íconos pixel-art
export {
  PixelTrophy,
  PixelChest,
  PixelChat,
  PixelBell,
  PixelUser,
  PixelScroll,
} from './components/PixelIcons';
export type { PixelIconProps } from './components/PixelIcons';

// Assets de ejemplo (gemas y personaje usados en la pantalla de login)
export { default as gem1Url } from './assets/gem-1.webp';
export { default as gem2Url } from './assets/gem-2.webp';
export { default as gem3Url } from './assets/gem-3.webp';
export { default as gem4Url } from './assets/gem-4.webp';
export { default as steveUrl } from './assets/steve.webp';
