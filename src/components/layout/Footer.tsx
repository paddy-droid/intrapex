import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 mt-auto">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

                    {/* Brand */}
                    <div className="space-y-4">
                        <span className="text-2xl font-serif font-bold text-white tracking-tight uppercase">Intrapex GmbH</span>
                        <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                            Ihr Netzwerk für hochwertige Gusslösungen in Europa. Wir verbinden Tradition mit modernster Fertigungstechnologie.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-white font-bold mb-6 font-serif">Navigation</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/leistungen" className="hover:text-orange-500 transition-colors">Leistungen</Link></li>
                            <li><Link href="/materialien" className="hover:text-orange-500 transition-colors">Materialien</Link></li>
                            <li><Link href="/ueber-uns" className="hover:text-orange-500 transition-colors">Über Uns</Link></li>
                            <li><Link href="/kontakt" className="hover:text-orange-500 transition-colors">Kontakt</Link></li>
                            <li><Link href="/impressum" className="hover:text-orange-500 transition-colors">Impressum</Link></li>
                        </ul>
                    </div>

                    {/* Regionen */}
                    <div>
                        <h4 className="text-white font-bold mb-6 font-serif">Service-Regionen</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/giesserei-wien" className="hover:text-orange-500 transition-colors">Gießerei Wien</Link></li>
                            <li><Link href="/giesserei-niederoesterreich" className="hover:text-orange-500 transition-colors">Gießerei NÖ</Link></li>
                            <li><Link href="/giesserei-oberoesterreich" className="hover:text-orange-500 transition-colors">Gießerei OÖ</Link></li>
                            <li><Link href="/giesserei-salzburg" className="hover:text-orange-500 transition-colors">Gießerei Salzburg</Link></li>
                            <li><Link href="/giesserei-steiermark" className="hover:text-orange-500 transition-colors">Gießerei Steiermark</Link></li>
                        </ul>
                    </div>

                    {/* Regionen 2 / Company combined? No, keeping structural integrity */}
                    <div>
                        <h4 className="text-white font-bold mb-6 font-serif">Österreich</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/giesserei-tirol" className="hover:text-orange-500 transition-colors">Gießerei Tirol</Link></li>
                            <li><Link href="/giesserei-vorarlberg" className="hover:text-orange-500 transition-colors">Gießerei Vorarlberg</Link></li>
                            <li><Link href="/giesserei-kaernten" className="hover:text-orange-500 transition-colors">Gießerei Kärnten</Link></li>
                            <li><Link href="/giesserei-burgenland" className="hover:text-orange-500 transition-colors">Gießerei Burgenland</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6 font-serif">Kontakt</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-orange-600 flex-shrink-0" />
                                <span>Intrapex GmbH<br />Wiener Landstraße 65<br />3452 Michelndorf</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-orange-600 flex-shrink-0" />
                                <a href="tel:+436644503177" className="hover:text-white transition-colors">+43 664 450 31 77</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-orange-600 flex-shrink-0" />
                                <a href="mailto:office@intrapex.at" className="hover:text-white transition-colors">office@intrapex.at</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-slate-900 bg-black/20">
                <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Intrapex. Alle Rechte vorbehalten.</p>
                    <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-right">
                        <p>Designed for Excellence.</p>
                        <p>Diese Website wurde mit ❤️ in Niederösterreich von <a href="https://www.nur.marketing/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400 transition-colors">nur.marketing</a> erstellt</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
