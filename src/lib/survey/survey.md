# generic-survey

Encuesta genérica: opción única, múltiple, rating y texto libre.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `title` | `string` | `Encuesta` |
| `questions` | `{ id, prompt, type, options?, max?, required? }[]` | `[]` |
| `value` | `Record<string, string \| string[] \| number>` (model) | `{}` |

`type`: `single` | `multi` | `rating` | `text`

## Outputs

| Nombre | Payload |
| --- | --- |
| `submitted` | el `value` completo |

## Uso

```html
<generic-survey
  title="Feedback de la unidad"
  [questions]="questions"
  [(value)]="answers"
  (submitted)="save($event)"
/>
```
