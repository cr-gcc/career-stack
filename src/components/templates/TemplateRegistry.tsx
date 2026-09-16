import type { ComponentType } from 'react'
import type { CvData } from '@/types/cv.types'
import { TemplateDefault } from './TemplateDefault'
import { TemplateBasic } from './TemplateBasic'
import { TemplateSidebar } from './TemplateSidebar'

interface TemplateOption {
    id: number
    label: string
    value: string
    component: ComponentType<{ data: CvData }>
}

export const TEMPLATE_OPTIONS = [
    {
        id: 1,
        value: 'basic',
        label: 'Básico',
        component: TemplateBasic,
    },
    {
        id: 2,
        value: 'sidebar',
        label: 'Sidebar lateral',
        component: TemplateSidebar,
    }
] as const satisfies TemplateOption[]

export type TemplateValue = (typeof TEMPLATE_OPTIONS)[number]['value'] | ''

export function getTemplateComponent(templateValue: TemplateValue) {
    if (!templateValue) {
        return TemplateDefault
    }
    return (
        TEMPLATE_OPTIONS.find(
            (template) => template.value === templateValue
        )?.component ??
        null
    )
}