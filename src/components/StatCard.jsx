export default function StatCard({ title, value, trend, status }) {
    return (
        <div className="bg-[#0f172a] p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all group">
            <p className="text-slate-400 text-sm font-medium mb-2">{title}</p>
            <div className="flex justify-between items-end">
                <h3 className="text-3xl font-bold group-hover:text-blue-500 transition-colors">{value}</h3>
                <span className={`text-xs px-2 py-1 rounded-lg font-mono ${status === 'danger' ? 'bg-red-500/10 text-red-400' : 'bg-green-500/10 text-green-400'
                    }`}>
                    {trend}
                </span>
            </div>
        </div>
    );
}