# generic-dropdown

Menú de acciones. No es un select de formulario: para eso usá `generic-select`.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `label` | `string` | `Menu` |
| `items` | `{ id, label, disabled?, danger? }[]` | `[]` |
| `align` | `left \| right` | `left` |

## Outputs

| Nombre | Payload |
| --- | --- |
| `itemSelect` | el item clickeado |

## Uso

```html
<generic-dropdown
  label="Cuenta"
  [items]="[{ id: 'profile', label: 'Ver perfil' }, { id: 'out', label: 'Salir', danger: true }]"
  (itemSelect)="onMenu($event)"
/>
```
