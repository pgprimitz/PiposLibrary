# generic-course-meta-badges

Fila horizontal de badges para una tarjeta de curso: dificultad, duración y estado. A diferencia de los demás badges de este set, no mapea un único enum sino que compone varios badges opcionales, renderizando solo los que tienen valor.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `difficulty` | `Difficulty \| null` | `null` |
| `durationLabel` | `string` | `''` |
| `status` | `CourseStatus \| null` | `null` |
| `size` | `sm \| md` | `md` |

## Comportamiento

- `difficulty`: si no es `null`, renderiza un `generic-badge` mapeando `beginner`→`green` ("Principiante"), `intermediate`→`gold` ("Intermedio"), `advanced`→`red` ("Avanzado").
- `durationLabel`: si no está vacío, renderiza un `generic-badge` de `tone="neutral"` con el texto tal cual (texto libre, no es un enum), por ejemplo "4 semanas".
- `status`: si no es `null`, delega en `<generic-course-status-badge [status]="status()" />`.
- Ningún badge vacío se renderiza: cada pieza aparece solo si su input correspondiente tiene valor.

## Uso

```html
<generic-course-meta-badges difficulty="intermediate" durationLabel="4 semanas" status="published" />
<generic-course-meta-badges status="draft" />
```
