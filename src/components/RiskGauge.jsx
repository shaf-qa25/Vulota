import { motion, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export default function RiskGauge({ score = 24 }) {
    const springScore = useSpring(0, { stiffness: 50, damping: 20 });
    const displayScore = useTransform(springScore, (latest) => Math.round(latest));

    useEffect(() => {
        springScore.set(score);
    }, [score, springScore]);

    return (
        <div className="relative flex flex-col items-center justify-center p-4 sm:p-6 h-full bg-[#0f172a] rounded-2xl border border-slate-800 transition-all hover:border-slate-700">
            <h3 className="text-xs sm:text-sm font-medium text-slate-400 mb-6 uppercase tracking-wider">
                Overall Risk Score
            </h3>

            <div className="relative w-full max-w-[180px] aspect-[2/1] overflow-hidden">

                <div className="absolute top-0 w-full aspect-square border-[10px] sm:border-[12px] border-slate-800/50 rounded-full" />

                <motion.div
                    initial={{ rotate: -180 }}
                    animate={{ rotate: (score * 1.8) - 180 }}
                    transition={{ duration: 2, ease: "circOut", delay: 0.2 }}
                    className="absolute top-0 w-full aspect-square border-[10px] sm:border-[12px] border-blue-500 rounded-full border-b-transparent border-l-transparent shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                    style={{
                        clipPath: 'inset(0 0 50% 0)',
                        originX: "50%",
                        originY: "50%"
                    }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent rounded-t-full" />
            </div>

            <div className="mt-2 text-center z-10">
                <div className="flex items-baseline justify-center">
                    <motion.span className="text-3xl sm:text-5xl font-bold text-white">
                        {displayScore}
                    </motion.span>
                    <span className="text-slate-500 text-lg sm:text-xl ml-1">/100</span>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-[10px] sm:text-xs mt-2 font-mono uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${score < 30 ? 'text-green-400 border-green-400/20 bg-green-400/5' :
                            score < 70 ? 'text-yellow-400 border-yellow-400/20 bg-yellow-400/5' :
                                'text-red-400 border-red-400/20 bg-red-400/5'
                        }`}
                >
                    {score < 30 ? 'Low Threat' : score < 70 ? 'Elevated' : 'Critical'}
                </motion.p>
            </div>
        </div>
    );
}