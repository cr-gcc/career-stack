import { isRouteErrorResponse, useRouteError, Link } from 'react-router'
export function UnexpectedErrorPage() {
    const error = useRouteError()
    console.error(error)
    const message = isRouteErrorResponse(error)
        ? `Error ${error.status}`
        : 'Ocurrió un error inesperado'
    return (
        <main>
            <h1>{message}</h1>
            <p>No pudimos completar la operación.</p>

            <Link to="/login">
                Volver al inicio de sesión
            </Link>
        </main>
    )
}