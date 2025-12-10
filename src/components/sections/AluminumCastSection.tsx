import React from "react";
import Image from "next/image";
import { CheckCircle2, Car, Zap, Hammer, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";

interface AluminumCastSectionProps {
    region?: string;
}

export function AluminumCastSection({ region }: AluminumCastSectionProps) {
    const regionText = region ? ` in ${region}` : "";

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 transform translate-x-1/4 z-0"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-3 block">
                        Leichtbau & Performance
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                        Gussprodukte aus Aluminium{regionText}.
                    </h2>
                    <p className="text-xl text-slate-600 font-light leading-relaxed">
                        Wenn es auf Gewichtsreduktion bei gleichzeitig hoher Festigkeit ankommt,
                        ist Aluminiumguss die erste Wahl. Wir fertigen präzise Komponenten für
                        anspruchsvolle Anwendungen.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Content Side */}
                    <div className="order-2 lg:order-1">
                        <h3 className="text-2xl font-bold text-slate-800 mb-6">
                            Klassische Anwendungsbereiche
                        </h3>
                        <div className="space-y-8">
                            {/* Application 1 */}
                            <div className="flex gap-5 group">
                                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                                    <Car className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900 mb-2">Automotive & Fahrzeugbau</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Vom Motorblock über Getriebegehäuse bis hin zu Strukturbauteilen im Fahrwerk.
                                        Aluminium reduziert das Fahrzeuggewicht und senkt Emissionen.
                                    </p>
                                </div>
                            </div>

                            {/* Application 2 */}
                            <div className="flex gap-5 group">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <Zap className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900 mb-2">Elektrotechnik & Elektronik</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Hervorragende Wärmeleitfähigkeit macht Aluminiumguss ideal für Kühlkörper,
                                        Gehäuse für Leistungselektronik und Motorengehäuse.
                                    </p>
                                </div>
                            </div>

                            {/* Application 3 */}
                            <div className="flex gap-5 group">
                                <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 group-hover:bg-slate-800 group-hover:text-white transition-colors">
                                    <Hammer className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900 mb-2">Maschinenbau & Konstruktion</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Korrosionsbeständige Beschläge, komplexe Halterungen und leichte Maschinenelemente,
                                        die hohen dynamischen Belastungen standhalten.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 pt-8 border-t border-slate-100">
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                                    <CheckCircle2 className="h-4 w-4 text-orange-500" />
                                    Sandguss & Kokillenguss
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                                    <CheckCircle2 className="h-4 w-4 text-orange-500" />
                                    Druckguss (Großserie)
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                                    <CheckCircle2 className="h-4 w-4 text-orange-500" />
                                    Wärmebehandlung
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                                    <CheckCircle2 className="h-4 w-4 text-orange-500" />
                                    Eloxierbar & Lackierbar
                                </div>
                            </div>

                            <Link
                                href="/kontakt"
                                className="inline-flex items-center font-bold text-orange-600 hover:text-orange-700 transition-colors group"
                            >
                                Anfrage für Aluminium-Teile starten <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="order-1 lg:order-2 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                        {/* Using a placeholder or existing image if available. Since I don't have a specific aluminum image URL confirmed, I'll use a generic industrial one from the project or a placeholder that looks metallic. 
                Existing images seen in code: /industrieguss-serien.webp 
                I'll reuse generic or look for one. Let's use /industrieguss-serien.webp for now as it depicts industrial parts, likely metal.
             */}
                        <Image
                            src="/industrieguss-serien.webp"
                            alt="Aluminium Gussprodukte Fertigung"
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

                        <div className="absolute bottom-8 left-8 right-8">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                                <p className="text-white font-serif text-xl italic mb-2">
                                    &quot;Leichtigkeit ist der Schlüssel zur Effizienz.&quot;
                                </p>
                                <div className="flex items-center gap-3">
                                    <Layers className="h-5 w-5 text-orange-400" />
                                    <span className="text-orange-50 font-bold text-sm tracking-wide">ALUMINIUM LEGIERUNGEN</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
