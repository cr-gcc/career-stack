import { useState } from 'react'
import { authService } from '@domains/auth/services/auth.service'
import { useTranslation } from 'react-i18next'
import type { LoginCredentials } from '@domains/auth/types/auth.types'

export function useAuth() {
    const { t } = useTranslation()
    const [error, setError] = useState<string | null>(null)

    const login = async (credentials: LoginCredentials) => {
        setError(null)
        try {
            const data = await authService.login(credentials)
            return data
        } catch (error) {
            const message = t('auth.login.errors.invalidCredentials')
            setError(message)
            throw new Error(message)
        }
    }

    return {
        login,
        error
    }
}
