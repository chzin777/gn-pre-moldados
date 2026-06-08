import type { Metadata, Viewport } from "next";
import { Manrope, Sora } from "next/font/google";
import { site, keywords, products } from "@/lib/site";
import "./globals.css";

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const display = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Lajes, Blocos e Pré-moldados em ${site.address.locality}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  category: "construção civil",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${site.name} — ${site.slogan}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.slogan}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

// Dados estruturados (rich results no Google) — LocalBusiness
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: site.name,
  slogan: site.slogan,
  description: site.description,
  url: site.url,
  telephone: `+${site.whatsapp.number}`,
  image: `${site.url}/opengraph-image`,
  areaServed: `${site.address.locality} e região metropolitana`,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  makesOffer: products.map((p) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Product", name: p.name, description: p.description },
  })),
};

export const viewport: Viewport = {
  themeColor: "#061a37",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${sans.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-navy">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
