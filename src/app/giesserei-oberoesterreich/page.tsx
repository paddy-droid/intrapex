import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Box, Compass, Hammer, Layers, MapPin, CheckCircle2, Factory, Scale, Zap } from "lucide-react";
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
import ExplainerModal from "@/components/ui/ExplainerVideo";
import SchemaMarkup from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
    title: "Gießerei Oberösterreich | Industrieguss & Stahlindustrie Intrapex",
    description: "Ihr Spezialist für Gießerei-Produkte in Oberösterreich. Wir liefern hochbelastbaren Grauguss und Sphäroguss für die Stahl- und Maschinenbau-Industrie in Linz, Wels und Steyr.",
    keywords: ["Gießerei Oberösterreich", "Industrieguss OÖ", "Grauguss Linz", "Gießerei Wels", "Sphäroguss Steyr", "Gusswerk Oberösterreich"],
};

export default function GiessereiOberoesterreich() {
    const regionSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Industrieguss Oberösterreich",
        "provider": {
            "@type": "Organization",
            "name": "Intrapex"
        },
        "areaServed": {
            "@type": "State",
            "name": "Oberösterreich"
        },
        "description": "Hochwertiger Industrie-Guss für Maschinenbau und Stahlindustrie in Oberösterreich.",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Guss-Portfolio",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Grauguss"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Sphäroguss"
                    }
                }
            ]
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://intrapex.at"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Gießerei Oberösterreich",
                "item": "https://intrapex.at/giesserei-oberoesterreich"
            }
        ]
    };

    return (
        <div className="flex flex-col w-full bg-slate-50">
            <SchemaMarkup schema={regionSchema} />
            <SchemaMarkup schema={breadcrumbSchema} />
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
                            Power für den Industriestandort OÖ
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-xl">
                            Schwergewicht <br />
                            <span className="text-orange-500">in Oberösterreich</span>
                        </h1>
                        <p className="text-slate-100 max-w-3xl mx-auto text-xl md:text-2xl font-light mb-12 leading-relaxed drop-shadow-md">
                            Linz, Wels, Steyr – wir liefern Hochleistungsguss an die Zentren der österreichischen Industrie. Präzision und Belastbarkeit stehen an erster Stelle.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <Link href="/kontakt" className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transition-all shadow-xl hover:shadow-orange-500/30 hover:-translate-y-1">
                                Industrie-Anfrage starten <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link href="/leistungen" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all backdrop-blur-md border border-white/20 hover:border-white/40">
                                Grauguss & Sphäroguss
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Intro & Local Relevance (Industrial Focus) */}
            <section className="py-24 bg-white relative">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <div className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-2">Industrie-Kompetenz</div>
                                <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                                    Zuverlässiger Partner für den Maschinenbau in OÖ
                                </h2>
                            </div>
                            <div className="prose prose-lg text-slate-600">
                                <p>
                                    Oberösterreich ist mit seiner starken Stahl- und Maschinenbauindustrie der Motor der heimischen Wirtschaft. Intrapex versteht die Sprache der Ingenieure und Einkäufer aus <strong>Linz</strong>, <strong>Wels</strong> und <strong>Steyr</strong>.
                                </p>
                                <p>
                                    Wir liefern gegossene Komponenten, die extremen Belastungen standhalten. Ob Getriebegehäuse für Automobilzulieferer, Pumpenteile für die Chemieindustrie oder Verschleißteile für den Anlagenbau – wir fertigen nach Ihren Spezifikationen.
                                </p>
                                <p>
                                    Aber auch abseits der Schwerindustrie unterstützen wir Projekte im Innviertel oder Mühlviertel mit hochwertigem Bauguss und Restaurierungsarbeiten.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6 pt-4">
                                <div className="flex items-start gap-3 p-4 rounded-xl bg-orange-50 border border-orange-100">
                                    <Scale className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <div className="font-bold text-slate-900">4.000 kg Stückgewicht</div>
                                        <p className="text-sm text-slate-600">Wir gießen auch schwere Brocken für den Maschinenbau.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <Zap className="h-6 w-6 text-slate-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <div className="font-bold text-slate-900">Just-in-Time</div>
                                        <p className="text-sm text-slate-500">Perfekt getaktet für Ihre Produktion.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
                                <Image
                                    src="/industrieguss-serien.webp"
                                    alt="Hochleistungs-Gussteile für Oberösterreich"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
                                        <p className="font-serif font-bold text-2xl text-slate-900 mb-2">Made for Steel City</p>
                                        <p className="text-slate-600">Komponenten, die halten, was sie versprechen.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-slate-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section - Unsere Dienstleistungen in Aktion */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Unsere Dienstleistungen in Aktion</h2>
                    <p className="text-slate-300 text-lg mb-12 max-w-3xl mx-auto">
                        Sehen Sie selbst, wie wir Qualität und Präzision in jedem Gussteil verwirklichen.
                    </p>
                    <div className="relative max-w-4xl mx-auto">
                        <ExplainerModal src="/Intrapex Gießerei Dienstleistungen.mp4" />
                    </div>
                </div>
            </section>

            {/* 3. Detailed Services Section (OÖ Focused) */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Portfolio für OÖ</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">Lösungen für den &quot;Industrie-Vierkanter&quot;</h2>
                        <p className="text-slate-400 text-lg">
                            Vom Prototypen bis zur Großserie. Wir sind der verlängerte Arm Ihrer Fertigung.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {/* Card 1: Machine Components */}
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all hover:bg-slate-800 group relative transform md:-translate-y-4 shadow-2xl shadow-orange-900/20">
                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500"></div>
                            <div className="h-14 w-14 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Factory className="h-7 w-7 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Maschinen-Komponenten</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Gussgehäuse, Lagerböcke, Konsolen und Flansche in EN-GJL-250 oder EN-GJS-500. Optimiert für Zerspanbarkeit und Festigkeit. Wir kennen die Anforderungen der Linzer und Welser Anlagenbauer.
                            </p>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Lunkerfrei garantiert</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Maßhaltig nach ISO 8062</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Inklusive Werkszeugnis</li>
                            </ul>
                        </div>

                        {/* Card 2: Agricultural */}
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all hover:bg-slate-800 group">
                            <div className="h-14 w-14 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Box className="h-7 w-7 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Landtechnik & Fahrzeuge</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Ersatzteile und Serienkomponenten für Landmaschinen. Ritzel, Kettenräder und Achsschenkel aus hochfestem Gusseisen. Robust genug für den harten Einsatz auf den Feldern.
                            </p>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Hohe Verschleißfestigkeit</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Nachbau alter Teile möglich</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Flexible Losgrößen</li>
                            </ul>
                        </div>

                        {/* Card 3: Urban Furniture */}
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all hover:bg-slate-800 group">
                            <div className="h-14 w-14 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Layers className="h-7 w-7 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Stadtmöblierung</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Robuste Gusspoller, Baumschutzgitter und Sitzbankfüße für Gemeinden in Oberösterreich. Vandalismussicher und ästhetisch ansprechend für Dorfplatz-Erneuerungen.
                            </p>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Pulverbeschichtung nach RAL</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Wappen-Integration</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Witterungsbeständig</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <ProblemSolutionSection region="Oberösterreich" />

            <NicheServicesSection region="Oberösterreich" />

            <IndustrialDeepDiveSection region="Oberösterreich" />
            <TechnicalDataSection region="Oberösterreich" />
            <AluminumCastSection region="Oberösterreich" />

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
                        <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">FAQ</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">Häufige Fragen aus Oberösterreich</h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Liefern Sie auch direkt in die VOEST-Werksgelände oder Industrieparks?</AccordionTrigger>
                            <AccordionContent>
                                Ja, wir sind mit den Logistik-Anforderungen großer Industrieparks in Linz und Umgebung vertraut. Wir liefern termingerecht an die angegebene Laderampe oder Baustelle, inklusive aller nötigen Frachtpapiere.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger>Können Sie auch Einzelstücke für Maschinenreparaturen fertigen?</AccordionTrigger>
                            <AccordionContent>
                                Ja. Wenn ein altes Maschinenteil bricht und kein Ersatz mehr verfügbar ist (z.B. bei alten Werkzeugmaschinen), fertigen wir es anhand des defekten Teils oder einer Zeichnung neu an.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger>Welche Zertifikate liegen den Gussteilen bei?</AccordionTrigger>
                            <AccordionContent>
                                Standardmäßig erhalten Sie auf Wunsch ein Werkszeugnis 2.2 oder ein Abnahmeprüfzeugnis 3.1 nach EN 10204, welches die chemische Analyse und die mechanischen Eigenschaften bestätigt.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                            <AccordionTrigger>Bieten Sie auch Modelllagerung an?</AccordionTrigger>
                            <AccordionContent>
                                Ja, für wiederkehrende Aufträge lagern wir Ihre Gussmodelle fachgerecht, trocken und versichert bei uns ein. So können wir bei Nachbestellungen sofort mit der Produktion beginnen.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
                <div className="container px-4 relative z-10">
                    <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4 block">Bereit für Ihr Projekt?</span>
                    <div className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">Guss-Qualität für OÖ</div>
                    <p className="text-slate-300 text-xl max-w-2xl mx-auto mb-12 font-light">
                        Verlassen Sie sich auf einen Partner, der Ihre Anforderungen versteht. Starten Sie jetzt Ihre Anfrage.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/kontakt" className="inline-flex items-center justify-center px-10 py-5 bg-orange-600 text-white font-bold text-lg rounded-full hover:bg-orange-700 transition-all shadow-xl hover:shadow-orange-500/40 hover:-translate-y-1">
                            Unverbindlich anfragen
                        </Link>
                        <Link href="tel:+436644503177" className="inline-flex items-center justify-center px-10 py-5 bg-transparent border-2 border-slate-700 text-white font-bold text-lg rounded-full hover:bg-slate-800 transition-all hover:border-slate-500">
                            Wir beraten Sie gerne
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

const motion_div = ({ children, ...props }: any) => <div {...props}>{children}</div>;
