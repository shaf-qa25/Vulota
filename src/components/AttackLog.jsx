export default function AttackLog() {
    const logs = [
        { time: '14:20:01', event: 'SSH Brute Force attempt blocked', ip: '192.168.1.102', status: 'Blocked' },
        { time: '14:22:45', event: 'New vulnerability scan started', ip: 'System', status: 'Running' },
        { time: '14:25:12', event: 'SQL Injection pattern detected', ip: '45.12.33.1', status: 'Neutralized' },
    ];

    return (
        <div className="bg-[#020617] p-4 rounded-xl border border-slate-800 font-mono text-[11px] h-full flex flex-col">
            <div className="flex gap-2 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="ml-2 text-slate-500 text-[9px] uppercase tracking-widest">Live Security Logs</span>
            </div>

            <div className="space-y-3 overflow-y-auto max-h-[300px] scrollbar-hide">
                {logs.map((log, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 border-b border-slate-900/50 pb-2 last:border-0">
                        <div className="flex gap-2 flex-1">
                            <span className="text-blue-500 shrink-0">[{log.time}]</span>
                            <span className="text-slate-300 break-words">{log.event}</span>
                        </div>

                        <div className="flex items-center justify-between sm:justify-end gap-4 mt-1 sm:mt-0">
                            <span className="text-slate-500 text-[10px]">{log.ip}</span>
                            <span className={`px-2 py-0.5 rounded-md text-[9px] font-bold uppercase ${log.status === 'Blocked' ? 'bg-red-500/10 text-red-400' :
                                    log.status === 'Running' ? 'bg-blue-500/10 text-blue-400' :
                                        'bg-green-500/10 text-green-400'
                                }`}>
                                {log.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-auto pt-4 flex items-center gap-2 text-slate-600">
                <span className="animate-pulse">_</span>
                <span className="text-[9px]">LISTENING ON PORT 443...</span>
            </div>
        </div>
    );
}