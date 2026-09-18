import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentenceCase',
})
export class SentenceCasePipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    const text = value?.trim() ?? '';
    if (!text) return '';

    const lower = text.toLocaleLowerCase('es');
    return lower.replace(/(^|[.!?…]\s*|[\n\r]+\s*|[¿¡])(\p{L})/gu, (full, prefix: string, letter: string) => {
      if (full.startsWith('¿') || full.startsWith('¡')) {
        return full[0] + letter.toLocaleUpperCase('es');
      }
      return `${prefix}${letter.toLocaleUpperCase('es')}`;
    });
  }
}
