import { InputLabelIcon } from "@components/ui/InputLabelIcon";
import { useTranslation } from "react-i18next";
import type { CvSkill } from "@/types/cv.types";

interface SkillItemProps {
    skill: CvSkill;
    onChange: (id: number, key: keyof CvSkill, value: string) => void;
}

export function SkillItem({ skill, onChange }: SkillItemProps) {
    const { t } = useTranslation();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        const key = id.split('-')[1] as keyof CvSkill;
        onChange(skill.id, key, value);
    }

    return (
        <div id={`skill-item-${skill.id}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 w-full">
                <InputLabelIcon
                    id={`skill-area-${skill.id}`}
                    type="text"
                    placeholder={t('editor.fields.area')}
                    className="w-full text-sm"
                    value={skill.area}
                    onChange={handleChange} />
                <div className="col-span-2">
                    <textarea
                        id={`skill-technologies-${skill.id}`}
                        placeholder={t('editor.fields.technologies')}
                        className="w-full rounded-lg border border-border bg-surface px-3 py-1 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-tp placeholder:text-ts/50 text-sm"
                        value={skill.technologies}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <hr className="border-b border-border my-1" />
        </div>
    )
}