"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";

export default function ExplainerModal({ src }: { src: string }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPortrait, setIsPortrait] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [volume, setVolume] = useState(0.7);
    const [isMuted, setIsMuted] = useState(true); // Initial stumm, um Browser-Richtlinien zu umgehen
    const [audioError, setAudioError] = useState(false);
    const [hasStarted, setHasStarted] = useState(false); // Verfolgt, ob das Video bereits gestartet wurde
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleLoadedMetadata = () => {
            // Prüfen ob das Video im Hochformat ist (Höhe > Breite)
            if (video.videoHeight > video.videoWidth) {
                setIsPortrait(true);
            }
            
            // Audio-Einstellungen initialisieren
            try {
                video.volume = volume;
                video.muted = true; // Initial stumm, um Browser-Richtlinien zu umgehen
            } catch (error) {
                console.warn('Audio-Einstellungen konnten nicht initialisiert werden:', error);
                setAudioError(true);
            }
            
            setIsLoaded(true);
        };

        const handleAudioError = () => {
            console.warn('Audio-Fehler aufgetreten, Stummschaltung als Fallback aktiviert');
            setAudioError(true);
            if (video) {
                video.muted = true;
            }
        };

        video.addEventListener('loadedmetadata', handleLoadedMetadata);
        video.addEventListener('error', handleAudioError);
        
        // Falls bereits geladen
        if (video.readyState >= 1) {
            handleLoadedMetadata();
        }

        return () => {
            video.removeEventListener('loadedmetadata', handleLoadedMetadata);
            video.removeEventListener('error', handleAudioError);
        };
    }, [src, volume]);

    // Lautstärke aktualisieren, wenn sich der State ändert
    useEffect(() => {
        if (videoRef.current && isLoaded) {
            videoRef.current.volume = volume;
        }
    }, [volume, isLoaded]);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                // Video initial stumm starten, um Browser-Richtlinien zu umgehen
                videoRef.current.muted = true;
                
                const playPromise = videoRef.current.play();
                
                if (playPromise !== undefined) {
                    playPromise
                        .then(() => {
                            // Erfolgreich gestartet - jetzt Ton aktivieren
                            setHasStarted(true);
                            setIsMuted(false);
                            videoRef.current!.muted = false;
                            videoRef.current!.volume = volume;
                        })
                        .catch((error) => {
                            // Spezifische Behandlung für Autoplay-Beschränkungen
                            if (error.name === 'NotAllowedError') {
                                console.warn('Autoplay blockiert - Benutzerinteraktion erforderlich:', error);
                                setAudioError(true);
                            } else {
                                console.error('Video-Wiedergabe fehlgeschlagen:', error);
                                setAudioError(true);
                            }
                        });
                }
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleVolumeChange = (newVolume: number) => {
        setVolume(newVolume);
        if (videoRef.current && hasStarted) {
            videoRef.current.volume = newVolume;
            // Wenn Lautstärke > 0, stummschaltung aufheben
            if (newVolume > 0 && isMuted) {
                setIsMuted(false);
                videoRef.current.muted = false;
            }
        }
    };

    const toggleMute = () => {
        if (videoRef.current && hasStarted) {
            const newMutedState = !isMuted;
            setIsMuted(newMutedState);
            videoRef.current.muted = newMutedState;
        }
    };

    return (
        <section className="py-24 bg-slate-900 border-t border-slate-800">
            <div className="container mx-auto px-4 max-w-5xl text-center">
                <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-3">Einblick</h2>
                <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10">So entsteht Qualität.</h3>

                <div className={`relative ${isPortrait && isLoaded ? 'aspect-[9/16] max-w-md mx-auto' : 'aspect-video'} w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-black group`}>
                    <video
                        ref={videoRef}
                        src={src}
                        className="w-full h-full object-contain"
                        controls={isPlaying} // Show native controls once playing
                        playsInline
                        muted={true} // Initial stumm, um Browser-Richtlinien zu umgehen
                    />

                    {/* Lautstärke-Steuerung - nur sichtbar nach Video-Start */}
                    {hasStarted && (
                        <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2">
                        <button
                            onClick={toggleMute}
                            className="text-white hover:text-orange-400 transition-colors"
                            aria-label={isMuted ? "Ton einschalten" : "Ton ausschalten"}
                        >
                            {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                        </button>
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.1"
                            value={volume}
                            onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                            className="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-orange-500"
                            aria-label="Lautstärke regeln"
                        />
                        <span className="text-white text-xs w-8">{Math.round(volume * 100)}%</span>
                        </div>
                    )}

                    {/* Audio-Fehler-Hinweis */}
                    {audioError && (
                        <div className="absolute top-4 right-4 bg-red-900/80 text-white text-xs px-2 py-1 rounded">
                            Audio-Probleme - Bitte klicken Sie auf den Play-Button
                        </div>
                    )}

                    {!isPlaying && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-all cursor-pointer" onClick={togglePlay}>
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
