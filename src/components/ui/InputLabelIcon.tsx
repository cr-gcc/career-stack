import type { InputHTMLAttributes, ReactNode } from 'react';

interface InputLabelIconProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    icon?: ReactNode;
    type?: string;
}

export function InputLabelIcon({ label, icon, id, type = "text", className = "", ...props }: InputLabelIconProps) {
    return (
        <div className="flex flex-col gap-1.5 w-full">
            {label && (
                <label htmlFor={id} className="text-sm font-medium text-ts">
                    {label}
                </label>
            )}
            <div className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-colors">
                {icon && <span className="text-ts flex-shrink-0">{icon}</span>}
                <input
                    id={id}
                    type={type}
                    className={`bg-transparent outline-none text-t placeholder:text-ts/50 ${className}`}
                    {...props}
                />
            </div>
        </div>
    )
}