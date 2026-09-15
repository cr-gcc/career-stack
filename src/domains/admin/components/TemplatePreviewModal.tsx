import { useCvStore } from '@stores/cvStore'
import type { CvData } from '@/types/cv.types'
import { TemplateBasic, TemplateSidebar, TEMPLATES, TEMPLATE_LABELS, type TemplateId } from '@components/templates'
import { FONTS } from '@/types/font.types'
import { COLORS } from '@/types/color.types'
import { IoCloseCircleSharp } from 'react-icons/io5'
import { ButtonIcon } from '@/components/ui/ButtonIcon'
import { SelectBase } from '@/components/ui/SelectBase'
import type { ComponentType } from 'react'

// Constantes fuera del componente: se calculan una sola vez
const templateIds = Object.keys(TEMPLATES) as TemplateId[]
const templateOptions = templateIds.map((id) => ({ value: id, label: TEMPLATE_LABELS[id] }))

// Mapa de componentes: más extensible que un switch
const TEMPLATE_MAP: Record<TemplateId, ComponentType<{ data: CvData }>> = {
    'template-basic': TemplateBasic,
    'template-sidebar': TemplateSidebar,
}

interface TemplatePreviewModalProps {
    onClose: () => void
}

export function TemplatePreviewModal({ onClose }: TemplatePreviewModalProps) {
    const { cv, updateField } = useCvStore()

    const TemplateComponent = TEMPLATE_MAP[cv.templateId] ?? TemplateBasic

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="bg-surface border border-border text-t-primary rounded-sm flex flex-col w-[1000px] max-w-[95vw] max-h-[92vh] overflow-hidden px-3 pt-0.5 pb-2">
                <div className="flex items-center mb-2">
                    <h5 className="h5 text-primary">Vista previa</h5>
                </div>
                <div className="flex justify-end gap-2 mb-4">
                    <SelectBase
                        options={FONTS}
                        label="Fuentes"
                        intOption="Selecciona una fuente"
                        value={cv.font}
                        className="w-auto"
                        onChange={(e) => updateField('font', e.target.value)}
                    />
                    <SelectBase
                        colorFlags={true}
                        options={COLORS}
                        label="Colores"
                        intOption="Selecciona un color"
                        value={cv.bgColor}
                        className="w-auto"
                        onChange={(e) => updateField('bgColor', e.target.value)}
                    />
                    <SelectBase
                        options={templateOptions}
                        label="Plantilla"
                        value={cv.templateId}
                        className="w-auto"
                        onChange={(e) => updateField('templateId', e.target.value as TemplateId)}
                    />
                </div>
                <div className="flex-1 overflow-auto flex items-start justify-center p-6 bg-black/20 mb-3">
                    <div style={{ transformOrigin: 'top center', marginBottom: '-300px' }}>
                        <TemplateComponent data={cv} />
                    </div>
                </div>
                <div className="flex justify-end gap-2 shrink-0">
                    <ButtonIcon
                        label="Cerrar"
                        icon={<IoCloseCircleSharp />}
                        onClick={onClose}
                        className="w-auto bg-border text-xs text-tp hover:bg-border/80 hover:text-ts"
                    />
                </div>
            </div>
        </div>
    )
}
