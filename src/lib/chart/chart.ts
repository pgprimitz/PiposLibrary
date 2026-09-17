import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export interface GenericChartPoint {
  label: string;
  value: number;
  color?: string;
}

const PALETTE = [
  'var(--accent-secondary-fill)',
  'var(--accent-primary-fill)',
  'var(--accent-gold-fill)',
  'var(--accent-success-fill)',
  'var(--accent-danger-fill)',
  'var(--text-muted)',
];

@Component({
  selector: 'generic-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chart.html',
  styleUrl: './chart.css',
})
export class GenericChart {
  readonly type = input<'bar' | 'line' | 'donut'>('bar');
  readonly data = input<GenericChartPoint[]>([]);
  readonly caption = input('');
  readonly height = input(180);

  readonly max = computed(() => Math.max(1, ...this.data().map((d) => d.value)));

  readonly bars = computed(() => {
    const max = this.max();
    return this.data().map((point, i) => ({
      ...point,
      color: point.color ?? PALETTE[i % PALETTE.length],
      h: (point.value / max) * 100,
    }));
  });

  readonly linePoints = computed(() => {
    const items = this.data();
    if (!items.length) return '';
    const max = this.max();
    return items
      .map((point, i) => {
        const x = items.length === 1 ? 50 : (i / (items.length - 1)) * 100;
        const y = 100 - (point.value / max) * 100;
        return `${x},${y}`;
      })
      .join(' ');
  });

  readonly donut = computed(() => {
    const total = this.data().reduce((sum, point) => sum + point.value, 0) || 1;
    let offset = 0;
    return this.data().map((point, i) => {
      const frac = point.value / total;
      const dash = frac * 100;
      const item = {
        ...point,
        color: point.color ?? PALETTE[i % PALETTE.length],
        dash,
        offset,
        percent: Math.round(frac * 100),
      };
      offset += dash;
      return item;
    });
  });
}
