import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  computed,
  effect,
  inject,
  input,
  model,
  output,
  signal,
} from '@angular/core';
import { GenericIcon } from '../icon/icon';

@Component({
  selector: 'generic-countdown-timer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GenericIcon],
  templateUrl: './countdown-timer.html',
  styleUrl: './countdown-timer.css',
})
export class GenericCountdownTimer {
  readonly durationSeconds = input.required<number>();
  readonly autoStart = input(true);
  readonly tick = output<number>();
  readonly expired = output<void>();
  readonly paused = model(false);

  protected readonly remaining = signal(0);

  private readonly expiredEmitted = signal(false);

  readonly display = computed(() => {
    const total = Math.max(0, this.remaining());
    const minutes = Math.floor(total / 60);
    const seconds = total % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  });

  readonly critical = computed(() => {
    const duration = this.durationSeconds();
    if (duration <= 0) return false;
    return this.remaining() / duration < 0.1;
  });

  private intervalId: ReturnType<typeof setInterval> | undefined;
  private started = false;

  constructor() {
    // Required inputs aren't readable directly in the constructor body, so
    // the one-time setup (reading durationSeconds()/autoStart()) runs inside
    // an effect guarded to fire only once. Cleanup is handled explicitly via
    // DestroyRef, the modern Angular way to avoid leaking the interval.
    effect(() => {
      if (this.started) return;
      this.started = true;
      this.remaining.set(this.durationSeconds());
      if (this.autoStart()) {
        this.start();
      }
    });

    inject(DestroyRef).onDestroy(() => {
      if (this.intervalId !== undefined) {
        clearInterval(this.intervalId);
      }
    });
  }

  togglePause(): void {
    this.paused.update((value) => !value);
  }

  private start(): void {
    this.intervalId = setInterval(() => {
      if (this.paused()) return;

      const next = this.remaining() - 1;
      if (next <= 0) {
        this.remaining.set(0);
        this.tick.emit(0);
        if (!this.expiredEmitted()) {
          this.expiredEmitted.set(true);
          this.expired.emit();
        }
        if (this.intervalId !== undefined) {
          clearInterval(this.intervalId);
        }
        return;
      }

      this.remaining.set(next);
      this.tick.emit(next);
    }, 1000);
  }
}
