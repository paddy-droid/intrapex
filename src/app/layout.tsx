import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google"; // Using next/font instead of @fontsource for better optimization
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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
  icons: {
    icon: "/logo-intrapex.png",
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
  return (
    <html lang="de">
      <body
        className={`${playfair.variable} ${manrope.variable} font-sans antialiased min-h-screen flex flex-col bg-slate-50`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
