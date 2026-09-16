import { InputLabelIcon } from "@components/ui/InputLabelIcon";
import { useTranslation } from "react-i18next";
import type { CvWorkExperience } from "@/types/cv.types";

interface ExperienceItemProps {
    type: 'full-time' | 'part-time';
    experience: CvWorkExperience;
    onChange: (id: number, key: keyof CvWorkExperience, value: string) => void;
}

export function ExperienceItem({ type, experience, onChange }: ExperienceItemProps) {
    const { t } = useTranslation();

    const handleChange = (key: keyof CvWorkExperience, value: string) => {
        onChange(experience.id, key, value);
    };

    return (
        <div id={`exp-${type}-${experience.id}`}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-2 w-full">
                <InputLabelIcon
                    id={`exp-${type}-${experience.id}-name`}
                    type="text"
                    placeholder={t('editor.fields.name')}
                    className="w-full text-sm"
                    value={experience.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                />
                <InputLabelIcon
                    id={`exp-${type}-${experience.id}-date`}
                    type="text"
                    placeholder={t('editor.fields.dateRange')}
                    className="w-full text-sm"
                    value={experience.dateRange}
                    onChange={(e) => handleChange('dateRange', e.target.value)}
                />
                <InputLabelIcon
                    id={`exp-${type}-${experience.id}-rol`}
                    type="email"
                    placeholder={t('editor.fields.rol')}
                    className="w-full text-sm"
                    value={experience.role}
                    onChange={(e) => handleChange('role', e.target.value)}
                />
                <div className="col-span-3">
                    <textarea
                        id={`exp-${type}-${experience.id}-description`}
                        placeholder={t('editor.fields.description')}
                        className="w-full rounded-lg border border-border bg-surface px-3 py-1 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-tp placeholder:text-ts/50 text-sm"
                        value={experience.description}
                        onChange={(e) => handleChange('description', e.target.value)}
                    />
                </div>
            </div>
            <hr className="border-b border-border my-1" />
        </div>
    )
}