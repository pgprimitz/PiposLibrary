export interface GenericRubricLevel {
  label: string;
  points: number;
  description?: string;
}

export interface GenericRubricCriterion {
  id: string;
  label: string;
  levels: GenericRubricLevel[];
  selectedLevelIndex?: number | null;
}
