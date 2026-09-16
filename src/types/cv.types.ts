export interface CvGeneralInfo {
    name: string;
    role: string;
    email: string;
    phone: string;
    address: string;
}

export interface CvWorkExperience {
    id: string;
    company: string;
    dateRange: string;
    role: string;
    description: string;
    type: 'fulltime' | 'freelance';
}

export interface CvSkill {
    id: string;
    area: string;
    /** Puede contener HTML simple (<br />) para saltos de linea */
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
