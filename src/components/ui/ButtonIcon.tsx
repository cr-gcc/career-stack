interface ButtonIconProps {
    icon: React.ReactNode;
    label?: string;
    className?: string;
    onClick?: () => void;
}
export function ButtonIcon({
    icon,
    label,
    className,
    onClick
}: ButtonIconProps) {
    return (
        <button
            onClick={onClick}
            className={`cursor-pointer flex items-center justify-center px-2 py-1 rounded-md transition-colors ${className}`}
        >
            {label}<span className="pl-2">{icon}</span>
        </button>
    )
}