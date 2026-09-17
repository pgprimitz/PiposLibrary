import { ChangeDetectionStrategy, Component, ElementRef, input, output, viewChild } from '@angular/core';
import { ArcadeSize } from '../types';
import { ButtonVariant, GenericButton } from '../button/button';

@Component({
  selector: 'generic-import-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GenericButton],
  templateUrl: './import-button.html',
  styleUrl: './import-button.css',
})
export class GenericImportButton {
  readonly accept = input('*/*');
  readonly multiple = input(false);
  readonly variant = input<ButtonVariant>('cyan');
  readonly size = input<ArcadeSize>('md');
  readonly disabled = input(false);
  readonly label = input('Importar');

  readonly filesSelected = output<File[]>();

  private readonly fileInput = viewChild.required<ElementRef<HTMLInputElement>>('fileInput');

  openPicker(): void {
    this.fileInput().nativeElement.click();
  }

  onChange(event: Event): void {
    const inputEl = event.target as HTMLInputElement;
    const files = Array.from(inputEl.files ?? []);
    if (files.length) this.filesSelected.emit(files);
    inputEl.value = '';
  }
}
