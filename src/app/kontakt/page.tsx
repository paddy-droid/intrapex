import { Mail, Phone, MapPin, Clock } from "lucide-react";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ExplainerModal from "@/components/ui/ExplainerVideo";

export const metadata: Metadata = {
    title: "Kontakt zur Gießerei: Anfrage für Wien & Niederösterreich",
    description: "Senden Sie uns Ihre Anfrage. Wir beraten Sie persönlich zu Guss-Projekten, Stiegenziergittern & Industrieguss. Antwort in 48h.",
};

export default function Kontakt() {
    return (
        <div className="flex flex-col w-full bg-slate-50">

            {/* Header */}
            <section className="bg-slate-900 py-16 text-center">
                <div className="container px-4">
                    <h1 className="text-4xl font-serif font-bold text-white mb-4">Kontaktieren Sie uns</h1>
                    <p className="text-slate-400 text-lg">
                        Starten Sie Ihr Projekt mit Intrapex. Wir melden uns umgehend bei Ihnen.
                    </p>
                </div>
            </section>

            {/* Video Section */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Unsere Dienstleistungen in Aktion</h2>
                    <p className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto">
                        Sehen Sie selbst, wie wir Qualität und Präzision in jedem Gussteil verwirklichen.
                    </p>
                </div>
            </section>
            <ExplainerModal src="/Intrapex Gießerei Dienstleistungen.mp4" />

            <div className="container max-w-6xl mx-auto px-4 -mt-8 relative z-10 pb-24">
                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Contact Info Card */}
                    <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-2xl h-full flex flex-col relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                        <h3 className="text-2xl font-serif font-bold mb-8 relative z-10">Kontaktdaten</h3>

                        <div className="space-y-8 relative z-10 flex-1">
                            <div className="flex items-start gap-4">
                                <MapPin className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold mb-1">Anschrift</h4>
                                    <p className="text-slate-300">Intrapex<br />Platzhalter Straße 1<br />3430 Tulln an der Donau<br />Österreich</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold mb-1">Telefon</h4>
                                    <p className="text-slate-300 hover:text-white transition-colors">
                                        <a href="tel:+436644503177">+43 664 450 31 77</a>
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Mail className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold mb-1">E-Mail</h4>
                                    <p className="text-slate-300 hover:text-white transition-colors">
                                        <a href="mailto:office@intrapex.at">office@intrapex.at</a>
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Clock className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold mb-1">Bürozeiten</h4>
                                    <p className="text-slate-300">Mo - Do: 08:00 - 16:00<br />Fr: 08:00 - 12:00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ContactForm />

                </div>
            </div>
        </div>
    );
}
