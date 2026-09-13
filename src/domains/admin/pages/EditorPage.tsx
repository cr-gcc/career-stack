import { useTranslation } from "react-i18next";

export function EditorPage() {
    const { t } = useTranslation();

    return (
        <div>
            <div className="space-y-2">
                <h2 className="h2 text-primary">{t('editor.title')}</h2>
                <p className="text-md text-ts">
                    {t('editor.subtitle')}
                </p>
            </div>
        </div>
    )
}