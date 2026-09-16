import { VscPreview } from "react-icons/vsc";

interface ButtonModalLinkProps {
    onClick: () => void
}

export function ButtonModalLink({ onClick }: ButtonModalLinkProps) {
    return (
        <button
            id="editor-preview-btn"
            onClick={onClick}
            className="flex items-center justify-center w-14 h-14 rounded-full bg-surface text-primary shadow-lg border-2 border-primary hover:bg-surface-hover hover:scale-105 transition-all cursor-pointer"
        >
            <VscPreview className="text-3xl" />
        </button>
    )
}