# generic-code-block

Bloque de código de solo texto, sin resaltado de sintaxis (esta librería evita dependencias externas). Incluye tira de cabecera con lenguaje/nombre de archivo y botón de copiado opcional.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `code` | `string` (requerido) | — |
| `language` | `string` | `''` |
| `filename` | `string` | `''` |
| `showCopyButton` | `boolean` | `true` |

## Outputs

| Nombre | Payload | Descripción |
| --- | --- | --- |
| `copied` | `void` | Se emite después de copiar exitosamente al portapapeles |

El copiado usa `navigator.clipboard.writeText`, envuelto en `try/catch`: si falla (permiso denegado, API no disponible), no rompe el componente. El estado "Copiado" es visual y transitorio (~1.5s) vía `setTimeout`.

## Uso

```html
<generic-code-block
  language="TypeScript"
  filename="app.component.ts"
  code="export class AppComponent {}"
  (copied)="onCopied()"
/>
```
