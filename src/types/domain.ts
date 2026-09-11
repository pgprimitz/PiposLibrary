/**
 * Shared vocabulary between the UI kit and the platform services.
 * Values are kept in English so they can travel as API payloads; the human
 * labels live in the components and are always overridable via props.
 */

/** Lifecycle of a challenge or activity as seen by a student. */
export type ActivityStatus =
  | 'pending'
  | 'in_progress'
  | 'submitted'
  | 'graded'
  | 'completed'
  | 'overdue'
  | 'locked';

/** How an activity counts towards the course. */
export type ActivityKind = 'required' | 'optional' | 'formative' | 'summative' | 'peer';

/** Platform roles, mirroring the backend proposal. */
export type Role = 'admin' | 'professor' | 'student';

/** Course-cohort lifecycle. */
export type CourseStatus = 'draft' | 'active' | 'archived';

export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

/** Kinds of course content, used to pick an icon. */
export type ResourceType = 'document' | 'video' | 'audio' | 'link' | 'folder' | 'page';

/** Kinds of assessment, used to pick an icon. */
export type AssessmentType = 'quiz' | 'assignment' | 'forum' | 'glossary' | 'survey' | 'workshop';

/** One criterion of an evaluation rubric. Weights are percentages. */
export interface RubricCriterion {
  id: string;
  label: string;
  weight: number;
  score: number;
  maxScore: number;
  comment?: string;
}
