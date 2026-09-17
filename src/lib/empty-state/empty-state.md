# generic-empty-state

Estado vacío genérico con ícono, título, descripción y acción opcionales.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `title` | `string` (requerido) | — |
| `description` | `string` | `''` |

## Proyección de contenido

| Slot | Uso |
| --- | --- |
| `[icon]` | Ícono opcional (p. ej. un `generic-icon`) |
| `[action]` | Acción opcional, típicamente un `generic-button` |

## Uso

```html
<generic-empty-state title="Todavía no hay cursos" description="Creá el primero para empezar.">
  <span icon>🎮</span>
  <generic-button action variant="magenta">Crear curso</generic-button>
</generic-empty-state>
```
