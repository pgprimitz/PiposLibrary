import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';
import { SurveyQuestion, SurveyValue } from './survey.models';

@Component({
  selector: 'generic-survey',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './survey.html',
  styleUrl: './survey.css',
})
export class GenericSurvey {
  readonly title = input('Encuesta');
  readonly questions = input<SurveyQuestion[]>([]);
  readonly value = model<SurveyValue>({});
  readonly submitted = output<SurveyValue>();

  asList(id: string): string[] {
    const current = this.value()[id];
    return Array.isArray(current) ? current : [];
  }

  asText(id: string): string {
    const current = this.value()[id];
    return typeof current === 'string' ? current : '';
  }

  asNumber(id: string): number {
    const current = this.value()[id];
    return typeof current === 'number' ? current : 0;
  }

  setSingle(id: string, optionId: string): void {
    this.patch(id, optionId);
  }

  toggleMulti(id: string, optionId: string): void {
    const list = this.asList(id);
    const next = list.includes(optionId) ? list.filter((item) => item !== optionId) : [...list, optionId];
    this.patch(id, next);
  }

  setRating(id: string, score: number): void {
    this.patch(id, score);
  }

  setText(id: string, text: string): void {
    this.patch(id, text);
  }

  submit(): void {
    this.submitted.emit(this.value());
  }

  private patch(id: string, next: string | string[] | number): void {
    this.value.set({ ...this.value(), [id]: next });
  }

  stars(max: number): number[] {
    return Array.from({ length: max }, (_, i) => i + 1);
  }
}
