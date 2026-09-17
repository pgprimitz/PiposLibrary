# generic-table

Tabla genérica con búsqueda, filtros por columna, orden y paginación. Las celdas muestran el valor de `row[column.key]` como texto.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `columns` | `{ key, header, sortable?, filterable?, align?, width? }[]` | `[]` |
| `rows` | `Record<string, string \| number \| boolean \| null>[]` | `[]` |
| `searchable` | `boolean` | `true` |
| `searchPlaceholder` | `string` | `Buscar...` |
| `pageSize` | `number` | `8` |
| `emptyMessage` | `string` | `Sin resultados` |

## Outputs

| Nombre | Payload |
| --- | --- |
| `rowClick` | la fila |
| `sortChange` | `{ key, direction }` |

## Uso

```html
<generic-table
  [columns]="[
    { key: 'name', header: 'Nombre', sortable: true },
    { key: 'role', header: 'Rol', filterable: true },
    { key: 'xp', header: 'XP', sortable: true, align: 'right' }
  ]"
  [rows]="students"
  (rowClick)="open($event)"
/>
```
