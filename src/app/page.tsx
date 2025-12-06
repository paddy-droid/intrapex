
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Settings, Globe, ShieldCheck, Star, Phone, Send, Users, Truck, CheckCircle2, Quote, HelpCircle, ChevronDown } from "lucide-react";
import VideoTeaser from "@/components/ui/VideoTeaser";

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
            <span className="text-xs sm:text-sm font-medium text-slate-300 tracking-wider uppercase">Seit 1974</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-6 max-w-5xl drop-shadow-2xl">
            Ihr Netzwerk für <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">Gusslösungen.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-xl mb-10 leading-relaxed font-light px-4">
            Wir verbinden Tradition mit modernster Fertigung. Perfektion in Grauguss, Stahl und Sonderlegierungen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center px-4">
            <Link href="/kontakt" className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-orange-600 font-sans rounded-full hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-500/30">
              <span>Projekt starten</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/leistungen" className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-transparent border border-white/20 font-sans rounded-full hover:bg-white/10 hover:border-white/40 backdrop-blur-sm">
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
            <span className="text-3xl font-serif font-bold text-slate-900">50+</span>
            <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Jahre Erfahrung</span>
          </div>
          <div className="flex flex-col items-center text-center border-l md:border-l border-slate-200 pl-4 md:pl-0">
            <span className="text-3xl font-serif font-bold text-slate-900">100%</span>
            <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Qualität</span>
          </div>
          <div className="flex flex-col items-center text-center border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0">
            <span className="text-3xl font-serif font-bold text-slate-900">Top</span>
            <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Konditionen</span>
          </div>
          <div className="flex flex-col items-center text-center border-l border-t md:border-t-0 border-slate-200 pt-6 md:pt-0 pl-4 md:pl-0">
            <div className="flex text-orange-500 mb-1">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest">Kundenzufriedenheit</span>
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
                <p className="text-4xl font-serif font-bold text-orange-600 mb-1">100%</p>
                <p className="text-xs font-bold text-slate-600 uppercase">Österreichische Qualitätssicherung</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-4">Unser Anspruch</h2>
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                Mehr als nur eine Gießerei. Ein Partner.
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Intrapex ist nicht nur Lieferant, sondern Ihr strategischer Partner für Gussprodukte. Wir bündeln die Kapazitäten der besten europäischen Gießereien.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Unabhängige Materialberatung</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Zugriff auf spezialisierte Fertigungslinien</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Familiär geführt in 2. Generation</span>
                </li>
              </ul>
              <Link href="/ueber-uns" className="text-slate-900 font-bold border-b-2 border-orange-500 hover:text-orange-600 transition-colors pb-1 inline-flex items-center gap-2">
                Mehr über uns erfahren <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-3">Portfolio</h2>
            <h3 className="text-4xl font-serif font-bold text-slate-900">Meisterhafte Gusslösungen.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Service 1: Grauguss */}
            <div className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all">
              <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/30 transition-colors z-10"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618376373752-9443c5163f9d?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                <div className="h-1 w-12 bg-orange-500 mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"></div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Industrieguss & Serien</h3>
                <p className="text-slate-200 text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  Grauguss, Sphäroguss und Stahl für höchste industrielle Ansprüche.
                </p>
              </div>
            </div>

            {/* Service 2: Stiegenziergitter (Highlight) */}
            <div className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all lg:col-span-2">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-slate-900/40 z-10"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541434199-84724b11f324?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
              <div className="absolute bottom-0 left-0 p-10 z-20 w-full max-w-2xl">
                <span className="inline-block px-3 py-1 bg-orange-600 text-white text-xs font-bold uppercase tracking-wider rounded mb-4">Spezialgebiet</span>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">Stiegenziergitter Wien & NÖ</h3>
                <p className="text-slate-100 text-lg mb-6 opacity-90">
                  Wir rekonstruieren defekte Ziergitter nach Originalvorlage für Wiener Zinshäuser und Schlösser.
                </p>
                <Link href="/stiegenziergitter-wien" className="inline-flex items-center gap-2 text-white font-bold hover:text-orange-200 transition-colors border-b border-white/30 hover:border-white pb-1">
                  Zur Spezialseite <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Service 3: Materials */}
            <div className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all bg-slate-900 border border-slate-800">
              <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center z-10">
                <Settings className="h-16 w-16 text-slate-700 group-hover:text-orange-500 transition-colors duration-300 mb-6" />
                <h3 className="text-2xl font-serif font-bold text-white mb-3">Sonderlegierungen</h3>
                <p className="text-slate-400 mb-6 px-4">
                  Aluminium, Kupfer, Bronze. Wir finden die perfekte Legierung für Ihre spezifische Anforderung.
                </p>
                <Link href="/materialien" className="px-6 py-2 rounded-full border border-slate-700 text-slate-300 text-sm font-bold group-hover:bg-orange-600 group-hover:border-orange-600 group-hover:text-white transition-all">
                  Materialübersicht
                </Link>
              </div>
            </div>
            {/* Service 4: Modellbau */}
            <div className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all md:col-span-2 lg:col-span-2">
              <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/40 transition-colors z-10"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Modellbau & Engineering</h3>
                <p className="text-slate-200 text-sm max-w-lg">
                  Von der Handskizze zum fertigen Modell. Wir unterstützen Sie bei der Entwicklung und Optimierung Ihrer Gussteile.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3-Step Process - Refined */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-3">Ablauf</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">In 3 Schritten zum Ziel.</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center text-2xl font-serif font-bold shadow-xl mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Anfrage & Erstgespräch</h4>
              <p className="text-slate-600 leading-relaxed text-sm px-4">
                Skizze, Foto oder Plan. Wir klären die Machbarkeit sofort.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-orange-600 text-white flex items-center justify-center text-2xl font-serif font-bold shadow-xl mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Modellbau & Guss</h4>
              <p className="text-slate-600 leading-relaxed text-sm px-4">
                Fertigung in unserem europäischen Partner-Netzwerk.
              </p>
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-0.5 bg-slate-200 -z-0"></div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-slate-200 text-slate-900 flex items-center justify-center text-2xl font-serif font-bold shadow-xl mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300 group-hover:border-orange-600 group-hover:text-orange-600">
                3
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Lieferung</h4>
              <p className="text-slate-600 leading-relaxed text-sm px-4">
                Pünktlich und sicher direkt zu Ihnen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Grid (New) */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 p-6 rounded-2xl hover:bg-orange-50 transition-colors">
              <Globe className="h-8 w-8 text-orange-600 mb-4" />
              <h4 className="font-bold text-slate-900 mb-2">Europaweites Netzwerk</h4>
              <p className="text-sm text-slate-600">Zugriff auf spezialisierte Gießereien für jeden Werkstoff.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl hover:bg-orange-50 transition-colors">
              <ShieldCheck className="h-8 w-8 text-orange-600 mb-4" />
              <h4 className="font-bold text-slate-900 mb-2">Qualitätsgarantie</h4>
              <p className="text-sm text-slate-600">Strenge Kontrollen und Norm-Konformität bei jedem Guss.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl hover:bg-orange-50 transition-colors">
              <Truck className="h-8 w-8 text-orange-600 mb-4" />
              <h4 className="font-bold text-slate-900 mb-2">Just-in-Time</h4>
              <p className="text-sm text-slate-600">Optimierte Logistik für Ihre Baustellenplanung.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl hover:bg-orange-50 transition-colors">
              <Users className="h-8 w-8 text-orange-600 mb-4" />
              <h4 className="font-bold text-slate-900 mb-2">Spezial-Expertise</h4>
              <p className="text-sm text-slate-600">Jahrzehntelange Erfahrung bei komplexen Geometrien.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-3">Stimmen</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Das sagen unsere Kunden.</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow relative">
              <Quote className="h-10 w-10 text-orange-100 absolute top-6 left-6 -z-0" />
              <div className="relative z-10">
                <div className="flex text-orange-500 mb-4">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-slate-600 mb-6 italic">
                  "Intrapex hat für uns komplexe Gusskomponenten für eine denkmalgeschützte Fassade geliefert. Die Qualität und die Detailtreue waren beeindruckend."
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
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-slate-600 mb-6 italic">
                  "Hervorragende Beratung bei der Werkstoffwahl. Wir konnten durch den Wechsel auf Sphäroguss Gewicht sparen und die Festigkeit erhöhen."
                </p>
                <div>
                  <p className="font-bold text-slate-900">Dipl.-Ing. Sarah Bauer</p>
                  <p className="text-sm text-slate-500">Produktentwicklung, Linz</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow relative">
              <Quote className="h-10 w-10 text-orange-100 absolute top-6 left-6 -z-0" />
              <div className="relative z-10">
                <div className="flex text-orange-500 mb-4">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-slate-600 mb-6 italic">
                  "Zuverlässigkeit ist für uns das Wichtigste. Mit Intrapex haben wir einen Partner, der Termine hält und proaktiv kommuniziert."
                </p>
                <div>
                  <p className="font-bold text-slate-900">Johann Müller</p>
                  <p className="text-sm text-slate-500">Einkaufsleiter, Graz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-3">Wissenswertes</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Häufig gestellte Fragen.</h3>
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
                Wir sind extrem flexibel. Von Einzelstücken (z.B. für Restaurierungen oder Prototypen) bis hin zu mittelgroßen Serien für die Industrie können wir alles abdecken. Kontaktieren Sie uns für eine individuelle Einschätzung.
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
                Unser Schwerpunkt liegt auf Eisen-Gusswerkstoffen (Grauguss, Sphäroguss, Stahlguss). Zusätzlich bieten wir über unser Partnernetzwerk auch Nichteisen-Metalle wie Aluminium, Bronze und spezielle Kupferlegierungen an.
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
                Die Lieferzeit hängt stark von der Komplexität und dem Material ab. Für Standard-Gussteile rechnen wir oft mit 4-8 Wochen. Bei komplexen Neuanfertigungen inkl. Modellbau kann es etwas länger dauern. Wir geben Ihnen beim Angebot immer eine realistische Einschätzung.
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
                Ja, insbesondere im Bereich der Stiegenziergitter und für Restaurierungsprojekte arbeiten wir gerne auch direkt mit privaten Bauherren zusammen.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 to-slate-950 opacity-50"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Ihr Projekt in guten Händen.</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Lassen Sie uns über Ihre Anforderungen sprechen. Unverbindlich und auf Augenhöhe.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/kontakt" className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-slate-900 transition-all duration-200 bg-white font-sans rounded-full hover:bg-orange-50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              <Send className="mr-2 h-5 w-5" /> Online anfragen
            </Link>
            <a href="tel:+436644503177" className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white transition-all duration-200 bg-transparent border border-white/20 font-sans rounded-full hover:bg-white/10">
              <Phone className="mr-2 h-5 w-5" /> +43 664 450 31 77
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
