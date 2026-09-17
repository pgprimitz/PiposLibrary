import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { GenericIcon } from '../icon/icon';

@Component({
  selector: 'generic-code-block',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GenericIcon],
  templateUrl: './code-block.html',
  styleUrl: './code-block.css',
})
export class GenericCodeBlock {
  readonly code = input.required<string>();
  readonly language = input('');
  readonly filename = input('');
  readonly showCopyButton = input(true);
  readonly copied = output<void>();

  protected readonly justCopied = signal(false);

  async copy(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.code());
      this.justCopied.set(true);
      this.copied.emit();
      setTimeout(() => this.justCopied.set(false), 1500);
    } catch {
      // Clipboard API unavailable or denied — silently ignore, no state change.
    }
  }
}
