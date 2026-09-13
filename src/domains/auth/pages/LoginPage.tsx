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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full">
                <div className="hidden md:flex justify-center py-10">
                    <BasicInfoLogin />
                </div>
                <div className="flex justify-center items-center">
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}