import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Hammer, Box, Layers, ArrowRight } from 'lucide-react';

interface NicheServicesSectionProps {
    region?: string;
}

export function NicheServicesSection({ region }: NicheServicesSectionProps) {
    // Dynamic text adaptation based on region
    const isUrban = region === "Wien" || region === "Salzburg" || region === "Steiermark" || region === "Oberösterreich"; // Considering Graz/Linz/Salzburg
    const regionSuffix = region ? ` in ${region}` : '';
    const regionAdjectiveMap: Record<string, string> = {
        "Wien": "Wiener",
        "Niederösterreich": "Niederösterreichische",
        "Oberösterreich": "Oberösterreichische",
        "Salzburg": "Salzburger",
        "Tirol": "Tiroler",
        "Vorarlberg": "Vorarlberger",
        "Steiermark": "Steirische",
        "Kärnten": "Kärntner",
        "Burgenland": "Burgenländische"
    };

    const regionAdjective = region && regionAdjectiveMap[region] ? regionAdjectiveMap[region] : (region ? `${region}er` : 'Österreichische');

    const windowGrilleText = region === "Wien"
        ? "Gründerzeit-Fenstergitter für Wiener Zinshäuser"
        : `Historische Fenstergitter für ${region ? region : 'Ihre Immobilie'}`;

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-2 block">
                        Detailverliebtheit & Technik
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                        Spezialitäten & Verfahren
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Abseits des Standards bieten wir Lösungen für besondere Anforderungen.
                        Entdecken Sie unsere Nischenprodukte und Fertigungsverfahren{regionSuffix}.
                    </p>
                </div>

                {/* Niche Products Grid - The "Wow" Effect */}
                <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
                    {/* Niche 1: Kanaldeckel */}
                    <div className="group relative h-[450px] rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 bg-slate-900">
                        {/* Decorative Background for No-Image Design */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-800 via-slate-950 to-black"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-colors duration-700"></div>
                        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>

                        {/* Large Abstract Icon */}
                        <div className="absolute top-12 right-12 opacity-5 transform rotate-12 group-hover:rotate-0 transition-all duration-700">
                            <Box className="h-40 w-40 text-white" />
                        </div>

                        <div className="absolute bottom-8 left-8 right-8 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <div className="h-12 w-12 bg-orange-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-orange-900/50">
                                <Sparkles className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Historische Kanaldeckel Nachguss</h3>
                            <p className="text-slate-300 text-base mb-6 leading-relaxed max-w-sm">
                                Individuelle Schachtabdeckungen mit Stadtwappen oder Familienwappen. Perfekt für Altstadtsanierungen{regionSuffix}.
                            </p>
                            <span className="inline-flex items-center text-orange-400 text-sm font-bold uppercase tracking-widest group-hover:text-orange-300 transition-colors">
                                Unikat-Fertigung <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </div>
                    </div>

                    {/* Niche 2: Fenstergitter */}
                    <div className="group relative h-[450px] rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500">
                        <Image
                            src="/Nachguss Fenstergitter Balkongitter.webp"
                            alt="Fenstergitter Gründerzeit Wien"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
                        <div className="absolute bottom-8 left-8 right-8 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <div className="h-12 w-12 bg-orange-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-orange-900/50">
                                <Sparkles className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{windowGrilleText}</h3>
                            <p className="text-slate-300 text-base mb-6 leading-relaxed max-w-sm">
                                Detailgetreuer Nachguss von Fenstergittern der Gründerzeit. Sicherheit trifft auf historische Ästhetik.
                            </p>
                            <span className="inline-flex items-center text-orange-400 text-sm font-bold uppercase tracking-widest group-hover:text-orange-300 transition-colors">
                                Stil-Echt <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </div>
                    </div>
                </div>

                {/* Process Keywords Strip - Technical SEO */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 lg:p-12">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="flex gap-4">
                            <div className="bg-white p-3 rounded-xl shadow-sm h-fit">
                                <Hammer className="h-6 w-6 text-slate-700" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-1">Handformguss Kleinserie</h4>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Traditionelles Handwerk für geringe Stückzahlen. Ideal für Prototypen und komplexe Geometrien, die Sorgfalt erfordern.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="bg-white p-3 rounded-xl shadow-sm h-fit">
                                <Box className="h-6 w-6 text-slate-700" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-1">Maschinenformguss Österreich</h4>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Automatisierte Produktion für mittlere bis große Serien. Höchste Wiederholgenauigkeit für Industriebetriebe{regionSuffix}.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="bg-white p-3 rounded-xl shadow-sm h-fit">
                                <Layers className="h-6 w-6 text-slate-700" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-1">Verlorene Form Guss</h4>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Präzisionsguss für filigrane Strukturen. Ermöglicht Hinterschneidungen und komplexe Innenkonturen in einem Guss.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
