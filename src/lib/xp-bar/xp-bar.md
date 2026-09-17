# generic-xp-bar

Barra de experiencia (XP) para el nivel actual. Reutiliza `<generic-progress>` internamente en vez de reimplementar el relleno visual.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `currentXp` | `number` (requerido) | — |
| `levelXp` | `number` (requerido) | — |
| `level` | `number \| null` | `null` |
| `tone` | `Exclude<ArcadeTone, 'neutral'>` | `'gold'` |
| `caption` | `string` | `'XP'` |

`currentXp` es la experiencia acumulada en el nivel actual y `levelXp` es la experiencia necesaria para completarlo (se usan como `value`/`max` de `<generic-progress>`). Si `level` tiene un valor, se muestra una etiqueta "Nivel N" junto a la barra.

`caption` es una etiqueta corta y visible (sin números) que se forwardea al `label` de `<generic-progress>`, mostrada junto al valor numérico (`{{value}}/{{max}}`) que ya provee `showValue`. Para no duplicar esos números en pantalla, no se debe usar una frase completa aquí.

Por separado, se genera un `aria-label` completo como `"Experiencia: {currentXp} de {levelXp}"` y se aplica como atributo ARIA en el elemento raíz del componente (no se muestra visualmente ni se forwardea al `label` de `<generic-progress>`), para dar contexto accesible completo a lectores de pantalla.

## Uso

```html
<generic-xp-bar [currentXp]="320" [levelXp]="500" [level]="4" />
<generic-xp-bar [currentXp]="80" [levelXp]="100" tone="cyan" />
```
