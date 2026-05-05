
import { motion } from 'framer-motion';

export default function RiskGauge({ score = 24 }) {
    return (
        <div className="relative flex flex-col items-center justify-center p-6 h-full bg-[#0f172a] rounded-2xl border border-slate-800">
            <h3 className="text-sm font-medium text-slate-400 mb-4">Overall Risk Score</h3>
            <div className="relative w-40 h-20 overflow-hidden">
                <div className="absolute top-0 w-40 h-40 border-[12px] border-slate-800 rounded-full" />
                <motion.div
                    initial={{ rotate: -90 }}
                    animate={{ rotate: (score * 1.8) - 90 }} // Map 0-100 to -90 to 90 deg
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute top-0 w-40 h-40 border-[12px] border-blue-500 rounded-full border-b-transparent border-l-transparent"
                    style={{ clipPath: 'inset(0 0 50% 0)' }}
                />
            </div>
            <div className="mt-[-10px] text-center">
                <span className="text-4xl font-bold text-white">{score}</span>
                <span className="text-slate-500 text-xl">/100</span>
                <p className="text-green-400 text-xs mt-1 font-mono uppercase tracking-widest">Low Threat Level</p>
            </div>
        </div>
    );
}