# generic-import-button

Botón que abre el selector nativo de archivos y emite `File[]`. No sube nada: el grupo consumidor decide qué hacer con los archivos.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `accept` | `string` | `*/*` |
| `multiple` | `boolean` | `false` |
| `variant` | igual que `generic-button` | `cyan` |
| `size` | `sm \| md \| lg` | `md` |
| `disabled` | `boolean` | `false` |
| `label` | `string` | `Importar` |

## Outputs

| Nombre | Payload |
| --- | --- |
| `filesSelected` | `File[]` |

## Uso

```html
<generic-import-button
  accept=".csv,.xlsx"
  [multiple]="true"
  (filesSelected)="onImport($event)"
>
  Importar CSV
</generic-import-button>
```
