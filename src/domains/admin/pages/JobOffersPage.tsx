import { useTranslation } from "react-i18next";

export function JobOffersPage() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-4 sm:gap-6 w-full max-w-7xl mx-auto">
            <div className="space-y-1 sm:space-y-2">
                <h2 className="h2 text-primary">{t('jobOffers.title')}</h2>
                <p className="text-sm sm:text-md text-ts">
                    {t('jobOffers.subtitle')}
                </p>
            </div>
        </div>
    )
}