import { supabase } from '@/lib/supabase/client'
import type { LoginCredentials } from '../types/auth.types'

export const authService = {
    /**
     * @description Login with email and password
     * @param email
     * @param password
     * @returns Promise<any>
     */
    async login({ email, password }: LoginCredentials) {
        const { data, error } =
            await supabase.auth.signInWithPassword({
                email,
                password,
            })
        if (error) {
            throw error
        }
        return data
    },

    /**
     * @description Logout
     * @returns Promise<any>
     */
    async logout() {
        const { error } = await supabase.auth.signOut()
        if (error) {
            throw error
        }
    }
}
