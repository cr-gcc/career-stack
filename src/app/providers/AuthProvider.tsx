import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import type { Session, User } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase/client'

interface AuthContextValue {
    user: User | null
    session: Session | null
    loading: boolean
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({
    children
}: {
    children: ReactNode
}) {
    const [session, setSession] = useState<Session | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const { data: { subscription } } =
            supabase.auth.onAuthStateChange((event, session) => {
                setSession(session)

                if (event === 'INITIAL_SESSION') {
                    setLoading(false)
                }
            })

        return () => subscription.unsubscribe()
    }, [])

    return (
        <AuthContext.Provider
            value={{
                session,
                user: session?.user ?? null,
                loading
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthContext() {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error(
            'useAuthContext debe utilizarse dentro de AuthProvider'
        )
    }

    return context
}