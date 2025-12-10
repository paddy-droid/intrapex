import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Box, Compass, Hammer, Layers, MapPin, CheckCircle2, Factory, Mountain, Snowflake } from "lucide-react";
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
import { AluminumCastSection } from "@/components/sections/AluminumCastSection";

export const metadata: Metadata = {
    title: "Gießerei Salzburg | Kunstguss & Bauguss Intrapex",
    description: "Ihr Partner für Gießerei-Produkte in Salzburg. Wir liefern exklusiven Kunstguss, historischen Bauguss und Industrieguss für den Salzburger Tourismus und die Bauwirtschaft.",
    keywords: ["Gießerei Salzburg", "Kunstguss Salzburg", "Bauguss Salzburg", "Gießerei Pongau", "Gießerei Pinzgau", "Geländerguss Salzburg"],
};

export default function GiessereiSalzburg() {
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
                            Gusskultur für Salzburg
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-xl">
                            Tradition & Design <br />
                            <span className="text-orange-500">in Salzburg</span>
                        </h1>
                        <p className="text-slate-100 max-w-3xl mx-auto text-xl md:text-2xl font-light mb-12 leading-relaxed drop-shadow-md">
                            Vom Festspielbezirk bis in die Tauern. Wir realisieren hochwertige Gusslösungen für die Salzburger Hotellerie, Architektur und Industrie.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <Link href="/kontakt" className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transition-all shadow-xl hover:shadow-orange-500/30 hover:-translate-y-1">
                                Angebot anfragen <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link href="/leistungen" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all backdrop-blur-md border border-white/20 hover:border-white/40">
                                Bauguss & Design
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Intro & Local Relevance (Tourism/Architecture Focus) */}
            <section className="py-24 bg-white relative">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-2">Salzburger Handwerk</h2>
                                <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                                    Zeitlose Eleganz für Stadt und Land
                                </h3>
                            </div>
                            <div className="prose prose-lg text-slate-600">
                                <p>
                                    Das Salzburger Land verbindet alpine Tradition mit weltstädtischem Flair. Intrapex liefert Gusskomponenten, die diesen Anspruch widerspiegeln. Unsere <strong>Stiegenziergitter</strong> und <strong>Balkongeländer</strong> finden sich in renovierten Villen in Aigen ebenso wie in exklusiven Chalets in Saalbach oder Kitzbühel.
                                </p>
                                <p>
                                    Neben dem Bauguss bedienen wir auch die starke Salzburger Industrie rund um Hallein und Bergheim mit zuverlässigem <strong>Maschinenguss</strong>.
                                </p>
                                <p>
                                    Qualität, die Bestand hat – auch bei den extremen Witterungsbedingungen im Gebirge.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6 pt-4">
                                <div className="flex items-start gap-3 p-4 rounded-xl bg-orange-50 border border-orange-100">
                                    <Mountain className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-slate-900">Alpine Beständigkeit</h4>
                                        <p className="text-sm text-slate-600">Korrosionsschutz für raues Klima.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <MapPin className="h-6 w-6 text-slate-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-slate-900">Lieferung ins Tal</h4>
                                        <p className="text-sm text-slate-500">Logistik auch in abgelegene Lagen.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
                                <Image
                                    src="/stiegen-ziergitter-qualitaetskontrolle.webp"
                                    alt="Kunstguss Geländer Salzburg"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
                                        <p className="font-serif font-bold text-2xl text-slate-900 mb-2">Schlosserei-Qualität</p>
                                        <p className="text-slate-600">Perfekte Basis für Ihr Handwerk.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Detailed Services Section (Sbg Focused) */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Leistungen für Salzburg</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">Ästhetik & Funktion</h2>
                        <p className="text-slate-400 text-lg">
                            Wir unterstützen Architekten, Bauträger und Metallbauer bei der Umsetzung anspruchsvoller Projekte.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {/* Card 1: Hotel & Gastronomy */}
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all hover:bg-slate-800 group relative transform md:-translate-y-4 shadow-2xl shadow-orange-900/20">
                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500"></div>
                            <div className="h-14 w-14 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Snowflake className="h-7 w-7 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Hotellerie & Chaletbau</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Exklusive Ausstattungselemente aus Gusseisen für die gehobene Hotellerie. Logoplates, Kamingitter und Treppengeländer, die den alpinen Chic unterstreichen.
                            </p>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Individuelles Design</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Wetterfest beschichtet</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Kleinserien für Hotelprojekte</li>
                            </ul>
                        </div>

                        {/* Card 2: Restoration */}
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all hover:bg-slate-800 group">
                            <div className="h-14 w-14 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Hammer className="h-7 w-7 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Stadtbildpflege & Denkmalschutz</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Erhalt des UNESCO-Weltkulturerbes. Wir fertigen Laternen, Poller und Abfallbehälter nach historischen Vorbildern der Salzburger Altstadt.
                            </p>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Abformung am Original</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Genehmigungskonforme Ausführung</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Langjährige Haltbarkeit</li>
                            </ul>
                        </div>

                        {/* Card 3: Seilbahn & Traffic */}
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all hover:bg-slate-800 group">
                            <div className="h-14 w-14 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Factory className="h-7 w-7 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Seilbahntechnik & Industrie</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Sicherheitsrelevante Gussteile für Seilbahnen und Lifte. Sphäroguss mit hoher Kerbschlagarbeit für den Einsatz bei tiefen Temperaturen.
                            </p>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Kältzäher Werkstoff (EN-GJS-400-18-LT)</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> 100% Rissprüfung</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Dokumentierte Sicherheit</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <ProblemSolutionSection region="Salzburg" />

            <NicheServicesSection region="Salzburg" />

            <IndustrialDeepDiveSection region="Salzburg" />
            <TechnicalDataSection region="Salzburg" />
            <AluminumCastSection region="Salzburg" />

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
                        <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">Häufig gefragt</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">Infos für Salzburger Kunden</h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Erfüllen Ihre Gitter die Salzburger Bauordnung?</AccordionTrigger>
                            <AccordionContent>
                                Ja, wir fertigen Geländer und Brüstungen exakt nach den Vorgaben der Salzburger Bauordnung (Höhe, Stababstand für Kindersicherheit). Bei historischen Objekten unterstützen wir Sie bei der Abstimmung mit dem Bundesdenkmalamt.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger>Liefern Sie auch auf Almen oder Bergstationen?</AccordionTrigger>
                            <AccordionContent>
                                Die Logistik in alpine Lagen erfordert Erfahrung. Wir organisieren den Transport bis zur Talstation oder bei befahrbaren Wegen direkt zur Hütte. Die Verpackung ist dabei besonders robust ausgeführt.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger>Können Sie auch kleine Stückzahlen für ein Privathaus gießen?</AccordionTrigger>
                            <AccordionContent>
                                Ja, wir sind auch für private Bauherren da. Egal ob 5 Meter Balkongeländer für eine Villa oder eine einzelne Gartenbank nach historischem Vorbild – wir freuen uns auf Ihr Projekt.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                            <AccordionTrigger>Wie widerstandsfähig ist der Guss gegen Streusalz?</AccordionTrigger>
                            <AccordionContent>
                                Gusseisen hat von Natur aus eine gute Korrosionsbeständigkeit. Für den Einsatz an stark gesalzenen Straßen oder Wegen in Salzburg empfehlen wir jedoch eine spezielle Oberflächenbehandlung oder Epoxidharz-Beschichtung für maximalen Schutz.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
                <div className="container px-4 relative z-10">
                    <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4 block">Guss-Kompetenz</span>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">Ihr Partner für Salzburg</h2>
                    <p className="text-slate-300 text-xl max-w-2xl mx-auto mb-12 font-light">
                        Besprechen Sie Ihr Vorhaben mit unseren Experten. Wir finden die passende Lösung.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/kontakt" className="inline-flex items-center justify-center px-10 py-5 bg-orange-600 text-white font-bold text-lg rounded-full hover:bg-orange-700 transition-all shadow-xl hover:shadow-orange-500/40 hover:-translate-y-1">
                            Anfrage stellen
                        </Link>
                        <Link href="tel:+436644503177" className="inline-flex items-center justify-center px-10 py-5 bg-transparent border-2 border-slate-700 text-white font-bold text-lg rounded-full hover:bg-slate-800 transition-all hover:border-slate-500">
                            Wir rufen zurück
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

const motion_div = ({ children, ...props }: any) => <div {...props}>{children}</div>;
