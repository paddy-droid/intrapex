"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface PortfolioFlipCardProps {
    overTitle: string;
    title: string;
    imageSrc: string;
    challenge: string;
    solution: string;
    result: string;
}

export default function PortfolioFlipCard({
    overTitle,
    title,
    imageSrc,
    challenge,
    solution,
    result,
}: PortfolioFlipCardProps) {
    return (
        <div className="group h-[500px] w-full [perspective:1000px]">
            <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Side */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-white [backface-visibility:hidden] overflow-hidden shadow-xl border border-slate-100">
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>

                    <div className="absolute bottom-0 left-0 p-8 w-full">
                        <span className="inline-block py-1 px-3 rounded-full bg-orange-600 text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-lg">
                            {overTitle}
                        </span>
                        <h3 className="text-3xl font-serif font-bold text-white mb-2 leading-tight">
                            {title}
                        </h3>
                        <div className="flex items-center text-slate-300 text-sm font-medium mt-4 group/btn">
                            <span className="border-b border-orange-500 pb-1">Details ansehen</span>
                            <ArrowRight className="ml-2 h-4 w-4 text-orange-500 transition-transform group-hover/btn:translate-x-1" />
                        </div>
                    </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-slate-900 px-8 py-10 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center shadow-xl border border-slate-700">
                    {/* Background noise/gradient for texture */}
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
                    <div className="absolute top-0 right-0 p-6 opacity-10">
                        <ArrowRight className="h-24 w-24 text-white -rotate-45" />
                    </div>

                    <div className="relative z-10">
                        <h4 className="text-xl font-serif font-bold text-white mb-6 border-b border-slate-700 pb-4">
                            {title}
                        </h4>

                        <div className="space-y-6">
                            <div>
                                <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-1">
                                    Challenge
                                </p>
                                <p className="text-sm text-slate-300 leading-relaxed">
                                    {challenge}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-1">
                                    Lösung
                                </p>
                                <p className="text-sm text-slate-300 leading-relaxed">
                                    {solution}
                                </p>
                            </div>

                            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                                <p className="text-xs font-bold text-green-400 uppercase tracking-widest mb-1 flex items-center gap-2">
                                    <CheckCircle2 className="h-3 w-3" /> Ergebnis
                                </p>
                                <p className="text-sm text-white font-medium leading-relaxed">
                                    {result}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
