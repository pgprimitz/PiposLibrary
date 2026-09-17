# generic-radio-group

Grupo de radios nativos con `[(value)]`, soporta descripción por opción y opciones deshabilitadas.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `name` | `string` (requerido) | — |
| `options` | `GenericRadioOption[]` (requerido) | — |
| `label` | `string` | `''` |
| `error` | `string` | `''` |
| `value` | `string \| undefined` (model) | `undefined` |

`GenericRadioOption`: `{ value: string; label: string; description?: string; disabled?: boolean }`.

Cuando se define `label`, las opciones se agrupan dentro de un `<fieldset>`/`<legend>` para accesibilidad.

## Uso

```html
<generic-radio-group
  name="plan"
  label="Elegí tu plan"
  [options]="[
    { value: 'free', label: 'Gratis' },
    { value: 'pro', label: 'Pro', description: 'Acceso completo' },
    { value: 'team', label: 'Equipo', disabled: true }
  ]"
  [(value)]="selectedPlan"
/>
```
