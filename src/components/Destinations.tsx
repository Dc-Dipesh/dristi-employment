"use client";

import { Briefcase, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Destinations() {
  const { t } = useLanguage();
  const d = t.destinations;

  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-navy/10 rounded-full px-4 py-1.5 mb-4">
            <MapPin className="w-4 h-4 text-navy" />
            <span className="text-navy text-sm font-semibold uppercase tracking-wide">{d.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">{d.heading}</h2>
          <p className="text-gray-600 max-w-xl mx-auto">{d.desc}</p>
        </div>

        {/* Regions grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {d.regions.map(({ region, emoji, color, countries }) => (
            <div
              key={region}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Region header */}
              <div className={`bg-linear-to-r ${color} px-6 py-4`}>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{emoji}</span>
                  <h3 className="text-xl font-bold text-white">{region}</h3>
                </div>
              </div>

              {/* Countries */}
              <div className="divide-y divide-gray-50">
                {countries.map(({ name, flag, jobs }) => (
                  <div key={name} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl mt-0.5">{flag}</span>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-navy text-sm">{name}</div>
                        <div className="flex flex-wrap gap-1 mt-1.5">
                          {jobs.map((job) => (
                            <span
                              key={job}
                              className="inline-flex items-center gap-1 bg-navy/8 text-navy text-xs px-2 py-0.5 rounded-full"
                            >
                              <Briefcase className="w-2.5 h-2.5" />
                              {job}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="px-6 py-4 bg-gray-50">
                <a
                  href="#contact"
                  className="block text-center text-sm font-semibold text-gold hover:text-gold-dark transition-colors"
                >
                  {d.applyFor(region)}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
