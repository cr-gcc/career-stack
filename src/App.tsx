import { RouterProvider } from 'react-router-dom'
import { router } from '@router/router'
import { ThemeSync } from '@components/theme/ThemeSync'
import { AuthProvider } from '@app/providers/AuthProvider'

function App() {
    return (
        <AuthProvider>
            <ThemeSync />
            <RouterProvider router={router} />
        </AuthProvider>
    )
}

export default App
