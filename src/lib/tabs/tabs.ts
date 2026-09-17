import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  input,
  model,
  output,
  viewChildren,
} from '@angular/core';
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

  private readonly tabButtons = viewChildren<ElementRef<HTMLButtonElement>>('tabButton');

  /** The tab that should carry tabindex="0". Falls back to the first enabled
   * tab when activeId() doesn't match any enabled tab (e.g. default ''), so
   * the tablist is always reachable via Tab per the WAI-ARIA tabs pattern. */
  readonly focusableTabId = computed(() => {
    const items = this.tabs();
    const active = this.activeId();
    if (items.some((tab) => tab.id === active && !tab.disabled)) return active;
    return items.find((tab) => !tab.disabled)?.id ?? '';
  });

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
    let nextIndex: number;
    if (currentIndex === -1) {
      // Nothing currently matches (default activeId === ''): start from the
      // first enabled tab instead of doing wraparound arithmetic on -1.
      nextIndex = 0;
    } else {
      const delta = event.key === 'ArrowRight' ? 1 : -1;
      nextIndex = (currentIndex + delta + enabled.length) % enabled.length;
    }
    const next = enabled[nextIndex];

    event.preventDefault();
    this.select(next);

    const button = this.tabButtons().find(
      (ref) => ref.nativeElement.dataset['tabId'] === next.id,
    );
    button?.nativeElement.focus();
  }
}
