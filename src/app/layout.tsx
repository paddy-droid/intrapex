import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google"; // Using next/font instead of @fontsource for better optimization
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import SchemaMarkup from "@/components/seo/SchemaMarkup";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Intrapex - Gusslösungen & Stiegenziergitter",
  description: "Ihr Netzwerk für hochwertige Gusslösungen in Europa. Spezialisiert auf Stiegenziergitter, Grauguss und Sonderanfertigungen.",
  metadataBase: new URL('https://intrapex.at'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: "/logo-intrapex.png",
    apple: "/logo-intrapex.png",
  },
  openGraph: {
    title: "Intrapex - Gusslösungen & Stiegenziergitter",
    description: "Ihr Netzwerk für hochwertige Gusslösungen in Europa. Grau-, Sphäro- und Stahlguss.",
    url: 'https://intrapex.at',
    siteName: 'Intrapex',
    locale: 'de_AT',
    type: 'website',
    images: [
      {
        url: '/industrieguss-serien.webp',
        width: 1200,
        height: 630,
        alt: 'Intrapex Industrieguss',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Intrapex - Gusslösungen & Stiegenziergitter",
    description: "Ihr Netzwerk für hochwertige Gusslösungen in Europa.",
    images: ['/industrieguss-serien.webp'],
  },
  verification: {
    google: "wDOZHPqlaIzzeb_YJf7J-mdV8O3HxveErDTNCOjhabI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Intrapex GmbH",
    "url": "https://intrapex.at",
    "logo": "https://intrapex.at/logo-intrapex.png",
    "description": "Ihr Netzwerk für hochwertige Gusslösungen in Europa. Spezialisiert auf Stiegenziergitter, Grauguss und Sonderanfertigungen.",
    "border": "AT",
    "identifier": "FN 659577 t",
    "foundedDate": "1974",
    "founders": [
      {
        "@type": "Person",
        "name": "Ing. Heinrich Winkler"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+43 664 450 31 77",
      "contactType": "customer service",
      "areaServed": "AT",
      "availableLanguage": "German"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Wiener Landstraße 65",
      "addressLocality": "Michelndorf",
      "postalCode": "3452",
      "addressCountry": "AT"
    }
  };

  return (
    <html lang="de">
      <body
        className={`${playfair.variable} ${manrope.variable} font-sans antialiased min-h-screen flex flex-col bg-slate-50`}
      >
        <SchemaMarkup schema={organizationSchema} />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
