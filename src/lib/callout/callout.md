# generic-callout

Recuadro destacado para notas, advertencias, tips o citas, con contenido proyectado.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `variant` | `note \| warning \| tip \| citation` | `note` |
| `title` | `string \| undefined` | `undefined` (usa el título por defecto de la variante) |
| `source` | `string \| undefined` | `undefined` (solo aplica a `citation`) |

Si no se define `title`, se usa un título por defecto según `variant`: Nota, Advertencia, Tip o Cita. En la variante `citation`, el contenido proyectado se muestra en cursiva y, si hay `source`, se agrega `— {source}` debajo.

## Uso

```html
<generic-callout variant="warning">
  Este endpoint va a dejar de funcionar en la próxima versión.
</generic-callout>

<generic-callout variant="citation" source="Robert C. Martin">
  El código limpio siempre parece que fue escrito por alguien a quien le importa.
</generic-callout>
```
