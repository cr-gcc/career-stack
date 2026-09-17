import { create } from 'zustand'
import type { CvData } from '@/types/cv.types'

interface CvState {
    cv: CvData
    setCv: (cv: CvData) => void
    updateGeneralInfo: (info: Partial<CvData['generalInfo']>) => void
    updateField: <K extends keyof CvData>(key: K, value: CvData[K]) => void
}

const initialCv: CvData = {
    templateId: '',
    font: '',
    bgColor: '',
    generalInfo: {
        name: 'Rick Sanchez',
        role: 'Scientific Professional',
        email: 'ricksanchez@good.com',
        phone: '+1234567890',
        address: 'Dimension C-137',
    },
    summary: 'I am a 70-year-old scientist, and I have been doing this for 10 years, I am the best in what I do and I have the knowledge to prove it.',
    education: 'I have a PhD in Science, and I have been a professor at the University of Life for 10 years. I have also published 10 books on the subject.',
    workExperiences: [
        {
            id: 1,
            name: 'Citadel',
            dateRange: '2020 - Present',
            role: 'Scientific Professional',
            description: 'I am a 70-year-old scientist, and I have been doing this for 10 years, I am the best in what I do and I have the knowledge to prove it.',
            type: 'full-time',
        },
        {
            id: 2,
            name: 'Garage',
            dateRange: '2015 - 2020',
            role: 'Scientific Assistant',
            description: 'I was a scientific assistant to Rick Sanchez, and I helped him with his experiments.',
            type: 'part-time',
        },
    ],
    skills: [
        {
            id: 1,
            area: 'Science',
            technologies: 'Physics, Chemistry, Biology',
        },
    ],
    repositories: 'https://github.com/ricksanchez',
    portfolio: 'https://ricksanchez.com',
    certifications: 'PhD in Science',
    extraInfo: 'Nothing more to say.',
}

export const useCvStore = create<CvState>()((set) => ({
    // State
    cv: initialCv,

    // Actions
    setCv: (cv) => set({ cv }),

    updateGeneralInfo: (info) =>
        set((state) => ({
            cv: {
                ...state.cv,
                generalInfo: { ...state.cv.generalInfo, ...info },
            },
        })),

    updateField: (key, value) =>
        set((state) => ({
            cv: { ...state.cv, [key]: value },
        })),
}))
