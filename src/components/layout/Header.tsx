import { Home, Menu } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import toast from 'react-hot-toast';

interface HeaderProps {
    onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
    const { theme, setTheme } = useTheme();

    return (
        <header className="h-[72px] flex items-center justify-between px-4 md:px-8 border-b border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark">
            <div className="flex items-center gap-2 md:gap-4">
                <button
                    onClick={onMenuClick}
                    className="p-2 -ml-2 md:hidden text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                    <Menu className="w-5 h-5" />
                </button>
                <div className="flex flex-col">
                    <div className="flex items-center text-[13px] md:text-[15px] text-slate-500 dark:text-slate-400">
                        <span className="font-semibold text-slate-900 dark:text-slate-100 mr-2 hidden sm:inline">Scan</span>
                        <Home className="w-[14px] h-[14px] mx-1 md:mx-2 shrink-0 hidden sm:block" />
                        <span className="mx-1 md:mx-2 hidden sm:inline">/</span>
                        <span className="hover:text-slate-700 cursor-pointer hidden sm:inline">Private Assets</span>
                        <span className="mx-1 md:mx-2 hidden sm:inline">/</span>
                        <span className="text-brand-teal font-medium truncate max-w-[120px] md:max-w-none">New Scan</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                    aria-label="Toggle Dark Mode"
                >
                    <svg className="w-5 h-5 hidden dark:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <svg className="w-5 h-5 block dark:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                </button>
                <div className="w-[1px] h-6 bg-slate-200 dark:bg-slate-800" />
                <button
                    onClick={() => toast.success('Report export started successfully')}
                    className="px-6 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-[14px] font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                    Export Report
                </button>
                <button
                    onClick={() => toast.error('Scan has been stopped')}
                    className="px-6 py-2.5 rounded-lg bg-red-50 dark:bg-red-500/10 border border-red-100 dark:border-red-500/20 text-[14px] font-medium text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-500/20 transition-colors"
                >
                    Stop Scan
                </button>
            </div>
        </header>
    );
}
