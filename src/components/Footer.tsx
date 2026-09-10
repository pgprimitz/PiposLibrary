import React from 'react';
import { Globe, Mail, MessageCircle } from 'lucide-react';

export interface FooterLink {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface FooterProps {
  brandName?: string;
  /** Texto institucional. Podés incluir "{year}" y se reemplaza por el año actual. */
  institutionalText?: string;
  legalLinks?: FooterLink[];
  websiteUrl?: string;
  socialUrl?: string;
  contactEmail?: string;
}

export const Footer: React.FC<FooterProps> = ({
  brandName = 'TUP ARCADE',
  institutionalText = 'Tecnicatura Universitaria en Programación · Cátedra Programación IV · {year} Edition',
  legalLinks = [
    { label: 'Términos y Condiciones', onClick: () => alert('Términos y Condiciones (placeholder).') },
    { label: 'Privacidad', onClick: () => alert('Política de Privacidad (placeholder).') },
  ],
  websiteUrl,
  socialUrl,
  contactEmail,
}) => {
  const year = new Date().getFullYear();
  const institutional = institutionalText.replace('{year}', String(year));

  return (
    <footer
      className="w-full mt-auto border-t"
      style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
        style={{ color: 'var(--text-muted)' }}
      >
        {/* Info institucional */}
        <div className="text-center sm:text-left">
          <p className="font-['Press_Start_2P',monospace] text-[10px]" style={{ color: 'var(--accent-primary)' }}>
            {brandName}
          </p>
          <p className="mt-1">{institutional}</p>
        </div>

        {/* Legales */}
        {legalLinks.length > 0 && (
          <div className="flex items-center gap-4">
            {legalLinks.map((link, i) => (
              <React.Fragment key={link.label}>
                {i > 0 && <span className="opacity-40">|</span>}
                {link.href ? (
                  <a
                    href={link.href}
                    className="hover:underline cursor-pointer transition-colors"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {link.label}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={link.onClick}
                    className="hover:underline cursor-pointer transition-colors"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {link.label}
                  </button>
                )}
              </React.Fragment>
            ))}
          </div>
        )}

        {/* Redes / contacto */}
        <div className="flex items-center gap-3">
          {websiteUrl && (
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Sitio web"
              className="p-1.5 rounded border transition-colors"
              style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}
            >
              <Globe className="w-3.5 h-3.5" />
            </a>
          )}
          {socialUrl && (
            <a
              href={socialUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Redes sociales"
              className="p-1.5 rounded border transition-colors"
              style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}
            >
              <MessageCircle className="w-3.5 h-3.5" />
            </a>
          )}
          {contactEmail && (
            <a
              href={`mailto:${contactEmail}`}
              title="Escribinos"
              className="p-1.5 rounded border transition-colors"
              style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};
