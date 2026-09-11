import React, { useState } from 'react';
import {
  ActivityKindBadge,
  ActivityStatusBadge,
  ArcadeAvatar,
  ArcadeBadge,
  ArcadeButton,
  ArcadeCard,
  ArcadeCheckbox,
  ArcadeDrawer,
  ArcadeEmptyState,
  ArcadeInput,
  ArcadeModal,
  ArcadeNavbar,
  ArcadePagination,
  ArcadeProgressBar,
  ArcadeRadioGroup,
  ArcadeSelect,
  ArcadeSpinner,
  ArcadeTable,
  ArcadeTabs,
  ArcadeTextarea,
  ArcadeTooltip,
  BadgeShowcase,
  Breadcrumb,
  Callout,
  CodeBlock,
  CoinCounter,
  CountdownTimer,
  CourseMetaBadges,
  CourseOutline,
  CourseStatusBadge,
  Footer,
  GradeBadge,
  LessonHeader,
  LessonStepper,
  LevelBadge,
  LivesIndicator,
  MathBlock,
  MultipleChoice,
  PixelBell,
  PixelChat,
  PixelChest,
  PixelCheck,
  PixelClock,
  PixelCoin,
  PixelFire,
  PixelFolder,
  PixelHeart,
  PixelLink,
  PixelLock,
  PixelMedal,
  PixelPdf,
  PixelQuiz,
  PixelScroll,
  PixelStar,
  PixelTrophy,
  PixelUser,
  PixelVideo,
  RubricPanel,
  StarRating,
  StreakFlame,
  XPBar,
  gem1Url,
  gem2Url,
  steveUrl,
  useTheme,
  type ActivityStatus,
  type ArcadeTableColumn,
} from '../src';

const VARIANTS = ['cyan', 'magenta', 'yellow', 'green'] as const;
const STATUSES: ActivityStatus[] = [
  'pending',
  'in_progress',
  'submitted',
  'graded',
  'completed',
  'overdue',
  'locked',
];

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="flex flex-col gap-4">
    <h2 className="font-retro text-sm text-brand-2 tracking-wider border-b-2 border-line pb-2">{title}</h2>
    {children}
  </section>
);

interface RankRow {
  position: number;
  name: string;
  level: number;
  xp: number;
  percentile: number;
}

const RANKING: RankRow[] = [
  { position: 1, name: 'Tamara Ruiz', level: 8, xp: 12480, percentile: 99 },
  { position: 2, name: 'Bruno Paz', level: 7, xp: 11050, percentile: 95 },
  { position: 3, name: 'Lucía Gómez', level: 7, xp: 10320, percentile: 91 },
  { position: 4, name: 'Marco Díaz', level: 5, xp: 6400, percentile: 52 },
  { position: 5, name: 'Sofía Luna', level: 3, xp: 2100, percentile: 8 },
];

