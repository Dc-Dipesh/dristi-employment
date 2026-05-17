import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Dristi International Employment for a free consultation. Visit our Kathmandu office or apply online.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Free Consultation"
        title="Get In"
        highlight="Touch"
        desc="Our team in Kathmandu is ready to guide you. Walk in, call, or fill out the form — we respond within 24 hours."
      />
      <Contact />
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
