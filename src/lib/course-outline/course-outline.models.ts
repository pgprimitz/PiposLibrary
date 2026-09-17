export interface GenericOutlineLesson {
  id: string;
  label: string;
  completed?: boolean;
  locked?: boolean;
}

export interface GenericOutlineModule {
  id: string;
  label: string;
  lessons: GenericOutlineLesson[];
}
