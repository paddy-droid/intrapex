import { Factory, Cog, Layers, Gauge, ShieldCheck, Microscope } from 'lucide-react';

interface IndustrialDeepDiveSectionProps {
    region?: string;
}

export function IndustrialDeepDiveSection({ region }: IndustrialDeepDiveSectionProps) {
    const regionSuffix = region ? ` für Unternehmen in ${region}` : '';

    return (
        <section className="py-24 bg-slate-50 text-slate-900 border-t border-slate-200">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto mb-16">
                    <span className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-2 block">
                        Technologie im Detail
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                        Industrieguss & Werkstoffkompetenz
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Erfolgreiche Gussprojekte basieren auf der korrekten Wahl von Werkstoff und Verfahren.
                        Als spezialisierter Partner{regionSuffix} bieten wir tiefgehendes metallurgisches Know-how.
                        Wir fertigen nach DIN EN 1561 (Grauguss) und DIN EN 1563 (Sphäroguss) mit lückenloser Dokumentation.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Grauguss Block */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="h-12 w-12 bg-slate-200 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Layers className="h-6 w-6 text-slate-700" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">Grauguss (EN-GJL)</h3>
                                <p className="text-sm text-slate-500 font-mono">Lamellengraphit</p>
                            </div>
                        </div>
                        <div className="prose prose-slate text-slate-600">
                            <p>
                                Grauguss mit Lamellengraphit ist der Klassiker im Maschinenbau. Seine herausragende Eigenschaft ist die
                                <strong> exzellente Dämpfungsfähigkeit</strong>, die Vibrationen in Maschinenbetten und Gehäusen effektiv absorbiert.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-4">
                                <li><strong>Zerspanbarkeit:</strong> Durch den eingelagerten Graphit entstehen kurze Späne, was hohe Schnittgeschwindigkeiten ermöglicht.</li>
                                <li><strong>Druckfestigkeit:</strong> Übertrifft Stahl bei weitem, ideal für statisch belastete Sockel.</li>
                                <li><strong>Anwendungen:</strong> Getriebegehäuse, Motorblöcke, Pumpenkörper, Werkzeugmaschinenbetten.</li>
                            </ul>
                            <div className="mt-4 bg-white p-4 rounded-lg border border-slate-200 text-sm">
                                <span className="font-bold block mb-1">Verfügbare Güten:</span>
                                EN-GJL-150, EN-GJL-200, EN-GJL-250, EN-GJL-300
                            </div>
                        </div>
                    </div>

                    {/* Sphäroguss Block */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="h-12 w-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Cog className="h-6 w-6 text-orange-600" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">Sphäroguss (EN-GJS)</h3>
                                <p className="text-sm text-slate-500 font-mono">Kugelgraphit</p>
                            </div>
                        </div>
                        <div className="prose prose-slate text-slate-600">
                            <p>
                                Durch Magnesiumbehandlung formt sich der Graphit kugelförmig aus. Das Ergebnis ist ein Werkstoff, der die
                                <strong> Duktilität von Stahl</strong> mit der Gießbarkeit von Gusseisen verbindet.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-4">
                                <li><strong>Zähigkeit:</strong> Hohe Bruchdehnung verhindert Rissbildung bei schlagartiger Belastung.</li>
                                <li><strong>Festigkeit:</strong> Zugfestigkeiten bis zu 800 N/mm² erreichbar.</li>
                                <li><strong>Anwendungen:</strong> Sicherheitsrelevante Fahrwerksteile, Kurbelwellen, Turbinengehäuse, hochbelastete Armaturen.</li>
                            </ul>
                            <div className="mt-4 bg-white p-4 rounded-lg border border-slate-200 text-sm">
                                <span className="font-bold block mb-1">Verfügbare Güten:</span>
                                EN-GJS-400-15, EN-GJS-500-7, EN-GJS-600-3, EN-GJS-700-2
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-16 border-slate-200" />

                {/* Process & Deep Tech */}
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <Gauge className="h-8 w-8 text-orange-500 mb-4" />
                        <h4 className="font-bold text-lg mb-3">Maßgenauigkeit & Toleranzen</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Wir fertigen standardmäßig nach <strong>ISO 8062-3 DCTG 8-11</strong> für Handformguss und DCTG 6-9 für Maschinenformguss.
                            Bearbeitungszugaben werden exakt auf Ihren Maschinenpark abgestimmt (Standard 3-5mm).
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <Microscope className="h-8 w-8 text-orange-500 mb-4" />
                        <h4 className="font-bold text-lg mb-3">Metallurgie & Gefüge</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Lunkerfreiheit und homogenes Gefüge sind unser Standard. Durch <strong>Gießsimulationen (MagmaSoft)</strong> optimieren wir
                            Anschnitt- und Speisersysteme bereits vor dem ersten Abguss, um Porositäten zu vermeiden.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <ShieldCheck className="h-8 w-8 text-orange-500 mb-4" />
                        <h4 className="font-bold text-lg mb-3">Zerstörungsfreie Prüfung (ZfP)</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Für kritische Bauteile bieten wir das volle Spektrum der Qualitätssicherung:
                            Ultraschallprüfung (UT), Farbeindringprüfung (PT), Magnetpulverprüfung (MT) und Röntgen (RT) inkl. Protokollierung.
                        </p>
                    </div>
                </div>

                <div className="mt-16 p-8 bg-slate-900 rounded-2xl text-white">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1">
                            <h4 className="text-2xl font-serif font-bold mb-4">Technische Beratung & Konstruktion</h4>
                            <p className="text-slate-300">
                                Gussgerechte Konstruktion spart bis zu 30% Kosten. Unsere Ingenieure unterstützen Sie beim Design,
                                um Kernformaufwand zu minimieren und Formschrägen optimal zu setzen. Senden Sie uns Ihre STEP-Daten zur Analyse.
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <Factory className="h-24 w-24 text-slate-800" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
