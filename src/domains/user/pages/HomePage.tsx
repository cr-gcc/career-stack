import { useTranslation } from "react-i18next";

export function HomePage() {
    const { t } = useTranslation();

    return (
        <div>
            <div className="space-y-2">
                <h2 className="h2 text-primary">{t('home.title')}</h2>
                <p className="text-md text-ts">
                    {t('home.subtitle')}
                </p>
            </div>
        </div>
    )
}