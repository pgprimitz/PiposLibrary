# generic-tabs

Tira de navegación por pestañas (tab strip). Solo renderiza el header/selección — el contenido del panel lo maneja la app consumidora según el `id` activo.

## Inputs / Model

| Nombre | Tipo | Default |
| --- | --- | --- |
| `tabs` | `GenericTabItem[]` | `[]` |
| `activeId` | `model<string>` | `''` |

## Outputs

| Nombre | Tipo |
| --- | --- |
| `tabChange` | `output<GenericTabItem>` |

## `GenericTabItem`

```ts
interface GenericTabItem {
  id: string;
  label: string;
  disabled?: boolean;
  icon?: GenericIconName;
}
```

## Accesibilidad

- `role="tablist"` en el contenedor, `role="tab"` + `aria-selected` + `tabindex` en cada botón.
- Navegación con flechas Izquierda/Derecha entre tabs habilitadas.
- Tabs deshabilitadas usan `aria-disabled` y no reciben foco por teclado ni click.

## Uso

```html
<generic-tabs
  [tabs]="[{ id: 'overview', label: 'Resumen' }, { id: 'stats', label: 'Estadísticas', icon: 'trophy' }]"
  [(activeId)]="activeTab"
  (tabChange)="onTabChange($event)"
/>
```
