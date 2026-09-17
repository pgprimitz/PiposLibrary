# generic-input

Campo de texto genérico con `[(value)]`.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `label` | `string` | `''` |
| `type` | `string` | `text` |
| `placeholder` | `string` | `''` |
| `error` | `string` | `''` |
| `disabled` | `boolean` | `false` |
| `value` | `string` (model) | `''` |

## Uso

```html
<generic-input label="Usuario" placeholder="tami" [(value)]="username" />
```
