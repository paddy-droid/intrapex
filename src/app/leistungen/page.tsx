import Link from "next/link";
import { ArrowRight, Box, Compass, Hammer, Layers, PenTool, Truck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gießerei-Leistungen: Modellbau & Serienguss in Wien/NÖ",
    description: "Komplettservice von Modellbau bis Fertigteil. Grauguss, Sphäroguss und Stahlguss für Industrie & Architektur in höchster Qualität.",
};

export default function Leistungen() {
    return (
        <div className="flex flex-col w-full bg-slate-50">
            {/* Hero */}
            <section className="relative w-full py-20 bg-slate-900 border-b border-slate-800">
                <div className="container px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Unser Leistungsspektrum</h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Komplettlösungen für Ihre Gussanforderungen. Von der technischen Beratung bis zum einbaufertigen Bauteil.
                    </p>
                </div>
            </section>

            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Sidebar Navigation */}
                    <div className="hidden lg:block space-y-2 sticky top-28 h-fit">
                        <h3 className="text-slate-900 font-bold uppercase tracking-widest text-sm mb-6 pl-4 border-l-4 border-orange-500">Überblick</h3>
                        {[
                            { name: 'Fertigung & Serien', id: 'fertigung' },
                            { name: 'Modellbau', id: 'modellbau' },
                            { name: 'Nachbearbeitung', id: 'nachbearbeitung' },
                            { name: 'Logistik', id: 'logistik' }
                        ].map((item) => (
                            <Link
                                key={item.id}
                                href={`#${item.id}`}
                                className="block px-4 py-3 text-slate-600 hover:text-orange-600 hover:bg-white hover:shadow-sm rounded-lg transition-all cursor-pointer font-medium"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-2 space-y-16">

                        {/* Block 1: Fertigung */}
                        <div id="fertigung" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-12 w-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                                    <Layers className="h-6 w-6" />
                                </div>
                                <h2 className="text-3xl font-serif font-bold text-slate-900">Fertigung & Kapazitäten</h2>
                            </div>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                Wir bieten maximale Flexibilität durch unser Netzwerk. Egal ob Sie ein Einzelstück für eine Restauration benötigen oder eine Großserie für den Maschinenbau.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                                    <h4 className="font-bold text-slate-900 mb-2">Einzelguss</h4>
                                    <p className="text-sm text-slate-500">Unikate und Prototypen ab Stückzahl 1. Ideal für Spezialanfertigungen.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                                    <h4 className="font-bold text-slate-900 mb-2">Serienguss</h4>
                                    <p className="text-sm text-slate-500">Kosteneffiziente Produktion von Klein- bis Großserien mit gleichbleibender Qualität.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all sm:col-span-2">
                                    <h4 className="font-bold text-slate-900 mb-2">Dimensionen</h4>
                                    <p className="text-sm text-slate-500">Wir realisieren Gussstücke in nahezu allen Gewichtsklassen. Vom filigranen Zierelement (kg-Bereich) bis zum schweren Maschinenguss (Tonnen-Bereich).</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-px bg-slate-200"></div>

                        {/* Block 2: Modellbau */}
                        <div id="modellbau" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                                    <Compass className="h-6 w-6" />
                                </div>
                                <h2 className="text-3xl font-serif font-bold text-slate-900">Modellbau & Engineering</h2>
                            </div>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                Ein perfekter Guss beginnt mit einem perfekten Modell. Wir unterstützen Sie von der Zeichnung bis zur Fertigungseinrichtung.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">Erstellung von Gussmodellen aus Holz, Kunststoff oder Metall.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">Digitalisierung alter Bauteile (3D-Scan) für Reproduktionen.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">Gießgerechte Optimierung Ihrer Konstruktionsdaten.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="w-full h-px bg-slate-200"></div>

                        {/* Block 3: Nachbearbeitung */}
                        <div id="nachbearbeitung" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-12 w-12 rounded-xl bg-slate-200 flex items-center justify-center text-slate-700">
                                    <Hammer className="h-6 w-6" />
                                </div>
                                <h2 className="text-3xl font-serif font-bold text-slate-900">Nachbearbeitung</h2>
                            </div>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                Auf Wunsch liefern wir Ihnen nicht nur den Rohguss, sondern das fertig bearbeitete Bauteil.
                            </p>
                            <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-32 bg-orange-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                                <div className="relative z-10 grid sm:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><PenTool className="h-4 w-4 text-orange-400" /> Mechanische Bearbeitung</h4>
                                        <p className="text-slate-400 text-sm">Drehen, Fräsen, Bohren. CNC-Präzisionsbearbeitung nach Ihren Vorgaben.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><Box className="h-4 w-4 text-orange-400" /> Oberflächenschutz</h4>
                                        <p className="text-slate-400 text-sm">Grundieren, Lackieren, Verzinken oder Pulverbeschichten für optimalen Korrosionsschutz.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-px bg-slate-200"></div>

                        {/* Block 4: Logistik */}
                        <div id="logistik" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                                    <Truck className="h-6 w-6" />
                                </div>
                                <h2 className="text-3xl font-serif font-bold text-slate-900">Logistik & Lager</h2>
                            </div>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                Wir übernehmen die komplette Logistikabwicklung. Von der zwischenzeitlichen Einlagerung bis zur Just-in-Time Lieferung auf Ihre Baustelle oder in Ihre Fertigungshalle.
                            </p>
                            <ul className="grid sm:grid-cols-2 gap-4">
                                <li className="bg-white p-4 rounded-lg border border-slate-100 flex items-center gap-3 shadow-sm">
                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                    <span className="text-slate-700 font-medium">Just-in-Time Lieferung</span>
                                </li>
                                <li className="bg-white p-4 rounded-lg border border-slate-100 flex items-center gap-3 shadow-sm">
                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                    <span className="text-slate-700 font-medium">Sichere Verpackung</span>
                                </li>
                                <li className="bg-white p-4 rounded-lg border border-slate-100 flex items-center gap-3 shadow-sm">
                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                    <span className="text-slate-700 font-medium">Zollabwicklung</span>
                                </li>
                                <li className="bg-white p-4 rounded-lg border border-slate-100 flex items-center gap-3 shadow-sm">
                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                    <span className="text-slate-700 font-medium">Zwischenlagerung</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            {/* Footer CTA */}
            <section className="bg-slate-100 py-16 text-center border-t border-slate-200">
                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Haben Sie spezifische Anforderungen?</h2>
                <Link href="/kontakt" className="inline-flex items-center text-orange-600 font-bold hover:underline">
                    Sprechen Sie mit unseren Technikern <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </section>
        </div>
    );
}

function CheckCircle({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
    )
}
