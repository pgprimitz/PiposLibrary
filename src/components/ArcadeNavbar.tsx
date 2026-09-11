import React, { useState, useRef, useEffect } from 'react';
import { User, LogOut, Settings, ChevronDown, Sun, Moon } from 'lucide-react';
import { PixelChat, PixelBell } from './PixelIcons';
import { useTheme } from '../theme/ThemeContext';

export interface ArcadeNavbarProps {
  brandName?: string;
  brandSubtitle?: string;
  user?: {
    name: string;
    role: string;
    avatar?: string;
  };
  unreadMessages?: number;
  unreadNotifications?: number;
  onNavigateMessages?: () => void;
  onNavigateNotifications?: () => void;
  onEditProfile?: () => void;
  onLogout?: () => void;
  /** Muestra u oculta el botón de alternar tema claro/oscuro. */
  showThemeToggle?: boolean;
  /** Textos de la interfaz. Todos tienen default en español y son sobrescribibles. */
  labels?: {
    messages?: string;
    notifications?: string;
    toDarkTheme?: string;
    toLightTheme?: string;
    editProfile?: string;
    logout?: string;
  };
}

const defaultLabels = {
  messages: 'Mensajería y Canales',
  notifications: 'Centro de Notificaciones',
  toDarkTheme: 'Cambiar a tema oscuro',
  toLightTheme: 'Cambiar a tema claro',
  editProfile: 'Editar perfil',
  logout: 'Cerrar sesión',
};

export const ArcadeNavbar: React.FC<ArcadeNavbarProps> = ({
  brandName = 'TUP ARCADE',
  brandSubtitle = 'PLATAFORMA GAMIFICADA',
  user = { name: 'Tamara', role: 'Estudiante' },
  unreadMessages = 0,
  unreadNotifications = 0,
  onNavigateMessages,
  onNavigateNotifications,
  onEditProfile,
  onLogout,
  showThemeToggle = true,
  labels,
}) => {
  const text = { ...defaultLabels, ...labels };
  const [profileOpen, setProfileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className="w-full border-b-2 backdrop-blur-md px-4 sm:px-8 py-3 sticky top-0 z-40 transition-colors"
      style={{ backgroundColor: 'color-mix(in srgb, var(--bg-surface) 90%, transparent)', borderColor: 'var(--border-subtle)' }}
    >
      <div className="w-full flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <i className="nes-icon is-small coin animate-pulse" />
          <div className="flex flex-col text-left">
            <span className="font-['Press_Start_2P',monospace] text-xs sm:text-sm text-brand-2 tracking-wider">
              {brandName}
            </span>
            <span className="text-[10px] text-ink-soft font-mono">{brandSubtitle}</span>
          </div>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Mensajes */}
          <button
            type="button"
            onClick={onNavigateMessages}
            title={text.messages}
            className="relative p-2 rounded border border-surface-2 bg-surface/80 hover:border-brand-2 text-brand-2 transition-all cursor-pointer flex items-center justify-center"
          >
            <PixelChat className="w-5 h-5" />
            {unreadMessages > 0 && (
              <span className="absolute -top-1 -right-1 font-['Press_Start_2P',monospace] text-[8px] bg-brand text-white rounded-full px-1.5 py-0.5 animate-bounce">
                {unreadMessages}
              </span>
            )}
          </button>

          {/* Notificaciones */}
          <button
            type="button"
            onClick={onNavigateNotifications}
            title={text.notifications}
            className="relative p-2 rounded border border-surface-2 bg-surface/80 hover:border-gold text-gold transition-all cursor-pointer flex items-center justify-center"
          >
            <PixelBell className="w-5 h-5" />
            {unreadNotifications > 0 && (
              <span className="absolute -top-1 -right-1 font-['Press_Start_2P',monospace] text-[8px] bg-gold text-slate-950 font-bold rounded-full px-1.5 py-0.5">
                {unreadNotifications}
              </span>
            )}
          </button>

          {/* Toggle de tema */}
          {showThemeToggle && (
            <button
              type="button"
              onClick={toggleTheme}
              title={theme === 'dark' ? text.toLightTheme : text.toDarkTheme}
              className="p-2 rounded border border-surface-2 bg-surface/80 hover:border-gold text-gold transition-all cursor-pointer flex items-center justify-center"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}

          {/* Perfil Dropdown */}
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2 py-1.5 px-2.5 rounded border border-surface-2 bg-surface/80 hover:border-brand-2 transition-all cursor-pointer select-none"
            >
              <div className="w-7 h-7 rounded bg-brand-2/15 border border-brand-2 flex items-center justify-center text-brand-2">
                <User className="w-4 h-4" />
              </div>
              <div className="hidden sm:flex flex-col text-left">
                <span className="text-xs font-['Press_Start_2P',monospace] text-brand-2">
                  {user.name}
                </span>
                <span className="text-[10px] text-ink-soft font-mono">{user.role}</span>
              </div>
              <ChevronDown className="w-4 h-4 text-ink-soft" />
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-surface border-2 border-brand-2 shadow-[0_0_15px_rgba(6,182,212,0.3)] rounded-md py-2 z-50 font-mono text-sm">
                <div className="px-3 py-2 border-b border-surface-2 sm:hidden">
                  <p className="font-['Press_Start_2P',monospace] text-[10px] text-brand-2">{user.name}</p>
                  <p className="text-xs text-ink-soft">{user.role}</p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setProfileOpen(false);
                    onEditProfile?.();
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-2 text-left text-ink-soft hover:bg-brand-2/60 hover:text-brand-2 transition-colors cursor-pointer"
                >
                  <Settings className="w-4 h-4 text-brand-2" />
                  <span>{text.editProfile}</span>
                </button>

                <div className="my-1 border-t border-surface-2" />

                <button
                  type="button"
                  onClick={() => {
                    setProfileOpen(false);
                    onLogout?.();
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-2 text-left text-danger hover:bg-danger/40 hover:text-danger transition-colors cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span>{text.logout}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
