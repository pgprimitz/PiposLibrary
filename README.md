# generic-ui

Librería de componentes Angular 21 para el monolito TUP. Estilo arcade neon.

Sin Material, sin Tailwind, sin Chart.js, sin lucide, sin NES.css.

## Empaquetar (este repo)

```bash
npm install
npm run build
```

El paquete queda en `dist/generic-ui`. Eso es lo que importa el otro repo.

## Importar en el monolito

En el `package.json` del otro proyecto:

```json
"generic-ui": "file:../PiposLibrary/dist/generic-ui"
```

Después:

```bash
npm install
```

En `styles.css` (o en `angular.json` → `styles`):

```css
@import 'generic-ui/theme.css';
```

En un componente:

```ts
import { GenericButton, ThemeService } from 'generic-ui';
```

```html
<generic-button variant="cyan">Guardar</generic-button>
```

Peer: Angular 21 (`@angular/core` y `@angular/common` ^21.2).

## Convención

- Selectores: `generic-*`
- Código en inglés, docs en español
- Cada componente: `.html` `.css` `.ts` y un `.md` de uso
- Inputs opcionales con defaults
- El grupo consumidor hace las llamadas HTTP; la librería emite `File[]`, clicks y valores

## Componentes

| Selector | Para qué |
| --- | --- |
| `generic-title` | Títulos |
| `generic-subtitle` | Subtítulos |
| `generic-text` | Párrafos |
| `generic-button` | Botones |
| `generic-import-button` | Importar archivos |
| `generic-modal` | Diálogo |
| `generic-file-modal` | Diálogo con dropzone |
| `generic-course-modal` | Modal de materia (color por `tone`) |
| `generic-table` | Tabla con búsqueda, filtro, orden y páginas |
| `generic-badge` | Estados |
| `generic-stepper` | Pasos |
| `generic-dropdown` | Menú de acciones |
| `generic-progress` | Barra / porcentaje / vidas |
| `generic-spinner` | Spinner |
| `generic-switch` | On/off |
| `generic-icon` | Íconos pixel |
| `generic-chart` | Barras / línea / dona |
| `generic-stat` | KPI |
| `generic-dashboard` | Layout de tablero |
| `generic-survey` | Encuesta |
| `generic-card` | Contenedor |
| `generic-input` | Texto |
| `generic-select` | Select |
| `generic-checkbox` | Checkbox |
| `generic-chat` | Chat (nombre + burbujas) |

Detalle de cada uno: `src/lib/<nombre>/<nombre>.md`.

## Demo (no se empaqueta)

```bash
npm start
```

Abre `http://localhost:4200`.
