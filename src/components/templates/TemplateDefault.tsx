import { useTranslation } from 'react-i18next'
import type { CvData } from '@/types/cv.types'

interface TemplateDefaultProps {
    data: CvData
}

export function TemplateDefault({ data }: TemplateDefaultProps) {
    const { t } = useTranslation()
    return (
        <div className='flex flex-col gap-1'>
            <h3 className='h3 text-primary'>{data.generalInfo.name}</h3>
            <h4 className='h4 text-ts'>
                {data.generalInfo.role}
            </h4>
            <h5 className='h5 text-ts'>{t('editor.modal.defaultMessage')}</h5>
        </div>
    )
}