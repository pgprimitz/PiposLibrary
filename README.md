# tup-arcade-ui

Librería de componentes UI estilo arcade retro (extraída de FrontPruebas): cards, botones, inputs, navbar, breadcrumb, footer, tema claro/oscuro e íconos pixel-art propios.

## Instalación local (dependencia de archivo)

En el `package.json` del proyecto consumidor:

```json
"dependencies": {
  "tup-arcade-ui": "file:../LibreriaFrontPruebas"
}
```

Luego `npm install`.

## Setup

1. En tu CSS de entrada (donde ya tenés `@import "tailwindcss";`), agregá **antes** de tus propios estilos:

```css
@import "tailwindcss";
@import "tup-arcade-ui/theme.css";
```

Esto define los tokens de tema (`--color-canvas`, `--color-surface`, `--color-brand`, etc.) y deja que Tailwind de tu propio proyecto genere las clases (`bg-surface`, `text-ink`, `border-brand-2/40`, ...) con las variantes de opacidad que uses.

2. Envolvé tu app con `ThemeProvider`:

```tsx
import { ThemeProvider } from 'tup-arcade-ui';

<ThemeProvider>
  <App />
</ThemeProvider>
```

3. Usá los componentes:

```tsx
import { ArcadeCard, ArcadeButton, ArcadeNavbar, useTheme } from 'tup-arcade-ui';
```

### ⚠️ Importante si la instalás como `file:` (symlink)

Al instalarla con `"tup-arcade-ui": "file:../LibreriaFrontPruebas"`, npm crea un symlink al directorio real de la librería — que tiene **su propia** copia de `react`/`react-dom` en su `node_modules` (las necesita para su propio build). Sin nada más, tu bundler puede terminar resolviendo DOS copias físicas distintas de React (la tuya + la de la librería), lo que rompe los hooks con errores como:

```
Cannot read properties of null (reading 'useState')
```

Esto no aparece en `vite dev` (el optimizador de dependencias ya dedupe todo), pero sí en `vite build` de producción. Solución: forzar a tu bundler a usar una sola copia. En Vite:

```ts
// vite.config.ts
export default defineConfig({
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
});
```

Si publicás esta librería a un registro npm real en el futuro (en vez de `file:`), este problema no aplica.

## Componentes

- `ArcadeCard`, `ArcadeButton`, `ArcadeInput` — piezas base.
- `ArcadeNavbar` — header con mensajes/notificaciones/perfil/toggle de tema. 100% por props y callbacks, sin dependencia de router.
- `Breadcrumb` — ruta de navegación con ícono de inicio configurable (`homeLabel`).
- `Footer` — pie de página con info institucional, links legales y contacto, todo por props.
- `PixelTrophy`, `PixelChest`, `PixelChat`, `PixelBell`, `PixelUser`, `PixelScroll` — íconos SVG pixel-art.
- `ThemeProvider` / `useTheme` — tema claro/oscuro persistido en `localStorage`.
- `gem1Url`...`gem4Url`, `steveUrl` — assets de ejemplo (gemas y personaje) usados en la pantalla de login original.

## Build

```bash
npm run build
```

Genera `dist/` (JS ESM + CJS, tipos, y un CSS precompilado en `dist/tup-arcade-ui.css` para consumidores que no usan Tailwind).
# PiposLibrary
