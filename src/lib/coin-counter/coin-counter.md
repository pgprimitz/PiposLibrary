# generic-coin-counter

Contador simple de monedas/moneda virtual, con ícono y valor numérico.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `count` | `number` (requerido) | — |
| `size` | `ArcadeSize` | `'md'` |

El host expone `role="status"` y `aria-label="Monedas: {count}"` para que lectores de pantalla anuncien el valor.

## Uso

```html
<generic-coin-counter [count]="1250" />
<generic-coin-counter [count]="40" size="sm" />
```
