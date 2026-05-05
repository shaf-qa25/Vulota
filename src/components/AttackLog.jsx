export default function AttackLog() {
    const logs = [
        { time: '14:20:01', event: 'SSH Brute Force attempt blocked', ip: '192.168.1.102', status: 'Blocked' },
        { time: '14:22:45', event: 'New vulnerability scan started', ip: 'System', status: 'Running' },
        { time: '14:25:12', event: 'SQL Injection pattern detected', ip: '45.12.33.1', status: 'Neutralized' },
    ];

    return (
        <div className="bg-[#020617] p-4 rounded-xl border border-slate-800 font-mono text-[11px]">
            <div className="flex gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 rounded-full bg-green-500" />
            </div>
            <div className="space-y-1">
                {logs.map((log, i) => (
                    <div key={i} className="flex gap-4 border-b border-slate-900 pb-1">
                        <span className="text-blue-500">[{log.time}]</span>
                        <span className="text-slate-300 flex-1">{log.event}</span>
                        <span className="text-slate-500">{log.ip}</span>
                        <span className={log.status === 'Blocked' ? 'text-red-400' : 'text-green-400'}>{log.status}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}