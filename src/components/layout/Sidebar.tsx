import { NavLink, Link } from "react-router-dom";
import {
    LayoutDashboard,
    ClipboardList,
    LineChart,
    CalendarDays,
    Bell,
    Settings,
    Info,
    ChevronRight,
    X
} from "lucide-react";
import { cn } from "../../lib/utils";

const topNavItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Projects", href: "/projects", icon: ClipboardList },
    { name: "Scans", href: "/scans/scan-001", icon: LineChart },
    { name: "Schedule", href: "/schedule", icon: CalendarDays },
];

const bottomNavItems = [
    { name: "Notifications", href: "/notifications", icon: Bell },
    { name: "Settings", href: "/settings", icon: Settings },
    { name: "Support", href: "/support", icon: Info },
];

interface SidebarProps {
    isOpen?: boolean;
    setIsOpen?: (isOpen: boolean) => void;
}

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
    return (
        <aside
            className={cn(
                "fixed inset-y-0 left-0 z-50 w-[240px] border-r border-slate-200 dark:border-slate-800 bg-sidebar-light dark:bg-sidebar-dark flex flex-col h-full transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0",
                isOpen ? "translate-x-0" : "-translate-x-full"
            )}
        >
            {/* Logo area */}
            <div className="h-20 flex items-center justify-between px-6">
                <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen?.(false)}>
                    <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-brand-teal/20">
                        <div className="w-3 h-3 rounded-full bg-brand-teal" />
                    </div>
                    <span className="font-semibold text-xl tracking-tight text-slate-900 dark:text-white">aps</span>
                </Link>
                {/* Mobile close button */}
                <button
                    className="md:hidden p-2 -mr-2 text-slate-500 hover:text-slate-900 dark:hover:text-slate-100"
                    onClick={() => setIsOpen?.(false)}
                >
                    <X className="w-5 h-5" />
                </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 overflow-y-auto py-4 flex flex-col gap-6">
                <div className="flex flex-col gap-1 px-4">
                    {topNavItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <NavLink
                                key={item.name}
                                to={item.href}
                                onClick={() => setIsOpen?.(false)}
                                className={({ isActive }) => cn(
                                    "flex items-center gap-4 px-4 py-3 rounded-xl text-[14px] font-medium transition-colors",
                                    isActive
                                        ? "bg-brand-teal/10 text-brand-teal dark:text-brand-teal"
                                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-100"
                                )}
                            >
                                <div className="relative">
                                    <Icon className="w-[20px] h-[20px]" strokeWidth={1.5} />
                                    {item.name === "Scans" && (
                                        <span className="absolute -bottom-0.5 -left-0.5 w-[8px] h-[8px] rounded-full bg-orange-500 border-2 border-sidebar-light dark:border-sidebar-dark" />
                                    )}
                                </div>
                                {item.name}
                            </NavLink>
                        );
                    })}
                </div>

                <div className="h-px bg-slate-200 dark:bg-slate-800" />

                <div className="flex flex-col gap-1 px-4">
                    {bottomNavItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <NavLink
                                key={item.name}
                                to={item.href}
                                onClick={() => setIsOpen?.(false)}
                                className={({ isActive }) => cn(
                                    "flex items-center gap-4 px-4 py-3 rounded-xl text-[14px] font-medium transition-colors",
                                    isActive
                                        ? "bg-brand-teal/10 text-brand-teal dark:text-brand-teal"
                                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-100"
                                )}
                            >
                                <div className="relative">
                                    <Icon className="w-[20px] h-[20px]" strokeWidth={1.5} />
                                    {item.name === "Notifications" && (
                                        <span className="absolute -bottom-0.5 -left-0.5 w-[8px] h-[8px] rounded-full bg-orange-500 border-2 border-sidebar-light dark:border-sidebar-dark" />
                                    )}
                                </div>
                                {item.name}
                            </NavLink>
                        );
                    })}
                </div>
            </nav>

            {/* User Profile */}
            <div className="mt-auto p-4 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 p-2 rounded-xl transition-colors">
                    <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center overflow-hidden shrink-0">
                        {/* Placeholder for avatar */}
                        <div className="w-full h-full bg-[url('https://api.dicebear.com/7.x/avataaars/svg?seed=Felix')] bg-cover" />
                    </div>
                    <div className="flex flex-col flex-1 overflow-hidden">
                        <span className="text-[13px] text-slate-500 dark:text-slate-400 truncate">admin@edu.com</span>
                        <span className="text-[14px] font-semibold text-slate-900 dark:text-white truncate">Security Lead</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400 shrink-0" />
                </div>
            </div>
        </aside>
    );
}
