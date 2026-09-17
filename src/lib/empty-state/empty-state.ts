import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'generic-empty-state',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './empty-state.html',
  styleUrl: './empty-state.css',
})
export class GenericEmptyState {
  readonly title = input.required<string>();
  readonly description = input('');
}
