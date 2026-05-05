import { motion, useSpring, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';

function AnimatedNumber({ value }) {
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, '')) || 0;
    const suffix = value.replace(/[0-9.]/g, '');

    const count = useSpring(0, { stiffness: 50, damping: 20 });
    const displayValue = useTransform(count, (latest) =>
        latest.toFixed(numericValue % 1 === 0 ? 0 : 1) + suffix
    );

    useEffect(() => {
        const controls = animate(0, numericValue, {
            duration: 2,
            onUpdate: (latest) => count.set(latest),
        });
        return () => controls.stop();
    }, [numericValue]);

    return <motion.h3 className="text-2xl md:text-3xl font-bold group-hover:text-blue-500 transition-colors">{displayValue}</motion.h3>;
}

export default function StatCard({ title, value, trend, status }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-[#0f172a] p-4 md:p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all group shadow-lg"
        >
            <p className="text-slate-400 text-xs md:text-sm font-medium mb-2 truncate">{title}</p>

            <div className="flex justify-between items-end gap-2">
                <AnimatedNumber value={value} />

                <span className={`text-[10px] md:text-xs px-2 py-1 rounded-lg font-mono whitespace-nowrap ${status === 'danger'
                        ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                        : 'bg-green-500/10 text-green-400 border border-green-500/20'
                    }`}>
                    {trend}
                </span>
            </div>

            <div className="mt-4 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '70%' }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className={`h-full ${status === 'danger' ? 'bg-red-500' : 'bg-blue-500'}`}
                />
            </div>
        </motion.div>
    );
}