export const App: React.FC = () => {
  const { theme } = useTheme();
  const [log, setLog] = useState('Interact with a component...');
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [blockingOpen, setBlockingOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tab, setTab] = useState('overview');
  const [page, setPage] = useState(3);
  const [answer, setAnswer] = useState<string[]>([]);
  const [revealed, setRevealed] = useState(false);
  const [rating, setRating] = useState(4);
  const [difficulty, setDifficulty] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [track, setTrack] = useState('backend');
  const [activeLesson, setActiveLesson] = useState('1-2');

  const rankColumns: ArcadeTableColumn<RankRow>[] = [
    { key: 'position', header: '#', render: (r) => r.position, align: 'center', width: '48px' },
    {
      key: 'name',
      header: 'Student',
      render: (r) => (
        <span className="flex items-center gap-2">
          <ArcadeAvatar name={r.name} size="xs" level={r.level} />
          {r.name}
        </span>
      ),
    },
    { key: 'xp', header: 'XP', render: (r) => r.xp.toLocaleString(), align: 'right', sortable: true },
    { key: 'percentile', header: 'Pct', render: (r) => `P${r.percentile}`, align: 'right' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-canvas text-ink">
      <ArcadeNavbar
        user={{ name: 'Tamara', role: 'Estudiante' }}
        unreadMessages={3}
        unreadNotifications={7}
        onNavigateMessages={() => setLog('Navbar: messages')}
        onNavigateNotifications={() => setLog('Navbar: notifications')}
        onEditProfile={() => setLog('Navbar: edit profile')}
        onLogout={() => setLog('Navbar: logout')}
      />

      <main className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-8 flex flex-col gap-12">
        <Breadcrumb
          onHome={() => setLog('Breadcrumb: home')}
          items={[
            { label: 'Playground', onClick: () => setLog('Breadcrumb: Playground') },
            { label: 'Components', onClick: () => setLog('Breadcrumb: Components') },
            { label: 'All' },
          ]}
        />

        <ArcadeCard variant="default">
          <p className="font-mono text-sm">
            Theme: <strong className="text-brand-2">{theme}</strong> — toggle it from the navbar.
            <br />
            Last event: <span className="text-gold">{log}</span>
          </p>
        </ArcadeCard>

        {/* ---------------- Gamification ---------------- */}
        <Section title="Gamification">
          <div className="flex flex-wrap items-center gap-6">
            <LivesIndicator lives={2} maxLives={3} />
            <CoinCounter coins={1450} />
            <StreakFlame days={12} />
            <StreakFlame days={0} />
            <LevelBadge level={7} name="Compilador" maxLevel={10} />
          </div>
          <XPBar currentXP={640} levelXP={1000} level={7} />
          <BadgeShowcase
            onSelect={(b) => setLog(`Badge: ${b.name}`)}
            badges={[
              { id: '1', name: 'First commit' },
              { id: '2', name: 'Bug hunter' },
              { id: '3', name: 'Streak x7' },
              { id: '4', name: 'Locked', earned: false },
            ]}
          />
        </Section>

        {/* ---------------- Status badges ---------------- */}
        <Section title="Status & grade badges">
          <div className="flex flex-wrap gap-2">
            {STATUSES.map((s) => (
              <ActivityStatusBadge key={s} status={s} />
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {(['required', 'optional', 'formative', 'summative', 'peer'] as const).map((k) => (
              <ActivityKindBadge key={k} kind={k} />
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {(['draft', 'active', 'archived'] as const).map((s) => (
              <CourseStatusBadge key={s} status={s} />
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <GradeBadge score={85} passingScore={60} weight={15} />
            <GradeBadge score={42} passingScore={60} />
            <GradeBadge score={7} maxScore={10} />
          </div>
          <CourseMetaBadges difficulty="intermediate" language="Español" durationMinutes={95} />
          <div className="flex flex-wrap gap-2">
            {(['cyan', 'magenta', 'yellow', 'green', 'red', 'neutral'] as const).map((tone) => (
              <ArcadeBadge key={tone} tone={tone} appearance="solid">
                {tone}
              </ArcadeBadge>
            ))}
          </div>
        </Section>

        {/* ---------------- Didactic content ---------------- */}
        <Section title="Didactic content">
          <LessonHeader
            section="Unidad 2 > Tema 1.4"
            title="Inyección de dependencias"
            estimatedMinutes={95}
            status="in_progress"
            actions={<ActivityKindBadge kind="required" size="sm" />}
          />
          <Callout variant="note" title="Definición">
            Un contenedor IoC resuelve las dependencias de una clase en lugar de que la clase las construya.
          </Callout>
          <Callout variant="warning" title="Prerrequisito">
            Necesitás entender interfaces y polimorfismo antes de seguir.
          </Callout>
          <Callout variant="tip">Empezá por el constructor: si recibe todo lo que usa, ya estás inyectando.</Callout>
          <Callout variant="citation" source="Martin, R. C. (2017). Clean Architecture. Prentice Hall.">
            The dependency rule: source code dependencies must point only inward.
          </Callout>
          <CodeBlock
            filename="container.ts"
            language="typescript"
            showLineNumbers
            onRun={() => setLog('CodeBlock: run')}
            code={`export class Container {\n  private registry = new Map<string, unknown>();\n\n  register<T>(token: string, value: T): void {\n    this.registry.set(token, value);\n  }\n}`}
          />
          <MathBlock expression="P(aprobar) = 1 - e^{-\lambda t}" />
        </Section>

        {/* ---------------- Academic controls ---------------- */}
        <Section title="Academic controls">
          <div className="flex flex-wrap items-center gap-4">
            <CountdownTimer seconds={3720} />
            <CountdownTimer seconds={45} warningThreshold={60} />
            <CountdownTimer seconds={20} warningThreshold={60} />
          </div>

          <LessonStepper
            currentIndex={2}
            onStepClick={(s) => setLog(`Stepper: ${s.label}`)}
            steps={[
              { id: '1', label: 'Teoría' },
              { id: '2', label: 'Ejemplo' },
              { id: '3', label: 'Práctica' },
              { id: '4', label: 'Evaluación', locked: true },
            ]}
          />

          <ArcadeProgressBar value={68} label="Course progress" showValue tone="green" />
          <ArcadeProgressBar value={13} max={20} label="Segmented" segmented tone="magenta" />

          <div className="flex items-center gap-6">
            <StarRating value={rating} onChange={setRating} size="lg" />
            <StarRating value={3} />
          </div>

          <MultipleChoice
            question="¿Cuál de estas NO es una responsabilidad del contenedor IoC?"
            value={answer}
            onChange={setAnswer}
            revealed={revealed}
            correctIds={['b']}
            options={[
              { id: 'a', label: 'Resolver dependencias', feedback: 'Sí lo es.' },
              { id: 'b', label: 'Renderizar la interfaz', feedback: 'Correcto: eso es del framework de UI.' },
              { id: 'c', label: 'Gestionar el ciclo de vida', feedback: 'Sí lo es.' },
            ]}
          />
          <ArcadeButton size="sm" onClick={() => setRevealed((r) => !r)}>
            {revealed ? 'Hide answer' : 'Reveal answer'}
          </ArcadeButton>
        </Section>

        {/* ---------------- Course outline + rubric ---------------- */}
        <Section title="Course outline & rubric">
          <div className="grid gap-6 lg:grid-cols-2">
            <CourseOutline
              activeId={activeLesson}
              onSelect={(n) => setActiveLesson(n.id)}
              iconFor={(n) => (n.kind === 'quiz' ? <PixelQuiz className="w-4 h-4" /> : null)}
              nodes={[
                {
                  id: '1',
                  label: 'Unidad 1 — Fundamentos',
                  children: [
                    { id: '1-1', label: 'Qué es una arquitectura', status: 'completed' },
                    { id: '1-2', label: 'Capas y responsabilidades', status: 'in_progress' },
                    { id: '1-3', label: 'Quiz de la unidad', kind: 'quiz', status: 'pending' },
                  ],
                },
                {
                  id: '2',
                  label: 'Unidad 2 — Patrones',
                  children: [
                    { id: '2-1', label: 'Inyección de dependencias', status: 'locked' },
                    { id: '2-2', label: 'Event bus', status: 'locked' },
                  ],
                },
              ]}
            />

            <ArcadeCard variant="magenta">
              <RubricPanel
                passingScore={60}
                comment="Buena resolución general. Falta manejo de errores en el repositorio."
                criteria={[
                  { id: '1', label: 'Correctitud', weight: 30, score: 27, maxScore: 30 },
                  { id: '2', label: 'Diseño', weight: 25, score: 20, maxScore: 25 },
                  { id: '3', label: 'Testing', weight: 20, score: 8, maxScore: 20, comment: 'Faltan casos borde.' },
                  { id: '4', label: 'Legibilidad', weight: 15, score: 14, maxScore: 15 },
                  { id: '5', label: 'Documentación', weight: 10, score: 9, maxScore: 10 },
                ]}
              />
            </ArcadeCard>
          </div>
        </Section>

        {/* ---------------- Table ---------------- */}
        <Section title="Table (ranking with P90 / P10 zones)">
          <ArcadeTable
            columns={rankColumns}
            rows={RANKING}
            rowKey={(r) => String(r.position)}
            onRowClick={(r) => setLog(`Row: ${r.name}`)}
            onSort={(k) => setLog(`Sort: ${k}`)}
            sortKey="xp"
            sortDirection="desc"
            rowClassName={(r) =>
              r.percentile >= 90 ? 'bg-success/10' : r.percentile <= 10 ? 'bg-danger/10' : ''
            }
          />
          <ArcadePagination page={page} pageCount={12} onPageChange={setPage} />
        </Section>

        {/* ---------------- Overlays ---------------- */}
        <Section title="Modals & drawers">
          <div className="flex flex-wrap gap-4">
            <ArcadeButton onClick={() => setModalOpen(true)}>Open modal</ArcadeButton>
            <ArcadeButton variant="yellow" onClick={() => setBlockingOpen(true)}>
              Blocking modal
            </ArcadeButton>
            <ArcadeButton variant="cyan" onClick={() => setDrawerOpen(true)}>
              Open drawer
            </ArcadeButton>
          </div>

          <ArcadeModal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Reglas del intento"
            subtitle="Leé antes de comenzar"
            footer={
              <>
                <ArcadeButton size="sm" variant="cyan" onClick={() => setModalOpen(false)}>
                  Cancelar
                </ArcadeButton>
                <ArcadeButton size="sm" onClick={() => setModalOpen(false)}>
                  Comenzar
                </ArcadeButton>
              </>
            }
          >
            <ul className="flex flex-col gap-2">
              <li>Tiempo límite: 60 minutos.</li>
              <li>Intentos disponibles: 2.</li>
              <li>Penalización por entrega tardía: 30% dentro de 48h.</li>
            </ul>
          </ArcadeModal>

          <ArcadeModal
            open={blockingOpen}
            onClose={() => setBlockingOpen(false)}
            title="Tiempo agotado"
            tone="red"
            dismissable={false}
            size="sm"
            footer={
              <ArcadeButton size="sm" variant="magenta" onClick={() => setBlockingOpen(false)}>
                Entendido
              </ArcadeButton>
            }
          >
            Se acabó el tiempo del intento. Tu progreso fue enviado automáticamente.
          </ArcadeModal>

          <ArcadeDrawer
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            title="Entrega de tarea"
            subtitle="TP2 — Contenedor IoC"
            footer={
              <ArcadeButton size="sm" onClick={() => setDrawerOpen(false)}>
                Entregar
              </ArcadeButton>
            }
          >
            <div className="flex flex-col gap-4">
              <ArcadeInput id="repo" label="REPO URL" placeholder="https://github.com/..." />
              <ArcadeTextarea id="notes" label="COMENTARIOS" showCount maxLength={280} placeholder="Opcional" />
            </div>
          </ArcadeDrawer>
        </Section>

        {/* ---------------- Forms ---------------- */}
        <Section title="Form primitives">
          <div className="grid gap-6 sm:grid-cols-2 max-w-3xl">
            <ArcadeInput
              id="pg-username"
              label="USERNAME"
              placeholder="player_one"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <ArcadeInput id="pg-password" label="PASSWORD" type="password" error="Invalid password" />
            <ArcadeSelect
              id="pg-difficulty"
              label="DIFFICULTY"
              placeholder="Choose one"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              options={[
                { value: 'beginner', label: 'Beginner' },
                { value: 'intermediate', label: 'Intermediate' },
                { value: 'advanced', label: 'Advanced' },
              ]}
            />
            <ArcadeTextarea
              id="pg-bio"
              label="BIO"
              showCount
              maxLength={140}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
            <ArcadeCheckbox
              id="pg-terms"
              label="Acepto los términos"
              description="Requerido para inscribirte"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <ArcadeRadioGroup
              name="track"
              label="TRACK"
              value={track}
              onChange={setTrack}
              options={[
                { value: 'backend', label: 'Backend' },
                { value: 'frontend', label: 'Frontend' },
                { value: 'fullstack', label: 'Fullstack', disabled: true },
              ]}
            />
          </div>
        </Section>

        {/* ---------------- Layout & feedback ---------------- */}
        <Section title="Tabs, tooltip & feedback states">
          <ArcadeTabs
            activeId={tab}
            onChange={setTab}
            tabs={[
              { id: 'overview', label: 'Resumen' },
              { id: 'grades', label: 'Notas', badge: 3 },
              { id: 'forum', label: 'Foro', icon: <PixelChat className="w-4 h-4" /> },
              { id: 'admin', label: 'Admin', disabled: true },
            ]}
          />
          <ArcadeCard variant="cyan">
            <p className="font-mono text-sm">Active tab: {tab}</p>
          </ArcadeCard>

          <div className="flex flex-wrap items-center gap-8">
            <ArcadeTooltip content="Vidas restantes">
              <button type="button" className="p-2 border-2 border-line rounded-sm cursor-pointer">
                <PixelHeart className="w-5 h-5" />
              </button>
            </ArcadeTooltip>
            <ArcadeSpinner />
            <ArcadeAvatar name="Tamara Ruiz" size="lg" level={7} />
            <ArcadeAvatar src={steveUrl} name="Steve" size="lg" ring="gold" />
          </div>

          <ArcadeCard variant="default">
            <ArcadeEmptyState
              icon={<PixelChest className="w-12 h-12" />}
              title="Sin entregas todavía"
              description="Cuando entregues tu primer desafío, va a aparecer acá."
              action={<ArcadeButton size="sm">Ver desafíos</ArcadeButton>}
            />
          </ArcadeCard>
        </Section>

        {/* ---------------- Buttons & cards ---------------- */}
        <Section title="Buttons & cards">
          <div className="flex flex-wrap items-center gap-4">
            {VARIANTS.map((variant) => (
              <ArcadeButton key={variant} variant={variant} onClick={() => setLog(`Button: ${variant}`)}>
                {variant}
              </ArcadeButton>
            ))}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...VARIANTS, 'default' as const].map((variant) => (
              <ArcadeCard key={variant} variant={variant} glow>
                <p className="font-retro text-[10px] mb-2">{variant}</p>
                <p className="font-mono text-sm text-ink-soft">Card variant "{variant}".</p>
              </ArcadeCard>
            ))}
          </div>
        </Section>

        {/* ---------------- Icons & assets ---------------- */}
        <Section title="Pixel icons">
          <div className="flex flex-wrap gap-5">
            {(
              [
                ['Trophy', PixelTrophy],
                ['Chest', PixelChest],
                ['Chat', PixelChat],
                ['Bell', PixelBell],
                ['User', PixelUser],
                ['Scroll', PixelScroll],
                ['Heart', PixelHeart],
                ['Coin', PixelCoin],
                ['Fire', PixelFire],
                ['Medal', PixelMedal],
                ['Lock', PixelLock],
                ['Clock', PixelClock],
                ['Check', PixelCheck],
                ['Star', PixelStar],
                ['Video', PixelVideo],
                ['Link', PixelLink],
                ['Folder', PixelFolder],
                ['Pdf', PixelPdf],
                ['Quiz', PixelQuiz],
              ] as const
            ).map(([name, Icon]) => (
              <div key={name} className="flex flex-col items-center gap-2 w-16">
                <Icon className="w-10 h-10" />
                <span className="font-mono text-[10px] text-ink-soft">{name}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-end gap-6">
            {([['gem1', gem1Url], ['gem2', gem2Url], ['steve', steveUrl]] as const).map(([name, url]) => (
              <img
                key={name}
                src={url}
                alt={name}
                className="h-16 w-auto"
                style={{ imageRendering: 'pixelated' }}
              />
            ))}
          </div>
        </Section>
      </main>

      <Footer websiteUrl="https://example.com" contactEmail="hola@example.com" />
    </div>
  );
};
