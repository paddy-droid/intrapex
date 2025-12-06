import Link from "next/link";
import { ArrowRight, History, Award, Users, Target } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Über Intrapex: Ihr Gießerei-Experte in Österreich",
    description: "Seit 1974 Ihr zuverlässiger Partner für Gusslösungen in Wien & Niederösterreich. Tradition, Qualität und Handschlagqualität.",
};

export default function About() {
    return (
        <div className="flex flex-col w-full bg-white">
            {/* Gentle Hero */}
            <section className="relative w-full py-24 bg-slate-50 border-b border-slate-200">
                <div className="container px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <span className="inline-block py-1 px-3 rounded-full bg-slate-200 text-slate-600 text-xs font-bold uppercase tracking-widest mb-4">Seit 1974</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6 tracking-tight">Tradition trifft Moderne.</h1>
                    <p className="text-slate-600 max-w-2xl mx-auto text-xl font-light leading-relaxed">
                        Als Familienunternehmen in zweiter Generation verbinden wir Handschlagqualität mit den Möglichkeiten eines europaweiten Produktionsnetzwerks.
                    </p>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-24 container max-w-5xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-orange-100 rounded-3xl transform rotate-3"></div>
                        <div className="relative bg-slate-900 rounded-3xl p-10 text-white shadow-2xl overflow-hidden">
                            <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                            <h3 className="text-2xl font-serif font-bold mb-6">Die Köpfe hinter Intrapex</h3>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center font-serif font-bold text-xl">W</div>
                                    <div>
                                        <h4 className="font-bold text-lg">Wolfgang Winkler</h4>
                                        <p className="text-slate-400 text-sm">Geschäftsführung (seit 1997)</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 opacity-75">
                                    <div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center font-serif font-bold text-xl">H</div>
                                    <div>
                                        <h4 className="font-bold text-lg">Ing. Heinrich Winkler</h4>
                                        <p className="text-slate-400 text-sm">Unternehmensgründer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Mehr als nur ein Händler.</h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            "Unser Anspruch war es nie, der Größte zu sein. Sondern der Beste für unsere Kunden."
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-8">
                            Intrapex versteht sich als technischer Partner. Wir nehmen Ihnen die Komplexität der Beschaffung ab – von der Auswahl der optimalen Gießerei bis zur qualitätsgesicherten Lieferung. Sie bekommen nicht einfach ein Teil, sondern eine Lösung.
                        </p>
                        <Link href="/kontakt" className="text-orange-600 font-bold hover:text-orange-700 inline-flex items-center gap-2">
                            Kontakt aufnehmen <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Timeline - Enhanced */}
            <section className="py-24 bg-slate-50">
                <div className="container max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4 text-center">Unsere Geschichte</h2>
                    <p className="text-slate-600 text-center max-w-2xl mx-auto mb-16">
                        Von einer kleinen Handelsagentur zum Netzwerk für industrielle Gusslösungen. Ein Weg, geprägt von Beständigkeit und Wandel.
                    </p>

                    <div className="relative border-l-2 border-slate-200 ml-4 md:ml-0 md:pl-0 space-y-12">

                        {/* 1974 - Gründung */}
                        <div className="relative md:grid md:grid-cols-2 gap-12 items-start">
                            <div className="hidden md:block text-right pr-6 pt-1">
                                <h3 className="text-4xl font-black text-slate-200">1974</h3>
                            </div>
                            <div className="absolute top-2 left-[-9px] md:left-1/2 md:ml-[-9px] h-4 w-4 rounded-full bg-orange-500 shadow-[0_0_0_4px_#fff]"></div>
                            <div className="pl-6 md:pl-6 pb-8">
                                <span className="inline-block md:hidden text-2xl font-black text-slate-200 mb-2">1974</span>
                                <h4 className="font-bold text-lg text-slate-900 mb-2">Gründung in Tulln</h4>
                                <p className="text-slate-600 leading-relaxed">
                                    Ing. Heinrich Winkler gründet das Unternehmen als Einzelunternehmen. Fokus liegt zunächst auf dem Vertrieb von Gussprodukten für die lokale Landwirtschaft und den Maschinenbau.
                                </p>
                            </div>
                        </div>

                        {/* 1985 - Erste Großprojekte */}
                        <div className="relative md:grid md:grid-cols-2 gap-12 items-start">
                            <div className="col-start-2 pl-6 md:pl-6 pt-1 hidden md:block">
                                <h3 className="text-4xl font-black text-slate-200">1985</h3>
                            </div>
                            <div className="absolute top-2 left-[-9px] md:left-1/2 md:ml-[-9px] h-4 w-4 rounded-full bg-slate-300 shadow-[0_0_0_4px_#fff]"></div>
                            <div className="pl-6 md:text-right md:pr-6 pb-8">
                                <span className="inline-block md:hidden text-2xl font-black text-slate-200 mb-2">1985</span>
                                <h4 className="font-bold text-lg text-slate-900 mb-2">Expansion in den Kommunalbereich</h4>
                                <p className="text-slate-600 leading-relaxed">
                                    Erste große Aufträge für Kanalguss und Straßenausstattung. Intrapex etabliert sich als zuverlässiger Partner für Gemeinden in Niederösterreich.
                                </p>
                            </div>
                        </div>

                        {/* 1997 - Übernahme */}
                        <div className="relative md:grid md:grid-cols-2 gap-12 items-start">
                            <div className="hidden md:block text-right pr-6 pt-1">
                                <h3 className="text-4xl font-black text-slate-200">1997</h3>
                            </div>
                            <div className="absolute top-2 left-[-9px] md:left-1/2 md:ml-[-9px] h-4 w-4 rounded-full bg-slate-300 shadow-[0_0_0_4px_#fff]"></div>
                            <div className="pl-6 md:pl-6 pb-8">
                                <span className="inline-block md:hidden text-2xl font-black text-slate-200 mb-2">1997</span>
                                <h4 className="font-bold text-lg text-slate-900 mb-2">Generationenwechsel</h4>
                                <p className="text-slate-600 leading-relaxed">
                                    Wolfgang Winkler übernimmt die Geschäftsführung. Beginn der Digitalisierung und Ausbau des Partnernetzwerks nach Osteuropa (Tschechien, Slowakei), um wettbewerbsfähige Konditionen bei hoher Qualität zu sichern.
                                </p>
                            </div>
                        </div>

                        {/* 2008 - Spezialisierung */}
                        <div className="relative md:grid md:grid-cols-2 gap-12 items-start">
                            <div className="col-start-2 pl-6 md:pl-6 pt-1 hidden md:block">
                                <h3 className="text-4xl font-black text-slate-200">2008</h3>
                            </div>
                            <div className="absolute top-2 left-[-9px] md:left-1/2 md:ml-[-9px] h-4 w-4 rounded-full bg-slate-300 shadow-[0_0_0_4px_#fff]"></div>
                            <div className="pl-6 md:text-right md:pr-6 pb-8">
                                <span className="inline-block md:hidden text-2xl font-black text-slate-200 mb-2">2008</span>
                                <h4 className="font-bold text-lg text-slate-900 mb-2">Fokus auf Architektur-Guss</h4>
                                <p className="text-slate-600 leading-relaxed">
                                    Start der Spezialisierung auf Stiegenziergitter und historische Rekonstruktionen für den Wiener Markt. Aufbau einer eigenen Datenbank für historische Gussmodelle.
                                </p>
                            </div>
                        </div>

                        {/* Heute */}
                        <div className="relative md:grid md:grid-cols-2 gap-12 items-start">
                            <div className="hidden md:block text-right pr-6 pt-1">
                                <h3 className="text-4xl font-black text-slate-200">Heute</h3>
                            </div>
                            <div className="absolute top-2 left-[-9px] md:left-1/2 md:ml-[-9px] h-4 w-4 rounded-full bg-blue-600 shadow-[0_0_0_4px_#fff]"></div>
                            <div className="pl-6 md:pl-6">
                                <span className="inline-block md:hidden text-2xl font-black text-slate-200 mb-2">Heute</span>
                                <h4 className="font-bold text-lg text-slate-900 mb-2">Ihr Guss-Netzwerk</h4>
                                <p className="text-slate-600 leading-relaxed">
                                    Intrapex ist heute die Schnittstelle zwischen österreichischen Industriekunden und hochspezialisierten Gießereien in ganz Europa.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <Award className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Qualität</h3>
                            <p className="text-slate-400">Keine Kompromisse. Wir arbeiten nur mit zertifizierten Partnern.</p>
                        </div>
                        <div className="text-center p-6">
                            <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Partnerschaft</h3>
                            <p className="text-slate-400">Ehrlicher Umgang und langfristige Beziehungen zu Kunden und Lieferanten.</p>
                        </div>
                        <div className="text-center p-6">
                            <Target className="h-12 w-12 text-green-500 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Präzision</h3>
                            <p className="text-slate-400">Vom Angebot bis zur Lieferung – exaktes Arbeiten ist unser Standard.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
