import { useState } from "react";
import { Search as SearchIcon, Network, FlaskConical, CheckSquare, FileText, ChevronDown, X, Circle, Clock } from "lucide-react";
import { Badge } from "../components/ui/Badge";

export default function ScanDetail() {
    const [activeTab, setActiveTab] = useState<"activity" | "verification">("activity");

    return (
        <div className="max-w-[1400px] mx-auto space-y-6 pb-10">
            {/* Top Progress Card */}
            <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-6 relative">
                <div className="flex flex-col md:flex-row gap-10">
                    {/* Circle Progress */}
                    <div className="flex shrink-0 items-center justify-center relative w-36 h-36 rounded-full bg-[#111827] dark:bg-black shadow-[0_0_15px_rgba(0,0,0,0.1)]">
                        <svg className="w-full h-full transform -rotate-90 absolute inset-0">
                            <circle cx="72" cy="72" r="64" stroke="rgba(255,255,255,0.05)" strokeWidth="8" fill="none" />
                            {/* In actual app, calculate strokeDashoffset based on progress */}
                            <circle cx="72" cy="72" r="64" stroke="#0CC8A8" strokeWidth="8" fill="none" strokeDasharray="402" strokeDashoffset="402" className="transition-all duration-1000 ease-in-out" />
                        </svg>
                        <div className="flex flex-col items-center justify-center z-10">
                            <span className="text-4xl font-bold text-white tracking-tight">0%</span>
                            <span className="text-[12px] font-medium text-slate-400 mt-1">In Progress</span>
                        </div>
                    </div>

                    {/* Pipeline & Metadata Container */}
                    <div className="flex-1 flex flex-col justify-between py-2">
                        {/* Pipeline Stepper */}
                        <div className="relative flex justify-between items-start mb-10 w-full max-w-4xl mx-auto px-2 md:px-6 overflow-x-auto pb-4 md:pb-0">
                            <div className="absolute top-6 left-12 right-12 h-[2px] bg-slate-100 dark:bg-slate-800 -z-10 min-w-[300px]" />

                            {[
                                { name: "Spidering", icon: SearchIcon, active: true },
                                { name: "Mapping", icon: Network, active: false },
                                { name: "Testing", icon: FlaskConical, active: false },
                                { name: "Validating", icon: CheckSquare, active: false },
                                { name: "Reporting", icon: FileText, active: false },
                            ].map((step) => (
                                <div key={step.name} className="flex flex-col items-center gap-3">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-[3px] bg-white dark:bg-[#111827] transition-colors ${step.active
                                        ? "border-brand-teal text-white bg-brand-teal dark:bg-brand-teal shadow-[0_0_20px_rgba(12,200,168,0.3)]"
                                        : "border-slate-100 dark:border-slate-800 text-slate-400 dark:text-slate-500"
                                        }`}>
                                        <step.icon className={`w-[20px] h-[20px] ${step.active ? "text-white" : ""}`} strokeWidth={2} />
                                    </div>
                                    <span className={`text-[14px] font-semibold ${step.active ? "text-slate-900 dark:text-white" : "text-slate-400 dark:text-slate-500"}`}>
                                        {step.name}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Metadata Row */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-row lg:items-center justify-between w-full max-w-4xl mx-auto px-2 md:px-6 mt-auto gap-y-4 gap-x-2">
                            <div className="flex flex-col gap-1.5">
                                <span className="text-[12px] font-semibold text-slate-400 dark:text-slate-500">Scan Type</span>
                                <span className="text-[14px] font-bold text-slate-900 dark:text-white">Grey Box</span>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <span className="text-[12px] font-semibold text-slate-400 dark:text-slate-500">Targets</span>
                                <span className="text-[14px] font-bold text-slate-900 dark:text-white">google.com</span>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <span className="text-[12px] font-semibold text-slate-400 dark:text-slate-500">Started At</span>
                                <span className="text-[14px] font-bold text-slate-900 dark:text-white">Nov 22, 09:00AM</span>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <span className="text-[12px] font-semibold text-slate-400 dark:text-slate-500">Credentials</span>
                                <span className="text-[14px] font-bold text-slate-900 dark:text-white">2 Active</span>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <span className="text-[12px] font-semibold text-slate-400 dark:text-slate-500">Files</span>
                                <span className="text-[14px] font-bold text-slate-900 dark:text-white">Control.pdf</span>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <span className="text-[12px] font-semibold text-slate-400 dark:text-slate-500">Checklists</span>
                                <span className="text-[14px] font-bold text-slate-900 dark:text-white">
                                    <span className="text-brand-teal">40</span>/350
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Console Area */}
            <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden flex flex-col">
                {/* Console Header */}
                <div className="h-14 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 bg-slate-50/50 dark:bg-slate-800/20">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <Circle className="w-2.5 h-2.5 fill-brand-teal text-brand-teal" />
                            <span className="font-bold text-[14px] text-slate-900 dark:text-white">Live Scan Console</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[12px] font-medium text-slate-500 dark:text-slate-400">
                            <Clock className="w-3.5 h-3.5" />
                            Running...
                        </div>
                    </div>
                    <div className="flex items-center gap-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                        <ChevronDown className="w-5 h-5 cursor-pointer" />
                        <X className="w-5 h-5 cursor-pointer" />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row min-h-[500px] lg:h-[600px] divide-y lg:divide-y-0 lg:divide-x divide-slate-200 dark:divide-slate-800">
                    {/* Left: Logs */}
                    <div className="flex-[3] flex flex-col min-w-0 bg-white dark:bg-[#111827] max-h-[400px] lg:max-h-none">
                        {/* Tabs */}
                        <div className="flex px-6 border-b border-slate-200 dark:border-slate-800 shrink-0">
                            <button
                                onClick={() => setActiveTab("activity")}
                                className={`px-4 py-4 text-[14px] font-bold border-b-2 transition-colors ${activeTab === "activity" ? "border-brand-teal text-brand-teal" : "border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"}`}
                            >
                                Activity Log
                            </button>
                            <button
                                onClick={() => setActiveTab("verification")}
                                className={`px-4 py-4 text-[14px] font-bold border-b-2 transition-colors ${activeTab === "verification" ? "border-brand-teal text-brand-teal" : "border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"}`}
                            >
                                Verification Loops
                            </button>
                        </div>

                        {/* Log Content - Monospace style */}
                        <div className="flex-1 overflow-y-auto p-6 font-mono text-[13px] leading-[1.8] text-slate-600 dark:text-slate-300 bg-[#FAFAFA] dark:bg-[#0B0F19] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                            {/* Static log representation matching the design exactly */}
                            <div className="mb-4">
                                <span className="text-slate-400 dark:text-slate-500">[09:00:00]</span> I'll begin a systematic penetration test on <span className="text-brand-teal font-medium">helpdesk.democorp.com</span>. Let me start with reconnaissance and enumeration.
                            </div>

                            <div className="mb-4">
                                <span className="text-slate-400 dark:text-slate-500">[09:01:00]</span> Good! target is online. Now let me perform port scanning to identify running services.
                            </div>

                            <div className="mb-4 text-slate-500 dark:text-slate-400">
                                <span className="text-slate-400 dark:text-slate-500">[09:02:00]</span> Excellent reconnaissance results:
                                <div className="pl-4 border-l-2 border-slate-300 dark:border-slate-700 ml-2 mt-1 mb-1">
                                    - helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)
                                </div>
                                Let me probe the web server on target first to understand its structure.
                            </div>

                            <div className="mb-4">
                                <span className="text-slate-400 dark:text-slate-500">[09:03:00]</span> Great! I found a login page for a Help Desk Platform. I can see a useful comment: <span className="text-brand-teal">"TODO: Delete the testing account (test:test)"</span>. Let me test this credential. The login redirects to <span className="bg-slate-800 text-white px-1.5 py-0.5 rounded text-[12px]">/password/test</span>. Let me follow that path and explore it.
                            </div>

                            <div className="mb-4">
                                <span className="text-slate-400 dark:text-slate-500">[09:04:00]</span> The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to '#' which means the current page. Let me try a different approach.
                            </div>

                            <div className="mb-4">
                                <span className="text-slate-400 dark:text-slate-500">[09:05:00]</span> It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths. Let me also try exploring with the <span className="text-brand-teal">test:test</span> password directly on other endpoints.
                            </div>

                            <div className="mb-4">
                                <span className="text-slate-400 dark:text-slate-500">[09:06:00]</span> Great! I can access the dashboard using the <span className="bg-brand-teal/20 text-brand-teal px-1.5 py-0.5 rounded"><code>'X-UserId: 10032'</code></span> header. The dashboard shows "Welcome, John Doe". This suggests an <span className="text-red-500 font-bold">**IDOR vulnerability**</span> - I can access any user's dashboard by just changing the X-UserId header. Let me explore more of the application...
                            </div>
                        </div>
                    </div>

                    {/* Right: Findings */}
                    <div className="flex-[2] flex flex-col min-w-0 bg-white dark:bg-[#111827] max-h-[400px] lg:max-h-none">
                        <div className="p-6 pb-2 border-b border-slate-200 dark:border-slate-800 shrink-0">
                            <h3 className="font-bold text-[15px] text-slate-900 dark:text-white">Finding Log</h3>
                        </div>
                        <div className="flex-1 overflow-y-auto p-6 space-y-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                            {/* Critical Finding */}
                            <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <Badge variant="critical" className="rounded-full px-3 py-1 text-[11px] min-w-0 h-auto font-bold uppercase shadow-sm">Critical</Badge>
                                    <span className="text-[12px] font-medium text-slate-400">10:45:23</span>
                                </div>
                                <h4 className="font-bold text-[15px] text-slate-900 dark:text-white mb-1.5">SQL Injection in Authentication Endpoint</h4>
                                <p className="text-[13px] font-mono text-brand-teal mb-3">/api/users/profile</p>
                                <p className="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed">
                                    Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access.
                                </p>
                            </div>

                            {/* High Finding */}
                            <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <Badge variant="high" className="rounded-full px-3 py-1 text-[11px] min-w-0 h-auto font-bold uppercase shadow-sm">High</Badge>
                                    <span className="text-[12px] font-medium text-slate-400">10:45:23</span>
                                </div>
                                <h4 className="font-bold text-[15px] text-slate-900 dark:text-white mb-1.5">Unauthorized Access to User Metadata</h4>
                                <p className="text-[13px] font-mono text-brand-teal mb-3">/api/auth/login</p>
                                <p className="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed">
                                    Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.
                                </p>
                            </div>

                            {/* Medium Finding */}
                            <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <Badge variant="medium" className="rounded-full px-3 py-1 text-[11px] min-w-0 h-auto font-bold uppercase shadow-sm">Medium</Badge>
                                    <span className="text-[12px] font-medium text-slate-400">10:45:23</span>
                                </div>
                                <h4 className="font-bold text-[15px] text-slate-900 dark:text-white mb-1.5">Broken Authentication Rate Limiting</h4>
                                <p className="text-[13px] font-mono text-brand-teal mb-3">/api/search</p>
                                <p className="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed">
                                    No effective rate limiting detected on login attempts. Automated brute-force attempts possible.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer Stats */}
            <div className="flex flex-col md:flex-row items-center justify-between px-2 pt-2 text-[12px] font-semibold text-slate-400 dark:text-slate-500 gap-y-4 pb-8 md:pb-0">
                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
                    <div className="flex items-center gap-2">
                        <Circle className="w-1.5 h-1.5 fill-slate-300 dark:fill-slate-600" />
                        <span>Sub-Agents: 0</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Circle className="w-1.5 h-1.5 fill-slate-300 dark:fill-slate-600" />
                        <span>Parallel Executions: 2</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Circle className="w-1.5 h-1.5 fill-slate-300 dark:fill-slate-600" />
                        <span>Operations: 1</span>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-[11px] md:text-[12px]">
                    <span className="text-red-500">Critical: 0</span>
                    <span className="text-orange-500">High: 0</span>
                    <span className="text-yellow-500">Medium: 0</span>
                    <span className="text-green-500">Low: 0</span>
                </div>
            </div>
        </div>
    );
}
