# generic-callout

Recuadro destacado con ícono para notas, advertencias, éxitos o errores, con contenido proyectado.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `tone` | `cyan \| gold \| green \| red \| neutral` | `cyan` |
| `title` | `string \| undefined` | `undefined` (usa el título por defecto del tono) |

Si no se define `title`, se usa un título por defecto según `tone`: Nota (cyan), Advertencia (gold), Éxito (green), Error (red) o Info (neutral). Cada tono muestra un ícono acorde (`generic-icon`).

## Uso

```html
<generic-callout tone="gold">
  Este endpoint va a dejar de funcionar en la próxima versión.
</generic-callout>

<generic-callout tone="red" title="Error de validación">
  El campo email es obligatorio.
</generic-callout>
```
