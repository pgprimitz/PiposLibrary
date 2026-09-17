# generic-activity-kind-badge

Badge que mapea el tipo de actividad (`ActivityKind`) a un `tone` y una etiqueta en español, delegando el renderizado en `generic-badge`.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `kind` | `ActivityKind` (requerido) | — |
| `size` | `sm \| md` | `md` |

## Mapeo

| Tipo | Tone | Etiqueta |
| --- | --- | --- |
| `reading` | `neutral` | Lectura |
| `video` | `cyan` | Video |
| `quiz` | `gold` | Quiz |
| `assignment` | `magenta` | Tarea |
| `discussion` | `green` | Discusión |

## Uso

```html
<generic-activity-kind-badge kind="video" />
<generic-activity-kind-badge kind="quiz" size="sm" />
```
