"use client";

import { FileText, Users, CreditCard, Plane, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import processData from "@/data/process.json";

const icons = [FileText, Users, CreditCard, Plane];

export default function Process() {
  const { t, language } = useLanguage();
  const p = t.sections.process;
  const { steps } = processData[language];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-navy/10 rounded-full px-4 py-1.5 mb-4">
            <CheckCircle2 className="w-4 h-4 text-navy" />
            <span className="text-navy text-sm font-semibold uppercase tracking-wide">{p.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">{p.heading}</h2>
          <p className="text-gray-600 max-w-xl mx-auto">{p.desc}</p>
        </div>

        {/* Steps */}
        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-0.5 bg-linear-to-r from-blue-200 via-amber-200 to-green-200 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map(({ title, desc, details, color, bg, border }, index) => {
              const Icon = icons[index];
              return (
                <div key={title} className="relative flex flex-col">
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-2">
                      <ArrowRight className="w-5 h-5 text-gray-300 rotate-90" />
                    </div>
                  )}
                  <div className={`bg-white rounded-2xl border ${border} p-6 shadow-sm hover:shadow-md transition-shadow relative z-10 flex-1`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`${bg} ${border} border rounded-xl p-2.5`}>
                        <Icon className={`w-5 h-5 ${color}`} />
                      </div>
                      <div className="bg-navy text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-2">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                    <ul className="space-y-1.5">
                      {details.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-xs text-gray-600">
                          <div className={`w-1.5 h-1.5 rounded-full ${color.replace("text", "bg")}`} />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-white font-semibold px-8 py-3.5 rounded-full transition-all shadow-lg hover:-translate-y-0.5"
          >
            {p.cta}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
