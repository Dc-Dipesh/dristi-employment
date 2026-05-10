"use client";

import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const { t } = useLanguage();
  const ft = t.footer;

  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="bg-gold rounded-lg p-1.5">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-white text-lg leading-tight">
                DRISTI
                <span className="block text-[10px] font-normal text-white/50 -mt-1 tracking-wider uppercase">
                  International Employment
                </span>
              </span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-5">{ft.tagline}</p>
            <div className="flex gap-3">
              {socialLinks.map(({ label, href, svg }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="bg-white/10 hover:bg-gold w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">
              {ft.quickLinks}
            </h4>
            <ul className="space-y-2.5">
              {ft.links.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">
              {ft.destinationsLabel}
            </h4>
            <ul className="space-y-2.5">
              {ft.destinations.map((d) => (
                <li key={d}>
                  <a href="#destinations" className="text-white/60 hover:text-white text-sm transition-colors">
                    {d}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* License */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">
              {ft.complianceLabel}
            </h4>
            <div className="space-y-3">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="text-xs text-white/50 mb-1 uppercase tracking-wide">{ft.dofeLabel}</div>
                <div className="text-white font-mono font-bold text-sm">XXXXXXX/XXXX/XXX</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="text-xs text-white/50 mb-1 uppercase tracking-wide">{ft.isoLabel}</div>
                <div className="text-white font-semibold text-sm">ISO 9001:2015</div>
              </div>
              <div className="text-white/50 text-xs leading-relaxed">
                {ft.registered}{" "}
                <span className="text-white/70">{ft.act}</span>{" "}
                {ft.actSuffix}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs text-center sm:text-left">
            {ft.copyright(new Date().getFullYear())}
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/40 hover:text-white/70 text-xs transition-colors">{ft.privacy}</a>
            <a href="#" className="text-white/40 hover:text-white/70 text-xs transition-colors">{ft.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
