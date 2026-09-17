# generic-chart

Gráficos SVG propios: barras, línea y dona. Sin Chart.js ni ninguna lib.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `type` | `bar \| line \| donut` | `bar` |
| `data` | `{ label, value, color? }[]` | `[]` |
| `caption` | `string` | `''` |
| `height` | `number` | `180` |

## Uso

```html
<generic-chart
  type="bar"
  caption="Entregas por semana"
  [data]="[{ label: 'Lun', value: 12 }, { label: 'Mar', value: 8 }]"
/>
```
