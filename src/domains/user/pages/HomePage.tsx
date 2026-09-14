import { useTranslation } from "react-i18next";

export function HomePage() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-4 sm:gap-6 w-full max-w-7xl mx-auto">
            <div className="space-y-1 sm:space-y-2">
                <h2 className="h2 text-primary">{t('home.title')}</h2>
                <p className="text-sm sm:text-md text-ts">
                    {t('home.subtitle')}
                </p>
            </div>
        </div>
    )
}