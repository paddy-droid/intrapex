interface TechnicalDataSectionProps {
    region?: string;
}

export function TechnicalDataSection({ region }: TechnicalDataSectionProps) {
    const regionSuffix = region ? ` für Projekte in ${region}` : '';

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-10">
                    <h3 className="text-2xl font-serif font-bold text-slate-900">
                        Technische Kapazitäten im Überblick
                    </h3>
                    <p className="text-slate-600 max-w-2xl mx-auto mt-2">
                        Unsere Gießerei-Kapazitäten sind darauf ausgelegt, ein breites Spektrum an industriellen Anforderungen abzudecken.
                        Sowohl für die Einzelfertigung von Prototypen als auch für die Serienproduktion bieten wir flexible Lösungen{regionSuffix}.
                    </p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl bg-white">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-slate-900 text-white">
                                <tr>
                                    <th className="p-4 md:p-5 font-bold border-b border-slate-800 whitespace-nowrap">
                                        Werkstoff
                                    </th>
                                    <th className="p-4 md:p-5 font-bold border-b border-slate-800 whitespace-nowrap">
                                        Normen (Auszug)
                                    </th>
                                    <th className="p-4 md:p-5 font-bold border-b border-slate-800 whitespace-nowrap">
                                        Gewichte
                                    </th>
                                    <th className="p-4 md:p-5 font-bold border-b border-slate-800 whitespace-nowrap">
                                        Anwendungen
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-700 divide-y divide-slate-100">
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-4 md:p-5 font-bold text-slate-900">
                                        Grauguss
                                    </td>
                                    <td className="p-4 md:p-5 font-mono text-xs md:text-sm bg-slate-50/50">
                                        EN-GJL-150 bis 300
                                    </td>
                                    <td className="p-4 md:p-5 whitespace-nowrap">
                                        0,5 kg bis 8.000 kg
                                    </td>
                                    <td className="p-4 md:p-5 text-sm">
                                        Maschinensockel, Kanalguss, Öfen
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-4 md:p-5 font-bold text-slate-900">
                                        Sphäroguss
                                    </td>
                                    <td className="p-4 md:p-5 font-mono text-xs md:text-sm bg-slate-50/50">
                                        EN-GJS-400 bis 700
                                    </td>
                                    <td className="p-4 md:p-5 whitespace-nowrap">
                                        0,5 kg bis 3.000 kg
                                    </td>
                                    <td className="p-4 md:p-5 text-sm">
                                        Fahrwerksteile, Armaturen, Zahnräder
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-4 md:p-5 font-bold text-slate-900">
                                        Stahlguss
                                    </td>
                                    <td className="p-4 md:p-5 font-mono text-xs md:text-sm bg-slate-50/50">
                                        GS-45 bis GS-60
                                    </td>
                                    <td className="p-4 md:p-5 whitespace-nowrap">
                                        10 kg bis 5.000 kg
                                    </td>
                                    <td className="p-4 md:p-5 text-sm">
                                        Hochbelastete Bauteile, Verschleißteile
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-4 md:p-5 font-bold text-slate-900">
                                        Aluminium
                                    </td>
                                    <td className="p-4 md:p-5 font-mono text-xs md:text-sm bg-slate-50/50">
                                        AlSi-Legierungen
                                    </td>
                                    <td className="p-4 md:p-5 whitespace-nowrap">
                                        0,1 kg bis 500 kg
                                    </td>
                                    <td className="p-4 md:p-5 text-sm">
                                        Leichtbau, Gehäuse, Motorenteile
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Additional SEO Context for Crawler */}
                <div className="mt-8 text-sm text-slate-500 bg-slate-50 p-6 rounded-xl border border-slate-100">
                    <p className="leading-relaxed">
                        Die oben aufgeführten technischen Daten repräsentieren unsere Standard-Kapazitäten.
                        Für spezielle legierungstechnische Anforderungen (z.B. hitzebeständiger Guss, Ni-Resist) oder
                        Übergrößen kontaktieren Sie bitte unsere Technik-Abteilung. Wir passen unsere Formverfahren
                        (Handformguss, Maschinenformguss) optimal an Ihre Losgrößen und Qualitätsanforderungen an.
                    </p>
                </div>
            </div>
        </section>
    );
}
