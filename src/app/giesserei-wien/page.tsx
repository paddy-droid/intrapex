
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Box, Compass, Hammer, Layers, MapPin, Truck, HelpCircle, CheckCircle2, ChevronDown, Phone } from "lucide-react";
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
    title: "Gießerei Wien | Grauguss & Kunstguss Intrapex",
    description: "Ihre führende Gießerei für Wien. Wir bieten hochwertigen Grauguss, Sphäroguss und individuellen Kunstguss für Restaurierung und Industrie. Jetzt anfragen!",
    keywords: ["Gießerei Wien", "Kunstguss Wien", "Grauguss Wien", "Stiegenziergitter Wien", "Gusstrail Wien", "Gusswerk Wien", "Sphäroguss Wien"],
};

export default function GiessereiWien() {
    return (
        <div className="flex flex-col w-full bg-slate-50">
            {/* 1. Hero Section with NEW Video */}
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
                    <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block py-1.5 px-4 rounded-full bg-orange-600/90 text-white text-xs font-bold uppercase tracking-widest mb-6 shadow-lg backdrop-blur-sm">
                            Exzellenz für Wien
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-xl">
                            Gießerei-Handwerk <br />
                            <span className="text-orange-500">für Wien</span>
                        </h1>
                        <p className="text-slate-100 max-w-3xl mx-auto text-xl md:text-2xl font-light mb-12 leading-relaxed drop-shadow-md">
                            Tradition trifft Innovation. Wir sind Ihr Partner für anspruchsvollen Kunstguss und zuverlässigen Industrieguss in der Bundeshauptstadt.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <Link href="/kontakt" className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transition-all shadow-xl hover:shadow-orange-500/30 hover:-translate-y-1">
                                Jetzt Angebot einholen <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link href="/leistungen" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all backdrop-blur-md border border-white/20 hover:border-white/40">
                                Portfolio ansehen
                            </Link>
                        </div>
                    </MotionDiv>
                </div>
            </section>

            {/* 2. Intro & Local Relevance (Expanded) */}
            <section className="py-24 bg-white relative">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-2">Ihr Standortvorteil</h2>
                                <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                                    Maßgeschneiderte Gusslösungen für Wiener Projekte
                                </h3>
                            </div>
                            <div className="prose prose-lg text-slate-600">
                                <p>
                                    Wien, als Zentrum für Kultur und Architektur, stellt besondere Anforderungen an Gießerei-Produkte. Ob es um die detailgetreue Restaurierung historischer <strong>Stiegenziergitter</strong> in Gründerzeithäusern oder um robuste Gussteile für den modernen U-Bahnbau geht – Intrapex liefert Qualität, die Bestand hat.
                                </p>
                                <p>
                                    Wir verstehen die strengen Auflagen des <strong>Denkmalschutzes in Wien</strong>. Unsere Experten arbeiten eng mit Architekten und Bauträgern zusammen, um den historischen Charme der Stadt zu bewahren und gleichzeitig modernste Materialstandards zu erfüllen.
                                </p>
                                <p>
                                    Dank unserer optimierten Logistikketten garantieren wir schnelle Lieferzeiten in alle Wiener Gemeindebezirke – von der Innenstadt bis nach Liesing oder Floridsdorf.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6 pt-4">
                                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <MapPin className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-slate-900">Wien-Logistik</h4>
                                        <p className="text-sm text-slate-500">Just-in-Time Lieferung auf Ihre Baustelle in Wien.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <CheckCircle2 className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-slate-900">Denkmalschutz</h4>
                                        <p className="text-sm text-slate-500">Erfahrung mit Wiener Altbau-Sanierung.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
                                <Image
                                    src="/stiegen-ziergitter-wien.webp"
                                    alt="Restauriertes Stiegenhaus in Wien"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
                                        <p className="font-serif font-bold text-2xl text-slate-900 mb-2">Wiener Altbau-Charme</p>
                                        <p className="text-slate-600">Perfekte Rekonstruktion historischer Gusseisen-Elemente.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Detailed Services Section */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Unser Leistungsspektrum</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">Präzision in jeder Form</h2>
                        <p className="text-slate-400 text-lg">
                            Für unsere Wiener Kunden bieten wir das gesamte Spektrum moderner Gießerei-Technik. Von der Einzelanfertigung bis zur Großserie.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all hover:bg-slate-800 group">
                            <div className="h-14 w-14 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Hammer className="h-7 w-7 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Kunstguss & Restaurierung</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Wir rekonstruieren fehlende Teile für historische Zäune, Geländer und Säulen. Ideal für Sanierungen in den Wiener Bezirken 1 bis 9. Wir scannen Originalteile und gießen diese detailgetreu nach.
                            </p>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-orange-500"></div>Stiegenziergitter</li>
                                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-orange-500"></div>Historische Laternen</li>
                                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-orange-500"></div>Parkbänke nach Original</li>
                            </ul>
                        </div>

                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all hover:bg-slate-800 group relative transform md:-translate-y-4 shadow-2xl shadow-orange-900/20">
                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500"></div>
                            <div className="h-14 w-14 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Layers className="h-7 w-7 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Industrieguss (Grau- & Sphäro)</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Hochfeste Komponenten für Maschinenbau und Infrastruktur. Wir verarbeiten EN-GJL (Grauguss) und EN-GJS (Sphäroguss) nach strengsten Normen. Just-in-Time für die Wiener Industrie.
                            </p>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-orange-500"></div>Maschinenbetten</li>
                                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-orange-500"></div>Kanalguss & Schachtabdeckungen</li>
                                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-orange-500"></div>Pumpengehäuse</li>
                            </ul>
                        </div>

                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all hover:bg-slate-800 group">
                            <div className="h-14 w-14 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Compass className="h-7 w-7 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">3D-Modellbau & Prototypen</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Von der Skizze zum fertigen Gussteil. Unsere Ingenieure nutzen modernste CAD/CAM-Technologie, um Ihre Vision umzusetzen. Rapid Prototyping für schnelle Ergebnisse.
                            </p>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-orange-500"></div>3D-Scanning vor Ort</li>
                                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-orange-500"></div>Modellbearbeitung CNC</li>
                                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-orange-500"></div>Gusssimulation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <ProblemSolutionSection region="Wien" />

            <NicheServicesSection region="Wien" />

            <IndustrialDeepDiveSection region="Wien" />
            <TechnicalDataSection region="Wien" />
            <AluminumCastSection region="Wien" />

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

            {/* 5. FAQ Section (NEW) */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-16">
                        <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">Häufige Fragen</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">Wissenswertes für Kunden aus Wien</h2>
                    </div>

                    <div className="space-y-4">
                        <div className="border border-slate-200 rounded-xl overflow-hidden hover:border-orange-200 transition-colors">
                            <details className="group p-6 cursor-pointer bg-slate-50 open:bg-white open:ring-1 open:ring-orange-100 transition-all">
                                <summary className="flex justify-between items-center font-bold text-slate-900 list-none">
                                    Wie schnell können Sie nach Wien liefern?
                                    <span className="transition group-open:rotate-180">
                                        <ChevronDown className="h-5 w-5 text-slate-400" />
                                    </span>
                                </summary>
                                <div className="text-slate-600 mt-4 leading-relaxed animate-fade-in">
                                    Dank unserer zentralen Lage in Tulln sind wir nur ca. 30-40 Minuten von Wien entfernt. Für dringende Ersatzteile oder Baustellenlieferungen können wir oft taggenaue Expresslieferungen anbieten.
                                </div>
                            </details>
                        </div>

                        <div className="border border-slate-200 rounded-xl overflow-hidden hover:border-orange-200 transition-colors">
                            <details className="group p-6 cursor-pointer bg-slate-50 open:bg-white open:ring-1 open:ring-orange-100 transition-all">
                                <summary className="flex justify-between items-center font-bold text-slate-900 list-none">
                                    Können Sie fehlende Teile eines alten Wiener Geländers nachgießen?
                                    <span className="transition group-open:rotate-180">
                                        <ChevronDown className="h-5 w-5 text-slate-400" />
                                    </span>
                                </summary>
                                <div className="text-slate-600 mt-4 leading-relaxed animate-fade-in">
                                    Ja, das ist unsere Spezialität. Wir benötigen oft nur ein Originalstück als Muster. Wir erstellen davon einen Abdruck oder ein 3D-Modell und gießen die fehlenden Teile originalgetreu nach – perfekt für den Denkmalschutz.
                                </div>
                            </details>
                        </div>

                        <div className="border border-slate-200 rounded-xl overflow-hidden hover:border-orange-200 transition-colors">
                            <details className="group p-6 cursor-pointer bg-slate-50 open:bg-white open:ring-1 open:ring-orange-100 transition-all">
                                <summary className="flex justify-between items-center font-bold text-slate-900 list-none">
                                    Bieten Sie auch Montage in Wien an?
                                    <span className="transition group-open:rotate-180">
                                        <ChevronDown className="h-5 w-5 text-slate-400" />
                                    </span>
                                </summary>
                                <div className="text-slate-600 mt-4 leading-relaxed animate-fade-in">
                                    Wir konzentrieren uns auf die Produktion und Lieferung. Für die Montage arbeiten wir jedoch mit bewährten Wiener Schlossereien und Metallbau-Partnern zusammen, die wir Ihnen gerne vermitteln.
                                </div>
                            </details>
                        </div>

                        <div className="border border-slate-200 rounded-xl overflow-hidden hover:border-orange-200 transition-colors">
                            <details className="group p-6 cursor-pointer bg-slate-50 open:bg-white open:ring-1 open:ring-orange-100 transition-all">
                                <summary className="flex justify-between items-center font-bold text-slate-900 list-none">
                                    Welche Dateiformate benötigen Sie für Industrieguss?
                                    <span className="transition group-open:rotate-180">
                                        <ChevronDown className="h-5 w-5 text-slate-400" />
                                    </span>
                                </summary>
                                <div className="text-slate-600 mt-4 leading-relaxed animate-fade-in">
                                    Wir arbeiten bevorzugt mit STEP (.stp) oder IGES (.igs) Dateien. Aber auch klassische 2D-Zeichnungen (PDF, DXF) sind für die Angebotserstellung ausreichend. Unser Konstruktionsteam unterstützt Sie gerne.
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
                <div className="container px-4 relative z-10">
                    <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4 block">Handeln Sie jetzt</span>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">Ihr Partner für Wien</h2>
                    <p className="text-slate-300 text-xl max-w-2xl mx-auto mb-12 font-light">
                        Lassen Sie uns Ihr Projekt gemeinsam realisieren. Qualität, die überzeugt – direkt vor Ihrer Haustür.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/kontakt" className="inline-flex items-center justify-center px-10 py-5 bg-orange-600 text-white font-bold text-lg rounded-full hover:bg-orange-700 transition-all shadow-xl hover:shadow-orange-500/40 hover:-translate-y-1">
                            Kostenloses Angebot anfordern
                        </Link>
                        <Link href="tel:+436644503177" className="inline-flex items-center justify-center px-10 py-5 bg-transparent border-2 border-slate-700 text-white font-bold text-lg rounded-full hover:bg-slate-800 transition-all hover:border-slate-500">
                            <Phone className="mr-2 h-5 w-5" /> Direkt anrufen
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Helper component for simple icons if needed, but using lucide-react directly above
// function ChevronDown({ className }: { className?: string }) {
//     return (
//         <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className={className}
//         >
//             <path d="m6 9 6 6 6-6" />
//         </svg>
//     )
// }

// function Phone({ className }: { className?: string }) {
//     return (
//         <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className={className}
//         >
//             <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
//         </svg>
//     )
// }

// Dummy motion component wrapper since I cannot use framer-motion in server component directly without "use client"
// But since this is a page, it's a server component by default in app router.
// To use animations in the Hero, I should probably make a small client component or just accept that the page is a server component and content below folds doesn't need complex entrance animations or make the whole page client.
// Actually, for SEO it is better to keep it Server Component. 
// I will remove the motion_div usage and keep it static HTML/CSS animations or standard Tailwind classes for now to ensure best SEO and performance.

const MotionDiv = ({ children, ...props }: any) => <div {...props}>{children}</div>;

