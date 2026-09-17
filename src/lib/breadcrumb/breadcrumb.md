# generic-breadcrumb

Ruta de navegación (trail) para indicar la ubicación actual dentro de una jerarquía de páginas. El último ítem se renderiza como texto no interactivo (página actual); el resto son enlaces clicables.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `items` | `GenericBreadcrumbItem[]` | `[]` |
| `showHome` | `boolean` | `false` |

## Outputs

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `itemClick` | `EventEmitter<GenericBreadcrumbItem>` | Emitido al hacer click en un ítem que no es el último |
| `homeClick` | `EventEmitter<void>` | Emitido al hacer click en el crumb de "Home" |

## Modelo

```ts
interface GenericBreadcrumbItem {
  id: string;
  label: string;
  href?: string;
  icon?: GenericIconName;
}
```

## Notas de diseño

`showHome` controla si se antepone un primer crumb de "Home". Si es `false`, no se renderiza ningún elemento extra: no existe un botón de home "muerto" sin comportamiento asociado (un bug conocido de la versión anterior en React). El home solo se muestra como botón interactivo cuando `showHome` es `true`, y su click emite `homeClick`.

## Uso

```html
<generic-breadcrumb
  [items]="[
    { id: 'courses', label: 'Cursos', href: '/courses' },
    { id: 'angular', label: 'Angular', href: '/courses/angular' },
    { id: 'signals', label: 'Signals' }
  ]"
  [showHome]="true"
  (homeClick)="goHome()"
  (itemClick)="navigate($event)"
/>
```
