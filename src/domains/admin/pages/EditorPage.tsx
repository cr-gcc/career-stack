import { useTranslation } from "react-i18next";
import { InputLabelIcon } from "@components/ui/InputLabelIcon";
import { ButtonIcon } from "@components/ui/ButtonIcon";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

export function EditorPage() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-2 sm:gap-4 w-full max-w-7xl mx-auto mb-8">
            <div className="space-y-1 sm:space-y-2">
                <h2 className="h2 text-primary">{t('editor.title')}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 w-full">
                <div className="flex flex-col gap-1 sm:gap-2 w-full">
                    <div id="editor-section-general-info" className="mb-2">
                        <h5 className="h5 text-ts mb-1">{t('editor.sections.generalInfo')}</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 w-full">
                            <InputLabelIcon type="text" placeholder={t('editor.fields.name')} className="w-full text-sm" />
                            <InputLabelIcon type="text" placeholder={t('editor.fields.rol')} className="w-full text-sm" />
                            <InputLabelIcon type="email" placeholder={t('editor.fields.email')} className="w-full text-sm" />
                            <InputLabelIcon type="text" placeholder={t('editor.fields.address')} className="w-full text-sm" />
                            <InputLabelIcon type="number" placeholder={t('editor.fields.phone')} className="w-full text-sm" />
                        </div>
                    </div>
                    <div id="editor-section-profesional-profile" className="mb-2">
                        <h5 className="h5 text-ts mb-1">{t('editor.sections.profesionalProfile')}</h5>
                        <div className="flex flex-col gap-1 sm:gap-2 w-full">
                            <textarea className="w-full rounded-lg border border-border bg-surface px-3 py-1 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-tp placeholder:text-ts/50 text-sm" placeholder={t('editor.fields.summary')}></textarea>
                        </div>
                    </div>
                    <div id="editor-section-work-experiences" className="mb-2">
                        <div className="flex justify-between w-full">
                            <h5 className="h5 text-ts">{t('editor.sections.workExperiences')}</h5>
                            <div className="flex">
                                <ButtonIcon icon={<FaPlusCircle />} className="text-xs text-emphasis" />
                                <ButtonIcon icon={<FaMinusCircle />} className="text-xs text-emphasis" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-2 w-full">
                            <InputLabelIcon type="text" placeholder={t('editor.fields.companyName')} className="w-full text-sm" />
                            <InputLabelIcon type="text" placeholder={t('editor.fields.dateRange')} className="w-full text-sm" />
                            <InputLabelIcon type="email" placeholder={t('editor.fields.rol')} className="w-full text-sm" />
                            <div className="col-span-3">
                                <textarea className="w-full rounded-lg border border-border bg-surface px-3 py-1 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-tp placeholder:text-ts/50 text-sm" placeholder={t('editor.fields.description')}></textarea>
                            </div>
                        </div>
                        <hr className="border-b border-border my-1" />
                    </div>
                    <div id="editor-section-education" className="mb-2">
                        <h5 className="h5 text-ts">{t('editor.sections.education')}</h5>
                        <div className="flex flex-col gap-1 sm:gap-2 w-full">
                            <textarea className="w-full rounded-lg border border-border bg-surface px-3 py-1 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-tp placeholder:text-ts/50 text-sm" placeholder={t('editor.fields.education')}></textarea>
                        </div>
                    </div>
                    <div id="editor-section-skills" className="mb-2">
                        <div className="flex justify-between w-full">
                            <h5 className="h5 text-ts">{t('editor.sections.skills')}</h5>
                            <div className="flex">
                                <ButtonIcon icon={<FaPlusCircle />} className="text-xs text-emphasis" />
                                <ButtonIcon icon={<FaMinusCircle />} className="text-xs text-emphasis" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 w-full">
                            <InputLabelIcon type="text" placeholder={t('editor.fields.area')} className="w-full text-sm" />
                            <div className="col-span-2">
                                <textarea className="w-full rounded-lg border border-border bg-surface px-3 py-1 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-tp placeholder:text-ts/50 text-sm" placeholder={t('editor.fields.tecnologies')}></textarea>
                            </div>
                        </div>
                        <hr className="border-b border-border my-1" />
                    </div>
                    <div id="editor-section-repositories" className="mb-2">
                        <h5 className="h5 text-ts">{t('editor.sections.repositories')}</h5>
                        <div className="flex flex-col gap-1 sm:gap-2 w-full">
                            <InputLabelIcon type="text" placeholder={t('editor.fields.repositoryLink')} className="w-full text-sm" />
                        </div>
                    </div>
                    <div id="editor-section-portfolio" className="mb-2">
                        <h5 className="h5 text-ts">{t('editor.sections.portfolio')}</h5>
                        <div className="flex flex-col gap-1 sm:gap-2 w-full">
                            <InputLabelIcon type="text" placeholder={t('editor.fields.portfolioLink')} className="w-full text-sm" />
                        </div>
                    </div>
                    <div id="editor-section-extra-info">
                        <h5 className="h5 text-ts">{t('editor.sections.extraInfo')}</h5>
                        <div className="flex flex-col gap-1 sm:gap-2 w-full">
                            <textarea className="w-full rounded-lg border border-border bg-surface px-3 py-1 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-tp placeholder:text-ts/50 text-sm" placeholder={t('editor.fields.extraInfo')}></textarea>
                        </div>
                    </div>
                </div>
                <div>
                    <p>visor</p>
                </div>
            </div>
        </div>
    )
}