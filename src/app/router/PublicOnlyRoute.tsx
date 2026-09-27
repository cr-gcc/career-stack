import { Navigate, Outlet } from 'react-router'
import { useAuthContext } from '../providers/AuthProvider'

export function PublicOnlyRoute() {
    const { user, loading } = useAuthContext()

    if (loading) {
        return <p>Verificando sesión...</p>
    }

    if (user) {
        return <Navigate to="/" replace />
    }

    return <Outlet />
}