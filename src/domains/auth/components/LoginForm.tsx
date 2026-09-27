import { useTranslation } from 'react-i18next'
import { CardBase } from "@/components/ui/CardBase";
import { InputLabelIcon } from "@/components/ui/InputLabelIcon";
import { ButtonIcon } from "@/components/ui/ButtonIcon";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockLine } from "react-icons/ri";
import { SlLogin } from "react-icons/sl";
import { useLoginForm } from "@domains/auth/hooks/useLoginForm";

export function LoginForm() {
    const { t } = useTranslation()
    const {
        form,
        formErrors,
        authError,
        loading,
        handleChange,
        handleSubmit
    } = useLoginForm()

    return (
        <CardBase>
            <form onSubmit={handleSubmit} className="flex flex-col px-2 py-1">
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
                        id="email"
                        type="email"
                        label={t('auth.login.email')}
                        icon={<MdOutlineEmail />}
                        placeholder={t('auth.login.email')}
                        className="w-full text-sm"
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                    />
                    {formErrors.email && (
                        <p className="text-xs text-primary">{formErrors.email}</p>
                    )}
                </div>
                <div className="mb-3">
                    <InputLabelIcon
                        id="password"
                        type="password"
                        label={t('auth.login.password')}
                        icon={<RiLockLine />}
                        placeholder={t('auth.login.password')}
                        className="w-full text-sm"
                        value={form.password}
                        onChange={(e) => handleChange('password', e.target.value)}
                    />
                    {formErrors.password && (
                        <p className="text-xs text-primary">{formErrors.password}</p>
                    )}
                </div>
                <div className="flex justify-center mb-4">
                    <a href="#" className="text-xs text-ts hover:text-emphasis transition-colors">
                        {t('auth.login.forgotPassword')}
                    </a>
                </div>
                <div className="mb-1">
                    <ButtonIcon
                        icon={<SlLogin />}
                        label={t('auth.login.submit')}
                        labelPositionIcon="left"
                        className="w-full text-sm text-white bg-primary hover:bg-primary-hover"
                        type="submit"
                    />
                </div>
                {loading && <ProgressBar />}
                {authError && (
                    <p className="mb-1 text-xs text-primary">{authError}</p>
                )}
                <div className="mt-3 mb-4 text-center">
                    <p className="text-xs text-ts">
                        {t('auth.login.initTerms')} <a href="#" className="text-emphasis underline hover:text-primary transition-colors">{t('auth.login.termsAndConditions')}</a> {t('auth.login.and')} <a href="#" className="text-emphasis underline hover:text-primary transition-colors">{t('auth.login.privacyPolicy')}</a>
                    </p>
                </div>
            </form>
        </CardBase>
    )
}