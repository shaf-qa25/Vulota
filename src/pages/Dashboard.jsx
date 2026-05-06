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
        <div className="relative min-h-screen">
            <div className="fixed inset-0 z-0">
                <Grainient
                    color1="#5b6aa9"
                    color2="#57617e"
                    color3="#676a77"
                    timeSpeed={0.25}
                    colorBalance={0}
                    warpStrength={1}
                    warpFrequency={5}
                    warpSpeed={2}
                    warpAmplitude={50}
                    blendAngle={0}
                    blendSoftness={0.05}
                    rotationAmount={500}
                    noiseScale={2}
                    grainAmount={0.1}
                    grainScale={2}
                    grainAnimated={false}
                    contrast={1.5}
                    gamma={1}
                    saturation={1}
                    centerX={0}
                    centerY={0}
                    zoom={0.9}
                />
            </div>

            <div className="relative z-10 max-w-[1600px] mx-auto p-2">
                <div className="mb-8 flex justify-between items-center bg-white/30 backdrop-blur-md p-6 rounded-2xl border border-white/50">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900">Security Command Center</h1>
                        <p className="text-slate-800 text-sm">Monitoring real-time threats and system integrity.</p>
                    </div>
                    <div className="text-right text-sm font-mono text-slate-900">
                        SYSTEM STATUS: <span className="text-green-900">OPTIMAL</span>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-6">
                    {isLoading ? (
                        [1, 2, 3, 4].map((i) => <Skeleton key={i} className="h-28 rounded-2xl" />)
                    ) : (
                        statsData.map(stat => <StatCard key={stat.id} {...stat} />)
                    )}
                </div>

                <div className="grid grid-cols-3 gap-6 mb-6">
                    <div className="col-span-2">
                        {isLoading ? <Skeleton className="h-[380px] rounded-2xl" /> : <MainChart />}
                    </div>
                    <div className="col-span-1">
                        {isLoading ? <Skeleton className="h-[380px] rounded-2xl" /> : <RiskGauge score={24} />}
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-6">
                    <div className="col-span-1">
                        {isLoading ? <Skeleton className="h-[300px] rounded-2xl" /> : <AttackLog />}
                    </div>
                    <div className="col-span-1">
                        {isLoading ? <Skeleton className="h-[300px] rounded-2xl" /> : <SecurityInsights />}
                    </div>
                    <div className="col-span-1 bg-[#1E293B] rounded-2xl border border-slate-800 p-6 shadow-xl">
                        <h3 className="font-bold mb-4 text-white">Quick Actions</h3>
                        <div className="space-y-3">
                            <button className="w-full py-2 bg-blue-600/20 text-blue-400 border border-blue-600/30 rounded-lg text-sm hover:bg-blue-600 hover:text-white transition-all">Scan Network</button>
                            <button className="w-full py-2 bg-slate-800 text-slate-300 rounded-lg text-sm hover:bg-slate-700 transition-all border border-slate-700">Flush DNS</button>
                            <button className="w-full py-2 bg-slate-800 text-slate-300 rounded-lg text-sm hover:bg-slate-700 transition-all border border-slate-700">Update Firewall</button>
                        </div>
                    </div>
                </div>

                <div className="mt-6 mb-10">
                    {isLoading ? <Skeleton className="h-64 rounded-2xl" /> : <UserTable />}
                </div>
            </div>
        </div>
    );
}