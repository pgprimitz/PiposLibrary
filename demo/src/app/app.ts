import { Component, inject, signal } from '@angular/core';
import {
  GenericBadge,
  GenericButton,
  GenericCard,
  GenericChat,
  GenericChart,
  GenericCheckbox,
  GenericCourseModal,
  GenericDashboard,
  GenericDropdown,
  GenericFileModal,
  GenericIcon,
  GenericImportButton,
  GenericInput,
  GenericModal,
  GenericProgress,
  GenericSelect,
  GenericSpinner,
  GenericStat,
  GenericStepper,
  GenericSubtitle,
  GenericSurvey,
  GenericSwitch,
  GenericTable,
  GenericText,
  GenericTitle,
  ThemeService,
  type GenericChartPoint,
  type GenericChatMessage,
  type GenericCourseBadge,
  type GenericCourseTone,
  type GenericIconName,
  type GenericMenuItem,
  type GenericStep,
  type GenericTableColumn,
  type GenericTableRow,
  type SurveyQuestion,
  type SurveyValue,
} from 'generic-ui';

@Component({
  selector: 'demo-root',
  imports: [
    GenericBadge,
    GenericButton,
    GenericCard,
    GenericChat,
    GenericChart,
    GenericCheckbox,
    GenericCourseModal,
    GenericDashboard,
    GenericDropdown,
    GenericFileModal,
    GenericIcon,
    GenericImportButton,
    GenericInput,
    GenericModal,
    GenericProgress,
    GenericSelect,
    GenericSpinner,
    GenericStat,
    GenericStepper,
    GenericSubtitle,
    GenericSurvey,
    GenericSwitch,
    GenericTable,
    GenericText,
    GenericTitle,
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
