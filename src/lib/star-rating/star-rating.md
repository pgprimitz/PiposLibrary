# generic-star-rating

Control de calificación por estrellas, interactivo o de solo lectura.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `value` | `number` (two-way, `model`) | `0` |
| `max` | `number` | `5` |
| `readonly` | `boolean` | `false` |
| `size` | `sm \| md \| lg` | `md` |
| `label` | `string` | `''` |

## Comportamiento

- En modo interactivo (`readonly` en `false`), al pasar el mouse sobre una estrella se previsualiza el valor hasta esa posición (estado interno, no se confirma hasta el click).
- Click en una estrella fija `value` en esa posición (1-indexado).
- El host es focuseable (`tabindex="0"`, `role="slider"`) cuando no es `readonly`, y soporta flechas izquierda/derecha para decrementar/incrementar `value` (clamp entre `0` y `max()`).
- No existe un ícono de "estrella vacía" en `icon-names.ts` (solo `star`), así que el estado sin rellenar se logra atenuando el mismo ícono con `opacity` + `filter: grayscale()` en CSS, siguiendo el mismo criterio de estados atenuados usado en otros componentes del lib.
- El host expone `role="slider"` con `aria-valuemin/max/now`, pero no tiene nombre accesible por defecto: cada estrella es `aria-hidden="true"` (son decorativas, el valor real vive en el host). Para que un lector de pantalla anuncie qué se está calificando, pasá `label`, que se bindea como `aria-label` en el host (se omite el atributo por completo si `label` queda vacío).

## Uso

```html
<generic-star-rating [(value)]="rating" max="5" label="Calificación del curso" />
<generic-star-rating [value]="4" readonly size="sm" label="Calificación promedio" />
```
