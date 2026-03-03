import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'critical' | 'high' | 'medium' | 'low' | 'default';
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
    ({ className, variant = 'default', children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-[4px] min-w-[24px] h-[24px] px-1 text-xs font-semibold",
                    {
                        'bg-red-500 text-white dark:bg-red-500 dark:text-white': variant === 'critical',
                        'bg-orange-500 text-white dark:bg-orange-500 dark:text-white': variant === 'high',
                        'bg-yellow-500 text-white dark:bg-yellow-500 dark:text-white': variant === 'medium',
                        'bg-emerald-500 text-white dark:bg-emerald-500 dark:text-white': variant === 'low',
                        'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300': variant === 'default',
                    },
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);
Badge.displayName = "Badge";
