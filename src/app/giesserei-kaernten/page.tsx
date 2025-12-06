import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Box, Compass, Hammer, Layers, MapPin, CheckCircle2, Factory, Zap, Anchor } from "lucide-react";
import type { Metadata } from "next";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: "Gießerei Kärnten | Turbinenguss & Kunstguss Intrapex",
    description: "Ihr Partner für Gießerei-Produkte in Kärnten. Industrieguss für den Maschinenbau in Villach und Klagenfurt sowie hochwertiger Kunstguss für den Wörthersee-Tourismus.",
    keywords: ["Gießerei Kärnten", "Industrieguss Villach", "Kunstguss Klagenfurt", "Turbinenguss Kärnten", "Gießerei Wolfsberg"],
};

export default function GiessereiKaernten() {
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
                            Leistung für Kärnten
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-xl">
                            Gusstechnik <br />
                            <span className="text-orange-500">im Süden</span>
                        </h1>
                        <p className="text-slate-100 max-w-3xl mx-auto text-xl md:text-2xl font-light mb-12 leading-relaxed drop-shadow-md">
                            Von Villach bis Wolfsberg. Wir liefern Komponenten für die Kärntner Industrie und Bauguss für die Tourismusregionen am Wörthersee.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <Link href="/kontakt" className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transition-all shadow-xl hover:shadow-orange-500/30 hover:-translate-y-1">
                                Angebot für Kärnten <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link href="/leistungen" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all backdrop-blur-md border border-white/20 hover:border-white/40">
                                Unser Leistungsspektrum
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Intro & Local Relevance (Industry/Tourism mix) */}
            <section className="py-24 bg-white relative">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-2">Kärntner Wirtschaft</h2>
                                <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                                    Technologie & Tradition im Alpen-Adria Raum
                                </h3>
                            </div>
                            <div className="prose prose-lg text-slate-600">
                                <p>
                                    Kärnten ist ein Land der Wasserkraft und der Hochtechnologie. Intrapex unterstützt Energiedienstleister und Turbinenbauer mit verschleißfestem Guss für Kraftwerke an der Drau und Möll.
                                </p>
                                <p>
                                    Aber auch die Ästhetik kommt nicht zu kurz: Für die Hotels und Villen in <strong>Velden</strong> und <strong>Pörtschach</strong> fertigen wir exklusive Gussgeländer, die den Glanz der Wörthersee-Architektur neu beleben.
                                </p>
                                <p>
                                    Unsere Logistik ist auf die Anbindung über die A2 und die Tauernautobahn optimiert, sodass wir Klagenfurt und Villach schnell und zuverlässig erreichen.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6 pt-4">
                                <div className="flex items-start gap-3 p-4 rounded-xl bg-orange-50 border border-orange-100">
                                    <Zap className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-slate-900">Energiewirtschaft</h4>
                                        <p className="text-sm text-slate-600">Komponenten für Wasserkraft.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <Anchor className="h-6 w-6 text-slate-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-slate-900">Seenklima</h4>
                                        <p className="text-sm text-slate-500">Korrosionsbeständiger Bauguss.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
                                <Image
                                    src="/stiegen-ziergitter-wien.webp"
                                    alt="Kunstguss am Wörthersee"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
                                        <p className="font-serif font-bold text-2xl text-slate-900 mb-2">Stil am See</p>
                                        <p className="text-slate-600">Elegante Lösungen für gehobene Immobilien.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Detailed Services Section (Kärnten Focused) */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Portfolio Kärnten</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">Für Kraftwerke & Kultur</h2>
                        <p className="text-slate-400 text-lg">
                            Wir decken den spezifischen Bedarf der Kärntner Wirtschaft ab. Von der Turbine bis zum Torbogen.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {/* Card 1: Energy/Turbines */}
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all hover:bg-slate-800 group relative transform md:-translate-y-4 shadow-2xl shadow-orange-900/20">
                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-500 via-blue-700 to-orange-500"></div>
                            <div className="h-14 w-14 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Zap className="h-7 w-7 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Wasserkraft-Komponenten</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Leitschaufeln, Turbinengehäuse und Revisionsverschlüsse aus kavitationsbeständigem Gusseisen. Qualitätssicherung durch Ultraschallprüfung für maximale Sicherheit.
                            </p>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Druckgeprüft</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Hohe Maßhaltigkeit</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Inklusive Materialzeugnis</li>
                            </ul>
                        </div>

                        {/* Card 2: Electronics/Industry */}
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all hover:bg-slate-800 group">
                            <div className="h-14 w-14 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Factory className="h-7 w-7 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Maschinenbau Villach</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Präzise Sockel und Gehäuse für die High-Tech Industrie in Villach. Schwingungsdämpfender Grauguss für empfindliche Fertigungsanlagen.
                            </p>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Spannungsarm geglüht</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> CNC-vorbearbeitet</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Reinraumtauglich beschichtet</li>
                            </ul>
                        </div>

                        {/* Card 3: Tourism/Architecture */}
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all hover:bg-slate-800 group">
                            <div className="h-14 w-14 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Compass className="h-7 w-7 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Seearchitektur</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Elemente für Bootsanlegestellen, Promenaden und Seevillen. Poller, Ringe und Geländer, die dem Seeklima und der Feuchtigkeit trotzen.
                            </p>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Duplex-Beschichtung (verzinkt+lackiert)</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Klassisch-maritimes Design</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Sonderanfertigungen</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Technical Data Table */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Spezifikationen</h2>
                            <p className="text-slate-600">Daten für die Kärntner Industrie.</p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-slate-900 text-white">
                                        <tr>
                                            <th className="px-6 py-4 font-bold uppercase tracking-wider">Parameter</th>
                                            <th className="px-6 py-4 font-bold uppercase tracking-wider">Leistung Intrapex</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 font-bold text-slate-900">Gussarten</td>
                                            <td className="px-6 py-4 text-slate-600">Lamellengraphit (GJL), Kugelgraphit (GJS), Ni-Resist (Speziallegierung)</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 font-bold text-slate-900">Stückgewichte</td>
                                            <td className="px-6 py-4 text-slate-600">Flexibel von 0,5 kg bis 4 Tonnen</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 font-bold text-slate-900">Zerstörungsfreie Prüfung</td>
                                            <td className="px-6 py-4 text-slate-600">Ultraschall (UT), Magnetpulver (MT), Farbeindring (PT)</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 font-bold text-slate-900">Bearbeitung</td>
                                            <td className="px-6 py-4 text-slate-600">Komplettbearbeitung inklusive Oberflächenschutz</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 font-bold text-slate-900">Versand Kärnten</td>
                                            <td className="px-6 py-4 text-slate-600 text-orange-600 font-bold">2x wöchentlich Sammeltransport Klagenfurt/Villach</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
                        <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">Antworten</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">Häufige Fragen aus Kärnten</h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Fertigen Sie Ersatzteile für alte Wasserturbinen?</AccordionTrigger>
                            <AccordionContent>
                                Ja, gerade bei Kleinwasserkraftwerken ist das ein wichtiges Thema. Wir können Laufräder oder Gehäuseteile nach Muster nachgießen (Reverse Engineering), oft sogar mit leistungsfähigeren Werkstoffen als das Original.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger>Liefern Sie auch zu Baustellen am Berg (Liftprojekte)?</AccordionTrigger>
                            <AccordionContent>
                                Ja, wir koordinieren die Anlieferung so, dass sie mit den Bauzeitenplänen großer Infrastrukturprojekte übereinstimmt. Robuste Verpackung für den Weitertransport per Seilbahn oder Hubschrauber ist möglich.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger>Können Sie das Wörthersee-Mandl nachgießen?</AccordionTrigger>
                            <AccordionContent>
                                Als Kunstgießerei lieben wir solche Aufgaben. Ob Wappen, Skulpturen oder Brunnenfiguren – wir beherrschen den feinen Kunstguss in Bronze oder Eisen perfekt.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                            <AccordionTrigger>Wie lange dauert der Transport nach Klagenfurt?</AccordionTrigger>
                            <AccordionContent>
                                Die Regellaufzeit beträg 1-2 Tage ab Werk. Durch unsere effiziente Tourenplanung können wir oft sehr günstige Frachtkonditionen für Kärnten anbieten.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
                <div className="container px-4 relative z-10">
                    <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4 block">Im Süden für Sie da</span>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">Qualität für Kärnten</h2>
                    <p className="text-slate-300 text-xl max-w-2xl mx-auto mb-12 font-light">
                        Vertrauen Sie auf ehrliche Beratung und Handschlagqualität. Wir freuen uns auf Ihre Anfrage.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/kontakt" className="inline-flex items-center justify-center px-10 py-5 bg-orange-600 text-white font-bold text-lg rounded-full hover:bg-orange-700 transition-all shadow-xl hover:shadow-orange-500/40 hover:-translate-y-1">
                            Angebot einholen
                        </Link>
                        <Link href="tel:+436644503177" className="inline-flex items-center justify-center px-10 py-5 bg-transparent border-2 border-slate-700 text-white font-bold text-lg rounded-full hover:bg-slate-800 transition-all hover:border-slate-500">
                            Fragen? Anrufen!
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
