import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { chartData } from '../data/mockData';

export default function MainChart() {
    return (
        <div className="bg-[#0f172a] p-6 rounded-2xl border border-slate-800 h-[350px]">
            <h3 className="text-lg font-semibold mb-6">Threat Propagation (24h)</h3>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                    <defs>
                        <linearGradient id="colorThreat" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                    <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', border: '1px solid #1e293b' }} />
                    <Area type="monotone" dataKey="threats" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorThreat)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}