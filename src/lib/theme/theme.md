# ThemeService

Controla el tema claro/oscuro de toda la librería. Escribe `data-theme` en `<html>` y lo persiste en `localStorage`.

## Uso

```ts
import { ThemeService } from 'generic-ui';

constructor(private readonly theme: ThemeService) {}

this.theme.toggle();
this.theme.set('dark');
this.theme.theme(); // 'light' | 'dark'
```

En el CSS de entrada del monolito:

```css
@import 'generic-ui/theme.css';
```

El servicio se provee con `providedIn: 'root'`. No hace falta registrar providers extra.
