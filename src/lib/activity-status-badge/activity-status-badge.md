# generic-activity-status-badge

Badge que mapea el estado de una actividad (`ActivityStatus`) a un `tone` y una etiqueta en español, delegando el renderizado en `generic-badge`.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `status` | `ActivityStatus` (requerido) | — |
| `size` | `sm \| md` | `md` |

## Mapeo

| Estado | Tone | Etiqueta |
| --- | --- | --- |
| `not-started` | `neutral` | No iniciado |
| `in-progress` | `cyan` | En progreso |
| `completed` | `green` | Completado |
| `overdue` | `red` | Atrasado |

## Uso

```html
<generic-activity-status-badge status="in-progress" />
<generic-activity-status-badge status="overdue" size="sm" />
```
