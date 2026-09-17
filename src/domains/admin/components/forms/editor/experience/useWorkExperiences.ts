import { useCvStore } from "@/stores/cvStore";
import type { CvWorkExperience } from "@/types/cv.types";

export function useWorkExperiences() {
    const { cv, updateField } = useCvStore();

    const addExperience = (type: 'full-time' | 'part-time') => {
        const workExperiences = [...cv.workExperiences];
        workExperiences.push({ id: Date.now(), name: '', dateRange: '', role: '', description: '', type });
        updateField('workExperiences', workExperiences);
    };

    const removeExperience = (type: 'full-time' | 'part-time') => {
        const workExperiences = [...cv.workExperiences];
        const experiencesOfType = workExperiences.filter(exp => exp.type === type);
        if (experiencesOfType.length === 0) return;
        workExperiences.pop();
        updateField('workExperiences', workExperiences);
    };

    const updateExperience = (id: number, key: keyof CvWorkExperience, value: string) => {
        const updatedExperiences = cv.workExperiences.map((exp) => {
            if (exp.id === id) {
                return { ...exp, [key]: value }
            }
            return exp
        });
        updateField('workExperiences', updatedExperiences);
    };

    return { workExperiences: cv.workExperiences, addExperience, removeExperience, updateExperience };
}
