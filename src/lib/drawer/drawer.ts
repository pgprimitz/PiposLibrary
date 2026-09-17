import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';
import { ArcadeSize } from '../types';

@Component({
  selector: 'generic-drawer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './drawer.html',
  styleUrl: './drawer.css',
  host: {
    '(document:keydown.escape)': 'close()',
  },
})
export class GenericDrawer {
  readonly open = model(false);
  readonly dismissable = input(true);
  readonly side = input<'left' | 'right' | 'top' | 'bottom'>('right');
  readonly size = input<ArcadeSize>('md');
  readonly closeLabel = input('Cerrar');
  readonly closed = output<void>();

  close(): void {
    if (!this.open()) return;
    if (!this.dismissable()) return;
    this.open.set(false);
    this.closed.emit();
  }

  onBackdrop(): void {
    this.close();
  }
}
