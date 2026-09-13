import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UIState {
    sidebarOpen: boolean
    toggleSidebar: () => void
}

export const useUIStore = create<UIState>()(
    persist(
        (set) => ({
            // State
            sidebarOpen: false,
            // Actions
            toggleSidebar: () =>
                set((state) => ({
                    sidebarOpen: !state.sidebarOpen,
                })),
        }),
        {
            name: 'career-stack-ui',
        },
    ),
)