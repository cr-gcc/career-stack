import { useState } from 'react'
import { useCvStore } from '@stores/cvStore'
import { TemplateBasic, TemplateSidebar, TEMPLATES, type TemplateId } from '@components/templates'
import type { CvData } from '@/types/cv.types'
import { IoCloseOutline } from 'react-icons/io5'
import { MdOutlineCompare } from 'react-icons/md'

const TEMPLATE_LABELS: Record<TemplateId, string> = {
    'template-basic': 'Clásico',
    'template-sidebar': 'Sidebar Lateral',
}

function renderTemplate(templateId: TemplateId, data: CvData) {
    switch (templateId) {
        case 'template-basic':
            return <TemplateBasic data={data} />
        case 'template-sidebar':
            return <TemplateSidebar data={data} />
        default:
            return <TemplateBasic data={data} />
    }
}

interface TemplatePreviewModalProps {
    onClose: () => void
}

export function TemplatePreviewModal({ onClose }: TemplatePreviewModalProps) {
    const { cv, updateField } = useCvStore()
    const [selected, setSelected] = useState<TemplateId>(cv.templateId)

    const templateIds = Object.keys(TEMPLATES) as TemplateId[]

    const handleApply = () => {
        updateField('templateId', selected)
        onClose()
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <div className="bg-surface border border-border rounded-xl shadow-2xl flex flex-col w-[1000px] max-w-[95vw] max-h-[92vh] overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-border shrink-0">
                    <div className="flex items-center gap-2">
                        <MdOutlineCompare className="text-primary text-xl" />
                        <h2 className="text-base font-semibold text-tp">Vista previa de Templates</h2>
                    </div>
                    <button
                        id="template-preview-close"
                        onClick={onClose}
                        className="p-1 rounded-lg hover:bg-border/50 text-ts hover:text-tp transition-colors"
                    >
                        <IoCloseOutline className="text-xl" />
                    </button>
                </div>

                {/* Selector de template */}
                <div className="flex gap-2 px-5 py-3 border-b border-border shrink-0 overflow-x-auto">
                    {templateIds.map((id) => (
                        <button
                            key={id}
                            id={`template-option-${id}`}
                            onClick={() => setSelected(id)}
                            className={`
                                px-4 py-2 rounded-lg text-sm font-medium border-2 transition-all shrink-0
                                ${selected === id
                                    ? 'border-primary bg-primary/10 text-primary'
                                    : 'border-border bg-surface hover:border-primary/50 text-ts hover:text-tp'
                                }
                            `}
                        >
                            {TEMPLATE_LABELS[id]}
                            {cv.templateId === id && (
                                <span className="ml-2 text-xs bg-primary/20 text-primary px-1.5 py-0.5 rounded-full">
                                    Actual
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Preview del template — escalado para caber en el modal */}
                <div className="flex-1 overflow-auto flex items-start justify-center p-6 bg-black/20">
                    <div
                        style={{
                            transform: 'scale(0.72)',
                            transformOrigin: 'top center',
                            // Mantiene el espacio visual del div escalado
                            marginBottom: '-300px',
                        }}
                    >
                        {renderTemplate(selected, cv)}
                    </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-end gap-2 px-5 py-3 border-t border-border shrink-0">
                    <button
                        id="template-preview-cancel"
                        onClick={onClose}
                        className="px-4 py-1.5 rounded-lg text-sm text-ts hover:text-tp hover:bg-border/50 transition-colors"
                    >
                        Cancelar
                    </button>
                    <button
                        id="template-preview-apply"
                        onClick={handleApply}
                        disabled={selected === cv.templateId}
                        className="px-4 py-1.5 rounded-lg text-sm font-medium bg-primary text-white hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                        Aplicar template
                    </button>
                </div>
            </div>
        </div>
    )
}
