import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Factory, MapPin, Box, Layers } from "lucide-react";
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

export const metadata = {
    title: "Gießerei für Vorarlberg | Intrapex",
    description: "Ihr Partner für Gießerei-Produkte in Vorarlberg. Hochwertiger Guss für die renommierte Vorarlberger Architektur und die starke Export-Industrie im Rheintal.",
    keywords: ["Gießerei Vorarlberg", "Kunstguss Bregenz", "Bauguss Dornbirn", "Industrieguss Rheintal", "Gusseisen Feldkirch"],
};

export default function GiessereiVorarlberg() {
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
                            Qualität für das Ländle
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-xl">
                            Präzisionsguss <br />
                            <span className="text-orange-500">für Vorarlberg</span>
                        </h1>
                        <p className="text-slate-100 max-w-3xl mx-auto text-xl md:text-2xl font-light mb-12 leading-relaxed drop-shadow-md">
                            Die Vorarlberger Architektur und Industrie setzen Maßstäbe. Wir liefern die passenden Gusskomponenten – puristisch, funktional und langlebig.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <Link href="/kontakt" className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transition-all shadow-xl hover:shadow-orange-500/30 hover:-translate-y-1">
                                Anfrage aus Vorarlberg <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link href="/leistungen" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all backdrop-blur-md border border-white/20 hover:border-white/40">
                                Grauguss & Design
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Intro & Local Relevance (Architecture/Industry) */}
            <section className="py-24 bg-white relative">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-2">Vorarlberger Schule</h2>
                                <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                                    Funktionalität & Ästhetik im Einklang
                                </h3>
                            </div>
                            <div className="prose prose-lg text-slate-600">
                                <p>
                                    Vorarlberg ist bekannt für seine anspruchsvolle Baukultur. Die Verbindung von Holz, Glas und Beton verlangt nach ebenso hochwertigen Metall-Elementen. Intrapex liefert <strong>Architekturguss</strong>, der sich nahtlos in moderne Konzepte einfügt oder historische Substanz in <strong>Bregenz</strong> und <strong>Feldkirch</strong> würdig ergänzt.
                                </p>
                                <p>
                                    Gleichzeitig ist das Rheintal ein pulsierender Industriestandort. Für die exportstarken Unternehmen im Bereich Maschinenbau, Beschläge und Seilbahntechnik liefern wir präzise <strong>Gusskomponenten</strong> &quot;just-in-time&quot;.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6 pt-4">
                                <div className="flex items-start gap-3 p-4 rounded-xl bg-orange-50 border border-orange-100">
                                    <Layers className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-slate-900">Design-Affinität</h4>
                                        <p className="text-sm text-slate-600">Guss als Gestaltungselement.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <Factory className="h-6 w-6 text-slate-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-slate-900">High-Tech Industrie</h4>
                                        <p className="text-sm text-slate-500">Zulieferer für Weltmarktführer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
                                <Image
                                    src="/industrieguss-serien.webp"
                                    alt="Architekturguss Vorarlberg"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
                                        <p className="font-serif font-bold text-2xl text-slate-900 mb-2">Form & Funktion</p>
                                        <p className="text-slate-600">Perfekte Details für anspruchsvolle Bauten.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-slate-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Detailed Services Section (Vorarlberg Focused) */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Leistungen für das Rheintal</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">Präzision aus Tradition</h2>
                        <p className="text-slate-400 text-lg">
                            Ob Dornbirn, Lustenau oder Bludenz – wir sind Ihr Partner für Guss in allen Facetten.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {/* Card 1: Modern Architecure */}
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all hover:bg-slate-800 group relative transform md:-translate-y-4 shadow-2xl shadow-orange-900/20">
                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-500 via-blue-500 to-orange-500"></div>
                            <div className="h-14 w-14 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Box className="h-7 w-7 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Moderne Architektur</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Schlichte Guss-Elemente für den modernen Holzbau. Gitterroste, Fassadenelemente oder schlichte Geländerstäbe, die sich zurücknehmen und den Raum wirken lassen.
                            </p>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Klare Formensprache</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Hohe Oberflächengüte</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Integration in Holzkonstruktionen</li>
                            </ul>
                        </div>

                        {/* Card 2: Industry */}
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all hover:bg-slate-800 group">
                            <div className="h-14 w-14 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Factory className="h-7 w-7 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Industriezulieferung</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Serienfertigung für den Maschinen- und Anlagenbau. Getriebeteile, Lagergehäuse und Hydraulik-Komponenten. Zuverlässig und termintreu für Ihre Supply Chain.
                            </p>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Rahmenverträge möglich</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Logistikkonzepte (Kammban, etc.)</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Null-Fehler-Strategie</li>
                            </ul>
                        </div>

                        {/* Card 3: Urban Design */}
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all hover:bg-slate-800 group">
                            <div className="h-14 w-14 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <MapPin className="h-7 w-7 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Öffentlicher Raum</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Stadtmöblierung für die Begegnungszonen in Vorarlbergs Städten und Gemeinden. Langlebige Sitzbänke, Baumscheiben und Absperrungen.
                            </p>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Vandalismussicher</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Zeitloses Design</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Nachhaltiger Werkstoff (100% Recycling)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <ProblemSolutionSection region="Vorarlberg" />

            <NicheServicesSection region="Vorarlberg" />

            <IndustrialDeepDiveSection region="Vorarlberg" />
            <TechnicalDataSection region="Vorarlberg" />

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
                        <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">Fragen & Antworten</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">Häufige Fragen aus Vorarlberg</h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Wie schnell können Sie nach Vorarlberg liefern?</AccordionTrigger>
                            <AccordionContent>
                                Durch unser optimiertes Logistiknetzwerk erreichen wir das Rheintal in der Regel innerhalb von 24h nach Versandbereitschaft. Expresslieferungen für dringende Ersatzteile sind möglich.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger>Bearbeiten Sie CAD-Daten direkt?</AccordionTrigger>
                            <AccordionContent>
                                Ja, wir arbeiten volldigital. Sie senden uns Ihr STEP-File, wir prüfen die Gießgerechtigkeit, simulieren bei Bedarf den Gießprozess und starten direkt den Modellbau.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger>Können Sie auch Aluminium gießen?</AccordionTrigger>
                            <AccordionContent>
                                Unser Fokus und unsere Kernkompetenz liegen bei Eisenwerkstoffen (Grauguss, Sphäroguss, Stahlguss). Für Aluminiumprojekte können wir jedoch auf langjährige Partner in unserem Netzwerk zurückgreifen. Fragen Sie uns gerne an.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                            <AccordionTrigger>Beraten Sie auch vor Ort in Vorarlberg?</AccordionTrigger>
                            <AccordionContent>
                                Bei größeren Projekten (z.B. Hotelbauten, Serieneinführungen) kommen unsere technischen Berater gerne zu Ihnen ins Ländle, um Details direkt am Objekt oder in der Fertigung zu besprechen.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
                <div className="container px-4 relative z-10">
                    <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4 block">Kompetenz für Vorarlberg</span>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">Gemeinsam Großes gießen</h2>
                    <p className="text-slate-300 text-xl max-w-2xl mx-auto mb-12 font-light">
                        Präzision, die überzeugt. Lassen Sie uns über Ihr nächstes Projekt im Westen sprechen.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/kontakt" className="inline-flex items-center justify-center px-10 py-5 bg-orange-600 text-white font-bold text-lg rounded-full hover:bg-orange-700 transition-all shadow-xl hover:shadow-orange-500/40 hover:-translate-y-1">
                            Angebot anfordern
                        </Link>
                        <Link href="tel:+436644503177" className="inline-flex items-center justify-center px-10 py-5 bg-transparent border-2 border-slate-700 text-white font-bold text-lg rounded-full hover:bg-slate-800 transition-all hover:border-slate-500">
                            Technik-Support
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

const MotionDiv = ({ children, ...props }: any) => <div {...props}>{children}</div>;
