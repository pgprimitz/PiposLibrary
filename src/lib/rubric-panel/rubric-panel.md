# generic-rubric-panel

Panel de rúbrica de evaluación: criterios con niveles de puntaje, de solo lectura o seleccionables.

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `criteria` | `GenericRubricCriterion[]` | `[]` |
| `readonly` | `boolean` | `true` |

## Outputs

| Nombre | Payload |
| --- | --- |
| `levelSelect` | `{ criterion: GenericRubricCriterion; levelIndex: number }` (solo emitido cuando `readonly()` es `false`) |

## Propiedades públicas

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `totalPoints` | `computed<number>` | Suma de los puntos del nivel seleccionado de cada criterio (0 si un criterio no tiene nivel seleccionado). No es `private`/`protected`: queda expuesto para que quien consuma el componente lo lea vía referencia de plantilla o `ViewChild`, ya que no existe otro mecanismo (input/output) natural para exponer un valor derivado de solo lectura. No hay precedente exacto en el resto del lib para un `computed` público (p. ej. `progress.ts` mantiene `percent`/`roundedPercent` de uso interno), así que se trata como una extensión intencional del patrón existente.

## Modelo

```ts
interface GenericRubricLevel {
  label: string;
  points: number;
  description?: string;
}

interface GenericRubricCriterion {
  id: string;
  label: string;
  levels: GenericRubricLevel[];
  selectedLevelIndex?: number | null;
}
```

## Comportamiento

- Cada criterio se renderiza como una sección con su etiqueta y sus niveles como chips/botones (`role="group"` agrupándolos, con `aria-label` del criterio).
- Con `readonly()` en `true` (default), los niveles son botones deshabilitados de solo visualización (sin `aria-pressed`, sin click).
- Con `readonly()` en `false`, click en un nivel emite `levelSelect`; el nivel actualmente seleccionado (`criterion.selectedLevelIndex`) se resalta con `--accent-secondary` y lleva `aria-pressed="true"`.
- El consumidor es responsable de actualizar `selectedLevelIndex` en el array de `criteria` tras recibir `levelSelect` (el componente no muta sus inputs).

## Uso

```html
<generic-rubric-panel
  [criteria]="rubricCriteria"
  [readonly]="false"
  (levelSelect)="onLevelSelect($event)"
/>
```
