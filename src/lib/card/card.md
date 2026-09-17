# generic-card

Contenedor con borde neon y píxeles en las esquinas. Usalo para agrupar cualquier bloque.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `tone` | `cyan \| magenta \| gold \| green \| red \| neutral \| default` | `cyan` |
| `padding` | `none \| sm \| md` | `md` |

## Uso

```html
<generic-card tone="magenta">
  <generic-title [level]="2">Métrica</generic-title>
</generic-card>
```
