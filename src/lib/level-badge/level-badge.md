# generic-level-badge

Badge compacto y circular para mostrar un nivel numérico, con prefijo "Lvl". Se implementó con marcado propio (no reutiliza `<generic-badge>`) porque la forma circular distintiva no se logra limpiamente encima del badge rectangular existente sin CSS que peleara contra su forma base.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `level` | `number` (requerido) | — |
| `size` | `ArcadeSize` | `'md'` |
| `tone` | `ArcadeTone` | `'gold'` |

`aria-label` se genera automáticamente como `"Nivel {level}"`.

## Uso

```html
<generic-level-badge [level]="7" />
<generic-level-badge [level]="12" tone="magenta" size="lg" />
```
