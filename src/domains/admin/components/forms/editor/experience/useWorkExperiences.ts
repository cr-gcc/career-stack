import { useCvStore } from "@/stores/cvStore";
import type { CvWorkExperience } from "@/types/cv.types";

export function useWorkExperiences() {
    const { cv, updateField } = useCvStore();
    const workExperiences = cv.workExperiences;

    const addExperience = (type: 'full-time' | 'part-time') => {
        updateField('workExperiences', [
            ...workExperiences,
            { id: Date.now(), name: '', dateRange: '', role: '', description: '', type }
        ]);
    };

    const removeExperience = (type: 'full-time' | 'part-time') => {
        const experiencesOfType = workExperiences.filter(exp => exp.type === type);
        if (experiencesOfType.length === 0) return;
        const lastExperience = experiencesOfType[experiencesOfType.length - 1];
        updateField('workExperiences', workExperiences.filter(exp => exp.id !== lastExperience.id));
    };

    const updateExperience = (id: number, key: keyof CvWorkExperience, value: string) => {
        updateField('workExperiences', workExperiences.map((exp) => (exp.id === id ? { ...exp, [key]: value } : exp)));
    };

    return { workExperiences, addExperience, removeExperience, updateExperience };
}
