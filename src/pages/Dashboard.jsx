import { useState, useEffect } from 'react';
import { Skeleton } from '../components/Skeleton';
import StatCard from '../components/StatCard';
import MainChart from '../components/MainChart';
import SecurityInsights from '../components/SecurityInsights';
import UserTable from '../components/UserTable';
import RiskGauge from '../components/RiskGauge';
import AttackLog from '../components/AttackLog';
import { statsData } from '../data/mockData';

export default function Dashboard() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="max-w-[1600px] mx-auto px-4 md:px-0">
            <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-xl md:text-2xl font-bold text-white">Security Command Center</h1>
                    <p className="text-slate-500 text-sm">Monitoring real-time threats and system integrity.</p>
                </div>
                <div className="text-left md:text-right text-xs font-mono text-slate-500 bg-slate-900/50 p-2 rounded-lg border border-slate-800 md:border-none">
                    SYSTEM STATUS: <span className="text-green-500">OPTIMAL</span>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {isLoading ? (
                    [1, 2, 3, 4].map((i) => <Skeleton key={i} className="h-28" />)
                ) : (
                    statsData.map(stat => <StatCard key={stat.id} {...stat} />)
                )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <div className="lg:col-span-2 w-full overflow-hidden">
                    {isLoading ? <Skeleton className="h-[300px] md:h-[380px]" /> : <MainChart />}
                </div>
                <div className="lg:col-span-1">
                    {isLoading ? <Skeleton className="h-[300px] md:h-[380px]" /> : <RiskGauge score={24} />}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <div className="col-span-1">
                    {isLoading ? <Skeleton className="h-[300px]" /> : <AttackLog />}
                </div>
                <div className="col-span-1">
                    {isLoading ? <Skeleton className="h-[300px]" /> : <SecurityInsights />}
                </div>
                <div className="col-span-1 md:col-span-2 lg:col-span-1 bg-[#0f172a] rounded-2xl border border-slate-800 p-6">
                    <h3 className="font-bold mb-4">Quick Actions</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                        <button className="w-full py-2.5 bg-blue-600/20 text-blue-400 border border-blue-600/30 rounded-lg text-sm hover:bg-blue-600 hover:text-white transition-all">Scan Network</button>
                        <button className="w-full py-2.5 bg-slate-800 text-slate-300 rounded-lg text-sm hover:bg-slate-700 transition-all">Flush DNS</button>
                        <button className="w-full py-2.5 bg-slate-800 text-slate-300 rounded-lg text-sm hover:bg-slate-700 transition-all">Update Firewall</button>
                    </div>
                </div>
            </div>

            <div className="mt-6 overflow-x-hidden">
                <div className="bg-[#0f172a] rounded-2xl border border-slate-800">
                    {isLoading ? <Skeleton className="h-64" /> : <UserTable />}
                </div>
            </div>
        </div>
    );
}