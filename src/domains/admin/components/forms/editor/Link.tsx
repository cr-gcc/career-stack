import { InputLabelIcon } from "@components/ui/InputLabelIcon";

interface LinkProps {
    id: string;
    title: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
}

export function Link({ id, title, placeholder, value, onChange }: LinkProps) {
    return (
        <div id={id}>
            <h5 className="h5 text-ts mb-1">{title}</h5>
            <div className="flex flex-col gap-1 sm:gap-2 w-full">
                <InputLabelIcon
                    id={id}
                    type="url"
                    placeholder={placeholder}
                    className="w-full text-sm"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>
        </div>
    )
}