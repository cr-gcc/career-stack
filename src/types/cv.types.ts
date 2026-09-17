export interface CvGeneralInfo {
    name: string;
    role: string;
    email: string;
    phone: string;
    address: string;
}

export interface CvWorkExperience {
    id: number;
    name: string;
    dateRange: string;
    role: string;
    description: string;
    type: 'full-time' | 'part-time';
}

export interface CvSkill {
    id: number;
    area: string;
    technologies: string;
}

export interface CvData {
    templateId: "";
    font: string;
    bgColor: string;
    generalInfo: CvGeneralInfo;
    summary: string;
    education: string;
    workExperiences: CvWorkExperience[];
    skills: CvSkill[];
    repositories: string;
    portfolio: string;
    certifications: string;
    extraInfo: string;
}
