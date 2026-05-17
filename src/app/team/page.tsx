import type { Metadata } from "next";
import Team from "@/components/Team";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the experienced professionals at Dristi International Employment who help Nepali workers find safe, well-paying jobs abroad.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        badge="The People Behind Dristi"
        title="Meet Our"
        highlight="Expert Team"
        desc="A dedicated group of recruitment specialists, visa experts, and candidate advisors committed to your success abroad."
      />
      <Team />
      <CtaBanner />
    </>
  );
}

function PageHero({ badge, title, highlight, desc }: { badge: string; title: string; highlight: string; desc: string }) {
  return (
    <section className="bg-linear-to-br from-navy-dark via-navy to-navy-light py-20 pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
          <span className="text-white/80 text-sm font-medium">{badge}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
          {title} <span className="text-gold">{highlight}</span>
        </h1>
        <p className="text-white/70 max-w-xl mx-auto text-lg">{desc}</p>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="bg-navy py-14">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-white mb-3">Our team is ready to help you</h2>
        <p className="text-white/60 mb-6">Reach out for a free consultation — no fees, no commitment.</p>
        <a
          href="/contact"
          className="inline-block bg-gold hover:bg-gold-dark text-white font-semibold px-8 py-3.5 rounded-full transition-colors shadow-lg"
        >
          Contact Us Today
        </a>
      </div>
    </section>
  );
}
