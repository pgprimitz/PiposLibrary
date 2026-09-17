# generic-avatar

Avatar circular con imagen opcional, fallback a iniciales, badge de nivel y anillo de color.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `src` | `string \| undefined` | `undefined` |
| `name` | `string` (requerido) | — |
| `size` | `xs \| sm \| md \| lg \| xl` | `md` |
| `level` | `number \| undefined` | `undefined` |
| `ring` | `cyan \| magenta \| gold \| green \| red \| none` | `cyan` |

Si no hay `src`, se muestran las iniciales derivadas de `name` (hasta 2 palabras, primera letra de cada una). Si `level` tiene valor, se renderiza una insignia pequeña abajo a la derecha.

## Uso

```html
<generic-avatar name="Tamara Leiva" size="lg" ring="gold" [level]="12" />
<generic-avatar name="Bruno Diaz" src="https://example.com/avatar.png" />
```
