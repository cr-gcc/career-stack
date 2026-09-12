import { useTranslation } from "react-i18next";

export function BasicInfoLogin() {
    const { t } = useTranslation();
    return (
        <div>
            <h5 className="h5 mb-4">{t('auth.info.title')}</h5>
            <h4 className="mb-1 h4">{t('auth.info.item1')}</h4>
            <h4 className="mb-1 h4">{t('auth.info.item2')}</h4>
            <h4 className="mb-6 h4">{t('auth.info.item3')}</h4>
            <p className="mb-2 text-sm text-text-secondary">{t('auth.info.subtitle1')}</p>
            <p className="text-sm text-text-secondary">{t('auth.info.subtitle2')}</p>
        </div>
    )
}