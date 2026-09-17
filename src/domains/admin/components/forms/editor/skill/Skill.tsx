import { useTranslation } from "react-i18next";
import { ButtonIcon } from "@components/ui/ButtonIcon";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { SkillItem } from "./SkillItem";
import { useSkill } from "./useSkill";

export function Skill() {
    const { t } = useTranslation();
    const { cvSkills, addSkill, removeSkill, updateSkill } = useSkill();

    return (
        <div id="editor-section-skills">
            <div className="flex justify-between items-center w-full mt-2 mb-1">
                <h5 className="h5 text-ts mb-1">{t('editor.sections.skills')}</h5>
                <div className="flex gap-1">
                    <ButtonIcon icon={<FaPlusCircle />} className="text-xs text-emphasis" onClick={addSkill} />
                    <ButtonIcon icon={<FaMinusCircle />} className="text-xs text-emphasis" onClick={removeSkill} />
                </div>
            </div>
            {cvSkills.map((skill) => (
                <SkillItem key={skill.id} skill={skill} onChange={updateSkill} />
            ))}
        </div>
    )
}