import { Link } from "react-router-dom"
interface LinkIconProps {
    icon?: React.ReactNode;
    label?: string;
    className?: string;
    url?: string;
}
export function LinkIcon({
    icon,
    label,
    className,
    url
}: LinkIconProps) {
    const separatore = () => {
        if (label && icon) return "pr-2"
        else return ''
    }
    return (
        <Link
            to={url}
            className={`flex items-center px-2 py-1 rounded-md transition-colors ${className}`}
        >
            <span className={separatore()}>{icon}</span>{label}
        </Link>
    )
}
