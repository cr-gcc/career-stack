import type { User } from '@supabase/supabase-js'

export interface LoginCredentials {
    email: string
    password: string
}

export interface AuthState {
    user: User | null
}
