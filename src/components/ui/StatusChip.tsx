import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export type ScanStatus = 'Completed' | 'Scheduled' | 'Failed' | 'In Progress';

export interface StatusChipProps extends HTMLAttributes<HTMLDivElement> {
    status: ScanStatus;
}

export const StatusChip = forwardRef<HTMLDivElement, StatusChipProps>(
    ({ className, status, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium border",
                    {
                        'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20': status === 'Completed',
                        'bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-500/10 dark:text-slate-400 dark:border-slate-500/20': status === 'Scheduled',
                        'bg-red-50 text-red-700 border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/20': status === 'Failed',
                        'bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-500/10 dark:text-teal-400 dark:border-teal-500/20': status === 'In Progress',
                    },
                    className
                )}
                {...props}
            >
                {status}
            </div>
        );
    }
);
StatusChip.displayName = "StatusChip";
