# generic-tooltip

Tooltip disparado por hover/foco. Envuelve el contenido proyectado y muestra un globo posicionado respecto al elemento host.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `text` | `string` (required) | — |
| `position` | `top \| bottom \| left \| right` | `top` |
| `disabled` | `boolean` | `false` |

## Accesibilidad

- El globo tiene `role="tooltip"` con un `id` único.
- El host expone `aria-describedby` apuntando a ese `id` mientras el tooltip está visible.
- Se muestra con `mouseenter`/`focusin` y se oculta con `mouseleave`/`focusout`, así funciona con mouse y teclado.

## Uso

```html
<generic-tooltip text="Guarda los cambios" position="bottom">
  <generic-button>Guardar</generic-button>
</generic-tooltip>
```
