import { useState } from 'react'
import { authService } from '@domains/auth/services/auth.service'
import { useTranslation } from 'react-i18next'
import type { LoginCredentials } from '@domains/auth/types/auth.types'
import { AuthError } from '@supabase/supabase-js'

export function useAuth() {
    const { t } = useTranslation()
    const [error, setError] = useState<string | null>(null)

    const login = async (credentials: LoginCredentials) => {
        setError(null)
        try {
            const data = await authService.login(credentials)
            return data
        } catch (error: unknown) {
            const message = error instanceof AuthError && error.code === 'invalid_credentials'
                ? t('auth.login.errors.invalidCredentials')
                : error instanceof TypeError
                    ? t('auth.login.errors.network')
                    : t('auth.login.errors.unexpected')

            setError(message)
            throw new Error(message, { cause: error })
        }
    }

    return {
        login,
        error
    }
}
