type LabelPositionIcon = 'right' | 'left';
export interface ButtonIconProps {
    className?: string;
    label?: string;
    icon?: React.ReactNode;
    labelPositionIcon?: LabelPositionIcon;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}
export function ButtonIcon({
    icon,
    label,
    className,
    labelPositionIcon = 'right',
    type = 'button',
    onClick
}: ButtonIconProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`cursor-pointer flex items-center justify-center gap-1 px-2 py-1 rounded-md transition-colors ${className}`}
        >
            {labelPositionIcon === 'right' && icon}
            {label && <span>{label}</span>}
            {labelPositionIcon === 'left' && icon}
        </button>
    )
}