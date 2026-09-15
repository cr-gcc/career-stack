export type FontId =
    | 'font-sans'
    | 'font-nunito'
    | 'font-inter-tight'
    | 'font-dm-sans'
    | 'font-roboto-condensed'
    | 'font-plus-jakarta-sans'

export const FONTS: { value: FontId; label: string }[] = [
    { value: 'font-sans',               label: 'Manrope' },
    { value: 'font-nunito',             label: 'Nunito' },
    { value: 'font-inter-tight',        label: 'Inter Tight' },
    { value: 'font-dm-sans',            label: 'DM Sans' },
    { value: 'font-roboto-condensed',   label: 'Roboto Condensed' },
    { value: 'font-plus-jakarta-sans',  label: 'Plus Jakarta Sans' },
]
