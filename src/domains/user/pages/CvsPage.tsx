import { useTranslation } from "react-i18next";

export function CvsPage() {
    const { t } = useTranslation();

    return (
        <div>
            <div className="space-y-2">
                <h2 className="h2 text-primary">{t('cvs.title')}</h2>
                <p className="text-md text-ts">
                    {t('cvs.subtitle')}
                </p>
            </div>
        </div>
    )
}