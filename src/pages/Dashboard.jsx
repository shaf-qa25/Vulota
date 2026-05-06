import { useState, useEffect } from 'react';
import { Skeleton } from '../components/Skeleton';
import StatCard from '../components/StatCard';
import MainChart from '../components/MainChart';
import SecurityInsights from '../components/SecurityInsights';
import UserTable from '../components/UserTable';
import RiskGauge from '../components/RiskGauge';
import AttackLog from '../components/AttackLog';
import { statsData } from '../data/mockData';
import Grainient from '../components/ui/Granient';

export default function Dashboard() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative min-h-screen w-full overflow-x-hidden selection:bg-blue-500/30">
            <div className="fixed inset-0 z-0">
                <Grainient
                    color1="#1e293b"
                    color2="#334155"
                    color3="#0f172a"
                    timeSpeed={0.15}
                    warpStrength={0.8}
                    noiseScale={1.5}
                    grainAmount={0.05}
                    contrast={1.2}
                />
            </div>

            <main className="relative z-10 w-full max-w-[1600px] mx-auto p-4 md:p-6 lg:p-4">

                <header className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-2xl">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                            Security <span className="text-blue-400">Command Center</span>
                        </h1>
                        <p className="text-slate-400 text-sm mt-1">Real-time threat monitoring & system integrity.</p>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-900/50 px-4 py-2 rounded-full border border-white/5">
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-mono text-green-400 uppercase tracking-widest">System Optimal</span>
                    </div>
                </header>

                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {isLoading ? (
                        [1, 2, 3, 4].map((i) => <Skeleton key={i} className="h-32 rounded-2xl bg-white/5" />)
                    ) : (
                        statsData.map(stat => <StatCard key={stat.id} {...stat} />)
                    )}
                </section>

                <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <div className="lg:col-span-2 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-1">
                        {isLoading ? <Skeleton className="h-[400px] rounded-3xl" /> : <MainChart />}
                    </div>
                    <div className="lg:col-span-1">
                        {isLoading ? <Skeleton className="h-[400px] rounded-3xl" /> : <RiskGauge score={24} />}
                    </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div className="h-full">
                        {isLoading ? <Skeleton className="h-[350px] rounded-3xl" /> : <AttackLog />}
                    </div>
                    <div className="h-full">
                        {isLoading ? <Skeleton className="h-[350px] rounded-3xl" /> : <SecurityInsights />}
                    </div>

                    <div className="bg-slate-900/80 backdrop-blur-2xl rounded-3xl border border-blue-500/20 p-6 shadow-xl flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg font-bold text-white mb-2">Quick Actions</h3>
                            <p className="text-slate-400 text-xs mb-6">Execute system-wide security protocols.</p>
                        </div>
                        <div className="space-y-3">
                            <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-semibold transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98]">
                                Scan Network
                            </button>
                            <button className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-sm font-semibold transition-all border border-slate-700 active:scale-[0.98]">
                                Flush DNS Cache
                            </button>
                            <button className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-sm font-semibold transition-all border border-slate-700 active:scale-[0.98]">
                                Update Firewall
                            </button>
                        </div>
                    </div>
                </section>

                <section className="mb-12 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden">
                    <div className="p-6 border-b border-white/10">
                        <h3 className="text-lg font-bold text-white">Active User Sessions</h3>
                    </div>
                    <div className="overflow-x-auto">
                        {isLoading ? <Skeleton className="h-80 w-full" /> : <UserTable />}
                    </div>
                </section>

            </main>
        </div>
    );
}