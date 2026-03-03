import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 disabled:opacity-50 disabled:pointer-events-none",
                    {
                        'bg-teal-500 text-white hover:bg-teal-600 shadow-sm': variant === 'primary',
                        'bg-slate-800 text-white hover:bg-slate-700': variant === 'secondary',
                        'border border-slate-300 dark:border-slate-700 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100': variant === 'outline',
                        'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300': variant === 'ghost',
                        'h-9 px-3': size === 'sm',
                        'h-10 py-2 px-4': size === 'md',
                        'h-11 px-8': size === 'lg',
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";
