import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Box, Compass, Hammer, Layers, MapPin, CheckCircle2, Factory, Warehouse, Building2 } from "lucide-react";
import type { Metadata } from "next";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { ProblemSolutionSection } from "@/components/sections/ProblemSolutionSection";
import { NicheServicesSection } from "@/components/sections/NicheServicesSection";
import { IndustrialDeepDiveSection } from "@/components/sections/IndustrialDeepDiveSection";
import { TechnicalDataSection } from "@/components/sections/TechnicalDataSection";

export const metadata: Metadata = {
    title: "Gießerei Niederösterreich | Industrieguss & Kunstguss Intrapex",
    description: "Ihr leistungsstarker Partner für Gießerei-Produkte in Niederösterreich. Von St. Pölten bis Wiener Neustadt – wir liefern Grauguss und Sphäroguss höchster Güte.",
    keywords: ["Gießerei Niederösterreich", "Kunstguss NÖ", "Grauguss Niederösterreich", "Gießerei St. Pölten", "Gießerei Wiener Neustadt", "Industrieguss NÖ"],
};

export default function GiessereiNiederoesterreich() {
    return (
        <div className="flex flex-col w-full bg-slate-50">
            {/* 1. Hero Section */}
            <section className="relative w-full h-[85vh] min-h-[700px] flex items-center justify-center overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src="/Intrapex Gusswerk Wien.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80 z-10"></div>

                <div className="container relative z-20 px-4 text-center">
                    <div className="animate-fade-in-up">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-orange-600/90 text-white text-xs font-bold uppercase tracking-widest mb-6 shadow-lg backdrop-blur-sm">
                            Für Industrie & Gewerbe in NÖ
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-xl">
                            Gießerei-Exzellenz <br />
                            <span className="text-orange-500">für Niederösterreich</span>
                        </h1>
                        <p className="text-slate-100 max-w-3xl mx-auto text-xl md:text-2xl font-light mb-12 leading-relaxed drop-shadow-md">
                            Vom Industrieviertel bis ins Waldviertel – wir liefern maßgeschneiderte Gusslösungen für den größten Wirtschaftsraum Österreichs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <Link href="/kontakt" className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transition-all shadow-xl hover:shadow-orange-500/30 hover:-translate-y-1">
                                Angebot für NÖ anfordern <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link href="/leistungen" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all backdrop-blur-md border border-white/20 hover:border-white/40">
                                Alle Leistungen
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Intro & Local Relevance */}
            <section className="py-24 bg-white relative">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-2">Starker Partner</h2>
                                <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                                    Guss-Kompetenz für Österreichs größtes Bundesland
                                </h3>
                            </div>
                            <div className="prose prose-lg text-slate-600">
                                <p>
                                    Niederösterreich ist das Herz der österreichischen Industrie. Wir verstehen die Bedürfnisse der produzierenden Betriebe im <strong>Industrieviertel</strong> genauso wie die Ansprüche an ästhetischen Bauguss im <strong>Weinviertel</strong> oder der <strong>Wachau</strong>.
                                </p>
                                <p>
                                    Unsere Gießerei bietet eine einzigartige Kombination aus technischer Präzision für den Maschinenbau und handwerklicher Finesse für die Denkmalpflege. Ob Ersatzteile für Landmaschinen im Mostviertel oder Gusssäulen für Villen in Baden – wir sind Ihr lokaler Ansprechpartner.
                                </p>
                                <p>
                                    Durch unsere Nähe zu den wichtigen Verkehrsachsen (A1, A2, S1) garantieren wir flexible Logistiklösungen für ganz Niederösterreich.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6 pt-4">
                                <div className="flex items-start gap-3 p-4 rounded-xl bg-orange-50 border border-orange-100">
                                    <Factory className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-slate-900">Industrie-Standard</h4>
                                        <p className="text-sm text-slate-600">Zertifizierte Qualität für NÖ-Betriebe.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <MapPin className="h-6 w-6 text-slate-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-slate-900">Kurze Wege</h4>
                                        <p className="text-sm text-slate-500">Schnelle Lieferung nach St. Pölten & Co.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
                                <Image
                                    src="/Gusswerk_-Gießerei-Niederösterreich.webp"
                                    alt="Industrieguss Produktion Niederösterreich"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
                                        <p className="font-serif font-bold text-2xl text-slate-900 mb-2">Fertigungskompetenz</p>
                                        <p className="text-slate-600">Von Tulln aus in alle Viertel Niederösterreichs.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Detailed Services Section (NÖ Focused) */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Leistungsspektrum NÖ</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">Für jeden Bedarf die richtige Legierung</h2>
                        <p className="text-slate-400 text-lg">
                            Wir decken den gesamten Bedarf der niederösterreichischen Wirtschaft ab – vom hochfesten Maschinenguss bis zum filigranen Kunstguss.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {/* Card 1: Heavy Industry */}
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all hover:bg-slate-800 group">
                            <div className="h-14 w-14 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Warehouse className="h-7 w-7 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Maschinenbau & Anlagen</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Robuster Grauguss (EN-GJL) für Maschinenbetten, Getriebegehäuse und Schwungräder. Perfekt für die Zulieferindustrie im Raum Wiener Neustadt und Amstetten.
                            </p>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Hohe Dämpfungseigenschaften</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Spannungsarm geglüht</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> CNC-Bearbeitung möglich</li>
                            </ul>
                        </div>

                        {/* Card 2: Infrastructure */}
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all hover:bg-slate-800 group relative transform md:-translate-y-4 shadow-2xl shadow-orange-900/20">
                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500"></div>
                            <div className="h-14 w-14 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Layers className="h-7 w-7 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Infrastruktur & Bau</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Langlebiger Sphäroguss (EN-GJS) für Kanaldeckel, Poller und Straßenmobiliar. Widerstandsfähig gegen hohe Belastungen und Korrosion. Im Einsatz in niederösterreichischen Gemeinden.
                            </p>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Bruchfest & Zäh</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Individuelles Gemeindewappen möglich</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Große Serienkapazität</li>
                            </ul>
                        </div>

                        {/* Card 3: Architecture */}
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all hover:bg-slate-800 group">
                            <div className="h-14 w-14 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Building2 className="h-7 w-7 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Architektur & Renovierung</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Stilechte Rekonstruktion für Schlösser, Kirchen und Bürgerhäuser. Von Krems bis Baden. Wir fertigen Geländer, Fenstergitter und historische Leuchten nach Originalvorlage.
                            </p>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Feinste Detailwiedergabe</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Restaurierung von Bestand</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Eigener Modellbau</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <ProblemSolutionSection region="Niederösterreich" />

            <NicheServicesSection region="Niederösterreich" />

            <IndustrialDeepDiveSection region="Niederösterreich" />
            <TechnicalDataSection region="Niederösterreich" />

            {/* Private Households Section */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">Privathaushalte</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2 mb-6">Exklusive Stiegenziergitter</h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                Wir fertigen nicht nur für die Industrie. Verleihen Sie Ihrem Zuhause mit unseren kunstvollen Stiegen- und Balkongeländern einen einzigartigen Charakter. Individuell geplant und gegossen.
                            </p>
                            <Link href="/stiegenziergitter-wien" className="inline-flex items-center text-orange-600 font-bold hover:text-orange-700 hover:underline">
                                Mehr zu Stiegenziergittern <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl order-1 md:order-2">
                            <Image
                                src="/stiegen-ziergitter-wien.webp"
                                alt="Stiegenziergitter für Privathaushalte"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. FAQ Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-16">
                        <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">Häufige Fragen</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">Fragen unserer Kunden aus NÖ</h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Liefern Sie auch in entlegene Gebiete des Waldviertels?</AccordionTrigger>
                            <AccordionContent>
                                Ja, selbstverständlich. Wir beliefern Kunden in ganz Niederösterreich, egal ob Zwettl, Gmünd oder Horn. Durch unsere Speditionspartner gewährleisten wir eine zuverlässige Zustellung auch abseits der Hauptverkehrsrouten.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger>Können Sie Serienfertigung für Landmaschinen-Teile übernehmen?</AccordionTrigger>
                            <AccordionContent>
                                Absolut. Wir sind auf Klein- und Mittelserien spezialisiert, wie sie oft im Landmaschinenbau benötigt werden. Robuste Grauguss-Komponenten fertigen wir nach Ihren CAD-Daten präzise und wiederholgenau.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger>Restaurieren Sie auch Gusseisen-Elemente von Weinkellern?</AccordionTrigger>
                            <AccordionContent>
                                Ja, gerade in den Weinbauregionen (Wachau, Weinviertel) haben wir bereits viele Projekte betreut. Wir sanieren alte Kellergitter, Lüftungsgitter oder Torbeschläge und stellen fehlende Teile originalgetreu wieder her.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                            <AccordionTrigger>Wie läuft die Zusammenarbeit bei einem neuen Modell ab?</AccordionTrigger>
                            <AccordionContent>
                                Sie senden uns Ihre Zeichnung oder das defekte Originalteil. Unser Modellbau erstellt daraus ein Gussmodell aus Holz, Kunststoff oder Metall. Nach dem Probeguss und Ihrer Freigabe starten wir die Produktion.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
                <div className="container px-4 relative z-10">
                    <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4 block">Regional & Kompetent</span>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">Wir gießen Ihre Ideen</h2>
                    <p className="text-slate-300 text-xl max-w-2xl mx-auto mb-12 font-light">
                        Profitieren Sie von unserer Erfahrung und Nähe. Ihr Gießerei-Partner für ganz Niederösterreich.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/kontakt" className="inline-flex items-center justify-center px-10 py-5 bg-orange-600 text-white font-bold text-lg rounded-full hover:bg-orange-700 transition-all shadow-xl hover:shadow-orange-500/40 hover:-translate-y-1">
                            Anfrage senden
                        </Link>
                        <Link href="tel:+436644503177" className="inline-flex items-center justify-center px-10 py-5 bg-transparent border-2 border-slate-700 text-white font-bold text-lg rounded-full hover:bg-slate-800 transition-all hover:border-slate-500">
                            Telefonische Beratung
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

const motion_div = ({ children, ...props }: any) => <div {...props}>{children}</div>;
