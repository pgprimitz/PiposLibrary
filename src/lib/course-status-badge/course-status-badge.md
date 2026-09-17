# generic-course-status-badge

Badge que mapea el estado de publicación de un curso (`CourseStatus`) a un `tone` y una etiqueta en español, delegando el renderizado en `generic-badge`.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `status` | `CourseStatus` (requerido) | — |
| `size` | `sm \| md` | `md` |

## Mapeo

| Estado | Tone | Etiqueta |
| --- | --- | --- |
| `draft` | `neutral` | Borrador |
| `published` | `green` | Publicado |
| `archived` | `red` | Archivado |

## Uso

```html
<generic-course-status-badge status="published" />
<generic-course-status-badge status="draft" size="sm" />
```
