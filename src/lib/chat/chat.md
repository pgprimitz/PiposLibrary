# generic-chat

Chat genérico: marco, nombre de la persona y una burbuja por mensaje.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `name` | `string` | `''` |
| `messages` | `GenericChatMessage[]` | `[]` |
| `tone` | `cyan \| magenta \| gold \| green \| red \| neutral` | `cyan` |

`GenericChatMessage`: `{ id?, text, from?: 'me' \| 'them' }`. `them` a la izquierda, `me` a la derecha.

## Uso

```html
<generic-chat
  name="Tamara Ruiz"
  [messages]="[
    { text: '¿Subiste la entrega?', from: 'them' },
    { text: 'Sí, hace un rato.', from: 'me' }
  ]"
/>
```
