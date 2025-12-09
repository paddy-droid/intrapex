import Link from 'next/link';
import { AlertTriangle, RefreshCcw, FileSearch, PenTool, CheckCircle, Layers, ArrowRight } from 'lucide-react';

interface ProblemSolutionSectionProps {
    region?: string;
}

export function ProblemSolutionSection({ region }: ProblemSolutionSectionProps) {
    const regionText = region ? ` in ${region}` : '';

    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-800/10 skew-x-12 transform origin-top-right"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-orange-900/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Title area */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-2 block">
                        Wenn es keinen Ersatz mehr gibt
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                        Ersatzteilguss & Reverse Engineering{regionText}
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Maschinenstillstand wegen fehlender Gussteile? Der Originalhersteller existiert nicht mehr?
                        Intrapex ist Ihr Spezialist für <strong>Ersatzteile für historische Maschinen</strong> und <strong>Abkündigung Ersatzteile Gussnachfertigung</strong>.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    {/* The Problem (Pain) */}
                    <div className="bg-slate-800/40 p-8 rounded-2xl border border-red-900/40 backdrop-blur-sm relative transition-all hover:bg-slate-800/60">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-900 rounded-t-2xl"></div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-12 w-12 rounded-full bg-red-900/20 flex items-center justify-center text-red-500 shadow-lg shadow-red-900/10">
                                <AlertTriangle className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Das Problem</h3>
                        </div>
                        <ul className="space-y-6 text-slate-300">
                            <li className="flex gap-4 items-start">
                                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-red-900/30 text-red-500 flex items-center justify-center text-xs font-bold mt-0.5">✕</span>
                                <div>
                                    <strong className="block text-white mb-1">Abkündigung von Ersatzteilen</strong>
                                    Der Originalhersteller (OEM) liefert nicht mehr oder ist insolvent. Ihre Anlage steht still.
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-red-900/30 text-red-500 flex items-center justify-center text-xs font-bold mt-0.5">✕</span>
                                <div>
                                    <strong className="block text-white mb-1">Keine Zeichnungen vorhanden</strong>
                                    Konstruktionsdaten sind verloren gegangen. Sie haben nur das defekte Teil.
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-red-900/30 text-red-500 flex items-center justify-center text-xs font-bold mt-0.5">✕</span>
                                <div>
                                    <strong className="block text-white mb-1">Verschleiß an Altmaschinen</strong>
                                    Ersatzteile für historische Maschinen oder Oldtimer sind am Markt nicht mehr verfügbar.
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* The Solution (Gain) */}
                    <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 p-8 rounded-2xl border border-green-500/30 backdrop-blur-sm relative shadow-2xl shadow-green-900/10 transition-all hover:-translate-y-1">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-t-2xl"></div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 shadow-lg shadow-green-500/20">
                                <RefreshCcw className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Die Intrapex Lösung</h3>
                        </div>
                        <ul className="space-y-6 text-slate-300">
                            <li className="flex gap-4 items-start">
                                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <strong className="block text-white mb-1">Reverse Engineering Guss</strong>
                                    Wir scannen Ihr defektes Bauteil mittels 3D-Scan und analysieren die Materialzusammensetzung im Labor.
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <strong className="block text-white mb-1">Gussteile nachzeichnen lassen</strong>
                                    Unsere Ingenieure erstellen neue, normgerechte CAD-Daten und Zeichnungen für die Fertigung.
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <strong className="block text-white mb-1">Passgenauer Ersatzteilguss</strong>
                                    Fertigung des Ersatzteils als Einzelstück oder Kleinserie. Besser als das Original dank moderner Werkstoffe.
                                </div>
                            </li>
                        </ul>
                        <div className="mt-8 pt-6 border-t border-white/10">
                            <Link href="/kontakt" className="flex items-center justify-between w-full p-4 rounded-xl bg-orange-600 hover:bg-orange-700 transition-colors group">
                                <span className="font-bold text-white">Jetzt Ersatzteil anfragen</span>
                                <ArrowRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Keywords Bar / Workflow Links */}
                <div className="mt-20">
                    <div className="text-center mb-10">
                        <h4 className="text-xl font-serif font-bold text-white">Unser Prozess: Vom Altteil zum Neuteil</h4>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700 hover:border-orange-500/30 transition-colors text-center group">
                            <div className="h-10 w-10 mx-auto mb-4 text-orange-500 group-hover:scale-110 transition-transform">
                                <FileSearch className="h-full w-full" />
                            </div>
                            <h5 className="font-bold text-white mb-2">1. Analyse</h5>
                            <p className="text-xs text-slate-400">3D-Scan & Spektralanalyse des Altteils</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700 hover:border-orange-500/30 transition-colors text-center group">
                            <div className="h-10 w-10 mx-auto mb-4 text-orange-500 group-hover:scale-110 transition-transform">
                                <PenTool className="h-full w-full" />
                            </div>
                            <h5 className="font-bold text-white mb-2">2. Re-Design</h5>
                            <p className="text-xs text-slate-400">Erstellung CAD-Modell & Zeichnungen</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700 hover:border-orange-500/30 transition-colors text-center group">
                            <div className="h-10 w-10 mx-auto mb-4 text-orange-500 group-hover:scale-110 transition-transform">
                                <Layers className="h-full w-full" />
                            </div>
                            <h5 className="font-bold text-white mb-2">3. Modellbau</h5>
                            <p className="text-xs text-slate-400">3D-Druck oder CNC-Fräsen des Modells</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700 hover:border-orange-500/30 transition-colors text-center group">
                            <div className="h-10 w-10 mx-auto mb-4 text-green-500 group-hover:scale-110 transition-transform">
                                <RefreshCcw className="h-full w-full" />
                            </div>
                            <h5 className="font-bold text-white mb-2">4. Guss</h5>
                            <p className="text-xs text-slate-400">Abguss, Bearbeitung & Lieferung</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
