# generic-icon

Set de íconos pixel 16×16. Sin librerías externas. El color de algunos glifos es propio del sprite; el tamaño se controla con `size`.

## Nombres

`trophy` `chest` `chat` `bell` `user` `scroll` `heart` `heart-empty` `coin` `fire` `medal` `lock` `clock` `check` `star` `video` `audio` `link` `folder` `pdf` `quiz` `upload` `search` `close`

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `name` | los de arriba | requerido |
| `size` | `number` (px) | `20` |
| `label` | `string` accesible | `''` |

## Uso

```html
<generic-icon name="trophy" [size]="24" label="Logro" />
```
