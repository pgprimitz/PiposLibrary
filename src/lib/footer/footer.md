# generic-footer

Pie de página simple con enlaces y texto de copyright.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `links` | `GenericFooterLink[]` | `[]` |
| `copyrightText` | `string` | `''` |

## Outputs

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `linkClick` | `EventEmitter<GenericFooterLink>` | Emitido al hacer click en un enlace |

## Proyección de contenido

`[brand]` — slot opcional al inicio del footer para logo/marca.

## Modelo

```ts
interface GenericFooterLink {
  id: string;
  label: string;
  href: string;
}
```

## Uso

```html
<generic-footer
  [links]="[
    { id: 'terms', label: 'Términos', href: '/terms' },
    { id: 'privacy', label: 'Privacidad', href: '/privacy' }
  ]"
  copyrightText="© 2026 PiposLibrary"
  (linkClick)="onLinkClick($event)"
>
  <span brand>PiposLibrary</span>
</generic-footer>
```
