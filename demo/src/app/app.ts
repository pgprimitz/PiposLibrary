import { Component, inject, signal } from '@angular/core';
import {
  GenericActivityKindBadge,
  GenericActivityStatusBadge,
  GenericAvatar,
  GenericBadge,
  GenericBadgeShowcase,
  GenericBreadcrumb,
  GenericButton,
  GenericCallout,
  GenericCard,
  GenericChat,
  GenericChart,
  GenericCheckbox,
  GenericCodeBlock,
  GenericCoinCounter,
  GenericCourseMetaBadges,
  GenericCourseModal,
  GenericCourseOutline,
  GenericCourseStatusBadge,
  GenericCountdownTimer,
  GenericDashboard,
  GenericDrawer,
  GenericDropdown,
  GenericEmptyState,
  GenericFileModal,
  GenericFooter,
  GenericGradeBadge,
  GenericIcon,
  GenericImportButton,
  GenericInput,
  GenericLessonHeader,
  GenericLevelBadge,
  GenericMathBlock,
  GenericModal,
  GenericMultipleChoice,
  GenericNavbar,
  GenericProgress,
  GenericRadioGroup,
  GenericRubricPanel,
  GenericSelect,
  GenericSpinner,
  GenericStarRating,
  GenericStat,
  GenericStepper,
  GenericStreakFlame,
  GenericSubtitle,
  GenericSurvey,
  GenericSwitch,
  GenericTable,
  GenericTabs,
  GenericText,
  GenericTextarea,
  GenericTitle,
  GenericTooltip,
  GenericXpBar,
  ThemeService,
  type ActivityKind,
  type ActivityStatus,
  type CourseStatus,
  type Difficulty,
  type GenericAchievementBadge,
  type GenericBreadcrumbItem,
  type GenericChartPoint,
  type GenericChatMessage,
  type GenericChoiceOption,
  type GenericCourseBadge,
  type GenericCourseTone,
  type GenericFooterLink,
  type GenericIconName,
  type GenericMenuItem,
  type GenericNavItem,
  type GenericOutlineModule,
  type GenericRadioOption,
  type GenericRubricCriterion,
  type GenericStep,
  type GenericTableColumn,
  type GenericTableRow,
  type GenericTabItem,
  type SurveyQuestion,
  type SurveyValue,
} from 'generic-ui';

