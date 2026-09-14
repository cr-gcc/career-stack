import LoginBannerLight from '@/assets/images/banners/login-light.png';
import LoginBannerDark from '@/assets/images/banners/login-dark.png';
import { useTranslation } from 'react-i18next'
import { LoginForm } from '@/domains/auth/components/LoginForm';
import { BasicInfoLogin } from '@/domains/auth/components/BasicInfoLogin';
import { ButtonIcon } from "@/components/ui/ButtonIcon";
import { useThemeStore } from "@/stores/themeStore"

export function LoginPage() {
    const { i18n } = useTranslation()
    const theme = useThemeStore((state) => state.theme)

    const toggleLanguage = () => {
        const nextLang = i18n.language.startsWith('es') ? 'en' : 'es'
        i18n.changeLanguage(nextLang)
    }

    const LoginBanner = theme === 'light' ? LoginBannerLight : LoginBannerDark

    return (
        <div
            className="min-h-screen w-full flex bg-cover bg-center bg-no-repeat p-4 relative"
            style={{ backgroundImage: `url(${LoginBanner})` }}
        >
            <div className="absolute top-4 right-4">
                <ButtonIcon
                    label={i18n.language.startsWith('es') ? 'EN' : 'ES'}
                    className="text-lg font-semibold cursor-pointer hover:text-primary transition-colors"
                    onClick={toggleLanguage}
                />
            </div>
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                {/* Oculto en móviles, visible desde tablets (md) */}
                <div className="hidden md:flex flex-col justify-center py-10">
                    <BasicInfoLogin />
                </div>
                
                {/* Formulario de Login adaptativo */}
                <div className="flex justify-center items-center w-full">
                    <div className="w-full max-w-md px-2 sm:px-6">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    )
}