import { Link } from 'react-router'
import { useAuthContext } from '@/app/providers/AuthProvider'

export function NotFoundPage() {
    const { user } = useAuthContext()

    return (
        <main>
            <h1>404</h1>
            <p>La página solicitada no existe.</p>

            <Link to={user ? '/' : '/login'}>
                Volver
            </Link>
        </main>
    )
}