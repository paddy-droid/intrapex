import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 mt-auto">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div className="space-y-4">
                        <span className="text-2xl font-serif font-bold text-white tracking-tight uppercase">Intrapex</span>
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
                            <li><Link href="/stiegenziergitter-wien" className="hover:text-orange-500 transition-colors">Stiegenziergitter Wien</Link></li>
                            <li><Link href="/stiegenziergitter-niederoesterreich" className="hover:text-orange-500 transition-colors">Stiegenziergitter NÖ</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-bold mb-6 font-serif">Unternehmen</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/ueber-uns" className="hover:text-orange-500 transition-colors">Über Uns</Link></li>
                            <li><Link href="/kontakt" className="hover:text-orange-500 transition-colors">Kontakt</Link></li>
                            <li><Link href="#" className="hover:text-orange-500 transition-colors">Impressum</Link></li>
                            <li><Link href="#" className="hover:text-orange-500 transition-colors">Datenschutz</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6 font-serif">Kontakt</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-orange-600 flex-shrink-0" />
                                <span>3430 Tulln an der Donau<br />Österreich</span>
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
                    <p>Designed for Excellence.</p>
                </div>
            </div>
        </footer>
    );
}
