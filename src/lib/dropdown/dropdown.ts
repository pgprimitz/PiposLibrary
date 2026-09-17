import { ChangeDetectionStrategy, Component, ElementRef, HostListener, inject, input, output, signal } from '@angular/core';

export interface GenericMenuItem {
  id: string;
  label: string;
  disabled?: boolean;
  danger?: boolean;
}

@Component({
  selector: 'generic-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dropdown.html',
  styleUrl: './dropdown.css',
})
export class GenericDropdown {
  private readonly host = inject(ElementRef);

  readonly label = input('Menu');
  readonly items = input<GenericMenuItem[]>([]);
  readonly align = input<'left' | 'right'>('left');

  readonly itemSelect = output<GenericMenuItem>();

  readonly open = signal(false);

  toggle(): void {
    this.open.update((value) => !value);
  }

  pick(item: GenericMenuItem): void {
    if (item.disabled) return;
    this.itemSelect.emit(item);
    this.open.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (!this.host.nativeElement.contains(event.target as Node)) {
      this.open.set(false);
    }
  }
}
