import { useTranslation } from "react-i18next";
import { InputLabelIcon } from "@components/ui/InputLabelIcon";
import type { CvGeneralInfo } from "@/types/cv.types";

interface GeneralInfoProps {
    currentState: CvGeneralInfo
    onChange: (info: Partial<CvGeneralInfo>) => void
}

export function GeneralInfo({ currentState, onChange }: GeneralInfoProps) {
    const { t } = useTranslation();
    return (
        <div id="editor-section-general-info">
            <h5 className="h5 text-ts mb-1">{t('editor.sections.generalInfo')}</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 w-full">
                <InputLabelIcon
                    id="user-name"
                    type="text"
                    label={t('editor.fields.name')}
                    placeholder={t('editor.fields.name')}
                    className="w-full text-sm"
                    value={currentState.name}
                    onChange={e => onChange({ name: e.target.value })}
                />
                <InputLabelIcon
                    id="user-rol"
                    type="text"
                    label={t('editor.fields.rol')}
                    placeholder={t('editor.fields.rol')}
                    className="w-full text-sm"
                    value={currentState.role}
                    onChange={e => onChange({ role: e.target.value })}
                />
                <InputLabelIcon
                    id="user-email"
                    type="email"
                    label={t('editor.fields.email')}
                    placeholder={t('editor.fields.email')}
                    className="w-full text-sm"
                    value={currentState.email}
                    onChange={e => onChange({ email: e.target.value })}
                />
                <InputLabelIcon
                    id="user-address"
                    type="text"
                    label={t('editor.fields.address')}
                    placeholder={t('editor.fields.address')}
                    className="w-full text-sm"
                    value={currentState.address}
                    onChange={e => onChange({ address: e.target.value })}
                />
                <InputLabelIcon
                    id="user-phone"
                    type="tel"
                    label={t('editor.fields.phone')}
                    placeholder={t('editor.fields.phone')}
                    className="w-full text-sm"
                    value={currentState.phone}
                    onChange={e => onChange({ phone: e.target.value })}
                />
            </div>
        </div>
    )
}