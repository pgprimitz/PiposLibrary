import { ChangeDetectionStrategy, Component, computed, input, model } from '@angular/core';

@Component({
  selector: 'generic-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './textarea.html',
  styleUrl: './textarea.css',
})
export class GenericTextarea {
  readonly label = input('');
  readonly error = input('');
  readonly showCount = input(false);
  readonly maxLength = input<number | undefined>(undefined);
  readonly placeholder = input('');
  readonly disabled = input(false);
  readonly rows = input(4);
  readonly value = model('');

  readonly used = computed(() => this.value().length);
  readonly displayCount = computed(() => this.showCount() && this.maxLength() !== undefined);
}
