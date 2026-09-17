# generic-countdown-timer

Cuenta regresiva para actividades cronometradas (quiz, ejercicio con límite de tiempo, etc.).

## Inputs

| Nombre | Tipo | Default |
| --- | --- | --- |
| `durationSeconds` | `number` (requerido) | — |
| `autoStart` | `boolean` | `true` |
| `paused` | `boolean` (two-way, `model`) | `false` |

## Outputs

| Nombre | Payload | Descripción |
| --- | --- | --- |
| `tick` | `number` | Emitido cada segundo con los segundos restantes |
| `expired` | `void` | Emitido una única vez al llegar a 0 |

Formato de pantalla `MM:SS`. Cuando el tiempo restante cae por debajo del 10% de `durationSeconds`, el texto cambia a `--accent-danger` (estado "crítico").

## Notas de implementación

- El `setInterval` arranca en el constructor si `autoStart()` es `true` (lectura única al crear el componente) y se limpia mediante `inject(DestroyRef).onDestroy(...)`, evitando fugas de memoria al destruir el componente.
- `paused` es un `model()`: al pausar, el intervalo interno sigue corriendo pero no decrementa el valor (no se limpia ni se reinicia), así que reanudar continúa exactamente donde quedó.
- No tiene tests (`.spec.ts`) por convención de esta librería; verificación manual: instanciar con `durationSeconds="5"`, confirmar tick descendente cada segundo, `expired` una sola vez al llegar a 0, y que `paused` detiene/reanuda el conteo sin resetear.

## Uso

```html
<generic-countdown-timer
  [durationSeconds]="60"
  [(paused)]="isPaused"
  (tick)="onTick($event)"
  (expired)="onExpired()"
/>
```
