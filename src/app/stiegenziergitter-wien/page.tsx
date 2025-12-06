import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Star, Phone, CheckCircle, Package, Clock, Fence } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Stiegenziergitter Wien: Historische Guss-Nachbildungen",
    description: "Gusseiserne Ziergitter für Wiener Zinshäuser & Zäune. Viele Modelle lagernd für schnelle Sanierung. Originalgetreuer Nachguss.",
    keywords: ["Stiegenziergitter Wien", "Stiegenhausgitter Zinshaus", "Gartenzäune Gusseisen", "Geländerstäbe Grauguss", "Historische Zäune Wien", "Stiegenziergitter lagernd", "Intrapex"],
};

export default function StiegenziergitterWien() {
    return (
        <div className="flex flex-col w-full bg-white">
            {/* Hero Section */}
            <section className="relative w-full py-24 lg:py-32 flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-950 to-black opacity-90 z-0"></div>
                {/* Background image: Old Viennese staircase */}
                <Image
                    src="/stiegen-ziergitter-wien.webp"
                    alt="Historisches Wiener Stiegenhaus mit gusseisernem Geländer"
                    fill
                    className="object-cover opacity-30 mix-blend-overlay z-0"
                    priority
                />

                <div className="container relative z-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-md mb-8 animate-fade-in-up">
                        <Package className="h-4 w-4 text-orange-500" />
                        <span className="text-sm font-bold text-orange-500 tracking-wide uppercase">Viele Modelle lagernd & sofort gießbar</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-6 max-w-5xl drop-shadow-2xl">
                        Stiegenziergitter für <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-amber-500">Treppenhäuser & Zäune.</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-light">
                        Perfektion in Gusseisen für Wiener Zinshäuser und historische Gartenzäune.
                        Wählen Sie aus unserem Bestand klassischer Formen oder beauftragen Sie einen individuellen Nachguss.
                    </p>
                    <div className="flex flex-col lg:flex-row gap-5 items-center">
                        <Link href="/kontakt" className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 transition-all duration-200 bg-white font-sans rounded-full hover:bg-orange-50 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                            <span>Lagerbestand abfragen</span>
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <a href="tel:+436644503177" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border border-white/30 rounded-full hover:bg-white/10 transition-all">
                            <Phone className="mr-2 h-5 w-5 text-orange-500" />
                            Sofort Auskunft: +43 664 450 31 77
                        </a>
                    </div>
                </div>
            </section>

            {/* Intro: Stock & Speed USP */}
            <section className="py-20 bg-orange-50 border-b border-orange-100">
                <div className="container max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-lg font-bold text-orange-600 uppercase tracking-widest mb-4">Schnell & Effizient</h2>
                    <p className="text-2xl md:text-3xl font-serif text-slate-900 leading-snug">
                        "Bei Interesse an Stiegenziergittern finden Sie bei uns eine große Auswahl an <strong>lagernden Original-Modellen</strong>.
                        Mit diesen Vorlagen ist es uns möglich, innerhalb kürzester Zeit die von Ihnen bestellte Anzahl abzugießen."
                    </p>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="flex gap-4 items-start bg-white p-6 rounded-xl shadow-sm">
                            <Clock className="h-8 w-8 text-orange-500 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-slate-900">Kurze Lieferzeit</h4>
                                <p className="text-sm text-slate-600 mt-1">Da wir für viele Wiener Klassiker die Modelle bereits lagern, entfällt die Modellbauzeit.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start bg-white p-6 rounded-xl shadow-sm">
                            <Package className="h-8 w-8 text-orange-500 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-slate-900">Beliebige Stückzahl</h4>
                                <p className="text-sm text-slate-600 mt-1">Egal ob ein einzelner Ersatzstab oder 100 Stück für ein ganzes Treppenhaus.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start bg-white p-6 rounded-xl shadow-sm">
                            <CheckCircle className="h-8 w-8 text-orange-500 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-slate-900">Passgenauigkeit</h4>
                                <p className="text-sm text-slate-600 mt-1">Unsere Nachgüsse fügen sich nahtlos in bestehende Altbau-Geländer ein.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Main Content & SEO Text */}
            <section className="py-20 lg:py-24">
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">

                        {/* Text Content */}
                        <div className="space-y-8">
                            <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest">Nicht nur für Zinshäuser</h2>
                            <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 leading-tight">
                                Stilvolle Ziergitter für Treppenhäuser und Gartenzäune.
                            </h3>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Die historischen Muster der Wiener Gründerzeit finden sich nicht nur in den repräsentativen <strong>Treppenhäusern</strong> der Zinshäuser, sondern oft auch als stilprägende Elemente in <strong>Gartenzäunen</strong> und Balkongeländern.
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Intrapex bietet Ihnen die Möglichkeit, diese Eleganz wiederherzustellen. Unsere Gussteile aus hochwertigem <strong>Grauguss (EN-GJL)</strong> sind extrem witterungsbeständig und korrosionsfest – ideal für den Außenbereich als Gartenzaun oder den Innenbereich als Stiegengeländer.
                            </p>

                            <Link href="/kontakt" className="inline-flex items-center text-orange-600 font-bold hover:text-orange-700 underline decoration-2 underline-offset-4 transition-colors">
                                Haben Sie ein Foto Ihres Gitters? Senden Sie es uns! <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>

                        {/* Image/Visual - Garden Fence Context */}
                        <div className="relative h-[500px] bg-slate-100 rounded-3xl overflow-hidden shadow-2xl group border border-slate-100">
                            <Image
                                src="/stiegen-ziergitter-qualitaetskontrolle.webp"
                                alt="Gussmodelle und Qualitätskontrolle für Zäune und Gitter"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <div className="flex items-center gap-2 mb-2">
                                    <Fence className="h-5 w-5 text-orange-500" />
                                    <span className="text-xs font-bold uppercase tracking-wider">Anwendungsbereich</span>
                                </div>
                                <h4 className="text-xl font-bold mb-2">Historische Gartenzäune</h4>
                                <p className="text-white/80 font-light text-sm">Auch für Außenanlagen fertigen wir witterungsbeständige Zaunspitzen und Gitterelemente nach historischem Vorbild.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-20 bg-slate-50 border-y border-slate-200">
                <div className="container max-w-5xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Qualitätsvergleich</h2>
                        <p className="text-slate-600">Warum sich der professionelle Nachguss bei Intrapex lohnt.</p>
                    </div>

                    <div className="overflow-x-auto rounded-2xl shadow-xl bg-white">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-900 text-white">
                                    <th className="p-6 font-serif text-lg">Kriterium</th>
                                    <th className="p-6 font-serif text-lg bg-orange-600">Intrapex Nachguss</th>
                                    <th className="p-6 font-serif text-lg text-slate-400">Standard / Reparatur</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-6 font-bold text-slate-700">Verfügbarkeit</td>
                                    <td className="p-6 text-slate-800 font-medium">Viele Modelle lagernd (schneller Guss)</td>
                                    <td className="p-6 text-slate-500">Oft nicht mehr lieferbar</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-6 font-bold text-slate-700">Optik & Haptik</td>
                                    <td className="p-6 text-slate-800 font-medium">100% Identisch zum Original</td>
                                    <td className="p-6 text-slate-500">Störende Schweißnähte / Abweichungen</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-6 font-bold text-slate-700">Material</td>
                                    <td className="p-6 text-slate-800 font-medium">Massiver Grauguss (wie 1900)</td>
                                    <td className="p-6 text-slate-500">Hohles Stahlblech oder Kunststoff</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-6 font-bold text-slate-700">Witterung</td>
                                    <td className="p-6 text-slate-800 font-medium">Exzellent (auch für Gartenzäune)</td>
                                    <td className="p-6 text-slate-500">Rostanfällig bei lackiertem Stahl</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 container max-w-4xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-2">Häufige Fragen</h2>
                    <h3 className="text-3xl font-serif font-bold text-slate-900">Alles zu Stiegenziergittern</h3>
                </div>

                <div className="space-y-4">
                    <DetailsBlock
                        question="Haben Sie mein Gitter-Modell auf Lager?"
                        answer="Die Chancen stehen gut! Wir besitzen einen großen Fundus an Modellen klassischer Wiener Stiegenziergitter. Falls Ihr Modell dabei ist, können wir sofort mit dem Abguss beginnen und sparen Ihnen die Modellbaukosten."
                    />
                    <DetailsBlock
                        question="Eignen sich die Gitter auch für Gartenzäune?"
                        answer="Ja. Viele der historischen Muster wurden sowohl im Innenbereich (Stiege) als auch außen (Zaun, Balkon) verwendet. Grauguss ist extrem langlebig und wetterfest, ideal für hochwertige Gartenzäune."
                    />
                    <DetailsBlock
                        question="Ich brauche nur 3 Stück für eine Reparatur. Geht das?"
                        answer="Selbstverständlich. Wir fertigen jede Stückzahl – vom Einzelstück für eine Ausbesserung nach Bruch bis hin zu hunderten Metern für Großprojekte."
                    />
                    <DetailsBlock
                        question="Wie läuft der Nachguss ab, wenn kein Modell existiert?"
                        answer="Wir benötigen lediglich ein Musterstück (Original oder Bruchstück) oder eine gute technische Zeichnung. Davon erstellen wir einen Abdruck und gießen Ihr Gitter exakt nach."
                    />
                </div>

            </section>

            {/* Final CTA */}
            <section className="bg-orange-600 py-16">
                <div className="container mx-auto px-4 flex flex-col items-center text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Modellverfügbarkeit prüfen.</h2>
                    <p className="text-orange-100 text-xl mb-10 max-w-2xl">
                        Rufen Sie uns an – oft können wir schon am Telefon sagen, ob wir Ihr Modell lagernd haben.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <Link href="tel:+436644503177" className="inline-flex items-center justify-center px-10 py-5 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 shadow-xl transition-all text-lg border border-slate-700">
                            <Phone className="mr-2 h-5 w-5" /> +43 664 450 31 77
                        </Link>
                        <Link href="mailto:office@intrapex.at" className="inline-flex items-center justify-center px-10 py-5 bg-white text-orange-600 font-bold rounded-full hover:bg-slate-100 shadow-xl transition-all text-lg">
                            Foto / Anfrage senden
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

function DetailsBlock({ question, answer }: { question: string, answer: string }) {
    return (
        <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden hover:border-orange-300 transition-colors">
            <details className="group">
                <summary className="flex justify-between items-center font-bold text-slate-900 cursor-pointer p-6 list-none hover:bg-white transition-colors">
                    <span className="text-lg">{question}</span>
                    <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                </summary>
                <div className="text-slate-600 px-6 pb-6 pt-0 bg-white leading-relaxed">
                    {answer}
                </div>
            </details>
        </div>
    )
}
