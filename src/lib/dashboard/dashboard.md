# generic-dashboard

Layout de tablero. Los `generic-stat` van a la grilla de KPIs; el resto (gráficos, tablas) a la fila inferior.

## Uso

```html
<generic-dashboard>
  <generic-stat label="Cursos" [value]="6" icon="scroll" />
  <generic-stat label="XP" [value]="12480" icon="trophy" tone="gold" />
  <generic-chart type="bar" caption="Avance" [data]="weekly" />
  <generic-chart type="donut" caption="Estados" [data]="status" />
</generic-dashboard>
```
