import { useState } from "react"
import { useTranslation } from "react-i18next"
import type { FormEvent } from "react"
import type { LoginCredentials } from "@/domains/auth/types/auth.types"
import { loginSchema } from "@/domains/auth/schemas/login.schema"

type LoginFormErrors = Partial<
    Record<keyof LoginCredentials, string>
>

interface UseLoginFormReturn {
    form: LoginCredentials
    loading: boolean
    errors: LoginFormErrors
    handleChange: <K extends keyof LoginCredentials>(
        key: K,
        value: LoginCredentials[K]
    ) => void
    handleSubmit: (e: FormEvent) => void
}

export function useLoginForm(): UseLoginFormReturn {
    const { t } = useTranslation()
    const [form, setForm] = useState<LoginCredentials>({
        email: '',
        password: '',
    })
    const [loading, setLoading] = useState<boolean>(false)
    const [errors, setErrors] = useState<LoginFormErrors>({})

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
        setErrors({});

        const result = loginSchema(t).safeParse(form);

        if (!result.success) {
            const fieldErrors = result.error.flatten().fieldErrors
            const parseError: LoginFormErrors = {
                email: fieldErrors.email?.[0] || '',
                password: fieldErrors.password?.[0] || '',
            }
            setErrors(parseError)
            setLoading(false)
            return
        }

    }

    return {
        form,
        loading,
        errors,
        handleChange,
        handleSubmit,
    }
}
