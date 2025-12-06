import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Box, Compass, Hammer, Layers, MapPin, Truck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gießerei Niederösterreich | Industrie- & Kunstguss Intrapex",
    description: "Ihr zuverlässiger Gießerei-Partner für Niederösterreich. Wir liefern hochwertigen Grauguss, Sphäroguss und Stiegenziergitter direkt zu Ihrem Bauprojekt.",
    keywords: ["Gießerei Niederösterreich", "Kunstguss Niederösterreich", "Grauguss NÖ", "Gießerei Österreich", "Stiegenziergitter Niederösterreich"],
};

export default function GiessereiNOE() {
    return (
        <div className="flex flex-col w-full bg-slate-50">
            {/* Hero Section with Video Background */}
            <section className="relative w-full h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src="/gusswerk-wien.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-slate-900/60 z-10"></div>

                <div className="container relative z-20 px-4 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-orange-600/20 border border-orange-500/50 text-orange-200 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                        Ihr Partner in Niederösterreich
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                        Gießerei-Kompetenz <br className="hidden md:block" />
                        <span className="text-orange-500">für Niederösterreich</span>
                    </h1>
                    <p className="text-slate-200 max-w-2xl mx-auto text-xl font-light mb-10">
                        Regionale Nähe und höchste Qualität. Von Tulln aus beliefern wir ganz Niederösterreich mit erstklassigen Gusslösungen.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/kontakt" className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-500/30">
                            Angebot anfragen <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <Link href="/leistungen" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all backdrop-blur-md border border-white/20">
                            Unsere Leistungen
                        </Link>
                    </div>
                </div>
            </section>

            {/* Local Focus Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                                Gusslösungen für Industrie & Handwerk in NÖ
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                Niederösterreich als Herz unserer Produktion bietet optimale Voraussetzungen für schnelle Wege und persönliche Betreuung.
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                Wir sind stolz darauf, viele namhafte Betriebe und Bauprojekte in ganz Niederösterreich mit unseren Grauguss- und Sphäroguss-Produkten zu unterstützen.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <MapPin className="h-6 w-6 text-orange-600 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-slate-900">Regionale Produktion</h4>
                                        <p className="text-sm text-slate-500">Kurze Lieferwege und direkte Ansprechpartner vor Ort.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Box className="h-6 w-6 text-orange-600 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-slate-900">Alles aus einer Hand</h4>
                                        <p className="text-sm text-slate-500">Modellbau, Guss und Nachbearbeitung direkt aus der Region.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                            <Image
                                src="/stiegen-ziergitter-qualitaetskontrolle.webp"
                                alt="Gussarbeiten in Niederösterreich"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border-l-4 border-orange-500">
                                    <p className="font-bold text-slate-900">Qualität aus Österreich</p>
                                    <p className="text-sm text-slate-600">Verlässlicher Partner für NÖ.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid (Condensed) */}
            <section className="py-20 bg-slate-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">Unser Portfolio</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">Gusslösungen für jeden Bedarf</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Layers, title: "Serienguss", desc: "Klein- bis Großserien in höchster Präzision." },
                            { icon: Hammer, title: "Einzelstücke", desc: "Sonderanfertigungen für spezielle Anforderungen." },
                            { icon: Compass, title: "Modellbau", desc: "Vom 3D-Scan zum fertigen Gussmodell." },
                            { icon: Truck, title: "Lieferung", desc: "Schnelle Logistik in ganz Niederösterreich." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border-b-4 border-transparent hover:border-orange-500 group">
                                <item.icon className="h-10 w-10 text-slate-400 group-hover:text-orange-500 transition-colors mb-6" />
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* CTA */}
            <section className="py-24 bg-slate-900 text-center">
                <div className="container px-4">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Ihr Projekt in Niederösterreich</h2>
                    <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-10">
                        Wir beraten Sie gerne persönlich.
                    </p>
                    <Link href="/kontakt" className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transition-all">
                        Jetzt anfragen <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
