import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Theme = 'light' | 'dark'

interface ThemeState {
    theme: Theme
    toggleTheme: () => void
    setTheme: (theme: Theme) => void
}

export const useThemeStore = create<ThemeState>()(
    persist(
        (set) => ({
            // State
            theme: 'dark',
            // Actions
            toggleTheme: () =>
                set((state) => ({
                    theme: state.theme === 'dark' ? 'light' : 'dark',
                })),
            setTheme: (theme) => set({ theme }),
        }),
        {
            name: 'career-stack-theme',
        },
    ),
)