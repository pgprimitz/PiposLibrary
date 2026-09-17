# generic-title

Título arcade con tipografía pixel (`Silkscreen`, como bitmap 8-bit).

## Inputs

| Nombre | Tipo | Default | Descripción |
| --- | --- | --- | --- |
| `level` | `1 \| 2 \| 3` | `1` | Semántica HTML (`h1` / `h2` / `h3`) |
| `tone` | `cyan \| magenta \| gold \| green \| red \| neutral` | `cyan` | Color neon |

## Uso

```html
<generic-title>Panel principal</generic-title>
<generic-title [level]="2" tone="magenta">Sección</generic-title>
```
