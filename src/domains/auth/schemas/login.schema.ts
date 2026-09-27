import { z } from "zod"
import type { TFunction } from 'i18next'

export const loginSchema = (t: TFunction) => z.object({
    email: z
        .string()
        .min(1, t('validation.required'))
        .email(t('validation.email')),
    password: z
        .string()
        .min(8, t('validation.passwordMin')),
})

export type LoginFormValues = z.infer<ReturnType<typeof loginSchema>>
