"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
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
                "bg-white/95 backdrop-blur-md shadow-sm border-slate-200 py-3"
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <div className="relative h-10 w-40 md:h-12 md:w-48">
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
                    <nav className="hidden md:flex items-center gap-6 lg:gap-8">
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

                        {/* Serviceregionen Dropdown */}
                        <div className="relative group">
                            <button className={cn(
                                "flex items-center gap-1 text-sm font-bold uppercase tracking-wide transition-colors py-1 hover:text-orange-500 text-slate-700",
                                pathname.startsWith('/giesserei-') && "text-orange-500"
                            )}>
                                Regiones <ChevronDown className="h-4 w-4" />
                            </button>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-4 w-64 grid gap-2">
                                    {states.map((state) => (
                                        <Link
                                            key={state.href}
                                            href={state.href}
                                            className="block px-4 py-2 text-sm text-slate-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors font-medium"
                                        >
                                            {state.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
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
                                "ml-4 flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm transition-all shadow-sm hover:shadow-md",
                                "bg-slate-900 text-white hover:bg-orange-600"
                            )}
                        >
                            <Phone className="h-4 w-4" /> <span>+43 664 450 31 77</span>
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
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
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl py-4 animate-fade-in-down h-[calc(100vh-80px)] overflow-y-auto">
                    <div className="container px-4 flex flex-col gap-4 pb-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-lg font-bold py-2 border-b border-slate-50 last:border-0",
                                    pathname === item.href ? "text-orange-600" : "text-slate-800"
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}

                        <div className="py-2 border-b border-slate-50">
                            <span className="text-lg font-bold text-slate-800 block mb-2">Service-Regionen</span>
                            <div className="grid grid-cols-2 gap-2 pl-4">
                                {states.map((state) => (
                                    <Link
                                        key={state.href}
                                        href={state.href}
                                        className="text-sm text-slate-600 py-1"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {state.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link
                            href="/ueber-uns"
                            className={cn(
                                "text-lg font-bold py-2 border-b border-slate-50",
                                pathname === "/ueber-uns" ? "text-orange-600" : "text-slate-800"
                            )}
                            onClick={() => setIsOpen(false)}
                        >
                            Über Uns
                        </Link>

                        <Link
                            href="/kontakt"
                            className={cn(
                                "text-lg font-bold py-2 border-b border-slate-50",
                                pathname === "/kontakt" ? "text-orange-600" : "text-slate-800"
                            )}
                            onClick={() => setIsOpen(false)}
                        >
                            Kontakt
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
