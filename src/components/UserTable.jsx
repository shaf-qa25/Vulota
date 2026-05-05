import React, { useState } from 'react';
import { ShieldCheck, ShieldAlert, Trash2, MoreVertical } from 'lucide-react';
import { userData as initialData } from '../data/mockData';

export default function UserTable() {
    const [users, setUsers] = useState(initialData);

    const toggleStatus = (id) => {
        setUsers(users.map(user =>
            user.id === id
                ? { ...user, status: user.status === 'Active' ? 'Blocked' : 'Active' }
                : user
        ));
    };

    return (
        <div className="bg-[#0f172a] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
            {/* Header - Stack on mobile */}
            <div className="p-4 md:p-6 border-b border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-900/20">
                <div>
                    <h3 className="text-lg font-bold text-white">Operator Access Control</h3>
                    <p className="text-xs text-slate-500 mt-1">Manage system permissions and account status</p>
                </div>
                <button className="w-full sm:w-auto text-xs font-bold text-blue-500 hover:text-blue-400 px-3 py-2 border border-blue-500/20 rounded-lg hover:bg-blue-500/10 transition-all">
                    Export Security Log
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-800/30 text-slate-400 text-[11px] uppercase tracking-widest font-bold">
                        <tr>
                            <th className="p-4 whitespace-nowrap">Operator Details</th>
                            {/* Hide Role and Status headers on very small screens if needed, 
                                but table-cell keeps layout intact */}
                            <th className="p-4 whitespace-nowrap hidden md:table-cell">Security Role</th>
                            <th className="p-4 whitespace-nowrap">Status</th>
                            <th className="p-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/50">
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-slate-800/20 transition-colors group">
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-9 w-9 shrink-0 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-blue-400">
                                            {user.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div className="flex flex-col min-w-0">
                                            <span className="font-semibold text-slate-200 text-sm truncate">{user.name}</span>
                                            <span className="text-[10px] md:text-[11px] text-slate-500 font-mono uppercase truncate">
                                                {user.email}
                                            </span>
                                            {/* Mobile only role badge */}
                                            <span className="md:hidden mt-1 text-[9px] text-blue-400 font-bold">
                                                {user.role || "Analyst"}
                                            </span>
                                        </div>
                                    </div>
                                </td>

                                <td className="p-4 hidden md:table-cell">
                                    <span className="text-xs text-slate-300 px-2 py-1 bg-slate-800 rounded border border-slate-700">
                                        {user.role || "Analyst"}
                                    </span>
                                </td>

                                <td className="p-4">
                                    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 md:px-2.5 md:py-1 rounded-full text-[9px] md:text-[10px] font-bold border uppercase tracking-wider ${user.status === 'Active'
                                        ? 'bg-green-500/5 text-green-400 border-green-500/20'
                                        : 'bg-red-500/5 text-red-400 border-red-500/20'
                                        }`}>
                                        <div className={`h-1 w-1 rounded-full ${user.status === 'Active' ? 'bg-green-400' : 'bg-red-400'}`} />
                                        {user.status}
                                    </span>
                                </td>

                                <td className="p-4 text-right">
                                    <div className="flex justify-end gap-1.5 md:gap-2 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                                        <button
                                            onClick={() => toggleStatus(user.id)}
                                            className={`p-2 rounded-lg border transition-all ${user.status === 'Active'
                                                ? 'border-red-500/20 text-red-400 hover:bg-red-500/10'
                                                : 'border-green-500/20 text-green-400 hover:bg-green-500/10'
                                                }`}
                                        >
                                            {user.status === 'Active' ? <ShieldAlert size={14} /> : <ShieldCheck size={14} />}
                                        </button>
                                        <button className="p-2 border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-all">
                                            <Trash2 size={14} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}