import { ChangeDetectionStrategy, Component, input, model, output, signal } from '@angular/core';
import { ArcadeTone } from '../types';
import { GenericModal } from '../modal/modal';

@Component({
  selector: 'generic-file-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GenericModal],
  templateUrl: './file-modal.html',
  styleUrl: './file-modal.css',
})
export class GenericFileModal {
  readonly open = model(false);
  readonly title = input('Subir archivos');
  readonly subtitle = input('Arrastrá o elegí archivos');
  readonly tone = input<Exclude<ArcadeTone, 'neutral'>>('cyan');
  readonly accept = input('*/*');
  readonly multiple = input(true);
  readonly maxSizeMb = input(10);

  readonly files = model<File[]>([]);
  readonly filesChange = output<File[]>();

  readonly dragging = signal(false);
  readonly error = signal('');

  onDrag(over: boolean, event: DragEvent): void {
    event.preventDefault();
    this.dragging.set(over);
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.dragging.set(false);
    this.add(Array.from(event.dataTransfer?.files ?? []));
  }

  onPick(event: Event): void {
    const inputEl = event.target as HTMLInputElement;
    this.add(Array.from(inputEl.files ?? []));
    inputEl.value = '';
  }

  remove(index: number): void {
    const next = this.files().filter((_, i) => i !== index);
    this.files.set(next);
    this.filesChange.emit(next);
  }

  private add(incoming: File[]): void {
    const limit = this.maxSizeMb() * 1024 * 1024;
    const rejected = incoming.find((file) => file.size > limit);
    if (rejected) {
      this.error.set(`${rejected.name} supera ${this.maxSizeMb()} MB`);
      return;
    }
    this.error.set('');
    const next = this.multiple() ? [...this.files(), ...incoming] : incoming.slice(0, 1);
    this.files.set(next);
    this.filesChange.emit(next);
  }
}
