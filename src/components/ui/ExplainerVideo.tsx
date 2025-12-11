"use client";

import { useState, useRef } from "react";
import { Play } from "lucide-react";

export default function ExplainerModal({ src }: { src: string }) {
    const [hasStarted, setHasStarted] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlayClick = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setHasStarted(true);
        }
    };

    return (
        <section className="py-24 bg-slate-900 border-t border-slate-800">
            <div className="container mx-auto px-4 max-w-5xl text-center">
                <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-3">Einblick</h2>
                <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10">So entsteht Qualität.</h3>

                <div className="relative aspect-[9/16] max-w-md mx-auto w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-black">
                    <video
                        ref={videoRef}
                        src={`${src}#t=0.1`}
                        className="w-full h-full object-contain"
                        controls={true}
                        muted={false}
                        playsInline
                        preload="metadata"
                        onPlay={() => setHasStarted(true)}
                    />

                    {!hasStarted && (
                        <div
                            className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-all cursor-pointer group"
                            onClick={handlePlayClick}
                        >
                            <div className="h-24 w-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 transition-transform duration-300 group-hover:scale-110">
                                <Play className="h-10 w-10 text-white fill-white ml-2" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
