interface ButtonIconProps {
    icon?: React.ReactNode;
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
    const separatore = () => {
        if (label && icon) return "pl-2"
        else return ''
    }
    return (
        <button
            onClick={onClick}
            className={`cursor-pointer flex items-center justify-center px-2 py-1 rounded-md transition-colors ${className}`}
        >
            {label}<span className={separatore()}>{icon}</span>
        </button>
    )
}