import { useEffect } from 'react'
import { useThemeStore } from '@/stores/themeStore'

export const ThemeSync = () => {
    const theme = useThemeStore((state) => state.theme)

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    return null
}