import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { ButtonIcon } from "@components/ui/ButtonIcon";
import { ExperienceItem } from "./ExperienceItem";
import type { CvWorkExperience } from "@/types/cv.types";

interface ExperienceGroupProps {
    type: 'full-time' | 'part-time';
    title: string;
    experiences: CvWorkExperience[];
    onAdd: (type: 'full-time' | 'part-time') => void;
    onRemove: (type: 'full-time' | 'part-time') => void;
    onChange: (id: number, key: keyof CvWorkExperience, value: string) => void;
}

export function ExperienceGroup({ type, title, experiences, onAdd, onRemove, onChange }: ExperienceGroupProps) {
    return (
        <>
            <div className="flex justify-between items-center w-full mt-2 mb-1">
                <p className="text-tp font-medium text-sm">{title}</p>
                <div className="flex">
                    <ButtonIcon
                        icon={<FaPlusCircle />}
                        className="text-sm text-emphasis"
                        onClick={() => onAdd(type)}
                    />
                    <ButtonIcon
                        icon={<FaMinusCircle />}
                        className="text-sm text-emphasis"
                        onClick={() => onRemove(type)}
                    />
                </div>
            </div>
            {
                experiences.map((exp) => (
                    <ExperienceItem key={exp.id} type={type} experience={exp} onChange={onChange} />
                ))
            }
        </>
    );
}
