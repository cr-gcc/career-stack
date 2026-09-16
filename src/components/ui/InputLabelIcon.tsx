import type { InputHTMLAttributes } from 'react';

export interface InputLabelIconProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label?: string;
    icon?: React.ReactNode;
    type?: string
    className?: string;
}

export function InputLabelIcon({ id, label, icon, type, className, ...props
}: InputLabelIconProps) {
    return (
        <div className="flex flex-col gap-1.5 w-full">
            <label htmlFor={id} className="text-sm font-medium text-ts">
                {label}
            </label>
            <div className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-colors">
                {icon && <span className="text-ts flex-shrink-0">{icon}</span>}
                <input
                    id={id}
                    type={type}
                    className={`bg-transparent outline-none text-tp placeholder:text-ts/50 ${className}`}
                    {...props}
                />
            </div>
        </div>
    )
}