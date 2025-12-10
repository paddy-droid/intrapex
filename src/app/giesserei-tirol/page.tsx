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
    title: "Gießerei Tirol | Kunstguss & Bauguss Intrapex",
    description: "Ihr Partner für Gießerei-Produkte in Tirol. Exklusive Gusslösungen für die alpine Hotellerie, traditionelle Architektur und den robusten Anlagenbau in Innsbruck und Kitzbühel.",
    keywords: ["Gießerei Tirol", "Kunstguss Innsbruck", "Bauguss Kitzbühel", "Gießerei Zillertal", "Sphäroguss Tirol", "Gusseisen Geländer"],
};

export default function GiessereiTirol() {
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
                            Handwerk für Tirol
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-xl">
                            Meisterhafter Guss <br />
                            <span className="text-orange-500">in Tirol</span>
                        </h1>
                        <p className="text-slate-100 max-w-3xl mx-auto text-xl md:text-2xl font-light mb-12 leading-relaxed drop-shadow-md">
                            Für die gehobene Architektur in Kitzbühel, historische Bauten in Innsbruck und die Bergbahntechnik in den Alpen. Qualität, die extremen Bedingungen trotzt.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <Link href="/kontakt" className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transition-all shadow-xl hover:shadow-orange-500/30 hover:-translate-y-1">
                                Projekt anfragen <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link href="/leistungen" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all backdrop-blur-md border border-white/20 hover:border-white/40">
                                Unser Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Intro & Local Relevance (High-End Alpine) */}
            <section className="py-24 bg-white relative">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-2">Tiroler Ansprüche</h2>
                                <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                                    Tradition trifft auf alpine Härte
                                </h3>
                            </div>
                            <div className="prose prose-lg text-slate-600">
                                <p>
                                    In Tirol muss Material mehr leisten. Extreme Temperaturschwankungen, Schneelasten und Streusalz fordern Mensch und Bauwerk. Intrapex liefert Gusslösungen, die für die Ewigkeit gebaut sind.
                                </p>
                                <p>
                                    Wir sind Partner der Top-Hotellerie im <strong>Zillertal</strong>, <strong>Ötztal</strong> und in <strong>Kitzbühel</strong>. Unsere Gusseisengeländer verleihen Chalets und Hotels den authentischen alpinen Charakter.
                                </p>
                                <p>
                                    Gleichzeitig versorgen wir Tiroler Industriebetriebe und Maschinenbauer im Inntal mit präzisen Gussteilen aus Grau- und Sphäroguss.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6 pt-4">
                                <div className="flex items-start gap-3 p-4 rounded-xl bg-orange-50 border border-orange-100">
                                    <Snowflake className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-slate-900">Winterfest</h4>
                                        <p className="text-sm text-slate-600">Materialien für Minusgrade & Salz.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <MapPin className="h-6 w-6 text-slate-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-slate-900">Tirol-Logistik</h4>
                                        <p className="text-sm text-slate-500">Pünktlich auch in Seitentäler.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
                                <Image
                                    src="/stiegen-ziergitter-qualitaetskontrolle.webp"
                                    alt="Alpine Architektur Gusseisen Tirol"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
                                        <p className="font-serif font-bold text-2xl text-slate-900 mb-2">Alpiner Stil</p>
                                        <p className="text-slate-600">Perfektion für das rustikale Ambiente.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-slate-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Detailed Services Section (Tirol Focused) */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Leistungen für Tirol</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">Für Tourismus & Technik</h2>
                        <p className="text-slate-400 text-lg">
                            Wir verbinden traditionelles Gießer-Handwerk mit modernen Anforderungen an Statik und Design.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {/* Card 1: Chalet Construction */}
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all hover:bg-slate-800 group relative transform md:-translate-y-4 shadow-2xl shadow-orange-900/20">
                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-500 via-white to-orange-500"></div>
                            <div className="h-14 w-14 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Mountain className="h-7 w-7 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Chalet & Residenzbau</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Massive Gussbalkone und Treppengeländer verleihen Immobilien in Kitzbühel oder Seefeld den unverwechselbaren Charakter. Wertbeständig und wartungsarm.
                            </p>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Authentische Optik</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Maßanfertigung nach I-Plan</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Montagefreundliche Elemente</li>
                            </ul>
                        </div>

                        {/* Card 2: Restoration/Innsbruck */}
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all hover:bg-slate-800 group">
                            <div className="h-14 w-14 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Hammer className="h-7 w-7 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Altstadt & Sanierung</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Innsbrucks Altstadt ist ein Juwel. Wir sorgen dafür, dass es glänzt. Rekonstruktion von Pollern, Leuchten und Gittern mit Rücksicht auf die historische Substanz.
                            </p>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Abstimmung mit Denkmalamt</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Nachguss defekter Teile</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Stilechte Oberflächen</li>
                            </ul>
                        </div>

                        {/* Card 3: Construction/Infrastructure */}
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all hover:bg-slate-800 group">
                            <div className="h-14 w-14 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Factory className="h-7 w-7 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Tiefbau & Lawinenschutz</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Schwere Gussteile für den alpinen Wege- und Straßenbau. Entwässerungsgitter, die auch Schneepflügen standhalten, und Komponenten für Schutzbauten.
                            </p>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Hohe Bruchlast</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Rutschhemmende Oberflächen</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Schnelle Verfügbarkeit</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <ProblemSolutionSection region="Tirol" />

            <NicheServicesSection region="Tirol" />

            <IndustrialDeepDiveSection region="Tirol" />
            <TechnicalDataSection region="Tirol" />
            <AluminumCastSection region="Tirol" />

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
                        <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">FAQ Tirol</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">Häufige Fragen aus Tirol</h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Halten die Gussteile dem Tiroler Winter (Streusalz) stand?</AccordionTrigger>
                            <AccordionContent>
                                Unbehandeltes Gusseisen rostet oberflächlich ("Edelrost"), aber für architektonische Anwendungen empfehlen wir dringend eine Feuerverzinkung (bei Stahl) bzw. eine hochwertige Lackierung/Pulverbeschichtung (Duplex-System) für Guss, um dauerhaften Schutz gegen Salz und Nässe zu bieten.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger>Liefern Sie auch ins Zillertal oder Ötztal?</AccordionTrigger>
                            <AccordionContent>
                                Ja, wir beliefern ganz Tirol. Egal ob Talboden oder Berglage. Bitte informieren Sie uns bei der Bestellung über eventuelle Zufahrtsbeschränkungen für LKW, damit wir die Logistik entsprechend planen können.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger>Können Sie historische Geländer in Innsbruck nachbauen?</AccordionTrigger>
                            <AccordionContent>
                                Ja, das ist eine unserer Kernkompetenzen. Wir nehmen vor Ort Maß oder nutzen Fragmente des Originals, um Formen zu erstellen, die dem historischen Vorbild zu 100% entsprechen.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                            <AccordionTrigger>Wie schwer ist ein Laufmeter Gussgeländer?</AccordionTrigger>
                            <AccordionContent>
                                Das hängt stark vom Design ab. Ein "schweres" historisches Geländer kann 40-60 kg pro Laufmeter wiegen. Wir beraten Sie gerne zur erforderlichen Statik und Unterkonstruktion für Ihren Balkon.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
                <div className="container px-4 relative z-10">
                    <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4 block">Tiroler Handschlagqualität</span>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">Starten wir Ihr Projekt</h2>
                    <p className="text-slate-300 text-xl max-w-2xl mx-auto mb-12 font-light">
                        Ob Chalet-Bauherr oder Industrie-Einkäufer – wir liefern die Guss-Lösung, die Sie brauchen.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/kontakt" className="inline-flex items-center justify-center px-10 py-5 bg-orange-600 text-white font-bold text-lg rounded-full hover:bg-orange-700 transition-all shadow-xl hover:shadow-orange-500/40 hover:-translate-y-1">
                            Unverbindliches Angebot
                        </Link>
                        <Link href="tel:+436644503177" className="inline-flex items-center justify-center px-10 py-5 bg-transparent border-2 border-slate-700 text-white font-bold text-lg rounded-full hover:bg-slate-800 transition-all hover:border-slate-500">
                            Beratungstermin
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

const motion_div = ({ children, ...props }: any) => <div {...props}>{children}</div>;
