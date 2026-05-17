"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Clock, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import contactData from "@/data/contact.json";

export default function Contact() {
  const { t, language } = useLanguage();
  const c = t.sections.contact;
  const f = t.form;
  const o = t.office;

  const [form, setForm] = useState({ name: "", phone: "", country: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const address = `${contactData.address.street}, ${contactData.address[`city_${language}` as "city_en" | "city_ne"]}\n${contactData.address[`province_${language}` as "province_en" | "province_ne"]}, Nepal ${contactData.address.postal}`;
  const hours = `${contactData.hours.weekdays[`label_${language}` as "label_en" | "label_ne"]}: ${contactData.hours.weekdays.open} – ${contactData.hours.weekdays.close}\n${contactData.hours.saturday[`label_${language}` as "label_en" | "label_ne"]}: ${contactData.hours.saturday.open} – ${contactData.hours.saturday.close}`;
  const countries = contactData.countries[language];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-navy/10 rounded-full px-4 py-1.5 mb-4">
            <MessageCircle className="w-4 h-4 text-navy" />
            <span className="text-navy text-sm font-semibold uppercase tracking-wide">{c.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">{c.heading}</h2>
          <p className="text-gray-600 max-w-xl mx-auto">{c.desc}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Contact Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Send className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{f.successTitle}</h3>
                <p className="text-gray-500 max-w-sm">{f.successDesc(form.name, form.phone)}</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", country: "", message: "" }); }}
                  className="mt-6 text-sm text-gold hover:text-gold-dark font-medium transition-colors"
                >
                  {f.reset}
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-navy mb-6">{f.heading}</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      {f.nameLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text" required placeholder={f.namePlaceholder} value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      {f.phoneLabel} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500 font-medium">🇳🇵 +977</span>
                      <input
                        type="tel" required placeholder={f.phonePlaceholder} value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl pl-20 pr-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      {f.countryLabel} <span className="text-red-500">*</span>
                    </label>
                    <select
                      required value={form.country}
                      onChange={(e) => setForm({ ...form, country: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition bg-white"
                    >
                      <option value="" disabled>{f.countryPlaceholder}</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">{f.messageLabel}</label>
                    <textarea
                      rows={4} placeholder={f.messagePlaceholder} value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gold hover:bg-gold-dark text-white font-semibold py-3.5 rounded-xl transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    {f.submit}
                  </button>
                  <p className="text-center text-xs text-gray-400">{f.disclaimer}</p>
                </form>
              </>
            )}
          </div>

          {/* Right: Office info + map */}
          <div className="lg:col-span-2 space-y-6 flex flex-col">
            <div className="bg-navy rounded-2xl p-6 text-white">
              <h3 className="text-lg font-bold mb-5">{o.heading}</h3>
              <div className="space-y-4">
                {[
                  { icon: MapPin,  label: o.addressLabel, content: address },
                  { icon: Phone,   label: o.phoneLabel,   content: contactData.phone,  href: `tel:${contactData.phone}` },
                  { icon: Mail,    label: o.emailLabel,   content: contactData.email,  href: `mailto:${contactData.email}` },
                  { icon: Clock,   label: o.hoursLabel,   content: hours },
                ].map(({ icon: Icon, label, content, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="bg-white/10 rounded-lg p-2 shrink-0">
                      <Icon className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <div className="font-medium text-sm mb-0.5">{label}</div>
                      {href ? (
                        <a href={href} className="text-white/70 text-sm hover:text-white transition-colors whitespace-pre-line">{content}</a>
                      ) : (
                        <div className="text-white/70 text-sm whitespace-pre-line">{content}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <a
                href={`https://wa.me/${contactData.whatsapp}`}
                target="_blank" rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold py-3 rounded-xl transition-colors w-full"
              >
                <MessageCircle className="w-4 h-4" />
                {o.whatsapp}
              </a>
            </div>

            <div className="flex-1 min-h-52 rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-100">
              <iframe
                src={contactData.address.mapEmbed}
                width="100%" height="100%"
                style={{ border: 0, minHeight: "220px" }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dristi International Employment Office Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
