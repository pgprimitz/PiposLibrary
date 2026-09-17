# generic-math-block

Muestra una expresión matemática como texto plano (sin renderer de LaTeX; esta librería lo deja fuera a propósito).

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `expression` | `string` (requerido) | — |
| `display` | `inline \| block` | `block` |

En modo `block` se renderiza como `<div>` con borde de acento y tipografía monoespaciada. En modo `inline` se renderiza como `<span>` dentro del flujo del texto.

## Uso

```html
<generic-math-block expression="E = mc^2" />
<p>La fórmula <generic-math-block expression="a^2 + b^2 = c^2" display="inline" /> es el teorema de Pitágoras.</p>
```
