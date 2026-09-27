import { useState } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router"
import type { FormEvent } from "react"
import type { LoginCredentials } from "@/domains/auth/types/auth.types"
import { loginSchema } from "@/domains/auth/schemas/login.schema"
import { useAuth } from "@/domains/auth/hooks/useAuth"

type LoginFormErrors = Partial<
    Record<keyof LoginCredentials, string>
>

interface UseLoginFormReturn {
    form: LoginCredentials
    loading: boolean
    formErrors: LoginFormErrors
    authError: string | null
    handleChange: <K extends keyof LoginCredentials>(
        key: K,
        value: LoginCredentials[K]
    ) => void
    handleSubmit: (e: FormEvent) => void
}

export function useLoginForm(): UseLoginFormReturn {
    const [form, setForm] = useState<LoginCredentials>({
        email: '',
        password: '',
    })
    const [loading, setLoading] = useState<boolean>(false)
    const [formErrors, setFormErrors] = useState<LoginFormErrors>({})
    const [authError, setAuthError] = useState<string | null>(null)
    const { login } = useAuth()
    const { t } = useTranslation()
    const navigate = useNavigate()

    const handleChange = <K extends keyof LoginCredentials>(
        key: K,
        value: LoginCredentials[K]
    ) => {
        setForm((prev) => ({
            ...prev,
            [key]: value,
        }))
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true)
        setFormErrors({});
        setAuthError(null);

        const result = loginSchema(t).safeParse(form);

        if (!result.success) {
            const fieldErrors = result.error.flatten().fieldErrors
            const parseError: LoginFormErrors = {
                email: fieldErrors.email?.[0] || '',
                password: fieldErrors.password?.[0] || '',
            }
            setFormErrors(parseError)
            setLoading(false)
            return
        }

        try {
            await login(result.data)
            navigate('/')
        } catch (error) {
            setAuthError(error instanceof Error ? error.message : String(error))
        } finally {
            setLoading(false)
        }
    }

    return {
        form,
        loading,
        formErrors,
        authError,
        handleChange,
        handleSubmit,
    }
}
