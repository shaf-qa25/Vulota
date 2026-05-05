import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { chartData } from '../data/mockData';

export default function MainChart() {
    return (
        <div className="bg-[#0f172a] p-4 md:p-6 rounded-2xl border border-slate-800 h-[300px] md:h-[350px] w-full">
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-slate-100">
                Threat Propagation (24h)
            </h3>

            <ResponsiveContainer width="100%" height="90%">
                <AreaChart data={chartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorThreat" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                        </linearGradient>
                    </defs>

                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />

                    <XAxis
                        dataKey="time"
                        stroke="#64748b"
                        fontSize={10}
                        tickLine={false}
                        axisLine={false}
                        dy={10}
                    />

                    <YAxis
                        stroke="#64748b"
                        fontSize={10}
                        tickLine={false}
                        axisLine={false}
                    />

                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#1e293b',
                            borderRadius: '12px',
                            border: 'none',
                            fontSize: '12px',
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)'
                        }}
                        itemStyle={{ color: '#60a5fa' }}
                    />

                    <Area
                        type="monotone"
                        dataKey="threats"
                        stroke="#3b82f6"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorThreat)"
                        isAnimationActive={true}
                        animationBegin={300}
                        animationDuration={1500}
                        animationEasing="ease-in-out"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}