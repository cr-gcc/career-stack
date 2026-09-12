export function SideBar() {
    return (
        <aside className="w-56 bg-surface border-r border-border sticky top-0 h-screen shrink-0 z-40 flex flex-col transition-all duration-300 overflow-y-auto custom-scrollbar">
            <div className="flex h-16 shrink-0 items-center px-6">
                <p className="text-xl font-bold text-text">CVC</p>
            </div>
            <nav className="flex flex-1 flex-col px-4 py-4">
                <ul className="space-y-1 text-sm font-medium text-text-secondary">
                    <li>
                        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md bg-primary-soft text-primary transition-colors">
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-surface-secondary hover:text-text transition-colors">
                            Mis CVs
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-surface-secondary hover:text-text transition-colors">
                            Editor
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-surface-secondary hover:text-text transition-colors">
                            Vacantes
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="p-4 m-4 rounded-xl border border-border bg-surface-secondary flex items-center gap-3">
                <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white"
                >
                    CG
                </div>

                <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-text">
                        Cristobal Gutierrez
                    </p>
                    <p className="truncate text-xs text-text-secondary">
                        cris.gcc@outlook.com
                    </p>
                </div>
            </div>
        </aside>
    )
}