# generic-file-modal

Modal con dropzone. No sube archivos: emite `File[]` para que el grupo haga el POST.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `open` | `boolean` (model) | `false` |
| `title` | `string` | `Subir archivos` |
| `subtitle` | `string` | `Arrastrá o elegí archivos` |
| `tone` | igual que modal | `cyan` |
| `accept` | `string` | `*/*` |
| `multiple` | `boolean` | `true` |
| `maxSizeMb` | `number` | `10` |
| `files` | `File[]` (model) | `[]` |

## Outputs

| Nombre | Payload |
| --- | --- |
| `filesChange` | `File[]` |

## Uso

```html
<generic-file-modal
  [(open)]="open"
  accept=".pdf,.png"
  (filesChange)="queue = $event"
>
  <div footer>
    <generic-button (click)="upload(queue)">Subir</generic-button>
  </div>
</generic-file-modal>
```
