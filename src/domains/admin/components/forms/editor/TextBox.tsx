export interface TextBoxProps {
    id: string;
    title: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
}

export function TextBox({ id, title, placeholder, value, onChange }: TextBoxProps) {
    return (
        <div id={id}>
            <h5 className="h5 text-ts mb-1">{title}</h5>
            <div className="flex flex-col gap-1 sm:gap-2 w-full">
                <textarea
                    className="w-full rounded-lg border border-border bg-surface px-3 py-1 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-tp placeholder:text-ts/50 text-sm"
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                ></textarea>
            </div>
        </div>
    )
}