export type SurveyQuestionType = 'single' | 'multi' | 'rating' | 'text';

export interface SurveyOption {
  id: string;
  label: string;
}

export interface SurveyQuestion {
  id: string;
  prompt: string;
  type: SurveyQuestionType;
  options?: SurveyOption[];
  max?: number;
  required?: boolean;
}

export type SurveyValue = Record<string, string | string[] | number>;
