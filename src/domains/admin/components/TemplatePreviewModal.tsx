import { useTranslation } from 'react-i18next'
import { useCvStore } from '@stores/cvStore'
import { TEMPLATE_OPTIONS, getTemplateComponent } from '@/components/templates/TemplateRegistry'
import { FONTS } from '@/types/font.types'
import { COLORS } from '@/types/color.types'
import { IoCloseCircleSharp } from 'react-icons/io5'
import { HiDocumentDownload } from "react-icons/hi";
import { IoMdSave } from "react-icons/io";
import { ButtonIcon } from '@/components/ui/ButtonIcon'
import { SelectBase } from '@/components/ui/SelectBase'

interface TemplatePreviewModalProps {
    modalOpen: (value: boolean) => void
}

export function TemplatePreviewModal({ modalOpen }: TemplatePreviewModalProps) {
    const { t } = useTranslation()
    const { cv, updateField } = useCvStore()
    const TemplateComponent = getTemplateComponent(cv.templateId)

    const saveCV = () => {
        alert("En construcción");
    }

    const downloadCV = () => {
        alert("En construcción");
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="bg-surface border border-border text-t-primary rounded-sm flex flex-col w-[1000px] max-w-[95vw] max-h-[92vh] overflow-hidden px-3 pt-0.5 pb-2">
                <div className="flex items-center mb-2">
                    <h5 className="h5 text-primary">{t('editor.modal.title')}</h5>
                </div>
                <div className="flex justify-end gap-2 mb-4">
                    <SelectBase
                        options={FONTS}
                        label={t('editor.modal.fonts')}
                        intOption={t('editor.modal.intOptionFonts')}
                        value={cv.font}
                        className="w-auto"
                        onChange={(e) => updateField('font', e.target.value)}
                    />
                    <SelectBase
                        colorFlags={true}
                        options={COLORS}
                        label={t('editor.modal.colors')}
                        intOption={t('editor.modal.intOptionColors')}
                        value={cv.bgColor}
                        className="w-auto"
                        onChange={(e) => updateField('bgColor', e.target.value)}
                    />
                    <SelectBase
                        options={TEMPLATE_OPTIONS}
                        label={t('editor.modal.template')}
                        intOption={t('editor.modal.intOptionTemplate')}
                        value={cv.templateId}
                        className="w-auto"
                        onChange={(e) => updateField('templateId', e.target.value as any)}
                    />
                </div>
                <div className="flex-1 overflow-auto flex items-start justify-center p-6 bg-black/20 mb-3">
                    <div style={{ transformOrigin: 'top center' }}>
                        <TemplateComponent data={cv} />
                    </div>
                </div>
                <div className="flex justify-end gap-2 shrink-0">
                    <ButtonIcon
                        label={t('common.download')}
                        icon={<HiDocumentDownload />}
                        onClick={() => downloadCV()}
                        className="w-auto bg-border text-xs text-tp hover:bg-border/80 hover:text-ts" />
                    <ButtonIcon
                        label={t('common.save')}
                        icon={<IoMdSave />}
                        onClick={() => saveCV()}
                        className="w-auto bg-border text-xs text-tp hover:bg-border/80 hover:text-ts" />
                    <ButtonIcon
                        label={t('common.close')}
                        icon={<IoCloseCircleSharp />}
                        onClick={() => modalOpen(false)}
                        className="w-auto bg-border text-xs text-tp hover:bg-border/80 hover:text-ts"
                    />
                </div>
            </div>
        </div>
    )
}
