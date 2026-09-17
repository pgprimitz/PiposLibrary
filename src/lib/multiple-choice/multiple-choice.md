# generic-multiple-choice

Widget de pregunta de opción múltiple (respuesta única, estilo quiz), construido sobre el mismo patrón de selección que `generic-radio-group`.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `question` | `string` (requerido) | — |
| `options` | `GenericChoiceOption[]` | `[]` |
| `value` | `string \| null` (two-way, `model`) | `null` |
| `disabled` | `boolean` | `false` |
| `showResult` | `boolean` | `false` |
| `correctOptionId` | `string \| null` | `null` |

## Modelo

```ts
interface GenericChoiceOption {
  id: string;
  label: string;
  disabled?: boolean;
}
```

## Comportamiento

- Reutiliza el patrón exacto de `generic-radio-group`: cada opción es un `<input type="radio">` real agrupado por un `name` interno generado, con `role="radiogroup"` en el contenedor.
- El nombre accesible del grupo es el texto de `question()`, vinculado vía `aria-labelledby` al `<p>` que lo renderiza (en vez de repetirlo como `aria-label`).
- Click en una opción (si no está deshabilitada, ni por `disabled()` global ni por `option.disabled`) fija `value()`.
- Cuando `showResult()` es `true`: la opción seleccionada se pinta con `--accent-success` si coincide con `correctOptionId()`, o `--accent-danger` si no coincide; la opción correcta siempre se resalta con `--accent-success`, esté o no seleccionada.

## Uso

```html
<generic-multiple-choice
  [question]="'¿Cuál es la capital de Francia?'"
  [options]="[
    { id: 'a', label: 'Madrid' },
    { id: 'b', label: 'París' },
    { id: 'c', label: 'Roma' }
  ]"
  [(value)]="selected"
  [showResult]="revealed"
  correctOptionId="b"
/>
```
