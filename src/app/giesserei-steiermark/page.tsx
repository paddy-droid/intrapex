import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Box, Compass, Hammer, Layers, MapPin, CheckCircle2, Factory, Cog, Wrench } from "lucide-react";
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
    title: "Gießerei Steiermark | Industrieguss & Automotive Intrapex",
    description: "Ihr Partner für Gießerei-Produkte in der Steiermark. Hochleistungs-Guss für den Grazer Automotive-Cluster und die Schwerindustrie der Obersteiermark.",
    keywords: ["Gießerei Steiermark", "Industrieguss Graz", "Kunstguss Leoben", "Grauguss Kapfenberg", "Automotive Guss"],
};

export default function GiessereiSteiermark() {
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
                            Das Grüne Herz aus Eisen
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-xl">
                            Guss-Tradition <br />
                            <span className="text-orange-500">Steiermark</span>
                        </h1>
                        <p className="text-slate-100 max-w-3xl mx-auto text-xl md:text-2xl font-light mb-12 leading-relaxed drop-shadow-md">
                            Vom Erzberg bis Graz. Wir liefern Komponenten, die den hohen Standards der steirischen Industrie gerecht werden.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <Link href="/kontakt" className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transition-all shadow-xl hover:shadow-orange-500/30 hover:-translate-y-1">
                                Partner finden <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link href="/leistungen" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all backdrop-blur-md border border-white/20 hover:border-white/40">
                                Grauguss & Sphäroguss
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Intro & Local Relevance (Industry Heavy) */}
            <section className="py-24 bg-white relative">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-2">Steirische Eisenstraße</h2>
                                <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                                    Im Zentrum der Metallverarbeitung
                                </h3>
                            </div>
                            <div className="prose prose-lg text-slate-600">
                                <p>
                                    Die Steiermark ist untrennbar mit dem Werkstoff Eisen verbunden. Intrapex führt diese Tradition mit modernster Technologie fort. Wir sind Zulieferer für den <strong>Automotive-Cluster</strong> in Graz und die Schwerindustrie in der Mur-Mürz-Furche.
                                </p>
                                <p>
                                    Ob Motorblöcke, Achskomponenten oder Gehäuse für den Anlagenbau – wir fertigen Gussteile mit höchster metallurgischer Reinheit und Maßhaltigkeit.
                                </p>
                                <p>
                                    Aber auch im öffentlichen Raum von <strong>Leoben</strong>, <strong>Bruck</strong> oder <strong>Graz</strong> sorgen unsere Stadtmöbel und Gusslaternen für zeitlose Eleganz.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6 pt-4">
                                <div className="flex items-start gap-3 p-4 rounded-xl bg-orange-50 border border-orange-100">
                                    <Cog className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-slate-900">Automotive Quality</h4>
                                        <p className="text-sm text-slate-600">Zertifizierte Prozesse (IATF-konform).</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <Factory className="h-6 w-6 text-slate-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-slate-900">Schwerlast</h4>
                                        <p className="text-sm text-slate-500">Komponenten bis 40 Tonnen (Partnernetzwerk).</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
                                <Image
                                    src="/industrieguss-serien.webp"
                                    alt="Industrieguss Steiermark Produktion"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
                                        <p className="font-serif font-bold text-2xl text-slate-900 mb-2">High-Performance</p>
                                        <p className="text-slate-600">Guss für die steirische Mobilitätsindustrie.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Detailed Services Section (Steiermark Focused) */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Leistungen Steiermark</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">Technologie & Design</h2>
                        <p className="text-slate-400 text-lg">
                            Wir verbinden industrielle Leistungsfähigkeit mit der Liebe zum Detail.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {/* Card 1: Automotive/Mobility */}
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all hover:bg-slate-800 group relative transform md:-translate-y-4 shadow-2xl shadow-orange-900/20">
                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-500 via-green-600 to-orange-500"></div>
                            <div className="h-14 w-14 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Cog className="h-7 w-7 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Mobilitäts-Industrie</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Sphäroguss-Komponenten für Fahrwerke, Bremsen und Getriebe. Hohe Festigkeit bei gleichzeitig guter Duktilität (EN-GJS). Wir beliefern Zulieferer rund um Graz.
                            </p>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Just-in-Sequence fähig</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Röntgenprüfung (X-Ray)</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Großserienkompetenz</li>
                            </ul>
                        </div>

                        {/* Card 2: Mechanical Engineering */}
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all hover:bg-slate-800 group">
                            <div className="h-14 w-14 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Wrench className="h-7 w-7 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Maschinenbau</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Robuste Gussteile für die Forsttechnik, Bergbautechnik und Zerkleinerungsanlagen. Verschleißfester Hartguss oder zäher Stahlguss für härteste Einsätze am Erzberg.
                            </p>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Hochverschleißfest</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Wärmebehandlung inklusive</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Ersatzteilservice für Altanlagen</li>
                            </ul>
                        </div>

                        {/* Card 3: Urban Design */}
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all hover:bg-slate-800 group">
                            <div className="h-14 w-14 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Compass className="h-7 w-7 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Stadtgestaltung - City of Design</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Graz ist UNESCO City of Design. Wir liefern dazu passend Stadtmobiliar, Baumroste und Poller, die modernes Design mit klassischer Materialität verbinden.
                            </p>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Design-Beratung</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Barrierefreie Lösungen (taktile Systeme)</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Langlebig & Wartungsarm</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <ProblemSolutionSection region="Steiermark" />

            <NicheServicesSection region="Steiermark" />

            <IndustrialDeepDiveSection region="Steiermark" />
            <TechnicalDataSection region="Steiermark" />

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
                        <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">Steiermark FAQ</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">Häufig gefragt</h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Können Sie Großserien für die Automobilindustrie liefern?</AccordionTrigger>
                            <AccordionContent>
                                Ja, unsere Produktion ist skalierbar. Für Großserien nutzen wir vollautomatische Formanlagen, die konstante Qualität zu wettbewerbsfähigen Preisen garantieren. Wir sind mit PPAP und VDA-Standards vertraut.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger>Fertigen Sie Verschleißteile für Brecher/Mühlen?</AccordionTrigger>
                            <AccordionContent>
                                Absolut. Für den harten Einsatz im Bergbau oder Recycling liefern wir Hartguss mit extrem hoher Abriebfestigkeit. Wir beraten Sie gerne zur optimalen Legierung für Ihren Einsatzzweck.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger>Restaurieren Sie Grazer Altstadt-Elemente?</AccordionTrigger>
                            <AccordionContent>
                                Ja, wir arbeiten eng mit dem Bundesdenkmalamt Steiermark zusammen. Ob Gusssäulen in Innenhöfen der Herrengasse oder historische Leuchten – wir bewahren den Charme der Grazer Altstadt.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                            <AccordionTrigger>Wie erfolgt die Anlieferung in die Obersteiermark?</AccordionTrigger>
                            <AccordionContent>
                                Wir nutzen ein dichtes Speditionsnetzwerk. Die Industriezentren Leoben, Kapfenberg und Bruck werden täglich angefahren. Expresslieferungen sind jederzeit möglich.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
                <div className="container px-4 relative z-10">
                    <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4 block">Glück auf!</span>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">Stahlharte Partner</h2>
                    <p className="text-slate-300 text-xl max-w-2xl mx-auto mb-12 font-light">
                        Wir liefern die Qualität, die die steirische Industrie vorantreibt. Kontaktieren Sie uns.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/kontakt" className="inline-flex items-center justify-center px-10 py-5 bg-orange-600 text-white font-bold text-lg rounded-full hover:bg-orange-700 transition-all shadow-xl hover:shadow-orange-500/40 hover:-translate-y-1">
                            Anfrage für Steiermark
                        </Link>
                        <Link href="tel:+436644503177" className="inline-flex items-center justify-center px-10 py-5 bg-transparent border-2 border-slate-700 text-white font-bold text-lg rounded-full hover:bg-slate-800 transition-all hover:border-slate-500">
                            Rückrufservice
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
