import { useTranslation } from "react-i18next";

export function JobVacancy() {
    const { t } = useTranslation();

    return (
        <div>
            <div className="space-y-2">
                <h2 className="h2 text-primary">{t('vacancies.title')}</h2>
                <p className="text-md text-ts">
                    {t('vacancies.subtitle')}
                </p>
            </div>
        </div>
    )
}