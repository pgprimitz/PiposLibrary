# generic-course-outline

Lista jerárquica (2 niveles) de módulos y lecciones de un curso, con expand/collapse por módulo.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `modules` | `GenericOutlineModule[]` | `[]` |
| `activeLessonId` | `string \| null` | `null` |

## Outputs

| Nombre | Payload |
| --- | --- |
| `lessonClick` | `{ module: GenericOutlineModule; lesson: GenericOutlineLesson }` (solo para lecciones no bloqueadas) |

## Modelo

```ts
interface GenericOutlineLesson {
  id: string;
  label: string;
  completed?: boolean;
  locked?: boolean;
}

interface GenericOutlineModule {
  id: string;
  label: string;
  lessons: GenericOutlineLesson[];
}
```

## Comportamiento

- Cada módulo es un grupo expandible/colapsable: el header es un `<button>` con `aria-expanded` y `aria-controls` apuntando a la lista de lecciones (`<ul>` con `id="{moduleId}-lessons"`).
- **Decisión de diseño**: todos los módulos arrancan expandidos por default. El estado de expansión es puramente interno (un `Set` de ids colapsados, no expuesto como input/output) — se eligió el criterio más simple y predecible en vez de auto-expandir solo el módulo del `activeLessonId`, ya que igualmente arranca visible al estar todo expandido.
- El indicador de expansión es un chevron dibujado en CSS (mismo truco de `border-right`/`border-bottom` rotado que usa `dropdown.css`), no un ícono.
- Lecciones completadas muestran el ícono `check`; lecciones bloqueadas muestran el ícono `lock` y quedan deshabilitadas (`disabled`, `aria-disabled="true"`, sin click handler); el resto muestra un punto neutro.
- La lección activa (`activeLessonId()`) se resalta con `--accent-secondary` y lleva `aria-current="true"`.
- Clickear una lección no bloqueada emite `lessonClick` con el módulo y la lección.

## Uso

```html
<generic-course-outline
  [modules]="courseModules"
  [activeLessonId]="'l2'"
  (lessonClick)="onLessonClick($event)"
/>
```
