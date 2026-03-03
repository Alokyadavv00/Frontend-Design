import { Search, Filter, Columns, Plus, Ban, AlertTriangle, AlertCircle, ArrowUp, ArrowDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { mockScans } from "../data/mock";
import { Badge } from "../components/ui/Badge";
import { StatusChip } from "../components/ui/StatusChip";
import { Button } from "../components/ui/Button";

export default function Dashboard() {
    const navigate = useNavigate();

    const handleRowClick = (id: string) => {
        navigate(`/scans/${id}`);
    };

    return (
        <div className="max-w-[1400px] mx-auto space-y-8 pb-10">
            {/* Combined Top Metrics Box */}
            <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-6 flex flex-col gap-6">
                {/* Top Stats Row */}
                <div className="flex items-center justify-between text-[13px] font-medium w-full pb-4 md:pb-6 overflow-x-auto whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="flex items-center gap-2">
                            <span className="text-slate-400">Org:</span>
                            <span className="text-slate-200 font-semibold tracking-wide">Project X</span>
                        </div>

                        <div className="w-[1px] h-4 bg-slate-700 mx-8 shrink-0" />

                        <div className="flex items-center gap-2">
                            <span className="text-slate-400">Owner:</span>
                            <span className="text-slate-200 font-semibold tracking-wide">Nammagiri</span>
                        </div>

                        <div className="w-[1px] h-4 bg-slate-700 mx-8 shrink-0" />

                        <div className="flex items-center gap-2.5">
                            <span className="text-slate-400">Total Scans:</span>
                            <span className="text-slate-200 font-semibold tracking-wide">100</span>
                        </div>

                        <div className="w-[1px] h-4 bg-slate-700 mx-8 shrink-0" />

                        <div className="flex items-center gap-2.5">
                            <span className="text-slate-400">Scheduled:</span>
                            <span className="text-slate-200 font-semibold tracking-wide">1000</span>
                        </div>

                        <div className="w-[1px] h-4 bg-slate-700 mx-8 shrink-0" />

                        <div className="flex items-center gap-2.5">
                            <span className="text-slate-400">Rescans:</span>
                            <span className="text-slate-200 font-semibold tracking-wide">100</span>
                        </div>

                        <div className="w-[1px] h-4 bg-slate-700 mx-8 shrink-0" />

                        <div className="flex items-center gap-2.5">
                            <span className="text-slate-400">Failed Scans:</span>
                            <span className="text-slate-200 font-semibold tracking-wide">100</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-[#0CC8A8] font-semibold pl-8 shrink-0 ml-auto">
                        <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        10 mins ago
                    </div>
                </div>

                {/* Severity Cards */}
                <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 pt-6 border-t border-slate-200 dark:border-slate-800/60 pb-2">
                    {/* Critical */}
                    <div className="flex flex-col gap-2 md:w-1/4">
                        <div className="flex items-center gap-3">
                            <span className="text-[14px] font-medium text-slate-500 dark:text-slate-400">Critical Severity</span>
                            <div className="w-[22px] h-[22px] rounded border border-red-500/20 bg-[#FFE4E6] dark:bg-[#FFE4E6] flex items-center justify-center">
                                <Ban className="w-[12px] h-[12px] text-red-600" strokeWidth={2.5} />
                            </div>
                        </div>
                        <div className="flex items-baseline gap-3 mt-1.5">
                            <span className="text-[28px] font-bold text-slate-900 dark:text-white leading-none tracking-tight">86</span>
                            <span className="flex items-center text-[11px] font-medium text-red-500 tracking-wide">
                                <ArrowUp className="w-3 h-3 mr-0.5" strokeWidth={2.5} />
                                +2% increase than yesterday
                            </span>
                        </div>
                    </div>

                    {/* High */}
                    <div className="flex flex-col gap-2 md:w-1/4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="text-[14px] font-medium text-slate-500 dark:text-slate-400">High Severity</span>
                                <div className="w-[22px] h-[22px] rounded border border-orange-500/20 bg-[#FFEDD5] dark:bg-[#FFEDD5] flex items-center justify-center">
                                    <AlertTriangle className="w-[12px] h-[12px] text-orange-600" strokeWidth={2.5} />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-baseline gap-3 mt-1.5">
                            <span className="text-[28px] font-bold text-slate-900 dark:text-white leading-none tracking-tight">16</span>
                            <span className="flex items-center text-[11px] font-medium text-red-500 tracking-wide">
                                <ArrowUp className="w-3 h-3 mr-0.5" strokeWidth={2.5} />
                                +0.9% increase than yesterday
                            </span>
                        </div>
                    </div>

                    {/* Medium */}
                    <div className="flex flex-col gap-2 md:w-1/4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="text-[14px] font-medium text-slate-500 dark:text-slate-400">Medium Severity</span>
                                <div className="w-[22px] h-[22px] rounded border border-yellow-500/20 bg-[#FEF9C3] dark:bg-[#FEF9C3] flex items-center justify-center">
                                    <AlertCircle className="w-[12px] h-[12px] text-yellow-600" strokeWidth={2.5} />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-baseline gap-3 mt-1.5">
                            <span className="text-[28px] font-bold text-slate-900 dark:text-white leading-none tracking-tight">26</span>
                            <span className="flex items-center text-[11px] font-medium text-[#0CC8A8] tracking-wide">
                                <ArrowDown className="w-3 h-3 mr-0.5" strokeWidth={2.5} />
                                +0.9% decrease than yesterday
                            </span>
                        </div>
                    </div>

                    {/* Low */}
                    <div className="flex flex-col gap-2 md:w-1/4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="text-[14px] font-medium text-slate-500 dark:text-slate-400">Low Severity</span>
                                <div className="w-[22px] h-[22px] rounded border border-blue-500/20 bg-[#EFF6FF] dark:bg-[#EFF6FF] flex items-center justify-center">
                                    <Search className="w-[12px] h-[12px] text-blue-600" strokeWidth={2.5} />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-baseline gap-3 mt-1.5">
                            <span className="text-[28px] font-bold text-slate-900 dark:text-white leading-none tracking-tight">16</span>
                            <span className="flex items-center text-[11px] font-medium text-red-500 tracking-wide">
                                <ArrowUp className="w-3 h-3 mr-0.5" strokeWidth={2.5} />
                                +0.9% increase than yesterday
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Table Section */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden mt-8">
                {/* Toolbar */}
                <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                    <div className="relative w-full md:w-[400px]">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-brand-teal/50"
                            placeholder="Search scans by name or type..."
                        />
                    </div>
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
                        <Button variant="outline" className="h-10 px-4 whitespace-nowrap text-[14px] font-medium border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 flex-shrink-0">
                            <Filter className="w-[15px] h-[15px] mr-2 text-slate-400" />
                            Filter
                        </Button>
                        <Button variant="outline" className="h-10 px-4 whitespace-nowrap text-[14px] font-medium border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 flex-shrink-0">
                            <Columns className="w-[15px] h-[15px] mr-2 text-slate-400" />
                            Column
                        </Button>
                        <Button
                            onClick={() => toast.success('New scan has been successfully scheduled!')}
                            className="h-10 px-4 whitespace-nowrap bg-brand-teal hover:bg-[#0aa68b] text-white text-[14px] font-semibold shadow-sm ml-auto md:ml-2 flex-shrink-0"
                        >
                            <Plus className="w-[16px] h-[16px] mr-1.5" strokeWidth={2.5} />
                            New scan
                        </Button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left whitespace-nowrap">
                        <thead>
                            <tr className="text-[12px] font-semibold text-slate-400 dark:text-slate-500 border-b border-slate-200 dark:border-slate-800">
                                <th className="px-6 py-4 font-medium uppercase tracking-wider">Scan Name</th>
                                <th className="px-6 py-4 font-medium uppercase tracking-wider">Type</th>
                                <th className="px-6 py-4 font-medium uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 font-medium uppercase tracking-wider">Progress</th>
                                <th className="px-6 py-4 font-medium uppercase tracking-wider text-center">Vulnerability</th>
                                <th className="px-6 py-4 font-medium uppercase tracking-wider text-right">Last Scan</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                            {[...mockScans, ...mockScans.slice(0, 3)].map((scan, index) => (
                                <tr
                                    key={`${scan.id}-${index}`}
                                    className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors cursor-pointer group"
                                    onClick={() => handleRowClick(scan.id)}
                                >
                                    <td className="px-6 py-5">
                                        <p className="font-bold text-[14px] text-slate-900 dark:text-slate-100">{scan.name}</p>
                                    </td>
                                    <td className="px-6 py-5 text-[14px] font-medium text-slate-600 dark:text-slate-400">
                                        {scan.type}
                                    </td>
                                    <td className="px-6 py-5">
                                        <StatusChip status={scan.status} />
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3 w-48">
                                            <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full transition-all duration-500 ${scan.status === 'Completed' ? 'bg-brand-teal' : scan.status === 'Failed' ? 'bg-red-500' : 'bg-brand-teal'}`}
                                                    style={{ width: `${scan.progress}%` }}
                                                />
                                            </div>
                                            <span className="text-[13px] font-semibold text-slate-900 dark:text-slate-100 w-10">{scan.progress}%</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center justify-center gap-1.5">
                                            <Badge variant="critical">{scan.vulnerabilities.critical}</Badge>
                                            <Badge variant="high">{scan.vulnerabilities.high}</Badge>
                                            <Badge variant="medium">{scan.vulnerabilities.medium}</Badge>
                                            <Badge variant="low">{scan.vulnerabilities.low}</Badge>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-right text-[13px] font-medium text-slate-400">
                                        {scan.lastScan}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Table Footer / Pagination */}
                <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-[#111827]">
                    <span className="text-[13px] text-slate-500 font-medium">Showing 15 of 100 Scans</span>
                    <div className="flex items-center gap-2">
                        <button className="p-1.5 rounded-md border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button className="p-1.5 rounded-md border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
