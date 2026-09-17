# generic-button

Botón arcade con relieve de 4px. El contenido proyectado puede ser texto o un `generic-icon`.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `variant` | `cyan \| magenta \| gold \| green \| ghost` | `magenta` |
| `size` | `sm \| md \| lg` | `md` |
| `type` | `button \| submit` | `button` |
| `disabled` | `boolean` | `false` |

## Uso

```html
<generic-button variant="cyan" (click)="save()">Guardar</generic-button>
<generic-button variant="ghost" size="sm">Cancelar</generic-button>
```
