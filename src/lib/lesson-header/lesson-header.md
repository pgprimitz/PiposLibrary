# generic-lesson-header

Banner de cabecera para una página de lección o curso. Reutiliza `generic-badge` (etiqueta opcional) y `generic-progress` (barra de avance) internamente.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `title` | `string` (requerido) | — |
| `subtitle` | `string` | `''` |
| `progress` | `number` (0-100) | `0` |
| `tone` | `ArcadeTone` | `cyan` |
| `badgeLabel` | `string` | `''` |

Cuando `badgeLabel` no está vacío se muestra un `generic-badge` arriba del título (p. ej. "Módulo 3"). El fondo y el borde del banner usan `color-mix()` sobre el color de `tone`, siguiendo el mismo patrón que `badge.css`.

## Uso

```html
<generic-lesson-header
  title="Introducción a Angular"
  subtitle="Señales y componentes standalone"
  badgeLabel="Módulo 3"
  tone="cyan"
  [progress]="65"
/>
```
