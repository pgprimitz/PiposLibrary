# generic-progress

Barra de carga continua, segmentada (20 bloques) o de vidas con corazones.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `value` | `number` | `0` |
| `max` | `number` | `100` |
| `tone` | `cyan \| magenta \| gold \| green \| red` | `cyan` |
| `size` | `sm \| md \| lg` | `md` |
| `label` | `string` | `''` |
| `showValue` | `boolean` | `false` |
| `showPercent` | `boolean` | `false` |
| `segmented` | `boolean` | `false` |
| `hearts` | `boolean` | `false` |

## Uso

```html
<generic-progress [value]="xp" [max]="12000" label="XP" [showValue]="true" tone="gold" />
<generic-progress [value]="72" label="Avance" [showPercent]="true" />
<generic-progress [value]="3" [max]="5" label="Vidas" [hearts]="true" />
```
