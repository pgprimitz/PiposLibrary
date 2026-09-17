# generic-select

Select nativo estilizado. Para menús de acciones usá `generic-dropdown`.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `label` | `string` | `''` |
| `placeholder` | `string` | `''` |
| `options` | `{ value, label, disabled? }[]` | `[]` |
| `error` | `string` | `''` |
| `disabled` | `boolean` | `false` |
| `value` | `string` (model) | `''` |

## Uso

```html
<generic-select
  label="Curso"
  placeholder="Elegí uno"
  [options]="courses"
  [(value)]="courseId"
/>
```
