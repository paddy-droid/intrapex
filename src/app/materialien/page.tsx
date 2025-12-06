import Link from "next/link";
import { ArrowRight, Zap, Scale, Shield, Database } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Guss-Materialien: Grauguss, Stahl & Sonderlegierungen",
    description: "Übersicht unserer Werkstoffe: EN-GJL, EN-GJS, Stahlguss & verschleißfeste Legierungen für jeden Einsatzzweck.",
};

export default function Materialien() {
    return (
        <div className="flex flex-col w-full bg-slate-50">
            {/* Hero */}
            <section className="relative w-full py-24 bg-slate-900 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black z-0"></div>
                <div className="container relative z-10 px-4">
                    <span className="inline-block py-1 px-3 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-widest mb-4">Werkstoffkunde</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Materialkompetenz</h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-xl font-light">
                        Die Wahl des richtigen Werkstoffs entscheidet über Langlebigkeit und Funktion.
                        Wir beraten Sie objektiv und werkstoffunabhängig.
                    </p>
                </div>
            </section>

            {/* Material Grid */}
            <section className="py-20 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Material Card: Grauguss */}
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:border-orange-200 transition-all hover:shadow-2xl">
                        <div className="h-48 bg-slate-200 relative flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-slate-800"></div>
                            <div className="relative z-10 text-center">
                                <span className="block text-5xl font-serif font-bold text-slate-700 select-none opacity-50">Fe</span>
                                <span className="text-xs font-mono text-slate-500 absolute top-0 right-[-20px]">EN-GJL</span>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent">
                                <h3 className="text-2xl font-bold text-white">Grauguss</h3>
                                <span className="text-orange-400 text-sm font-medium">Der Klassiker</span>
                            </div>
                        </div>
                        <div className="p-8">
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Lamellengraphitguss. Hervorragende Dämpfungseigenschaften, gute Bearbeitbarkeit und hohe Druckfestigkeit. Ideal für komplexe Formen.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-sm text-slate-700">
                                    <Zap className="h-4 w-4 text-orange-500" /> <span>Dämpfungsstark</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-slate-700">
                                    <Scale className="h-4 w-4 text-orange-500" /> <span>Kosteneffizient</span>
                                </div>
                            </div>
                            <div className="mt-8 pt-6 border-t border-slate-100">
                                <span className="text-xs font-bold text-slate-400 uppercase">Anwendungen</span>
                                <p className="text-sm text-slate-600 mt-1">Maschinenbetten, Ziergitter, Gehäuse, Kanalguss</p>
                            </div>
                        </div>
                    </div>

                    {/* Material Card: Sphäroguss */}
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:border-blue-200 transition-all hover:shadow-2xl">
                        <div className="h-48 bg-slate-200 relative flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-slate-800"></div>
                            <div className="relative z-10 text-center">
                                <span className="block text-5xl font-serif font-bold text-slate-700 select-none opacity-50">Fe+Mg</span>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent">
                                <h3 className="text-2xl font-bold text-white">Sphäroguss</h3>
                                <span className="text-blue-400 text-sm font-medium">Der Belastbare</span>
                            </div>
                        </div>
                        <div className="p-8">
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Gusseisen mit Kugelgraphit. Vereint die guten Gießeigenschaften von Grauguss mit stahlähnlichen mechanischen Eigenschaften.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-sm text-slate-700">
                                    <Shield className="h-4 w-4 text-blue-500" /> <span>Hohe Zugfestigkeit</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-slate-700">
                                    <Zap className="h-4 w-4 text-blue-500" /> <span>Duktilität (Verformbarkeit)</span>
                                </div>
                            </div>
                            <div className="mt-8 pt-6 border-t border-slate-100">
                                <span className="text-xs font-bold text-slate-400 uppercase">Anwendungen</span>
                                <p className="text-sm text-slate-600 mt-1">Fahrwerksteile, Sicherheitsbauteile, Hochdruckarmaturen</p>
                            </div>
                        </div>
                    </div>

                    {/* Material Card: Stahlguss */}
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:border-slate-300 transition-all hover:shadow-2xl">
                        <div className="h-48 bg-slate-200 relative flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-slate-700"></div>
                            <div className="relative z-10 text-center">
                                <span className="block text-5xl font-serif font-bold text-slate-500 select-none opacity-50">Steel</span>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent">
                                <h3 className="text-2xl font-bold text-white">Stahlguss</h3>
                                <span className="text-slate-300 text-sm font-medium">Der Extreme</span>
                            </div>
                        </div>
                        <div className="p-8">
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Für Bauteile mit höchsten Beanspruchungen. Schweißbar, zäh und extrem fest. Einsatz bei höchsten thermischen Lasten.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-sm text-slate-700">
                                    <Shield className="h-4 w-4 text-slate-500" /> <span>Schweißbar</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-slate-700">
                                    <Scale className="h-4 w-4 text-slate-500" /> <span>Höchste Belastbarkeit</span>
                                </div>
                            </div>
                            <div className="mt-8 pt-6 border-t border-slate-100">
                                <span className="text-xs font-bold text-slate-400 uppercase">Anwendungen</span>
                                <p className="text-sm text-slate-600 mt-1">Schwerindustrie, Kraftwerksbau, Offshore</p>
                            </div>
                        </div>
                    </div>

                    {/* Material Card: NE-Metalle */}
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:border-amber-200 transition-all hover:shadow-2xl">
                        <div className="h-48 bg-slate-200 relative flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-slate-800"></div>
                            <div className="relative z-10 text-center">
                                <span className="block text-5xl font-serif font-bold text-slate-600 select-none opacity-50">Al+Cu</span>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent">
                                <h3 className="text-2xl font-bold text-white">NE-Metalle</h3>
                                <span className="text-amber-400 text-sm font-medium">Die Speziellen</span>
                            </div>
                        </div>
                        <div className="p-8">
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Aluminium, Kupfer, Bronze. Leichte oder leitfähige Legierungen für spezielle technische oder optische Anforderungen.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-sm text-slate-700">
                                    <Database className="h-4 w-4 text-amber-500" /> <span>Korrosionsbeständig</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-slate-700">
                                    <Zap className="h-4 w-4 text-amber-500" /> <span>Leichtbau (Alu)</span>
                                </div>
                            </div>
                            <div className="mt-8 pt-6 border-t border-slate-100">
                                <span className="text-xs font-bold text-slate-400 uppercase">Anwendungen</span>
                                <p className="text-sm text-slate-600 mt-1">Elektrotechnik, Designobjekte, Leichtbau</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Consultation Banner */}
            <section className="bg-slate-900 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-serif font-bold text-white mb-4">Unsicher bei der Materialwahl?</h2>
                    <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                        Unsere Experten beraten Sie gerne zur optimalen Legierung für Ihren Anwendungsfall.
                    </p>
                    <Link href="/kontakt" className="inline-flex items-center justify-center px-8 py-3 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-200 transition-all">
                        Beratungstermin vereinbaren <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
