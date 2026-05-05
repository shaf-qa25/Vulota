import React from 'react';
import { DatabaseBackup, Plus, RefreshCcw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function EmptyState({
    title = "No Data Found",
    description = "It looks like there's no information to display right now.",
    actionText = "Refresh Data",
    onAction
}) {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center animate-in fade-in duration-700">
            <div className="relative mb-8">
                <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
                <div className="relative bg-[#0f172a] p-8 rounded-3xl border border-slate-800 shadow-2xl">
                    <DatabaseBackup size={48} className="text-slate-600 animate-pulse" />
                    <div className="absolute -top-1 -right-1">
                        <div className="flex h-4 w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500"></span>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">
                {title}
            </h2>
            <p className="text-slate-500 max-w-sm mb-8 text-sm leading-relaxed">
                {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <button
                    onClick={onAction || (() => window.location.reload())}
                    className="flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-all shadow-lg shadow-blue-500/20 active:scale-95"
                >
                    <RefreshCcw size={18} />
                    {actionText}
                </button>

                <button
                    onClick={() => navigate('/')}
                    className="flex items-center justify-center gap-2 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl font-medium transition-all border border-slate-700 active:scale-95"
                >
                    Return to Dashboard
                </button>
            </div>
        </div>
    );
}