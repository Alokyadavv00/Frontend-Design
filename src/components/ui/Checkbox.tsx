import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: React.ReactNode;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    ({ className, label, id, ...props }, ref) => {
        return (
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    ref={ref}
                    id={id}
                    className={cn(
                        "h-4 w-4 rounded border-slate-300 dark:border-slate-700 text-teal-500 focus:ring-teal-500 bg-white dark:bg-slate-900",
                        className
                    )}
                    {...props}
                />
                {label && (
                    <label htmlFor={id} className="text-sm font-medium leading-none text-slate-700 dark:text-slate-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {label}
                    </label>
                )}
            </div>
        );
    }
);
Checkbox.displayName = "Checkbox";
