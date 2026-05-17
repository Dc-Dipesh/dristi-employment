"use client";

import { ArrowRight, CheckCircle, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <Globe className="w-4 h-4 text-gold" />
            <span className="text-white/90 text-sm font-medium">{h.badge}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            {h.headline1} <span className="text-gold">{h.headline2}</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
            {h.sub1}{" "}
            <span className="text-gold-light font-medium">
              {h.subHighlight}
            </span>{" "}
            {h.sub2}
          </p>

          {/* Trust points */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {h.trust.map((point) => (
              <div key={point} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                <span className="text-white/80 text-sm">{point}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-8 py-3.5 rounded-full transition-all shadow-lg shadow-gold/30 hover:shadow-gold/50 hover:-translate-y-0.5"
            >
              {h.cta1}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#destinations"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:-translate-y-0.5"
            >
              {h.cta2}
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
          <div className="w-px h-8 bg-white/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
        </div>
      </div>
    </section>
  );
}
