"use client";

import { Award, Globe, TrendingUp, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import statsData from "@/data/stats.json";

const icons = [TrendingUp, Users, Globe, Award];

export default function Stats() {
  const { t, language } = useLanguage();
  const stats = statsData[language];
  const s = t.sections.stats;

  return (
    <section id="about" className="bg-navy py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-1">{s.badge}</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">{s.heading}</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map(({ value, label, desc }, i) => {
            const Icon = icons[i];
            return (
              <div key={label} className="flex flex-col items-center text-center group">
                <div className="bg-gold/20 rounded-full p-3 mb-3 group-hover:bg-gold/30 transition-colors">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{value}</div>
                <div className="text-gold font-semibold text-sm uppercase tracking-wide mb-1">{label}</div>
                <div className="text-white/50 text-xs">{desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