@Component({
  selector: 'demo-root',
  imports: [
    GenericActivityKindBadge,
    GenericActivityStatusBadge,
    GenericAvatar,
    GenericBadge,
    GenericBadgeShowcase,
    GenericBreadcrumb,
    GenericButton,
    GenericCallout,
    GenericCard,
    GenericChat,
    GenericChart,
    GenericCheckbox,
    GenericCodeBlock,
    GenericCoinCounter,
    GenericCourseMetaBadges,
    GenericCourseModal,
    GenericCourseOutline,
    GenericCourseStatusBadge,
    GenericCountdownTimer,
    GenericDashboard,
    GenericDrawer,
    GenericDropdown,
    GenericEmptyState,
    GenericFileModal,
    GenericFooter,
    GenericGradeBadge,
    GenericIcon,
    GenericImportButton,
    GenericInput,
    GenericLessonHeader,
    GenericLevelBadge,
    GenericMathBlock,
    GenericModal,
    GenericMultipleChoice,
    GenericNavbar,
    GenericProgress,
    GenericRadioGroup,
    GenericRubricPanel,
    GenericSelect,
    GenericSpinner,
    GenericStarRating,
    GenericStat,
    GenericStepper,
    GenericStreakFlame,
    GenericSubtitle,
    GenericSurvey,
    GenericSwitch,
    GenericTable,
    GenericTabs,
    GenericText,
    GenericTextarea,
    GenericTitle,
    GenericTooltip,
    GenericXpBar,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly theme = inject(ThemeService);

  readonly log = signal('Listo. Tocá cualquier control.');
  readonly username = signal('');
  readonly modalOpen = signal(false);
  readonly fileOpen = signal(false);
  readonly courseOpen = signal(false);
  readonly selectedCourse = signal({
    tone: 'celeste' as GenericCourseTone,
    kicker: '2da Cohorte 2026',
    title: 'Progra IV',
    subtitle: 'Programación IV',
    lives: 3,
    coins: 450,
    progress: 65,
  });
  readonly agreed = signal(false);
  readonly course = signal('');
  readonly step = signal(1);
  readonly imported = signal<string[]>([]);
  readonly answers = signal<SurveyValue>({});

  readonly icons: GenericIconName[] = [
    'trophy',
    'chest',
    'chat',
    'bell',
    'user',
    'scroll',
    'heart',
    'heart-empty',
    'coin',
    'fire',
    'medal',
    'lock',
    'clock',
    'check',
    'star',
    'video',
    'audio',
    'link',
    'folder',
    'pdf',
    'quiz',
    'upload',
    'search',
    'close',
  ];

  readonly menu: GenericMenuItem[] = [
    { id: 'profile', label: 'Ver perfil' },
    { id: 'theme', label: 'Cambiar tema' },
    { id: 'out', label: 'Cerrar sesión', danger: true },
  ];

  readonly steps: GenericStep[] = [
    { id: '1', label: 'Datos' },
    { id: '2', label: 'Archivos' },
    { id: '3', label: 'Revisión' },
    { id: '4', label: 'Listo', locked: true },
  ];

  readonly courseBadges: GenericCourseBadge[] = [
    { label: 'Cursando', tone: 'green', appearance: 'solid' },
    { label: 'Avanzada', tone: 'red', appearance: 'outline' },
    { label: 'Español', tone: 'cyan', appearance: 'solid' },
    { label: '90h', tone: 'cyan', appearance: 'solid' },
  ];

  readonly courseCards: {
    tone: GenericCourseTone;
    kicker: string;
    title: string;
    subtitle: string;
    lives: number;
    coins: number;
    progress: number;
  }[] = [
    {
      tone: 'celeste',
      kicker: '2da Cohorte 2026',
      title: 'Progra IV',
      subtitle: 'Programación IV',
      lives: 3,
      coins: 450,
      progress: 65,
    },
    {
      tone: 'rosa',
      kicker: '1ra Cohorte 2026',
      title: 'AyED',
      subtitle: 'Algoritmos y Estructuras',
      lives: 2,
      coins: 280,
      progress: 40,
    },
    {
      tone: 'naranja',
      kicker: '2da Cohorte 2026',
      title: 'Sistemas Operativos',
      subtitle: 'SO',
      lives: 3,
      coins: 610,
      progress: 88,
    },
  ];

  readonly courses = [
    { value: 'ayed', label: 'AyED' },
    { value: 'so', label: 'Sistemas Operativos' },
    { value: 'bd', label: 'Bases de datos' },
  ];

  readonly chatMessages: GenericChatMessage[] = [
    { text: '¿Subiste la entrega de Progra IV?', from: 'them' },
    { text: 'Sí, hace un rato. Revisá el repo.', from: 'me' },
  ];

  readonly columns: GenericTableColumn[] = [
    { key: 'pos', header: '#', align: 'center', width: '48px' },
    { key: 'name', header: 'Nombre', sortable: true },
    { key: 'role', header: 'Rol', filterable: true },
    { key: 'xp', header: 'XP', sortable: true, align: 'right' },
  ];

  readonly rows: GenericTableRow[] = [
    { pos: 1, name: 'Tamara Ruiz', role: 'Estudiante', xp: 12480 },
    { pos: 2, name: 'Bruno Paz', role: 'Docente', xp: 11050 },
    { pos: 3, name: 'Lucía Gómez', role: 'Estudiante', xp: 10320 },
    { pos: 4, name: 'Marco Díaz', role: 'Tutor', xp: 6400 },
    { pos: 5, name: 'Sofía Luna', role: 'Estudiante', xp: 2100 },
    { pos: 6, name: 'Nina Soto', role: 'Estudiante', xp: 1880 },
    { pos: 7, name: 'Ivo Ríos', role: 'Docente', xp: 15400 },
    { pos: 8, name: 'Paz Vidal', role: 'Tutor', xp: 4320 },
    { pos: 9, name: 'Leo Nash', role: 'Estudiante', xp: 900 },
  ];

  readonly weekly: GenericChartPoint[] = [
    { label: 'Lun', value: 12 },
    { label: 'Mar', value: 8 },
    { label: 'Mie', value: 15 },
    { label: 'Jue', value: 9 },
    { label: 'Vie', value: 18 },
  ];

  readonly status: GenericChartPoint[] = [
    { label: 'Hecho', value: 46 },
    { label: 'Curso', value: 28 },
    { label: 'Pendiente', value: 16 },
  ];

  readonly questions: SurveyQuestion[] = [
    {
      id: 'clear',
      type: 'single',
      prompt: '¿La consigna estuvo clara?',
      options: [
        { id: 'yes', label: 'Sí' },
        { id: 'mid', label: 'Más o menos' },
        { id: 'no', label: 'No' },
      ],
    },
    {
      id: 'topics',
      type: 'multi',
      prompt: '¿Qué temas querés reforzar?',
      options: [
        { id: 'git', label: 'Git' },
        { id: 'http', label: 'HTTP' },
        { id: 'sql', label: 'SQL' },
      ],
    },
    { id: 'rate', type: 'rating', prompt: 'Puntaje de la clase', max: 5 },
    { id: 'note', type: 'text', prompt: 'Comentario libre' },
  ];

  // --- Nuevos componentes: formularios ---
  readonly bio = signal('');
  readonly favLanguage = signal<string | undefined>('ts');
  readonly languageOptions: GenericRadioOption[] = [
    { value: 'ts', label: 'TypeScript', description: 'Tipado, para todo el monolito' },
    { value: 'py', label: 'Python', description: 'Para IA y scripting' },
    { value: 'go', label: 'Go', description: 'Servicios livianos', disabled: true },
  ];

  // --- Nuevos componentes: navegación ---
  readonly activeTab = signal('resumen');
  readonly tabs: GenericTabItem[] = [
    { id: 'resumen', label: 'Resumen', icon: 'scroll' },
    { id: 'entregas', label: 'Entregas', icon: 'check' },
    { id: 'foro', label: 'Foro', icon: 'chat', disabled: true },
  ];

  readonly drawerOpen = signal(false);

  readonly breadcrumbItems: GenericBreadcrumbItem[] = [
    { id: 'cursos', label: 'Cursos', href: '#' },
    { id: 'progra4', label: 'Progra IV', href: '#' },
    { id: 'unidad3', label: 'Unidad 3' },
  ];

  readonly navItems: GenericNavItem[] = [
    { id: 'home', label: 'Inicio', icon: 'trophy' },
    { id: 'cursos', label: 'Cursos', icon: 'scroll' },
    { id: 'ranking', label: 'Ranking', icon: 'medal' },
  ];
  readonly navActiveId = signal('home');

  readonly footerLinks: GenericFooterLink[] = [
    { id: 'terms', label: 'Términos', href: '#' },
    { id: 'privacy', label: 'Privacidad', href: '#' },
    { id: 'contact', label: 'Contacto', href: '#' },
  ];

  // --- Nuevos componentes: curso y lecciones ---
  readonly codeSnippet = `export function xpParaNivel(nivel: number): number {
  return Math.round(100 * Math.pow(nivel, 1.5));
}`;

  readonly countdownPaused = signal(false);

  readonly starValue = signal(3);

  readonly mcValue = signal<string | null>(null);
  readonly mcOptions: GenericChoiceOption[] = [
    { id: 'a', label: 'O(n)' },
    { id: 'b', label: 'O(log n)' },
    { id: 'c', label: 'O(n²)' },
  ];

  readonly activeLessonId = signal<string | null>('l2');
  readonly outlineModules: GenericOutlineModule[] = [
    {
      id: 'm1',
      label: 'Unidad 1: Fundamentos',
      lessons: [
        { id: 'l1', label: 'Introducción a Angular', completed: true },
        { id: 'l2', label: 'Signals y reactividad', completed: false },
        { id: 'l3', label: 'Standalone components', locked: true },
      ],
    },
    {
      id: 'm2',
      label: 'Unidad 2: Librerías propias',
      lessons: [
        { id: 'l4', label: 'Diseño de API pública', locked: true },
        { id: 'l5', label: 'Publicar en npm', locked: true },
      ],
    },
  ];

  readonly rubricCriteria = signal<GenericRubricCriterion[]>([
    {
      id: 'req',
      label: 'Requisitos funcionales',
      levels: [
        { label: 'Incompleto', points: 0, description: 'Faltan casos clave' },
        { label: 'Parcial', points: 5, description: 'Cubre lo básico' },
        { label: 'Completo', points: 10, description: 'Cubre todos los casos' },
      ],
      selectedLevelIndex: 2,
    },
    {
      id: 'code',
      label: 'Calidad de código',
      levels: [
        { label: 'Bajo', points: 0 },
        { label: 'Medio', points: 5 },
        { label: 'Alto', points: 10 },
      ],
      selectedLevelIndex: 1,
    },
    {
      id: 'tests',
      label: 'Cobertura de tests',
      levels: [
        { label: 'Sin tests', points: 0 },
        { label: 'Tests parciales', points: 5 },
        { label: 'Tests completos', points: 10 },
      ],
      selectedLevelIndex: null,
    },
  ]);

  // --- Nuevos componentes: estados e insignias ---
  readonly activityStatuses: ActivityStatus[] = ['not-started', 'in-progress', 'completed', 'overdue'];
  readonly activityKinds: ActivityKind[] = ['reading', 'video', 'quiz', 'assignment', 'discussion'];
  readonly courseStatuses: CourseStatus[] = ['draft', 'published', 'archived'];
  readonly gradeScores = [95, 72, 45];
  readonly metaDifficulty: Difficulty = 'intermediate';

  // --- Nuevos componentes: gamificación ---
  readonly achievementBadges: GenericAchievementBadge[] = [
    { id: 'first-commit', label: 'Primer commit', iconName: 'medal', earned: true, description: 'Hiciste tu primer commit' },
    { id: 'streak-7', label: 'Racha de 7 días', iconName: 'fire', earned: true, description: '7 días seguidos activo' },
    { id: 'boss', label: 'Jefe final', iconName: 'trophy', earned: false, description: 'Aprobá el final integrador' },
    { id: 'full-marks', label: 'Nota perfecta', iconName: 'star', earned: false, description: 'Sacate un 10' },
  ];

  onTabChange(tab: GenericTabItem): void {
    this.note('Tab: ' + tab.label);
  }

  onLessonClick(event: { module: GenericOutlineModule; lesson: { id: string; label: string } }): void {
    this.activeLessonId.set(event.lesson.id);
    this.note('Lección: ' + event.lesson.label);
  }

  onRubricLevelSelect(event: { criterion: GenericRubricCriterion; levelIndex: number }): void {
    this.rubricCriteria.update((criteria) =>
      criteria.map((criterion) =>
        criterion.id === event.criterion.id
          ? { ...criterion, selectedLevelIndex: event.levelIndex }
          : criterion,
      ),
    );
    this.note('Rúbrica: ' + event.criterion.label + ' -> ' + event.criterion.levels[event.levelIndex].label);
  }

  note(message: string): void {
    this.log.set(message);
  }

  openCourse(course: (typeof this.courseCards)[number]): void {
    this.selectedCourse.set(course);
    this.courseOpen.set(true);
  }

  onMenu(item: GenericMenuItem): void {
    if (item.id === 'theme') this.theme.toggle();
    this.note('Menú: ' + item.label);
  }

  onImport(files: File[]): void {
    this.imported.set(files.map((file) => file.name));
    this.note('Importados: ' + files.map((file) => file.name).join(', '));
  }
}
