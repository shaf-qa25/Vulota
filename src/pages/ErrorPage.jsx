
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import EvilEye from '../components/ui/EvilEye';
import { Home, ArrowLeft } from 'lucide-react';

export default function ErrorPage() {
    const navigate = useNavigate();

    return (
        <div className="h-screen w-screen bg-[#020617] flex flex-col items-center justify-center p-4 md:p-6 overflow-hidden relative">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-red-900/10 blur-[80px] md:blur-[120px] rounded-full z-0" />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 z-10 flex items-center justify-center"
            >
                <div className="w-full h-full transform scale-125 md:scale-100">
                    <EvilEye
                        eyeColor="#FF6F37"
                        intensity={1.5}
                        pupilSize={0.6}
                        irisWidth={0.25}
                        glowIntensity={0.35}
                        scale={0.8}
                        noiseScale={1}
                        pupilFollow={1}
                        flameSpeed={1}
                        backgroundColor="#120F17"
                    />
                </div>
            </motion.div>

            <div className="text-center relative z-20 w-full max-w-2xl px-4">
                <div className="bg-transparent backdrop-blur-md md:backdrop-blur-sm p-6 md:p-10 rounded-[2rem] border border-slate-800/50 shadow-2xl">

                    <h1 className="text-2xl sm:text-5xl md:text-7xl font-black text-white mb-4 md:mb-6 tracking-tighter uppercase leading-[0.9]">
                        Unauthorized<br />Sector
                    </h1>

                    <p className="text-slate-400 max-w-md mx-auto mb-8 md:mb-12 text-sm sm:text-base md:text-lg font-mono leading-relaxed">
                        <span className="text-red-500 font-bold block sm:inline">[!] ERROR 403:</span>
                        The Neural-Net has detected an invalid path. Your access is restricted.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                        <button
                            onClick={() => navigate(-1)}
                            className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 md:px-10 py-3 md:py-4 bg-slate-900 text-slate-300 border border-slate-800 rounded-full hover:bg-slate-800 hover:text-white transition-all active:scale-95 text-base md:text-lg font-medium"
                        >
                            <ArrowLeft size={18} className="md:size-5" />
                            Aborting Path
                        </button>

                        <button
                            onClick={() => navigate('/')}
                            className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 md:px-10 py-3 md:py-4 bg-red-00 text-white rounded-full hover:bg-red-500 transition-all shadow-lg shadow-red-600/30 active:scale-95 text-base md:text-lg font-medium"
                        >
                            <Home size={18} className="md:size-5" />
                            Dashboard
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}