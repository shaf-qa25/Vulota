import {
    LayoutDashboard,
    ShieldAlert,
    Users,
    BarChart3,
    Terminal,
    LogOut
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const menuItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Analytics', path: '/analytics', icon: BarChart3 },
    { name: 'Security', path: '/security', icon: ShieldAlert },
    { name: 'Users', path: '/users', icon: Users },
    { name: 'Terminal', path: '/terminal', icon: Terminal },
];

export default function Sidebar({ closeMenu }) {
    return (
        <aside className="left-0 top-0 w-64 h-full bg-[#0f172a] border-r border-slate-800 flex flex-col z-50">
            <div className="p-8">
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="p-2 bg-blue-600 rounded-lg group-hover:rotate-12 transition-transform shadow-lg shadow-blue-500/20">
                        <ShieldAlert className="text-white" size={20} />
                    </div>
                    <h1 className="text-xl font-bold text-white tracking-tight">VULOTA</h1>
                </div>
            </div>

            <nav className="flex-1 px-4 space-y-1">
                <p className="px-4 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">
                    Core Modules
                </p>

                {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            onClick={closeMenu}
                            className={({ isActive }) => `
                flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
                ${isActive
                                    ? 'bg-blue-600/10 text-blue-500 border border-blue-500/20 shadow-inner'
                                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-100'}
              `}
                        >
                            {({ isActive }) => (
                                <>
                                    <span className="transition-transform group-hover:scale-110">
                                        <Icon size={20} />
                                    </span>
                                    <span className="font-medium text-sm">{item.name}</span>
                                    {isActive && (
                                        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
                                    )}
                                </>
                            )}
                        </NavLink>
                    );
                })}
            </nav>

            <div className="p-4 mt-auto border-t border-slate-800 bg-slate-900/20">
                <div className="flex items-center gap-3 px-4 py-3 mb-2">
                    <div className="h-8 w-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-300">
                        SF
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-slate-200">User Name</span>
                        <span className="text-[10px] text-slate-500">Admin Profile</span>
                    </div>
                </div>

                <button className="w-full flex items-center gap-3 px-4 py-2 text-slate-400 hover:text-red-400 hover:bg-red-400/5 rounded-lg transition-colors text-sm">
                    <LogOut size={18} />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
}