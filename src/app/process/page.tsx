import type { Metadata } from "next";
import Process from "@/components/Process";

export const metadata: Metadata = {
  title: "Our Process",
  description: "Learn how Dristi International Employment guides you from documentation to deployment abroad in 4 clear steps.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        badge="How It Works"
        title="Our"
        highlight="4-Step Process"
        desc="We guide you from your first application all the way to landing at your destination — with full support at every stage."
      />
      <Process />
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
        <h2 className="text-2xl font-bold text-white mb-3">Start your journey today</h2>
        <p className="text-white/60 mb-6">Submit your details and our team will guide you through every step.</p>
        <a
          href="/contact"
          className="inline-block bg-gold hover:bg-gold-dark text-white font-semibold px-8 py-3.5 rounded-full transition-colors shadow-lg"
        >
          Begin Your Application
        </a>
      </div>
    </section>
  );
}
