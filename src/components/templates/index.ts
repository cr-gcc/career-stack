export { TemplateBasic } from './TemplateBasic'
export { TemplateSidebar } from './TemplateSidebar'

export const TEMPLATES = {
    'template-basic': 'TemplateBasic',
    'template-sidebar': 'TemplateSidebar',
} as const

export type TemplateId = keyof typeof TEMPLATES
