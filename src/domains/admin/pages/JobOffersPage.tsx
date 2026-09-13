import { useTranslation } from "react-i18next";

export function JobOffersPage() {
    const { t } = useTranslation();

    return (
        <div>
            <div className="space-y-2">
                <h2 className="h2 text-primary">{t('jobOffers.title')}</h2>
                <p className="text-md text-ts">
                    {t('jobOffers.subtitle')}
                </p>
            </div>
        </div>
    )
}