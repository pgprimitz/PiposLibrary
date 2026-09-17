import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { GenericFooterLink } from './footer.models';

@Component({
  selector: 'generic-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class GenericFooter {
  readonly links = input<GenericFooterLink[]>([]);
  readonly copyrightText = input('');

  readonly linkClick = output<GenericFooterLink>();

  select(link: GenericFooterLink): void {
    this.linkClick.emit(link);
  }
}
