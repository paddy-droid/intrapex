import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Impressum | Intrapex GmbH",
    description: "Rechtliche Informationen zur Intrapex GmbH.",
};

export default function Impressum() {
    return (
        <div className="flex flex-col w-full bg-white">
            <section className="py-24 container max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-serif font-bold text-slate-900 mb-12">Impressum</h1>

                <div className="space-y-12 text-slate-700">
                    <div>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">Medieninhaber & Herausgeber</h2>
                        <p className="mb-2"><strong>Intrapex GmbH</strong></p>
                        <p>Wiener Landstraße 65</p>
                        <p>3452 Michelndorf, Österreich</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">Kontakt</h2>
                        <p>Telefon: <a href="tel:+436644503177" className="text-orange-600 hover:text-orange-700">+43 664 450 31 77</a></p>
                        <p>E-Mail: <a href="mailto:office@intrapex.at" className="text-orange-600 hover:text-orange-700">office@intrapex.at</a></p>
                        <p>Web: <a href="https://intrapex.at" className="text-orange-600 hover:text-orange-700">www.intrapex.at</a></p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">Firmendaten</h2>
                        <p><strong>Firmenbuchnummer:</strong> FN 659577 t</p>
                        {/* Add FB-Gericht if known, usually St. Pölten for Michelndorf but keep generic if unsure or user didn't specify */}
                        <p><strong>Unternehmensgegenstand:</strong> Handel mit Waren aller Art; Vermittlung von Gießereiprodukten.</p>
                        <p><strong>Geschäftsführung:</strong> Wolfgang Winkler</p>
                    </div>

                    <div className="pt-8 border-t border-slate-200">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Haftungsausschluss</h3>
                        <p className="text-sm text-slate-600 mb-4">
                            Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen. Haftungsansprüche gegen den Autor, welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, sind grundsätzlich ausgeschlossen.
                        </p>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Urheberrecht</h3>
                        <p className="text-sm text-slate-600">
                            Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht. Falls notwendig, werden wir die unerlaubte Nutzung von Teilen der Inhalte unserer Seite rechtlich verfolgen.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
