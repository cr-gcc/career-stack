import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(() => {
    return {
        plugins: [react(), tailwindcss()],
        resolve: {
            alias: {
                '@': path.resolve(import.meta.dirname, './src'),
                "@app": path.resolve(import.meta.dirname, "./src/app"),
                "@router": path.resolve(import.meta.dirname, "./src/app/router"),
                "@components": path.resolve(import.meta.dirname, "./src/components"),
                "@domains": path.resolve(import.meta.dirname, "./src/domains"),
                "@i18n": path.resolve(import.meta.dirname, "./src/i18n"),
                "@layouts": path.resolve(import.meta.dirname, "./src/layouts"),
                "@stores": path.resolve(import.meta.dirname, "./src/stores")
            },
        },
    }
})
