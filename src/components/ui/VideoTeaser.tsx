"use client";

import { useState, useRef } from "react";

interface VideoTeaserProps {
    src: string;
    subtitle: string;
}

export default function VideoTeaser({ src, subtitle }: VideoTeaserProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [showSubtitle, setShowSubtitle] = useState(false);

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const { currentTime, duration } = videoRef.current;
            if (duration > 0) {
                // Show 2-3 seconds earlier than previous threshold (which was ~60%)
                setShowSubtitle(currentTime > Math.max(0, (duration * 0.60) - 3));
            }
        }
    };

    return (
        <div className="relative w-full h-full">
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                onTimeUpdate={handleTimeUpdate}
            >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* Overlay for better text contrast if needed, currently light */}
            <div className="absolute inset-0 bg-slate-900/10"></div>

            {/* Subtitle Overlay */}
            <div
                className={`absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 text-left transition-opacity duration-700 ease-in-out ${showSubtitle ? 'opacity-100' : 'opacity-0'}`}
            >
                <span className="inline-block px-3 py-1.5 bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg text-white/90 text-xs md:text-sm font-medium tracking-wide shadow-sm">
                    {subtitle}
                </span>
            </div>
        </div>
    );
}
