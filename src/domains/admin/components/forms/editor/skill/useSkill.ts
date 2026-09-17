import { useCvStore } from "@/stores/cvStore";
import type { CvSkill } from "@/types/cv.types";

export function useSkill() {
    const { cv, updateField } = useCvStore();

    const addSkill = () => {
        const cvSkills = [...cv.skills];
        const newSkill: CvSkill = {
            id: cvSkills.length + 1,
            area: '',
            technologies: '',
        }
        cvSkills.push(newSkill);
        updateField('skills', cvSkills);
    }

    const removeSkill = () => {
        const cvSkills = [...cv.skills];
        if (cvSkills.length === 0) return;
        cvSkills.pop()
        updateField('skills', cvSkills)
    }

    const updateSkill = (id: number, key: keyof CvSkill, value: string) => {
        const updatedSkills = cv.skills.map(skill => {
            if (skill.id === id) {
                return { ...skill, [key]: value }
            }
            return skill
        })
        updateField('skills', updatedSkills)
    }

    return { cvSkills: cv.skills, addSkill, removeSkill, updateSkill }
}