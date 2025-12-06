"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [regionOpen, setRegionOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const states = [
        { name: "Wien", href: "/giesserei-wien" },
        { name: "Niederösterreich", href: "/giesserei-niederoesterreich" },
        { name: "Oberösterreich", href: "/giesserei-oberoesterreich" },
        { name: "Salzburg", href: "/giesserei-salzburg" },
        { name: "Tirol", href: "/giesserei-tirol" },
        { name: "Vorarlberg", href: "/giesserei-vorarlberg" },
        { name: "Steiermark", href: "/giesserei-steiermark" },
        { name: "Kärnten", href: "/giesserei-kaernten" },
        { name: "Burgenland", href: "/giesserei-burgenland" },
    ];

    const navItems = [
        { name: "Startseite", href: "/" },
        { name: "Leistungen", href: "/leistungen" },
        { name: "Materialien", href: "/materialien" },
        { name: "Stiegenziergitter", href: "/stiegenziergitter-wien" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-slate-200 py-3" : "bg-white/90 backdrop-blur-sm py-5"
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group">
                        <div className={cn("relative transition-all duration-300", scrolled ? "h-10 w-40" : "h-12 w-48")}>
                            <Image
                                src="/logo-intrapex.png"
                                alt="Intrapex Gießerei Logo"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-sm font-bold uppercase tracking-wide transition-colors relative py-1 hover:text-orange-500 text-slate-700",
                                    pathname === item.href && "text-orange-500 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-orange-500"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* Serviceregionen Mega Menu */}
                        <div
                            className="relative"
                            onMouseEnter={() => setRegionOpen(true)}
                            onMouseLeave={() => setRegionOpen(false)}
                        >
                            <button className={cn(
                                "flex items-center gap-1 text-sm font-bold uppercase tracking-wide transition-colors py-3 hover:text-orange-500 text-slate-700 group",
                                pathname.startsWith('/giesserei-') && "text-orange-500"
                            )}>
                                Regionen
                                <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", regionOpen && "rotate-180 text-orange-500")} />
                            </button>

                            <AnimatePresence>
                                {regionOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[600px] z-50"
                                    >
                                        <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 overflow-hidden">
                                            <div className="grid grid-cols-3 gap-4">
                                                <div className="col-span-3 mb-2">
                                                    <h3 className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-1">Österreich-Service</h3>
                                                    <p className="text-sm text-slate-500">Wählen Sie Ihr Bundesland für lokale Informationen.</p>
                                                </div>
                                                {states.map((state) => (
                                                    <Link
                                                        key={state.href}
                                                        href={state.href}
                                                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-orange-50 group/item transition-colors"
                                                    >
                                                        <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center group-hover/item:bg-orange-100 transition-colors text-slate-500 group-hover/item:text-orange-600">
                                                            <MapPin className="h-4 w-4" />
                                                        </div>
                                                        <span className="text-sm font-medium text-slate-700 group-hover/item:text-orange-700 transition-colors">
                                                            {state.name}
                                                        </span>
                                                    </Link>
                                                ))}
                                            </div>
                                            <div className="mt-6 pt-4 border-t border-slate-50 bg-slate-50/50 -mx-6 -mb-6 px-6 py-4 flex justify-between items-center">
                                                <p className="text-xs text-slate-500">Wir liefern in ganz Österreich.</p>
                                                <Link href="/kontakt" className="text-xs font-bold text-orange-600 hover:underline">
                                                    Sonderanfrage stellen →
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link
                            href="/ueber-uns"
                            className={cn(
                                "text-sm font-bold uppercase tracking-wide transition-colors relative py-1 hover:text-orange-500 text-slate-700",
                                pathname === "/ueber-uns" && "text-orange-500 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-orange-500"
                            )}
                        >
                            Über Uns
                        </Link>

                        <Link
                            href="/kontakt"
                            className={cn(
                                "text-sm font-bold uppercase tracking-wide transition-colors relative py-1 hover:text-orange-500 text-slate-700",
                                pathname === "/kontakt" && "text-orange-500 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-orange-500"
                            )}
                        >
                            Kontakt
                        </Link>

                        <Link
                            href="tel:+436644503177"
                            className={cn(
                                "ml-4 flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap",
                                "bg-slate-900 text-white hover:bg-orange-600 border border-transparent"
                            )}
                        >
                            <Phone className="h-4 w-4" /> <span>+43 664 450 31 77</span>
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Menu"
                    >
                        {isOpen ? (
                            <X className="h-6 w-6 text-slate-900" />
                        ) : (
                            <Menu className="h-6 w-6 text-slate-900" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden absolute top-auto left-0 w-full bg-white border-t border-slate-200 overflow-y-auto"
                        style={{ height: 'calc(100vh - 100%)' }}
                    >
                        <div className="container px-4 flex flex-col gap-2 py-8 pb-32">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "text-xl font-bold py-3 border-b border-slate-50 last:border-0",
                                        pathname === item.href ? "text-orange-600" : "text-slate-800"
                                    )}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}

                            <div className="py-4 border-b border-slate-50">
                                <span className="text-xl font-bold text-slate-800 block mb-4">Service-Regionen</span>
                                <div className="grid grid-cols-1 gap-2 pl-4 border-l-2 border-orange-100">
                                    {states.map((state) => (
                                        <Link
                                            key={state.href}
                                            href={state.href}
                                            className={cn(
                                                "text-base py-2 flex items-center gap-2",
                                                pathname === state.href ? "text-orange-600 font-bold" : "text-slate-600"
                                            )}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <MapPin className="h-4 w-4 opacity-50" /> {state.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <Link
                                href="/ueber-uns"
                                className={cn(
                                    "text-xl font-bold py-3 border-b border-slate-50",
                                    pathname === "/ueber-uns" ? "text-orange-600" : "text-slate-800"
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                Über Uns
                            </Link>

                            <Link
                                href="/kontakt"
                                className={cn(
                                    "text-xl font-bold py-3 border-b border-slate-50",
                                    pathname === "/kontakt" ? "text-orange-600" : "text-slate-800"
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                Kontakt
                            </Link>

                            <Link
                                href="tel:+436644503177"
                                className="mt-6 flex items-center justify-center gap-2 px-4 py-4 rounded-xl font-bold text-lg bg-orange-600 text-white shadow-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                <Phone className="h-5 w-5" /> Anrufen
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
