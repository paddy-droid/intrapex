import Link from "next/link";
import { ArrowRight, Factory, MapPin, CheckCircle, Phone, FileText, LayoutGrid, Hammer, ShieldCheck, Ruler, HelpCircle, ChevronDown } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Stiegenziergitter Niederösterreich - Guss nach Maß | Intrapex",
    description: "Ihr Partner für Stiegenziergitter in Niederösterreich. Individuelle Gusslösungen aus Tulln für Sanierung und Neubau.",
};

export default function StiegenziergitterNOE() {
    return (
        <div className="flex flex-col w-full">
            {/* Hero Section */}
            <section className="relative w-full py-24 lg:py-32 flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 opacity-90 z-0"></div>
                {/* Subtle geometric pattern overlay could go here */}

                <div className="container relative z-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mb-8 animate-fade-in-up">
                        <MapPin className="h-4 w-4 text-blue-400" />
                        <span className="text-sm font-bold text-blue-400 tracking-wide uppercase">Regionale Kompetenz: Niederösterreich</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-6 max-w-4xl drop-shadow-2xl">
                        Individuelle Gusskunst <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-400">direkt aus Tulln.</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-light">
                        Ihr lokaler Experte für hochwertige Stiegenziergitter. Ob Sanierung oder moderner Neubau – wir realisieren Ihre Vision in Metall.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5">
                        <Link href="/kontakt" className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-blue-600 font-sans rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30">
                            <span>Angebot einholen</span>
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-24 bg-slate-50">
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Warum Niederösterreich auf Intrapex setzt?</h2>
                        <p className="text-lg text-slate-600">
                            Wir verbinden lokale Nähe mit internationaler Fertigungskompetenz. Das bedeutet für Sie: Handschlagqualität zu Bestpreisen.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform">
                            <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Vor Ort in Tulln</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Ihr Ansprechpartner ist greifbar. Besprechen Sie Ihr Projekt direkt mit uns in Tulln an der Donau.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform">
                            <div className="h-12 w-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-orange-600">
                                <Factory className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Alles aus einer Hand</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Vom Modellbau über den Guss bis zur mechanischen Bearbeitung – wir kümmern uns um den gesamten Prozess.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform">
                            <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center mb-6 text-green-600">
                                <CheckCircle className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Flexibilität</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Wir gießen Einzelstücke für private Bauherren genauso zuverlässig wie Serien für Bauträger.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Models Showcase */}
            <section className="py-24 bg-white">
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Kollektion</h2>
                        <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900">Beliebte Modelle.</h3>
                        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                            Auswahl aus unserem historischen Archiv. Wir können jedoch jedes beliebige Modell nach Ihrer Vorlage (Foto oder Skizze) nachgießen.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Model 1 */}
                        <div className="group cursor-pointer">
                            <div className="bg-slate-100 aspect-[3/4] rounded-2xl mb-6 relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541434199-84724b11f324?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <span className="text-xs font-bold uppercase tracking-wider mb-1 block text-blue-400">Jugendstil</span>
                                    <h4 className="text-2xl font-serif font-bold">Modell "Tulln"</h4>
                                </div>
                            </div>
                        </div>
                        {/* Model 2 */}
                        <div className="group cursor-pointer">
                            <div className="bg-slate-100 aspect-[3/4] rounded-2xl mb-6 relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <span className="text-xs font-bold uppercase tracking-wider mb-1 block text-blue-400">Klassizismus</span>
                                    <h4 className="text-2xl font-serif font-bold">Modell "Wachau"</h4>
                                </div>
                            </div>
                        </div>
                        {/* Model 3 */}
                        <div className="group cursor-pointer">
                            <div className="bg-slate-100 aspect-[3/4] rounded-2xl mb-6 relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <span className="text-xs font-bold uppercase tracking-wider mb-1 block text-blue-400">Gründerzeit</span>
                                    <h4 className="text-2xl font-serif font-bold">Modell "Semmering"</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <Link href="/kontakt" className="text-slate-900 font-bold border-b-2 border-blue-500 hover:text-blue-600 transition-colors pb-1 inline-flex items-center gap-2">
                            Individuelles Modell anfragen <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Technical Process - Step by Step */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-3">Ablauf</h2>
                            <h3 className="text-3xl md:text-5xl font-serif font-bold mb-8">Vom Original zum Guss.</h3>
                            <p className="text-slate-400 text-lg mb-8">
                                Die Rekonstruktion historischer Gitter erfordert technisches Verständnis und handwerkliches Geschick.
                                Wir haben den Prozess perfektioniert.
                            </p>

                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 border border-blue-500/20">
                                        <Ruler className="h-6 w-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">1. Bestandsaufnahme</h4>
                                        <p className="text-slate-400">Wir analysieren das Original (oder Reste davon) vor Ort. Bruchstellen und Details werden dokumentiert.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 border border-blue-500/20">
                                        <LayoutGrid className="h-6 w-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">2. Modellbau</h4>
                                        <p className="text-slate-400">Erstellung eines 1:1 Modells aus Kunststoff oder Holz. Fehlende Teile werden rekonstruiert.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 border border-blue-500/20">
                                        <Hammer className="h-6 w-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">3. Handformguss</h4>
                                        <p className="text-slate-400">Abguss in Grauguss (EN-GJL) oder Sphäroguss (EN-GJS) in unseren Partner-Gießereien.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-800 relative z-10 border border-slate-700 shadow-2xl">
                                {/* Placeholder for process image */}
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621252179027-94459d27d3ee?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-80 mix-blend-overlay"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                                    <div className="flex items-center gap-3 mb-2">
                                        <ShieldCheck className="h-5 w-5 text-green-400" />
                                        <span className="text-green-400 font-bold text-sm uppercase">Qualitätsgeprüft</span>
                                    </div>
                                    <p className="text-white text-sm">Jedes Teil durchläuft vor Auslieferung eine Maß- und Sichtkontrolle und wird auf Wunsch grundiert.</p>
                                </div>
                            </div>
                            {/* Decorative Frame */}
                            <div className="absolute -inset-4 border-2 border-slate-800 rounded-3xl -z-0"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Material Info - Comparison */}
            <section className="py-24 bg-slate-50">
                <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Materialkunde</h2>
                        <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900">Das richtige Eisen.</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-slate-100">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-2xl font-bold text-slate-900">Grauguss</h3>
                                <div className="px-3 py-1 bg-slate-100 rounded text-xs font-bold uppercase text-slate-500">EN-GJL</div>
                            </div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-slate-600">Historisch authentisch (hoher Kohlenstoffgehalt)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-slate-600">Exzellente Dämpfungseigenschaften</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-slate-600">Ideal für Zierelemente ohne dynamische Last</span>
                                </li>
                            </ul>
                            <div className="mt-auto pt-6 border-t border-slate-100 text-sm text-slate-500">
                                <strong>Einsatz:</strong> Klassische Stiegengeländer, Zierelemente, Repliken.
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-md border-2 border-blue-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-xl">Empfehlung</div>
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-2xl font-bold text-slate-900">Sphäroguss</h3>
                                <div className="px-3 py-1 bg-blue-50 rounded text-xs font-bold uppercase text-blue-600">EN-GJS</div>
                            </div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-slate-600">Höhere Zugfestigkeit & Dehnbarkeit</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-slate-600">Bruchsicherer als Grauguss</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-slate-600">Gut schweißbar (unter bestimmten Bedingungen)</span>
                                </li>
                            </ul>
                            <div className="mt-auto pt-6 border-t border-slate-100 text-sm text-slate-500">
                                <strong>Einsatz:</strong> Tragende Säulen, moderne Konstruktionen, stark beanspruchte Teile.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">FAQ</h2>
                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Fragen zur Sanierung.</h3>
                    </div>

                    <div className="space-y-4">
                        <details className="group bg-slate-50 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between p-6 cursor-pointer text-slate-900 font-bold hover:bg-slate-100 transition-colors">
                                <span className="flex items-center gap-3">
                                    <HelpCircle className="h-5 w-5 text-blue-500" />
                                    Was brauche ich für ein Angebot?
                                </span>
                                <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180 text-slate-400" />
                            </summary>
                            <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                                Im Idealfall ein Foto des gewünschten Musters und ca. Maße (Laufmeter). Bei Rekonstruktionen benötigen wir ein (Bruch-)Stück des Originals zur Begutachtung.
                            </div>
                        </details>
                        <details className="group bg-slate-50 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between p-6 cursor-pointer text-slate-900 font-bold hover:bg-slate-100 transition-colors">
                                <span className="flex items-center gap-3">
                                    <HelpCircle className="h-5 w-5 text-blue-500" />
                                    Können fehlende Teile nachgegossen werden?
                                </span>
                                <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180 text-slate-400" />
                            </summary>
                            <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                                Ja, das ist unsere Spezialität. Wir bauen ein originalgetreues Modell basierend auf einem verbliebenen Musterstück und gießen die fehlenden Elemente nach.
                            </div>
                        </details>
                        <details className="group bg-slate-50 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between p-6 cursor-pointer text-slate-900 font-bold hover:bg-slate-100 transition-colors">
                                <span className="flex items-center gap-3">
                                    <HelpCircle className="h-5 w-5 text-blue-500" />
                                    Wie lange dauert die Fertigung?
                                </span>
                                <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180 text-slate-400" />
                            </summary>
                            <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                                Für Standard-Modelle ca. 4-6 Wochen. Bei Neuanfertigung mit Modellbau rechnen Sie bitte mit ca. 8-10 Wochen ab Auftragsklarheit.
                            </div>
                        </details>
                    </div>
                </div>
            </section>
            <section className="py-24 bg-white">
                <div className="container max-w-5xl mx-auto px-4">
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-16 relative overflow-hidden text-center">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl -ml-16 -mb-16"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Planen Sie ein Projekt in Niederösterreich?</h2>
                            <div className="flex flex-col md:flex-row gap-6 justify-center">
                                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10 text-left">
                                    <FileText className="h-10 w-10 text-blue-400" />
                                    <div>
                                        <div className="text-white font-bold">1. Plan senden</div>
                                        <div className="text-slate-400 text-sm">DWG oder PDF</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10 text-left">
                                    <Phone className="h-10 w-10 text-orange-400" />
                                    <div>
                                        <div className="text-white font-bold">2. Angebot erhalten</div>
                                        <div className="text-slate-400 text-sm">Schnell & Unverbindlich</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12">
                                <Link href="/kontakt" className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-slate-900 transition-all duration-200 bg-white font-sans rounded-full hover:bg-blue-50 hover:text-blue-900 shadow-xl">
                                    Beratung anfordern
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
