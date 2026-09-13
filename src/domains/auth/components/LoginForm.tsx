import { useTranslation } from 'react-i18next'
import { CardBasico } from "@/components/ui/CardBasico";
import { InputLabelIcon } from "@/components/ui/InputLabelIcon";
import { ButtonIcon } from "@/components/ui/ButtonIcon";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockLine } from "react-icons/ri";
import { SlLogin } from "react-icons/sl";

export function LoginForm() {
    const { t } = useTranslation()
    return (
        <CardBasico>
            <div className="flex flex-col px-2 py-1">
                <div className="mt-1.5 mb-6">
                    <h5 className="h5 text-primary">
                        {t('auth.login.title')}
                    </h5>
                    <p className="text-sm text-ts">
                        {t('auth.login.subtitle')}
                    </p>
                </div>
                <div className="mb-3">
                    <InputLabelIcon
                        type="text"
                        label={t('auth.login.email')}
                        icon={<MdOutlineEmail />}
                        placeholder={t('auth.login.email')}
                        className="w-full text-sm"
                    />
                </div>
                <div className="mb-3">
                    <InputLabelIcon
                        type="password"
                        label={t('auth.login.password')}
                        icon={<RiLockLine />}
                        placeholder={t('auth.login.password')}
                        className="w-full text-sm"
                    />
                </div>
                <div className="flex justify-center mb-4">
                    <a href="#" className="text-xs text-ts hover:text-emphasis transition-colors">
                        {t('auth.login.forgotPassword')}
                    </a>
                </div>
                <div className="mb-4">
                    <ButtonIcon
                        icon={<SlLogin />}
                        label={t('auth.login.submit')}
                        className="w-full text-sm text-white bg-primary hover:bg-primary-hover"
                        onClick={() => alert("Iniciando sesión...")}
                    />
                </div>
                <div className="mb-4 text-center">
                    <p className="text-xs text-ts">
                        {t('auth.login.initTerms')} <a href="#" className="text-emphasis underline hover:text-primary transition-colors">{t('auth.login.termsAndConditions')}</a> {t('auth.login.and')} <a href="#" className="text-emphasis underline hover:text-primary transition-colors">{t('auth.login.privacyPolicy')}</a>
                    </p>
                </div>
            </div>
        </CardBasico>
    )
}