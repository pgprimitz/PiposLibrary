# generic-switch

Interruptor on/off. Ideal para tema, flags y preferencias.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `label` | `string` | `''` |
| `disabled` | `boolean` | `false` |
| `checked` | `boolean` (model) | `false` |

## Uso

```html
<generic-switch label="Tema oscuro" [(checked)]="dark" />
```
