import { Navigate, Outlet, useLocation } from 'react-router'
import { useAuthContext } from '../providers/AuthProvider'

export function ProtectedRoute() {
    const { user, loading } = useAuthContext()
    const location = useLocation()

    if (loading) {
        return <p>Verificando sesión...</p>
    }

    if (!user) {
        return (
            <Navigate
                to="/login"
                replace
                state={{ from: location }}
            />
        )
    }

    return <Outlet />
}