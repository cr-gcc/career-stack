import type { ReactNode } from 'react'

interface CardBaseProps {
    children: ReactNode
}

export function CardBase({ children }: CardBaseProps) {
    return (
        <article className="rounded-xl border border-border bg-surface-secondary px-4 pb-2 pt-1.75 shadow-md">
            <div className="flex items-center gap-4">
                {children}
            </div>
        </article>
    )
}