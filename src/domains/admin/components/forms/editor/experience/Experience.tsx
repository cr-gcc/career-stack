import { useTranslation } from "react-i18next";
import { ExperienceGroup } from "./ExperienceGroup";
import { useWorkExperiences } from "./useWorkExperiences";

export function Experience() {
    const { t } = useTranslation();
    const { workExperiences, addExperience, removeExperience, updateExperience } = useWorkExperiences();

    const fullTimeExperiences = workExperiences.filter(exp => exp.type === 'full-time');
    const partTimeExperiences = workExperiences.filter(exp => exp.type === 'part-time');

    return (
        <div id="editor-section-work-experiences">
            <div className="flex justify-start items-center w-full mb-2">
                <h5 className="h5 text-ts mb-1">{t('editor.sections.workExperiences')}</h5>
            </div>
            <ExperienceGroup
                type="full-time"
                title={t('editor.sections.fullTime')}
                experiences={fullTimeExperiences}
                onAdd={addExperience}
                onRemove={removeExperience}
                onChange={updateExperience}
            />
            <ExperienceGroup
                type="part-time"
                title={t('editor.sections.partTime')}
                experiences={partTimeExperiences}
                onAdd={addExperience}
                onRemove={removeExperience}
                onChange={updateExperience}
            />
        </div>
    );
}