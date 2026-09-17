# generic-course-modal

Modal de curso con el layout arcade (kicker, vidas, monedas, badges, progreso y acción). Todo el contenido entra por inputs.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `open` | `boolean` (model) | `false` |
| `tone` | `celeste \| rosa \| naranja \| verde \| violeta \| dorado \| magenta` | `celeste` |
| `kicker` | `string` | `''` |
| `title` | `string` | `''` |
| `subtitle` | `string` | `''` |
| `lives` | `number` | `0` |
| `maxLives` | `number` | `3` |
| `coins` | `number \| null` | `null` |
| `badges` | `GenericCourseBadge[]` | `[]` |
| `progressLabel` | `string` | `Progreso del curso` |
| `progressValue` | `number` | `0` |
| `progressMax` | `number` | `100` |
| `actionLabel` | `string` | `Ver curso` |
| `dismissable` | `boolean` | `true` |

`GenericCourseBadge`: `{ label, tone?, appearance? }`.

## Outputs

| Nombre | Cuándo |
| --- | --- |
| `actionClick` | Click en el botón de acción |
| `closed` | Cierre por backdrop, Escape o X |

## Uso

```html
<generic-course-modal
  [(open)]="open"
  kicker="2da Cohorte 2026"
  title="Progra IV"
  subtitle="Programación IV"
  [lives]="3"
  [maxLives]="3"
  [coins]="450"
  [badges]="badges"
  tone="rosa"
  [progressValue]="65"
  actionLabel="Ver curso"
  (actionClick)="go()"
/>
```
