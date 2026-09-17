import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';
import { ArcadeTone } from '../types';

@Component({
  selector: 'generic-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './modal.html',
  styleUrl: './modal.css',
  host: {
    '(document:keydown.escape)': 'close()',
  },
})
export class GenericModal {
  readonly open = model(false);
  readonly title = input('');
  readonly subtitle = input('');
  readonly tone = input<Exclude<ArcadeTone, 'neutral'>>('cyan');
  readonly size = input<'sm' | 'md' | 'lg' | 'xl'>('md');
  readonly dismissable = input(true);
  readonly closeLabel = input('Cerrar');
  readonly closed = output<void>();

  close(): void {
    if (!this.dismissable()) return;
    this.open.set(false);
    this.closed.emit();
  }

  onBackdrop(): void {
    this.close();
  }
}
