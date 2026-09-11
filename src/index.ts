// Estilos: en un proyecto Tailwind, importá "tup-arcade-ui/theme.css" (después de
// "@import tailwindcss;") en tu propio CSS en vez de depender de este bundle.
// Esta importación es solo para que el build de la librería genere un
// dist/tup-arcade-ui.css autocontenido (útil para consumidores sin Tailwind).
import './theme/build-entry.css';

// Tema
export { ThemeProvider, useTheme } from './theme/ThemeContext';
export type { Theme, ThemeProviderProps } from './theme/ThemeContext';

// Componentes UI
export { ArcadeCard } from './components/ArcadeCard';
export type { ArcadeCardProps } from './components/ArcadeCard';

export { ArcadeButton } from './components/ArcadeButton';
export type { ArcadeButtonProps } from './components/ArcadeButton';

export { ArcadeInput } from './components/ArcadeInput';
export type { ArcadeInputProps } from './components/ArcadeInput';

export { ArcadeNavbar } from './components/ArcadeNavbar';
export type { ArcadeNavbarProps } from './components/ArcadeNavbar';

export { Breadcrumb } from './components/Breadcrumb';
export type { BreadcrumbProps, BreadcrumbItem } from './components/Breadcrumb';

export { Footer } from './components/Footer';
export type { FooterProps, FooterLink } from './components/Footer';

// Primitivas de UI
export { ArcadeBadge } from './components/ArcadeBadge';
export type { ArcadeBadgeProps, ArcadeBadgeTone } from './components/ArcadeBadge';

export { ArcadeModal } from './components/ArcadeModal';
export type { ArcadeModalProps, ArcadeModalTone } from './components/ArcadeModal';

export { ArcadeDrawer } from './components/ArcadeDrawer';
export type { ArcadeDrawerProps } from './components/ArcadeDrawer';

export { ArcadeSelect } from './components/ArcadeSelect';
export type { ArcadeSelectProps, ArcadeSelectOption } from './components/ArcadeSelect';

export { ArcadeTextarea } from './components/ArcadeTextarea';
export type { ArcadeTextareaProps } from './components/ArcadeTextarea';

export { ArcadeCheckbox } from './components/ArcadeCheckbox';
export type { ArcadeCheckboxProps } from './components/ArcadeCheckbox';

export { ArcadeRadioGroup } from './components/ArcadeRadioGroup';
export type { ArcadeRadioGroupProps, ArcadeRadioOption } from './components/ArcadeRadioGroup';

export { ArcadeAvatar } from './components/ArcadeAvatar';
export type { ArcadeAvatarProps } from './components/ArcadeAvatar';

export { ArcadeProgressBar } from './components/ArcadeProgressBar';
export type { ArcadeProgressBarProps } from './components/ArcadeProgressBar';

export { ArcadeTabs } from './components/ArcadeTabs';
export type { ArcadeTabsProps, ArcadeTab } from './components/ArcadeTabs';

export { ArcadeTable } from './components/ArcadeTable';
export type { ArcadeTableProps, ArcadeTableColumn } from './components/ArcadeTable';

export { ArcadeTooltip } from './components/ArcadeTooltip';
export type { ArcadeTooltipProps } from './components/ArcadeTooltip';

export { ArcadePagination } from './components/ArcadePagination';
export type { ArcadePaginationProps } from './components/ArcadePagination';

export { ArcadeSpinner } from './components/ArcadeSpinner';
export type { ArcadeSpinnerProps } from './components/ArcadeSpinner';

export { ArcadeEmptyState } from './components/ArcadeEmptyState';
export type { ArcadeEmptyStateProps } from './components/ArcadeEmptyState';

// Contenido didáctico
export { Callout } from './components/Callout';
export type { CalloutProps, CalloutVariant } from './components/Callout';

export { LessonHeader } from './components/LessonHeader';
export type { LessonHeaderProps } from './components/LessonHeader';

export { CodeBlock } from './components/CodeBlock';
export type { CodeBlockProps } from './components/CodeBlock';

export { MathBlock } from './components/MathBlock';
export type { MathBlockProps } from './components/MathBlock';

// Controles académicos
export { CountdownTimer } from './components/CountdownTimer';
export type { CountdownTimerProps } from './components/CountdownTimer';

export { LessonStepper } from './components/LessonStepper';
export type { LessonStepperProps, LessonStep } from './components/LessonStepper';

export { StarRating } from './components/StarRating';
export type { StarRatingProps } from './components/StarRating';

export { MultipleChoice } from './components/MultipleChoice';
export type { MultipleChoiceProps, ChoiceOption } from './components/MultipleChoice';

export { CourseOutline } from './components/CourseOutline';
export type { CourseOutlineProps, CourseOutlineNode } from './components/CourseOutline';

export { RubricPanel } from './components/RubricPanel';
export type { RubricPanelProps } from './components/RubricPanel';

// Vocabulario del dominio
export type {
  ActivityStatus,
  ActivityKind,
  Role,
  CourseStatus,
  Difficulty,
  ResourceType,
  AssessmentType,
  RubricCriterion,
} from './types/domain';

// Badges de estado del LMS
export {
  ActivityStatusBadge,
  ActivityKindBadge,
  CourseStatusBadge,
  GradeBadge,
  CourseMetaBadges,
} from './components/StatusBadges';
export type {
  ActivityStatusBadgeProps,
  ActivityKindBadgeProps,
  CourseStatusBadgeProps,
  GradeBadgeProps,
  CourseMetaBadgesProps,
} from './components/StatusBadges';

// Gamificación
export { XPBar, LivesIndicator, CoinCounter, StreakFlame, LevelBadge, BadgeShowcase } from './components/Gamification';
export type {
  XPBarProps,
  LivesIndicatorProps,
  CoinCounterProps,
  StreakFlameProps,
  LevelBadgeProps,
  BadgeShowcaseProps,
  EarnedBadge,
} from './components/Gamification';

// Íconos pixel-art
export {
  PixelTrophy,
  PixelChest,
  PixelChat,
  PixelBell,
  PixelUser,
  PixelScroll,
  PixelHeart,
  PixelHeartEmpty,
  PixelCoin,
  PixelFire,
  PixelMedal,
  PixelLock,
  PixelClock,
  PixelCheck,
  PixelStar,
  PixelVideo,
  PixelAudio,
  PixelLink,
  PixelFolder,
  PixelPdf,
  PixelQuiz,
} from './components/PixelIcons';
export type { PixelIconProps } from './components/PixelIcons';

// Assets de ejemplo (gemas y personaje usados en la pantalla de login)
export { default as gem1Url } from './assets/gem-1.webp';
export { default as gem2Url } from './assets/gem-2.webp';
export { default as gem3Url } from './assets/gem-3.webp';
export { default as gem4Url } from './assets/gem-4.webp';
export { default as steveUrl } from './assets/steve.webp';
