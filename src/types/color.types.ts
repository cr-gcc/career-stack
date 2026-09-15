export type ColorId =
    'red-950' |
    'orange-950' |
    'amber-950' |
    'yellow-950' |
    'lime-950' |
    'emerald-950' |
    'green-950' |
    'teal-950' |
    'cyan-950' |
    'sky-950' |
    'blue-950' |
    'indigo-950' |
    'violet-950' |
    'pink-950' |
    'purple-950' |
    'fuchsia-950' |
    'rose-950' |
    'slate-950' |
    'gray-950' |
    'zinc-950' |
    'neutral-950' |
    'stone-950'

export const COLORS: { value: ColorId; label: string }[] = [
    { value: 'red-950', label: 'Red' },
    { value: 'orange-950', label: 'Orange' },
    { value: 'amber-950', label: 'Amber' },
    { value: 'yellow-950', label: 'Yellow' },
    { value: 'lime-950', label: 'Lime' },
    { value: 'emerald-950', label: 'Emerald' },
    { value: 'green-950', label: 'Green' },
    { value: 'teal-950', label: 'Teal' },
    { value: 'cyan-950', label: 'Cyan' },
    { value: 'sky-950', label: 'Sky' },
    { value: 'blue-950', label: 'Blue' },
    { value: 'indigo-950', label: 'Indigo' },
    { value: 'violet-950', label: 'Violet' },
    { value: 'fuchsia-950', label: 'Fuchsia' },
    { value: 'rose-950', label: 'Rose' },
    { value: 'slate-950', label: 'Slate' },
    { value: 'gray-950', label: 'Gray' },
    { value: 'zinc-950', label: 'Zinc' },
    { value: 'neutral-950', label: 'Neutral' },
    { value: 'stone-950', label: 'Stone' }
]

// Safelist de clases completas para que Tailwind v4 las incluya en el build.
// index.css apunta a este archivo con @source "../types/color.types.ts"
export const safelist = [
    "bg-red-950", "text-red-950", "border-red-950", "text-red-900", "marker:text-red-900",
    "bg-orange-950", "text-orange-950", "border-orange-950", "text-orange-900", "marker:text-orange-900",
    "bg-amber-950", "text-amber-950", "border-amber-950", "text-amber-900", "marker:text-amber-900",
    "bg-yellow-950", "text-yellow-950", "border-yellow-950", "text-yellow-900", "marker:text-yellow-900",
    "bg-lime-950", "text-lime-950", "border-lime-950", "text-lime-900", "marker:text-lime-900",
    "bg-emerald-950", "text-emerald-950", "border-emerald-950", "text-emerald-900", "marker:text-emerald-900",
    "bg-green-950", "text-green-950", "border-green-950", "text-green-900", "marker:text-green-900",
    "bg-teal-950", "text-teal-950", "border-teal-950", "text-teal-900", "marker:text-teal-900",
    "bg-cyan-950", "text-cyan-950", "border-cyan-950", "text-cyan-900", "marker:text-cyan-900",
    "bg-sky-950", "text-sky-950", "border-sky-950", "text-sky-900", "marker:text-sky-900",
    "bg-blue-950", "text-blue-950", "border-blue-950", "text-blue-900", "marker:text-blue-900",
    "bg-indigo-950", "text-indigo-950", "border-indigo-950", "text-indigo-900", "marker:text-indigo-900",
    "bg-violet-950", "text-violet-950", "border-violet-950", "text-violet-900", "marker:text-violet-900",
    "bg-pink-950", "text-pink-950", "border-pink-950", "text-pink-900", "marker:text-pink-900",
    "bg-purple-950", "text-purple-950", "border-purple-950", "text-purple-900", "marker:text-purple-900",
    "bg-fuchsia-950", "text-fuchsia-950", "border-fuchsia-950", "text-fuchsia-900", "marker:text-fuchsia-900",
    "bg-rose-950", "text-rose-950", "border-rose-950", "text-rose-900", "marker:text-rose-900",
    "bg-slate-950", "text-slate-950", "border-slate-950", "text-slate-900", "marker:text-slate-900",
    "bg-gray-950", "text-gray-950", "border-gray-950", "text-gray-900", "marker:text-gray-900",
    "bg-zinc-950", "text-zinc-950", "border-zinc-950", "text-zinc-900", "marker:text-zinc-900",
    "bg-neutral-950", "text-neutral-950", "border-neutral-950", "text-neutral-900", "marker:text-neutral-900",
    "bg-stone-950", "text-stone-950", "border-stone-950", "text-stone-900", "marker:text-stone-900",
]
