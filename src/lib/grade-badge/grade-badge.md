# generic-grade-badge

Badge que muestra una calificación porcentual (0-100) y colorea el `tone` según qué tan cerca está del umbral de aprobación.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `score` | `number` (requerido) | — |
| `passingThreshold` | `number` | `60` |
| `size` | `sm \| md` | `md` |

## Lógica de tone

- `score >= passingThreshold` → `green` (aprobado).
- `score >= passingThreshold * 0.7` → `gold` (zona de riesgo, cerca de aprobar pero no llega).
- En cualquier otro caso → `red` (reprobado, lejos del umbral).

En general, la banda `gold` es `[threshold * 0.7, threshold)`. Por ejemplo, con el `passingThreshold` por defecto de `60`, la banda `gold` cubre `[42, 60)` y todo lo menor a `42` es `red`.

El badge no muestra una etiqueta fija: renderiza el valor numérico real, por ejemplo `{{ score() }}%`.

## Uso

```html
<generic-grade-badge [score]="85" />
<generic-grade-badge [score]="45" [passingThreshold]="70" size="sm" />
```
