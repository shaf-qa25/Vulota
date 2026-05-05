import { ShieldCheck, Info } from 'lucide-react';

export default function SecurityInsights() {
    const events = [
        { msg: 'Malware blocked', time: '2m ago', color: 'bg-red-500' },
        { msg: 'New user verified', time: '1h ago', color: 'bg-blue-500' },
        { msg: 'Database backup', time: '3h ago', color: 'bg-green-500' },
    ];

    return (
        <div className="bg-[#0f172a] p-6 rounded-2xl border border-slate-800 h-[350px] flex flex-col">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <ShieldCheck className="text-green-500" size={20} /> Security Pulse
            </h3>
            <div className="p-4 bg-blue-500/5 rounded-xl border border-blue-500/20 mb-6">
                <h4 className="text-sm font-bold text-blue-400 flex items-center gap-2 mb-1">
                    <Info size={14} /> Optimization Tip
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                    Enable 2FA for the admin panel to reduce risk by 40%.
                </p>
            </div>
            <div className="space-y-4 overflow-y-auto">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Recent Events</p>
                {events.map((event, i) => (
                    <div key={i} className="flex items-center gap-3 py-1">
                        <div className={`h-2 w-2 rounded-full ${event.color}`} />
                        <p className="text-sm flex-1">{event.msg}</p>
                        <span className="text-[10px] text-slate-500 font-mono">{event.time}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}