export { TemplateBasic } from './TemplateBasic'
export { TemplateSidebar } from './TemplateSidebar'

export const TEMPLATES = {
    'template-basic': 'TemplateBasic',
    'template-sidebar': 'TemplateSidebar',
} as const

export type TemplateId = keyof typeof TEMPLATES

export const TEMPLATE_LABELS: Record<TemplateId, string> = {
    'template-basic': 'Básico',
    'template-sidebar': 'Sidebar Lateral',
}
