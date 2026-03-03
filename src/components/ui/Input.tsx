import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, id, ...props }, ref) => {
        return (
            <div className="flex flex-col gap-1.5 w-full">
                {label && (
                    <label htmlFor={id} className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    id={id}
                    className={cn(
                        "flex h-10 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 disabled:cursor-not-allowed disabled:opacity-50 text-slate-900 dark:text-slate-100",
                        error && "border-red-500 focus:ring-red-500",
                        className
                    )}
                    {...props}
                />
                {error && <span className="text-xs text-red-500">{error}</span>}
            </div>
        );
    }
);
Input.displayName = "Input";
