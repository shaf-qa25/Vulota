

import { ShieldCheck, Info } from 'lucide-react';

export default function SecurityInsights() {
    const events = [
        { msg: 'Malware blocked', time: '2m ago', color: 'bg-red-500' },
        { msg: 'New user verified', time: '1h ago', color: 'bg-blue-500' },
        { msg: 'Database backup', time: '3h ago', color: 'bg-green-500' },
        { msg: 'Failed login attempt', time: '5h ago', color: 'bg-yellow-500' },
    ];

    return (
        <div className="bg-[#0f172a] p-4 md:p-6 rounded-2xl border border-slate-800 min-h-[320px] lg:h-[380px] flex flex-col w-full transition-all overflow-x-hidden">
            <h3 className="text-base md:text-lg font-semibold mb-4 flex items-center gap-2 text-white">
                <ShieldCheck className="text-green-500" size={20} /> Security Pulse
            </h3>

            <div className="p-3 md:p-4 bg-blue-500/5 rounded-xl border border-blue-500/20 mb-5 md:mb-6">
                <h4 className="text-xs md:text-sm font-bold text-blue-400 flex items-center gap-2 mb-1">
                    <Info size={14} /> Optimization Tip
                </h4>
                <p className="text-[11px] md:text-xs text-slate-400 leading-relaxed">
                    Enable 2FA for the admin panel to reduce risk by 40%.
                </p>
            </div>

            <div className="space-y-4 overflow-y-auto overflow-x-hidden pr-2 custom-scrollbar flex-1">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    Recent Events
                </p>

                {events.map((event, i) => (
                    <div key={i} className="flex items-center gap-3 py-1 group cursor-default">
                        <div className={`h-2 w-2 m-1 rounded-full shrink-0 ${event.color} shadow-[0_0_8px_rgba(59,130,246,0.5)]`} />
                        <p className="text-sm flex-1 text-slate-300 group-hover:text-white transition-colors truncate">
                            {event.msg}
                        </p>
                        <span className="text-[10px] text-slate-500 font-mono shrink-0">
                            {event.time}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}