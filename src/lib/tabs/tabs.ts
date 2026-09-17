import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';
import { GenericIcon } from '../icon/icon';
import { GenericTabItem } from './tabs.models';

@Component({
  selector: 'generic-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GenericIcon],
  templateUrl: './tabs.html',
  styleUrl: './tabs.css',
})
export class GenericTabs {
  readonly tabs = input<GenericTabItem[]>([]);
  readonly activeId = model<string>('');
  readonly tabChange = output<GenericTabItem>();

  select(tab: GenericTabItem): void {
    if (tab.disabled) return;
    this.activeId.set(tab.id);
    this.tabChange.emit(tab);
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;

    const items = this.tabs();
    const enabled = items.filter((tab) => !tab.disabled);
    if (enabled.length === 0) return;

    const currentIndex = enabled.findIndex((tab) => tab.id === this.activeId());
    const delta = event.key === 'ArrowRight' ? 1 : -1;
    const nextIndex = (currentIndex + delta + enabled.length) % enabled.length;
    const next = enabled[nextIndex];

    event.preventDefault();
    this.select(next);

    const button = (event.currentTarget as HTMLElement).querySelector<HTMLButtonElement>(
      `[data-tab-id="${next.id}"]`,
    );
    button?.focus();
  }
}
