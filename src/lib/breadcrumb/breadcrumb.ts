import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { GenericIcon } from '../icon/icon';
import { GenericBreadcrumbItem } from './breadcrumb.models';

@Component({
  selector: 'generic-breadcrumb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GenericIcon],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.css',
})
export class GenericBreadcrumb {
  readonly items = input<GenericBreadcrumbItem[]>([]);
  readonly showHome = input(false);

  readonly itemClick = output<GenericBreadcrumbItem>();
  readonly homeClick = output<void>();

  isLast(index: number): boolean {
    return index === this.items().length - 1;
  }

  select(item: GenericBreadcrumbItem, index: number): void {
    if (this.isLast(index)) return;
    this.itemClick.emit(item);
  }

  selectHome(): void {
    this.homeClick.emit();
  }
}
