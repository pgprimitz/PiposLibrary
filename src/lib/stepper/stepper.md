# generic-stepper

Pasos de un flujo (alta, lección, onboarding). Los pasos `locked` no se pueden clickear.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `steps` | `{ id, label, locked? }[]` | `[]` |
| `currentIndex` | `number` | `0` |
| `orientation` | `horizontal \| vertical` | `horizontal` |

## Outputs

| Nombre | Payload |
| --- | --- |
| `stepClick` | `{ step, index }` |

## Uso

```html
<generic-stepper
  [steps]="[{ id: 'a', label: 'Datos' }, { id: 'b', label: 'Pago' }]"
  [currentIndex]="1"
  (stepClick)="go($event.index)"
/>
```
