# generic-modal

Diálogo genérico. El cuerpo se proyecta; las acciones van en un bloque `[footer]`.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `open` | `boolean` (model) | `false` |
| `title` | `string` | `''` |
| `subtitle` | `string` | `''` |
| `tone` | `cyan \| magenta \| gold \| green \| red` | `cyan` |
| `size` | `sm \| md \| lg \| xl` | `md` |
| `dismissable` | `boolean` | `true` |
| `closeLabel` | `string` | `Cerrar` |

## Outputs

| Nombre | Cuándo |
| --- | --- |
| `closed` | Backdrop, Escape visual (botón X) o `open` a false |

## Uso

```html
<generic-modal [(open)]="show" title="Confirmar" tone="magenta">
  <generic-text>¿Borrás este registro?</generic-text>
  <div footer>
    <generic-button variant="ghost" (click)="show = false">No</generic-button>
    <generic-button (click)="confirm()">Sí</generic-button>
  </div>
</generic-modal>
```
