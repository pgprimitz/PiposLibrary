# generic-drawer

Panel lateral deslizable (slide-in) anclado a un borde de la pantalla. Sigue el mismo patrón simple de `generic-modal` (sin focus-trap, sin scroll-lock, sin restauración de foco) pero agrega la variante de lado (`side`) que lo distingue de un modal centrado.

## Inputs / Model

| Nombre | Tipo | Default |
| --- | --- | --- |
| `open` | `model<boolean>` | `false` |
| `dismissable` | `boolean` | `true` |
| `side` | `'left' \| 'right' \| 'top' \| 'bottom'` | `'right'` |
| `size` | `ArcadeSize` (`'sm' \| 'md' \| 'lg'`) | `'md'` |
| `closeLabel` | `string` | `'Cerrar'` |

## Outputs

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `closed` | `output<void>` | Se emite al cerrarse (Escape, click en el backdrop, o botón de cierre), solo si `dismissable` es `true`. |

## Comportamiento

- `dismissable` controla tanto el cierre con la tecla Escape como el click en el backdrop, igual que `generic-modal`.
- `side` define desde qué borde entra el panel: `left`/`right` animan con `translateX`, `top`/`bottom` con `translateY`. El backdrop hace fade con `opacity`.
- `size` controla el ancho (en `left`/`right`) o el alto (en `top`/`bottom`) del panel: `sm` = 280px / 160px, `md` = 360px / 240px, `lg` = 480px / 320px.
- El contenido del cuerpo se proyecta vía `<ng-content />`.

## Uso

```html
<generic-drawer [(open)]="isDrawerOpen" side="left" size="md" (closed)="onDrawerClosed()">
  <h2>Filtros</h2>
  <p>Contenido del panel lateral.</p>
</generic-drawer>
```

```ts
readonly isDrawerOpen = signal(false);

onDrawerClosed(): void {
  console.log('drawer closed');
}
```
