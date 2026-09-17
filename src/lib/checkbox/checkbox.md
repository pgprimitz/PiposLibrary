# generic-checkbox

Checkbox arcade. El tilde es CSS, sin íconos externos.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `label` | `string` | `''` |
| `description` | `string` | `''` |
| `error` | `string` | `''` |
| `disabled` | `boolean` | `false` |
| `checked` | `boolean` (model) | `false` |

## Uso

```html
<generic-checkbox label="Acepto el reglamento" [(checked)]="ok" />
```
