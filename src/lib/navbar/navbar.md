# generic-navbar

Barra de navegación superior con marca, links principales, toggle de tema y menú móvil.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `items` | `GenericNavItem[]` | `[]` |
| `activeId` | `string \| null` | `null` |
| `brandLabel` | `string` | `''` |

## Outputs

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `itemClick` | `EventEmitter<GenericNavItem>` | Emitido al hacer click en un ítem de navegación (también cierra el menú móvil si está abierto) |

## Modelo

```ts
interface GenericNavItem {
  id: string;
  label: string;
  href?: string;
  icon?: GenericIconName;
}
```

## Notas de diseño

- El toggle de tema usa `ThemeService` (`inject(ThemeService)`) y llama a `toggle()`; el ícono sol/luna se dibuja en CSS (no existe un ícono `sun`/`moon` en `icon-names.ts`) y refleja el signal `theme()` mediante `computed()`.
- El menú móvil (hamburguesa) solo es visible por debajo de los 768px (breakpoint por defecto, no había uno definido en la librería). Se cierra automáticamente al hacer click fuera del componente, usando el mismo patrón `inject(ElementRef)` + `@HostListener('document:click', ...)` que `generic-dropdown`.
- Clickear un ítem de navegación cierra el menú móvil además de emitir `itemClick`.

## Uso

```html
<generic-navbar
  brandLabel="PiposLibrary"
  [items]="[
    { id: 'home', label: 'Inicio' },
    { id: 'courses', label: 'Cursos' }
  ]"
  activeId="home"
  (itemClick)="navigate($event)"
/>
```
