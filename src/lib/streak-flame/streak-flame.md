# generic-streak-flame

Indicador de racha de días consecutivos (patrón de gamificación común), con un ícono de fuego y el número de días.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `days` | `number` (requerido) | — |
| `active` | `boolean` | `true` |

Cuando `active` es `false` (la racha se perdió), el componente se muestra atenuado y en escala de grises.

El host expone `role="status"` y `aria-label`: `"Racha de {days} días"` cuando está activa, o `"Racha perdida"` cuando no.

## Uso

```html
<generic-streak-flame [days]="12" />
<generic-streak-flame [days]="0" [active]="false" />
```
