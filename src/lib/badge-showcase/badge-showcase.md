# generic-badge-showcase

Galería en grilla de insignias de logro obtenidas/no obtenidas. **No confundir con `<generic-badge>`**: ese componente es un átomo de UI genérico (etiqueta pequeña con tono), mientras que `generic-badge-showcase` es un concepto de dominio para gamificación (logros/achievements) y usa un modelo de datos propio (`GenericAchievementBadge`), sin relación con `GenericBadge`.

## Inputs / Outputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `badges` | `GenericAchievementBadge[]` | `[]` |
| `badgeClick` | `output<GenericAchievementBadge>()` | — |

`badgeClick` se emite al hacer click en cualquier insignia (obtenida o no), útil para mostrar un popover/tooltip de detalle en la app consumidora.

## Modelo

```ts
export interface GenericAchievementBadge {
  id: string;
  label: string;
  iconName: GenericIconName;
  earned: boolean;
  description?: string;
}
```

Cada tile es un `<button>` real y enfocable, con `aria-label` del tipo `"Insignia: {label} (obtenida)"` o `"Insignia: {label} (no obtenida)"`. Las insignias no obtenidas se muestran atenuadas y en escala de grises.

## Uso

```html
<generic-badge-showcase [badges]="achievements" (badgeClick)="onBadgeClick($event)" />
```

```ts
achievements: GenericAchievementBadge[] = [
  { id: 'first-course', label: 'Primer curso', iconName: 'trophy', earned: true },
  { id: 'streak-7', label: 'Racha de 7 días', iconName: 'fire', earned: false, description: 'Completá 7 días seguidos.' },
];
```
