import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  computed,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { GenericIcon } from '../icon/icon';
import { ThemeService } from '../theme/theme.service';
import { GenericNavItem } from './navbar.models';

@Component({
  selector: 'generic-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GenericIcon],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class GenericNavbar {
  private readonly host = inject(ElementRef);
  private readonly themeService = inject(ThemeService);

  readonly items = input<GenericNavItem[]>([]);
  readonly activeId = input<string | null>(null);
  readonly brandLabel = input('');

  readonly itemClick = output<GenericNavItem>();

  readonly mobileMenuOpen = signal(false);

  readonly isDarkMode = computed(() => this.themeService.theme() === 'dark');

  readonly themeIconLabel = computed(() =>
    this.isDarkMode() ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro',
  );

  readonly hamburgerLabel = computed(() =>
    this.mobileMenuOpen() ? 'Cerrar menú' : 'Abrir menú',
  );

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((value) => !value);
  }

  toggleTheme(): void {
    this.themeService.toggle();
  }

  select(item: GenericNavItem): void {
    this.itemClick.emit(item);
    this.mobileMenuOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (!this.host.nativeElement.contains(event.target as Node)) {
      this.mobileMenuOpen.set(false);
    }
  }
}
