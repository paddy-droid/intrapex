import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Settings,
  Globe,
  ShieldCheck,
  Star,
  Phone,
  Send,
  Users,
  Truck,
  CheckCircle2,
  Quote,
  HelpCircle,
  ChevronDown,
  Landmark,
  Factory,
} from "lucide-react";
import VideoTeaser from "@/components/ui/VideoTeaser";
import ExplainerVideo from "@/components/ui/ExplainerVideo";
import PortfolioFlipCard from "@/components/ui/PortfolioFlipCard";
import { ProblemSolutionSection } from "@/components/sections/ProblemSolutionSection";
import { NicheServicesSection } from "@/components/sections/NicheServicesSection";
import { IndustrialDeepDiveSection } from "@/components/sections/IndustrialDeepDiveSection";
import { TechnicalDataSection } from "@/components/sections/TechnicalDataSection";
import { AluminumCastSection } from "@/components/sections/AluminumCastSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intrapex: Gießerei-Netzwerk für Wien & Niederösterreich",
  description:
    "Ihre Gießerei für Wien & NÖ. Hochwertiger Industrie- & Kunstguss, Stiegenziergitter und Sonderanfertigungen direkt aus Tulln.",
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Premium Hero Section - Simplified & Responsive */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-900 pt-20 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-800 via-slate-950 to-black opacity-60 z-0"></div>
        <Image
          src="/Gusswerk_-Gießerei-Niederösterreich.webp"
          alt="Intrapex Gusswerk Gießerei Niederösterreich – Hochwertige Gusslösungen und Metallverarbeitung"
          fill
          className="object-cover opacity-40 z-0"
          priority
        />

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 animate-fade-in-up">
            <span className="flex h-1.5 w-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316]"></span>
            <span className="text-xs sm:text-sm font-medium text-slate-300 tracking-wider uppercase">
              Seit 1974
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-6 max-w-5xl drop-shadow-2xl">
            Ihr Netzwerk für <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">
              Gusslösungen.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-xl mb-10 leading-relaxed font-light px-4">
            Wir verbinden Tradition mit modernster Fertigung. Perfektion in
            Grauguss, Stahl und Sonderlegierungen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center px-4">
            <Link
              href="/kontakt"
              className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-orange-600 font-sans rounded-full hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-500/30"
            >
              <span>Projekt starten</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/leistungen"
              className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-transparent border border-white/20 font-sans rounded-full hover:bg-white/10 hover:border-white/40 backdrop-blur-sm"
            >
              <span>Leistungen</span>
            </Link>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-50 to-transparent z-10"></div>
      </section>

      {/* Trust Stats Bar */}
      <section className="bg-slate-50 py-10 border-b border-slate-200 relative z-20 -mt-12 mx-4 md:mx-auto md:max-w-5xl rounded-2xl shadow-xl flex flex-col justify-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl font-serif font-bold text-slate-900">
              50+
            </span>
            <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">
              Jahre Erfahrung
            </span>
          </div>
          <div className="flex flex-col items-center text-center border-l md:border-l border-slate-200 pl-4 md:pl-0">
            <span className="text-3xl font-serif font-bold text-slate-900">
              100%
            </span>
            <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">
              Qualität
            </span>
          </div>
          <div className="flex flex-col items-center text-center border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0">
            <span className="text-3xl font-serif font-bold text-slate-900">
              Top
            </span>
            <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">
              Konditionen
            </span>
          </div>
          <div className="flex flex-col items-center text-center border-l border-t md:border-t-0 border-slate-200 pt-6 md:pt-0 pl-4 md:pl-0">
            <div className="flex text-orange-500 mb-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest">
              Kundenzufriedenheit
            </span>
          </div>
        </div>
      </section>

      {/* About Teaser (New) */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <VideoTeaser
                  src="/Intrapex Gusswerk Wien.mp4"
                  subtitle="Intrapex Ihr Partner für individuellen Guss"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 bg-white p-6 rounded-2xl shadow-xl max-w-[200px] hidden sm:block">
                <p className="text-4xl font-serif font-bold text-orange-600 mb-1">
                  100%
                </p>
                <p className="text-xs font-bold text-slate-600 uppercase">
                  Österreichische Qualitätssicherung
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-4">
                Unser Anspruch
              </h2>
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                Mehr als nur eine Gießerei. Ein Partner.
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Intrapex ist nicht nur Lieferant, sondern Ihr strategischer
                Partner für Gussprodukte. Wir bündeln die Kapazitäten der besten
                europäischen Gießereien.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">
                    Unabhängige Materialberatung
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">
                    Zugriff auf spezialisierte Fertigungslinien
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">
                    Familiär geführt in 2. Generation
                  </span>
                </li>
              </ul>
              <Link
                href="/ueber-uns"
                className="text-slate-900 font-bold border-b-2 border-orange-500 hover:text-orange-600 transition-colors pb-1 inline-flex items-center gap-2"
              >
                Mehr über uns erfahren <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: Architecture Wien */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 opacity-50 z-0 translate-x-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Box Design Content */}
              <div className="order-2 lg:order-1 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 relative">
                <div className="absolute top-8 right-8 text-orange-100">
                  <Landmark className="h-20 w-20 opacity-20" />
                </div>
                <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-widest mb-6">
                  Kompetenz in Wien
                </span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                  Guss für Architektur <br /> & Bau in Wien.
                </h2>
                <div className="space-y-6 text-slate-600 font-medium">
                  <p className="leading-relaxed">
                    Wien ist weltweit bekannt für seine historische Bausubstanz.
                    Wir unterstützen{" "}
                    <strong>
                      Architekten, Baumeister und den Denkmalschutz
                    </strong>{" "}
                    bei der fachgerechten Sanierung von{" "}
                    <strong>Gründerzeithäusern</strong> und Palais.
                  </p>
                  <p className="leading-relaxed">
                    Ob <strong>Stiegenziergitter</strong>, historische Geländer,
                    Säulen oder Fenstergitter: Wir rekonstruieren fehlende Teile
                    originalgetreu nach Muster oder Zeichnung. Perfektes Design
                    trifft auf handwerkliche Präzision im Sandguss-Verfahren.
                  </p>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-100 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-800 bg-slate-50 px-4 py-2 rounded-full">
                    <CheckCircle2 className="h-4 w-4 text-orange-500" />
                    Denkmalschutz-konform
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-800 bg-slate-50 px-4 py-2 rounded-full">
                    <CheckCircle2 className="h-4 w-4 text-orange-500" />
                    Detailgetreue Nachgüsse
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-800 bg-slate-50 px-4 py-2 rounded-full">
                    <CheckCircle2 className="h-4 w-4 text-orange-500" />
                    Montage-Netzwerk Wien
                  </div>
                </div>
                <div className="mt-10">
                  <Link
                    href="/stiegenziergitter-wien"
                    className="inline-flex items-center text-orange-600 font-bold hover:text-orange-700 transition-colors group"
                  >
                    Zu unseren Referenzen in Wien{" "}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Visual Side */}
              <div className="order-1 lg:order-2 relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl group">
                <Image
                  src="/stiegen-ziergitter-wien.webp"
                  alt="Historische Guss-Architektur in Wien - Intrapex"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-10 left-10 text-white">
                  <p className="text-lg font-serif italic">
                    &quot;Erhalt von Kulturgut durch präzises Handwerk.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 2: Industry NÖ */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-600/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Visual Side (Left) */}
              <div className="order-1 relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-700 group">
                <Image
                  src="/industrieguss-serien.webp"
                  alt="Industrieguss Produktion Niederösterreich - Intrapex"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent mix-blend-overlay"></div>
              </div>

              {/* Content Box */}
              <div className="order-2 bg-slate-800/50 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-slate-700/50 shadow-2xl relative">
                <div className="absolute top-8 right-8 text-slate-700">
                  <Factory className="h-20 w-20 opacity-20" />
                </div>
                <span className="inline-block py-1 px-3 rounded-full bg-slate-700 text-orange-400 text-xs font-bold uppercase tracking-widest mb-6 border border-slate-600">
                  Antrieb für NÖ
                </span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                  Industrieguss für <br />{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                    Niederösterreichs Wirtschaft.
                  </span>
                </h2>
                <div className="space-y-6 text-slate-300 font-medium">
                  <p className="leading-relaxed">
                    Als starker Partner der niederösterreichischen Industrie
                    liefern wir <strong>hochwertige Gusskomponenten</strong> für
                    den Maschinen- und Anlagenbau. Wir verstehen die
                    Anforderungen an{" "}
                    <strong>Präzision, Liefertreue und Materialqualität</strong>
                    .
                  </p>
                  <p className="leading-relaxed">
                    Unsere Kompetenz umfasst die{" "}
                    <strong>Serienfertigung</strong> von Gehäusen,
                    Getriebeteilen und Pumpenkomponenten ebenso wie den
                    schnellen <strong>Ersatzteilguss</strong> bei
                    Maschinenstillstand. Wir liefern Just-in-Time nach St.
                    Pölten, Wiener Neustadt und ins gesamte Industrieviertel.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-700 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-white bg-slate-700/50 px-4 py-2 rounded-full border border-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-orange-500" />
                    Serienfertigung & Prototypen
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-white bg-slate-700/50 px-4 py-2 rounded-full border border-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-orange-500" />
                    Zerstörungsfreie Prüfung
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-white bg-slate-700/50 px-4 py-2 rounded-full border border-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-orange-500" />
                    Express-Service
                  </div>
                </div>

                <div className="mt-10">
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-500/20"
                  >
                    Industrie-Anfrage stellen{" "}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explainer Video Section */}
      <ExplainerVideo src="/gusswerk-wien.mp4" />

      {/* NEW SECTION 3: Spare Parts & Reverse Engineering (High Conversion) */}
      <ProblemSolutionSection />

      {/* NEW SECTION 4: Niche Services (The "Wow" Effect) */}
      <NicheServicesSection />

      {/* Services Showcase */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-3">
              Portfolio
            </h2>
            <h3 className="text-4xl font-serif font-bold text-slate-900">
              Meisterhafte Gusslösungen.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {/* Case Study 1: Wien Architecture */}
            <PortfolioFlipCard
              overTitle="Der Wien-Klassiker"
              title="Altbau-Sanierung 1010 Wien"
              imageSrc="/stiegen-ziergitter-wien.webp"
              challenge="Rekonstruktion historischer Balkongeländer nach Sturmschaden. Originalpläne fehlten, nur Fragmente vorhanden."
              solution="3D-Scan der Bruchstücke, Erstellung neuer Gussmodelle, Guss in Grauguss (EN-GJL-200) und denkmalgerechte Lackierung."
              result="Perfekte Optik, Montagefreigabe durch Bundesdenkmalamt."
            />

            {/* Case Study 2: Industry NÖ */}
            <PortfolioFlipCard
              overTitle="Der Industrie-Power"
              title="Pumpengehäuse für Agrartechnik"
              imageSrc="/industrieguss-serien.webp"
              challenge="Dringender Ersatzteilbedarf für eine Großanlage im Bezirk Baden. Stillstandskosten drohten."
              solution="Express-Modellbau und Abguss in Sphäroguss (EN-GJS-400-15) innerhalb von 10 Tagen statt 8 Wochen."
              result="Anlage lief wieder pünktlich zur Erntezeit. Kostenersparnis: 60% gegenüber Neumaschine."
            />

            {/* Case Study 3: Heavy Duty (Synthesized based on table data) */}
            <PortfolioFlipCard
              overTitle="Der Hardcore-Einsatz"
              title="Verschleißteile Steinbruch"
              imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop"
              challenge="Extremer Abrasionsverschleiß an Brecherplatten führt zu wöchentlichen Ausfällen und hohen Kosten."
              solution="Umstellung auf hochverschleißfesten Chrom-Hartguss und Optimierung der Gussgeometrie."
              result="Standzeit verdreifacht, Wartungsintervalle von 1 auf 3 Wochen verlängert."
            />
          </div>

        </div>
      </section>

      <IndustrialDeepDiveSection />

      <TechnicalDataSection />

      <AluminumCastSection />

      {/* 3-Step Process - Premium Redesign */}
      < section className="py-24 bg-slate-50 overflow-hidden" >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-3">
              Der Ablauf
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
              In 3 Schritten zum fertigen Gussteil.
            </h3>
            <p className="text-slate-600 text-lg">
              Wir machen es Ihnen einfach. Von der ersten unverbindlichen
              Anfrage bis zur pünktlichen Lieferung – ein transparenter Prozess
              für Ihren Erfolg.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Connecting Line (Desktop) - Animated Look */}
            <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-slate-200 via-orange-200 to-slate-200 z-0"></div>

            <div className="grid md:grid-cols-3 gap-12 relative z-10">
              {/* Step 1 */}
              <div className="group relative bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-slate-100 group-hover:border-orange-500 transition-colors shadow-sm">
                  <span className="font-serif font-bold text-lg text-slate-400 group-hover:text-orange-600">
                    01
                  </span>
                </div>
                <div className="mt-6 text-center">
                  <div className="w-16 h-16 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-50 transition-colors">
                    <Send className="h-8 w-8 text-slate-700 group-hover:text-orange-600 transition-colors" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">
                    Anfrage & Beratung
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Senden Sie uns Ihre Skizze, ein Foto oder CAD-Daten. Unsere
                    Techniker prüfen machbare Legierungen (Grauguss, Stahl,
                    etc.) und Optimierungspotentiale.
                  </p>
                  <ul className="text-xs text-slate-500 space-y-2 text-left bg-slate-50 p-4 rounded-xl">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-orange-500" />{" "}
                      Kostenlose Machbarkeitsprüfung
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-orange-500" />{" "}
                      Angebot innerhalb von 48h
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 2 */}
              <div className="group relative bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-slate-100 group-hover:border-orange-500 transition-colors shadow-sm">
                  <span className="font-serif font-bold text-lg text-slate-400 group-hover:text-orange-600">
                    02
                  </span>
                </div>
                <div className="mt-6 text-center">
                  <div className="w-16 h-16 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-50 transition-colors">
                    <Settings className="h-8 w-8 text-slate-700 group-hover:text-orange-600 transition-colors" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">
                    Produktion & Qualität
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Wir koordinieren den Modellbau und wählen die passende
                    Gießerei aus unserem Netzwerk. Jeder Schritt wird überwacht.
                  </p>
                  <ul className="text-xs text-slate-500 space-y-2 text-left bg-slate-50 p-4 rounded-xl">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-orange-500" />{" "}
                      Modellbau & Abformung
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-orange-500" />{" "}
                      Laufende Qualitätskontrolle
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="group relative bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-slate-100 group-hover:border-orange-500 transition-colors shadow-sm">
                  <span className="font-serif font-bold text-lg text-slate-400 group-hover:text-orange-600">
                    03
                  </span>
                </div>
                <div className="mt-6 text-center">
                  <div className="w-16 h-16 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-50 transition-colors">
                    <Truck className="h-8 w-8 text-slate-700 group-hover:text-orange-600 transition-colors" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">
                    Lieferung
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Das fertige Bauteil kommt sicher verpackt zu Ihnen. Auf
                    Wunsch inkl. mechanischer Bearbeitung und Oberflächenschutz.
                  </p>
                  <ul className="text-xs text-slate-500 space-y-2 text-left bg-slate-50 p-4 rounded-xl">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-orange-500" />{" "}
                      Termingerechte Logistik
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-orange-500" />{" "}
                      Endabnahme & Protokoll
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Why Us Grid (New) */}
      < section className="py-24 bg-white border-t border-slate-100" >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 p-6 rounded-2xl hover:bg-orange-50 transition-colors">
              <Globe className="h-8 w-8 text-orange-600 mb-4" />
              <h4 className="font-bold text-slate-900 mb-2">
                Europaweites Netzwerk
              </h4>
              <p className="text-sm text-slate-600">
                Zugriff auf spezialisierte Gießereien für jeden Werkstoff.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl hover:bg-orange-50 transition-colors">
              <ShieldCheck className="h-8 w-8 text-orange-600 mb-4" />
              <h4 className="font-bold text-slate-900 mb-2">
                Qualitätsgarantie
              </h4>
              <p className="text-sm text-slate-600">
                Strenge Kontrollen und Norm-Konformität bei jedem Guss.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl hover:bg-orange-50 transition-colors">
              <Truck className="h-8 w-8 text-orange-600 mb-4" />
              <h4 className="font-bold text-slate-900 mb-2">Just-in-Time</h4>
              <p className="text-sm text-slate-600">
                Optimierte Logistik für Ihre Baustellenplanung.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl hover:bg-orange-50 transition-colors">
              <Users className="h-8 w-8 text-orange-600 mb-4" />
              <h4 className="font-bold text-slate-900 mb-2">
                Spezial-Expertise
              </h4>
              <p className="text-sm text-slate-600">
                Jahrzehntelange Erfahrung bei komplexen Geometrien.
              </p>
            </div>
          </div>
        </div>
      </section >

      {/* Testimonials Section */}
      < section className="py-24 bg-slate-50" >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-3">
              Stimmen
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
              Das sagen unsere Kunden.
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow relative">
              <Quote className="h-10 w-10 text-orange-100 absolute top-6 left-6 -z-0" />
              <div className="relative z-10">
                <div className="flex text-orange-500 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">
                  &quot;Intrapex hat für uns komplexe Gusskomponenten für eine
                  denkmalgeschützte Fassade geliefert. Die Qualität und die
                  Detailtreue waren beeindruckend.&quot;
                </p>
                <div>
                  <p className="font-bold text-slate-900">Ing. Markus Weber</p>
                  <p className="text-sm text-slate-500">Bauleiter, Wien</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow relative">
              <Quote className="h-10 w-10 text-orange-100 absolute top-6 left-6 -z-0" />
              <div className="relative z-10">
                <div className="flex text-orange-500 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">
                  &quot;Hervorragende Beratung bei der Werkstoffwahl. Wir
                  konnten durch den Wechsel auf Sphäroguss Gewicht sparen und
                  die Festigkeit erhöhen.&quot;
                </p>
                <div>
                  <p className="font-bold text-slate-900">
                    Dipl.-Ing. Sarah Bauer
                  </p>
                  <p className="text-sm text-slate-500">
                    Produktentwicklung, Linz
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow relative">
              <Quote className="h-10 w-10 text-orange-100 absolute top-6 left-6 -z-0" />
              <div className="relative z-10">
                <div className="flex text-orange-500 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">
                  &quot;Zuverlässigkeit ist für uns das Wichtigste. Mit Intrapex
                  haben wir einen Partner, der Termine hält und proaktiv
                  kommuniziert.&quot;
                </p>
                <div>
                  <p className="font-bold text-slate-900">Johann Müller</p>
                  <p className="text-sm text-slate-500">Einkaufsleiter, Graz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* FAQ Section */}
      < section className="py-24 bg-white" >
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-3">
              Wissenswertes
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
              Häufig gestellte Fragen.
            </h3>
          </div>

          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <details className="group bg-slate-50 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer text-slate-900 font-bold hover:bg-slate-100 transition-colors">
                <span className="flex items-center gap-3">
                  <HelpCircle className="h-5 w-5 text-orange-500" />
                  Welche Losgrößen bieten Sie an?
                </span>
                <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180 text-slate-400" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                Wir sind extrem flexibel. Von Einzelstücken (z.B. für
                Restaurierungen oder Prototypen) bis hin zu mittelgroßen Serien
                für die Industrie können wir alles abdecken. Kontaktieren Sie
                uns für eine individuelle Einschätzung.
              </div>
            </details>

            {/* FAQ Item 2 */}
            <details className="group bg-slate-50 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer text-slate-900 font-bold hover:bg-slate-100 transition-colors">
                <span className="flex items-center gap-3">
                  <HelpCircle className="h-5 w-5 text-orange-500" />
                  Welche Materialien verarbeiten Sie?
                </span>
                <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180 text-slate-400" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                Unser Schwerpunkt liegt auf Eisen-Gusswerkstoffen (Grauguss,
                Sphäroguss, Stahlguss). Zusätzlich bieten wir über unser
                Partnernetzwerk auch Nichteisen-Metalle wie Aluminium, Bronze
                und spezielle Kupferlegierungen an.
              </div>
            </details>

            {/* FAQ Item 3 */}
            <details className="group bg-slate-50 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer text-slate-900 font-bold hover:bg-slate-100 transition-colors">
                <span className="flex items-center gap-3">
                  <HelpCircle className="h-5 w-5 text-orange-500" />
                  Wie lange sind die Lieferzeiten?
                </span>
                <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180 text-slate-400" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                Die Lieferzeit hängt stark von der Komplexität und dem Material
                ab. Für Standard-Gussteile rechnen wir oft mit 4-8 Wochen. Bei
                komplexen Neuanfertigungen inkl. Modellbau kann es etwas länger
                dauern. Wir geben Ihnen beim Angebot immer eine realistische
                Einschätzung.
              </div>
            </details>

            {/* FAQ Item 4 */}
            <details className="group bg-slate-50 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer text-slate-900 font-bold hover:bg-slate-100 transition-colors">
                <span className="flex items-center gap-3">
                  <HelpCircle className="h-5 w-5 text-orange-500" />
                  Liefern Sie auch an Privatkunden?
                </span>
                <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180 text-slate-400" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                Ja, insbesondere im Bereich der Stiegenziergitter und für
                Restaurierungsprojekte arbeiten wir gerne auch direkt mit
                privaten Bauherren zusammen.
              </div>
            </details>
          </div>
        </div>
      </section >

      {/* CTA Bottom */}
      < section className="py-24 bg-slate-900 relative overflow-hidden" >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 to-slate-950 opacity-50"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Ihr Projekt in guten Händen.
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Lassen Sie uns über Ihre Anforderungen sprechen. Unverbindlich und
            auf Augenhöhe.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-slate-900 transition-all duration-200 bg-white font-sans rounded-full hover:bg-orange-50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              <Send className="mr-2 h-5 w-5" /> Online anfragen
            </Link>
            <a
              href="tel:+436644503177"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white transition-all duration-200 bg-transparent border border-white/20 font-sans rounded-full hover:bg-white/10"
            >
              <Phone className="mr-2 h-5 w-5" /> +43 664 450 31 77
            </a>
          </div>
        </div>
      </section >
    </div >
  );
}
