import React, { useState } from 'react';
import { MoreVertical, ShieldCheck, ShieldAlert, Trash2 } from 'lucide-react';
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

            <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/20">
                <div>
                    <h3 className="text-lg font-bold text-white">Operator Access Control</h3>
                    <p className="text-xs text-slate-500 mt-1">Manage system permissions and account status</p>
                </div>
                <button className="text-xs font-bold text-blue-500 hover:text-blue-400 px-3 py-1.5 border border-blue-500/20 rounded-lg hover:bg-blue-500/10 transition-all">
                    Export Security Log
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-slate-800/30 text-slate-400 text-[11px] uppercase tracking-widest font-bold">
                        <tr>
                            <th className="p-4">Operator Details</th>
                            <th className="p-4">Security Role</th>
                            <th className="p-4">Account Status</th>
                            <th className="p-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/50">
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-slate-800/20 transition-colors group">
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-9 w-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-blue-400">
                                            {user.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-slate-200 text-sm">{user.name}</span>
                                            <span className="text-[11px] text-slate-500 font-mono uppercase tracking-tighter">{user.email}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs text-slate-300 px-2 py-1 bg-slate-800 rounded border border-slate-700">
                                            {user.role || "Analyst"}
                                        </span>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border uppercase tracking-wider ${user.status === 'Active'
                                        ? 'bg-green-500/5 text-green-400 border-green-500/20'
                                        : 'bg-red-500/5 text-red-400 border-red-500/20'
                                        }`}>
                                        <div className={`h-1 w-1 rounded-full ${user.status === 'Active' ? 'bg-green-400' : 'bg-red-400'}`} />
                                        {user.status}
                                    </span>
                                </td>
                                <td className="p-4 text-right">
                                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button
                                            onClick={() => toggleStatus(user.id)}
                                            title={user.status === 'Active' ? 'Revoke Access' : 'Grant Access'}
                                            className={`p-2 rounded-lg border transition-all ${user.status === 'Active'
                                                ? 'border-red-500/20 text-red-400 hover:bg-red-500/10'
                                                : 'border-green-500/20 text-green-400 hover:bg-green-500/10'
                                                }`}
                                        >
                                            {user.status === 'Active' ? <ShieldAlert size={16} /> : <ShieldCheck size={16} />}
                                        </button>
                                        <button className="p-2 border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-all">
                                            <Trash2 size={16} />
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