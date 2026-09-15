interface SelectBaseProps {
    options: { value: string, label: string }[]
    label: string
    intOption?: string
    value?: string
    className?: string
    colorFlags?: boolean
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export function SelectBase({ options, label, intOption, value, className, colorFlags = false, onChange }: SelectBaseProps) {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={`select-${label}`} className="text-xs font-medium text-ts">
                {label}
            </label>
            <select
                name={`select-${label}`}
                id={`select-${label}`}
                value={value}
                className={`rounded-md border border-border bg-surface px-1 text-tp text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors ${className}`}
                onChange={onChange}
            >
                {intOption && <option value="" disabled>{intOption}</option>}
                {options?.map((option) => (
                    <option key={option.value} value={option.value} className={`${colorFlags ? `bg-${option.value} text-white` : ''}`}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}
