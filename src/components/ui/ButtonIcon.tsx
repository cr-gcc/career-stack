import type { ButtonHTMLAttributes } from 'react';

type LabelPositionIcon = 'right' | 'left';
export interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    label?: string;
    icon?: React.ReactNode;
    labelPositionIcon?: LabelPositionIcon;
}
export function ButtonIcon({
    icon,
    label,
    className,
    labelPositionIcon = 'right',
    type = 'button',
    disabled,
    ...props
}: ButtonIconProps) {
    return (
        <button
            type={type}
            disabled={disabled}
            className={`cursor-pointer flex items-center justify-center gap-1 px-2 py-1 rounded-md transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${className ?? ''}`}
            {...props}
        >
            {labelPositionIcon === 'right' && icon}
            {label && <span>{label}</span>}
            {labelPositionIcon === 'left' && icon}
        </button>
    )
}