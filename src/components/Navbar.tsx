"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Check } from "lucide-react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/translations";

const LANG_OPTIONS: { value: Language; flag: string; label: string }[] = [
  { value: "ne", flag: "🇳🇵", label: "नेपाली" },
  { value: "en", flag: "🇬🇧", label: "English" },
];

function LanguageDropdown() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LANG_OPTIONS.find((o) => o.value === language)!;

  useEffect(() => {
    function onOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onOutside);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onOutside);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-sm font-medium text-gray-700 transition-colors shadow-sm"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="hidden sm:inline">{current.label}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50 overflow-hidden">
          {LANG_OPTIONS.map(({ value, flag, label }) => (
            <button
              key={value}
              role="option"
              aria-selected={language === value}
              onClick={() => {
                setLanguage(value);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                language === value
                  ? "bg-navy/5 text-navy font-semibold"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <span className="text-base">{flag}</span>
              <span className="flex-1 text-left">{label}</span>
              {language === value && <Check className="w-3.5 h-3.5 text-navy shrink-0" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home,         href: "/" },
    { label: t.nav.destinations, href: "/destinations" },
    { label: t.nav.process,      href: "/process" },
    { label: t.nav.team,         href: "/team" },
    { label: t.nav.contact,      href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 shrink-0">
            <img
              src="/logo.png"
              alt="Dristi International Employment"
              className="h-11 w-auto object-contain"
            />
            <span className="font-bold text-navy text-lg leading-tight">
              DRISTI
              <span className="block text-[10px] font-normal text-gray-500 -mt-1 tracking-wider uppercase">
                International Employment
              </span>
            </span>
          </a>

          {/* Desktop: links + toggle + CTA */}
          <div className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative ${
                  isActive(link.href)
                    ? "text-navy after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:bg-gold after:rounded-full"
                    : "text-gray-600 hover:text-navy"
                }`}
              >
                {link.label}
              </a>
            ))}

            <LanguageDropdown />

            <a
              href="/contact"
              className="bg-gold hover:bg-gold-dark text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors shadow-sm"
            >
              {t.nav.applyNow}
            </a>
          </div>

          {/* Mobile: toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageDropdown />
            <button
              className="p-2 rounded-md text-gray-600 hover:text-navy hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100 py-3 pb-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(link.href)
                    ? "text-navy bg-blue-50 border-l-2 border-gold"
                    : "text-gray-700 hover:text-navy hover:bg-blue-50"
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="px-3 pt-2">
              <a
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-gold hover:bg-gold-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
              >
                {t.nav.applyNow}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
