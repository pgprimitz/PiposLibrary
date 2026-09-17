# generic-textarea

Área de texto genérica con `[(value)]` y contador de caracteres opcional.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `label` | `string` | `''` |
| `error` | `string` | `''` |
| `showCount` | `boolean` | `false` |
| `maxLength` | `number \| undefined` | `undefined` |
| `placeholder` | `string` | `''` |
| `disabled` | `boolean` | `false` |
| `rows` | `number` | `4` |
| `value` | `string` (model) | `''` |

El contador `{usado}/{maxLength}` solo se muestra cuando `showCount` está en `true` y `maxLength` tiene un valor definido.

## Uso

```html
<generic-textarea
  label="Comentario"
  placeholder="Escribí tu opinión..."
  [showCount]="true"
  [maxLength]="280"
  [(value)]="comment"
/>
```
