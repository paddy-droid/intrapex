import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Box, Compass, Hammer, Layers, MapPin, CheckCircle2, Factory, Wine, Sun } from "lucide-react";
import type { Metadata } from "next";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: "Gießerei Burgenland | Restaurierung & Bauguss Intrapex",
    description: "Ihr Partner für Gießerei-Produkte im Burgenland. Spezialisiert auf Kunstguss für Schlösser und Weingüter sowie Ersatzteile für die Landwirtschaft im Seewinkel.",
    keywords: ["Gießerei Burgenland", "Kunstguss Eisenstadt", "Bauguss Rust", "Restaurierung Gusseisen Burgenland", "Gießerei Neusiedl"],
};

export default function GiessereiBurgenland() {
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
                            Sonnenseite des Guss-Handwerks
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-xl">
                            Meisterguss <br />
                            <span className="text-orange-500">im Burgenland</span>
                        </h1>
                        <p className="text-slate-100 max-w-3xl mx-auto text-xl md:text-2xl font-light mb-12 leading-relaxed drop-shadow-md">
                            Zwischen Eisenstadt und Güssing. Wir bewahren Geschichte mit feinstem Kunstguss und unterstützen die regionale Wirtschaft mit robustem Industrieguss.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <Link href="/kontakt" className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transition-all shadow-xl hover:shadow-orange-500/30 hover:-translate-y-1">
                                Anfrage starten <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link href="/leistungen" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all backdrop-blur-md border border-white/20 hover:border-white/40">
                                Restaurierung & Neubau
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Intro & Local Relevance (Heritage/Agriculture) */}
            <section className="py-24 bg-white relative">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-2">Pannonischer Flair</h2>
                                <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                                    Erhaltung der burgenländischen Baukultur
                                </h3>
                            </div>
                            <div className="prose prose-lg text-slate-600">
                                <p>
                                    Das Burgenland besticht durch seine Schlösser, Burgen und die traditionellen Streckhöfe. Intrapex ist Spezialist für die stilechte Restaurierung von Gusseisen-Elementen in <strong>Eisenstadt</strong>, <strong>Rust</strong> und dem gesamten Seewinkel.
                                </p>
                                <p>
                                    Wir fertigen verzierte Toranlagen, historische Fenstergitter und Laternen, die sich harmonisch in das UNESCO-Welterbe Neusiedler See einfügen.
                                </p>
                                <p>
                                    Auch für die Landwirtschaft im Seewinkel sind wir ein verlässlicher Partner: Wir liefern Ersatzteile für landwirtschaftliche Maschinen und Pumpen, schnell und unkompliziert.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6 pt-4">
                                <div className="flex items-start gap-3 p-4 rounded-xl bg-orange-50 border border-orange-100">
                                    <Wine className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-slate-900">Winzer-Service</h4>
                                        <p className="text-sm text-slate-600">Gitter & Beschläge für Weinkeller.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <Sun className="h-6 w-6 text-slate-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-slate-900">UV-Beständig</h4>
                                        <p className="text-sm text-slate-500">Beschichtungen für hohe Sonneneinstrahlung.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
                                <Image
                                    src="/stiegen-ziergitter-qualitaetskontrolle.webp"
                                    alt="Restaurierung Gusseisen Burgenland"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
                                        <p className="font-serif font-bold text-2xl text-slate-900 mb-2">Historisches Erbe</p>
                                        <p className="text-slate-600">Detailgetreue Rekonstruktion alter Meisterwerke.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Detailed Services Section (Burgenland Focused) */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Leistungen Burgenland</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">Für Schloss & Scheune</h2>
                        <p className="text-slate-400 text-lg">
                            Wir pflegen die Details, die das Burgenland so einzigartig machen.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {/* Card 1: Sacred & Castles */}
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all hover:bg-slate-800 group relative transform md:-translate-y-4 shadow-2xl shadow-orange-900/20">
                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-500 via-yellow-600 to-orange-500"></div>
                            <div className="h-14 w-14 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Hammer className="h-7 w-7 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Schlösser & Kirchen</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Restaurierung von historischen Parkbänken, Friedhofstoren und Kirchenfenstern. Wir arbeiten mit traditionellen Gießverfahren, um die originale Optik von Esterhazy-Bauten zu bewahren.
                            </p>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Sandguss-Verfahren</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Blattvergoldung möglich</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Projektleitung vor Ort</li>
                            </ul>
                        </div>

                        {/* Card 2: Wine/Gastronomy */}
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all hover:bg-slate-800 group">
                            <div className="h-14 w-14 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Wine className="h-7 w-7 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Weingüter & Gastronomie</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Exklusive Ausstattung für Heurige und Weingüter. Individuelle Firmenschilder aus Gusseisen, Lüftungsgitter für Keller und schwere Guss-Tischgestelle für den Gastgarten.
                            </p>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Mit eigenem Logo-Relief</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Standsicher bei Wind</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Diebstahlsicher durch Gewicht</li>
                            </ul>
                        </div>

                        {/* Card 3: Agriculture */}
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all hover:bg-slate-800 group">
                            <div className="h-14 w-14 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Factory className="h-7 w-7 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Agrartechnik</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Ersatzteile für Bewässerungsanlagen und Landmaschinen. Pumpengehäuse, Laufräder und Ventile aus beständigem Gusseisen für die Landwirtschaft im Marchfeld und Seewinkel.
                            </p>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Korrosionsbeständig</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Schneller Ersatzteil-Service</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Reparatur schadhafter Teile</li>
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
                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Gießer-Fakten</h2>
                            <p className="text-slate-600">Handwerkliche Details für Burgenlands Bauherren.</p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-slate-900 text-white">
                                        <tr>
                                            <th className="px-6 py-4 font-bold uppercase tracking-wider">Merkmal</th>
                                            <th className="px-6 py-4 font-bold uppercase tracking-wider">Ausführung</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 font-bold text-slate-900">Stilepochen</td>
                                            <td className="px-6 py-4 text-slate-600">Barock, Klassizismus, Biedermeier, Jugendstil (großer Modellfundus)</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 font-bold text-slate-900">Einzelanfertigung</td>
                                            <td className="px-6 py-4 text-slate-600">Ja, ab Stückzahl 1 (Handformguss)</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 font-bold text-slate-900">Restaurierung</td>
                                            <td className="px-6 py-4 text-slate-600">Sandstrahlen, Reparaturschweißen, Ergänzungsguss</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 font-bold text-slate-900">Montage</td>
                                            <td className="px-6 py-4 text-slate-600">Vermittlung erfahrener Montagepartner im Burgenland</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 font-bold text-slate-900">Lieferzeit Bgld</td>
                                            <td className="px-6 py-4 text-slate-600 text-orange-600 font-bold">Wöchentliche Touren entlang A3/A4/S31</td>
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
                        <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">Fragen aus der Region</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">Häufige Fragen aus dem Burgenland</h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Können Sie fehlende Teile eines alten Hoftores nachgießen?</AccordionTrigger>
                            <AccordionContent>
                                Ja, das ist ein Klassiker. Wir nehmen einen Abdruck von den noch vorhandenen Verzierungen und gießen die fehlenden Teile originalgetreu nach. Man sieht später keinen Unterschied.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger>Liefern Sie auch in den südburgenländischen Raum?</AccordionTrigger>
                            <AccordionContent>
                                Ja, wir beliefern das ganze Burgenland bis Güssing und Jennersdorf. Unsere Logistik deckt alle Bezirke ab.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger>Rosten Gusseisen-Möbel im Freien?</AccordionTrigger>
                            <AccordionContent>
                                Gusseisen bildet mit der Zeit eine Patina. Wer das nicht möchte, dem empfehlen wir unsere hochwertige Pulverbeschichtung. Sie schützt dauerhaft vor Korrosion und ist in allen RAL-Farben (z.B. klassisch dunkelgrün oder anthrazit) möglich.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                            <AccordionTrigger>Fertigen Sie auch Schilder für Weinkeller?</AccordionTrigger>
                            <AccordionContent>
                                Ja, massive Guss-Schilder mit erhabener Schrift und dem Wappen Ihres Weinguts sind eine Investition für Generationen. Wir erstellen gerne einen Entwurf.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
                <div className="container px-4 relative z-10">
                    <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4 block">Tradition bewahren</span>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">Für Ihr Projekt im Burgenland</h2>
                    <p className="text-slate-300 text-xl max-w-2xl mx-auto mb-12 font-light">
                        Wir beraten Sie gerne – vom Einzelstück bis zur Kleinserie.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/kontakt" className="inline-flex items-center justify-center px-10 py-5 bg-orange-600 text-white font-bold text-lg rounded-full hover:bg-orange-700 transition-all shadow-xl hover:shadow-orange-500/40 hover:-translate-y-1">
                            Kostenloses Angebot
                        </Link>
                        <Link href="tel:+436644503177" className="inline-flex items-center justify-center px-10 py-5 bg-transparent border-2 border-slate-700 text-white font-bold text-lg rounded-full hover:bg-slate-800 transition-all hover:border-slate-500">
                            Persönliche Beratung
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
