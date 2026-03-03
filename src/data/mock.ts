export const mockStats = {
    critical: { count: 12, change: "+2%", trend: "up" },
    high: { count: 34, change: "-5%", trend: "down" },
    medium: { count: 128, change: "+12%", trend: "up" },
    low: { count: 256, change: "0%", trend: "neutral" }
};

export type Scan = {
    id: string;
    name: string;
    target: string;
    type: string;
    status: 'Completed' | 'Scheduled' | 'Failed' | 'In Progress';
    progress: number;
    vulnerabilities: {
        critical: number;
        high: number;
        medium: number;
        low: number;
    };
    lastScan: string;
};

export const mockScans: Scan[] = [
    {
        id: "scan-001",
        name: "Production API Core",
        target: "api.fenrir.co",
        type: "API Security",
        status: "Completed",
        progress: 100,
        vulnerabilities: { critical: 0, high: 2, medium: 15, low: 43 },
        lastScan: "2 hours ago"
    },
    {
        id: "scan-002",
        name: "Staging Environment",
        target: "staging.fenrir.co",
        type: "Full Audit",
        status: "In Progress",
        progress: 45,
        vulnerabilities: { critical: 1, high: 5, medium: 12, low: 0 },
        lastScan: "In Progress"
    },
    {
        id: "scan-003",
        name: "Legacy Auth Gateway",
        target: "auth-v1.fenrir.co",
        type: "Quick Scan",
        status: "Failed",
        progress: 12,
        vulnerabilities: { critical: 0, high: 0, medium: 0, low: 0 },
        lastScan: "5 hours ago"
    },
    {
        id: "scan-004",
        name: "Marketing Site",
        target: "www.fenrir.co",
        type: "Web Audit",
        status: "Completed",
        progress: 100,
        vulnerabilities: { critical: 0, high: 0, medium: 3, low: 18 },
        lastScan: "1 day ago"
    },
    {
        id: "scan-005",
        name: "Customer Portal Weekly",
        target: "app.fenrir.co",
        type: "Scheduled",
        status: "Scheduled",
        progress: 0,
        vulnerabilities: { critical: 0, high: 0, medium: 0, low: 0 },
        lastScan: "Pending"
    }
];

export const mockLogs = [
    { time: "14:23:01.002", module: "SYSTEM", message: "Scan initialized for target: api.fenrir.co", type: "info" },
    { time: "14:23:05.114", module: "SPIDER", message: "Discovered endpoint: /api/v2/users", type: "info" },
    { time: "14:23:08.451", module: "TEST", message: "Injecting payload SQLi-041 into parameter 'id'", type: "warn" },
    { time: "14:23:12.992", module: "TEST", message: "Payload executed. Verification loop started.", type: "info" },
    { time: "14:23:15.021", module: "LOGIC", message: "Rate limit hit warning: 429 Too Many Requests. Backing off 2s.", type: "error" },
    { time: "14:23:18.115", module: "TEST", message: "Resuming requests after backoff.", type: "info" },
];

export const mockFindings = [
    {
        id: "vuln-01",
        severity: "high",
        time: "14:23:08",
        title: "SQL Injection",
        endpoint: "/api/v2/users?id=",
        description: "Database error revealed table structure when injecting tick mark."
    },
    {
        id: "vuln-02",
        severity: "medium",
        time: "14:24:12",
        title: "Missing Security Headers",
        endpoint: "GET /api/v2/status",
        description: "Response missing X-Frame-Options and Content-Security-Policy."
    },
    {
        id: "vuln-03",
        severity: "medium",
        time: "14:25:01",
        title: "Verbose Error Messages",
        endpoint: "POST /api/v1/auth",
        description: "Server returned node.js stack trace on malformed JSON payload."
    }
];
