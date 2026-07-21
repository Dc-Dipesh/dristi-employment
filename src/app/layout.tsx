import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Devanagari } from "next/font/google";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const notoDevanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
});

const SITE_URL = "https://www.dristiemployment.com.np";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dristi International Employment | Nepal's Trusted Foreign Employment Agency",
    template: "%s | Dristi International Employment",
  },
  description:
    "Nepal's trusted government-licensed foreign employment agency. Ethical, transparent recruitment to Gulf, Europe & East Asia. 5000+ workers placed across 15+ countries.",
  keywords: [
    "foreign employment Nepal",
    "Nepal recruitment agency",
    "manpower company Nepal",
    "gulf jobs Nepal",
    "Europe jobs Nepal",
    "Japan jobs Nepal",
    "Korea EPS program",
    "DoFE licensed agency",
    "overseas employment Kathmandu",
    "work abroad Nepal",
    "Dristi International Employment",
    "वैदेशिक रोजगार नेपाल",
    "नेपाल म्यानपावर कम्पनी",
    "विदेश जागिर",
  ],
  authors: [{ name: "Dristi International Employment Pvt. Ltd." }],
  creator: "Dristi International Employment Pvt. Ltd.",
  publisher: "Dristi International Employment Pvt. Ltd.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NP",
    alternateLocale: ["ne_NP"],
    url: SITE_URL,
    siteName: "Dristi International Employment",
    title: "Dristi International Employment | Nepal's Trusted Foreign Employment Agency",
    description:
      "Government-licensed foreign employment agency from Nepal. Ethical recruitment to UAE, Qatar, Saudi Arabia, Romania, Japan, South Korea & more. Apply now for a free consultation.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Dristi International Employment Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Dristi International Employment | Nepal's Trusted Foreign Employment Agency",
    description:
      "Government-licensed foreign employment agency from Nepal. Ethical recruitment to Gulf, Europe & East Asia. 5000+ workers placed.",
    images: ["/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Dristi International Employment Pvt. Ltd.",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
        width: 512,
        height: 512,
      },
      description:
        "Nepal's trusted government-licensed foreign employment recruitment agency. Ethical, transparent recruitment to Gulf, Europe & East Asia.",
      email: "info@dristiemployment.com.np",
      telephone: "+977-9763947625",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Tokha",
        addressLocality: "Kathmandu",
        addressRegion: "Bagmati Province",
        postalCode: "44600",
        addressCountry: "NP",
      },
      areaServed: [
        "Nepal", "United Arab Emirates", "Qatar", "Saudi Arabia", "Kuwait",
        "Romania", "Poland", "Croatia", "Portugal",
        "Japan", "Malaysia", "South Korea", "Hong Kong",
      ],
      knowsAbout: [
        "Foreign Employment Recruitment",
        "Overseas Worker Placement",
        "Work Visa Processing",
        "DoFE Licensed Recruitment",
        "Gulf Jobs",
        "Europe Jobs",
        "East Asia Employment",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "Dristi International Employment Pvt. Ltd.",
      image: `${SITE_URL}/logo.png`,
      url: SITE_URL,
      telephone: "+977-9763947625",
      email: "info@dristiemployment.com.np",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Tokha",
        addressLocality: "Kathmandu",
        addressRegion: "Bagmati Province",
        postalCode: "44600",
        addressCountry: "NP",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 27.735637,
        longitude: 85.315926,
      },
      hasMap: "https://maps.app.goo.gl/jx1uxTidX9sFe2TbA",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "10:00",
          closes: "14:00",
        },
      ],
      priceRange: "Free Consultation",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Dristi International Employment",
      description: "Nepal's trusted foreign employment recruitment agency",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: ["en", "ne"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ne"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${notoDevanagari.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
