"use client";

import { Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import teamData from "@/data/team.json";

export default function Team() {
  const { t } = useLanguage();
  const tm = t.sections.team;

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-navy/10 rounded-full px-4 py-1.5 mb-4">
            <Users className="w-4 h-4 text-navy" />
            <span className="text-navy text-sm font-semibold uppercase tracking-wide">{tm.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">{tm.heading}</h2>
          <p className="text-gray-600 max-w-xl mx-auto">{tm.desc}</p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map(({ id, name, role, bio, initials, color }) => (
            <div
              key={id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
            >
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`${color} w-14 h-14 rounded-full flex items-center justify-center shrink-0`}>
                  <span className="text-white font-bold text-lg">{initials}</span>
                </div>
                <div>
                  <h3 className="font-bold text-navy text-base leading-tight">{name}</h3>
                  <p className="text-gold text-sm font-medium mt-0.5">{role}</p>
                </div>
              </div>

              {/* Bio */}
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{bio}</p>

              {/* LinkedIn placeholder */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-navy transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
