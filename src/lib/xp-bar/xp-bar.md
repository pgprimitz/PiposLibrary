# generic-xp-bar

Barra de experiencia (XP) para el nivel actual. Reutiliza `<generic-progress>` internamente en vez de reimplementar el relleno visual.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `currentXp` | `number` (requerido) | — |
| `levelXp` | `number` (requerido) | — |
| `level` | `number \| null` | `null` |
| `tone` | `Exclude<ArcadeTone, 'neutral'>` | `'gold'` |

`currentXp` es la experiencia acumulada en el nivel actual y `levelXp` es la experiencia necesaria para completarlo (se usan como `value`/`max` de `<generic-progress>`). Si `level` tiene un valor, se muestra una etiqueta "Nivel N" junto a la barra.

El `aria-label` se genera automáticamente como `"Experiencia: {currentXp} de {levelXp}"` y se forwardea al `label` de `<generic-progress>`.

## Uso

```html
<generic-xp-bar [currentXp]="320" [levelXp]="500" [level]="4" />
<generic-xp-bar [currentXp]="80" [levelXp]="100" tone="cyan" />
```
