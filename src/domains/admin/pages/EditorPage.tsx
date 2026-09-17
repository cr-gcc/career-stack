import { useState } from "react";
import { useTranslation } from "react-i18next";
import { GeneralInfo } from "@domains/admin/components/forms/editor/GeneralInfo";
import { TextBox } from "@domains/admin/components/forms/editor/TextBox";
import { Link } from "@domains/admin/components/forms/editor/Link";
import { TemplatePreviewModal } from "@domains/admin/components/TemplatePreviewModal";
import { Experience } from "@domains/admin/components/forms/editor/experience";
import { Skill } from "@domains/admin/components/forms/editor/skill";
import { ButtonModalLink } from "@domains/admin/components/ui/ButtonModalLink";
import { useCvStore } from "@/stores/cvStore";

export function EditorPage() {
    const { t } = useTranslation();
    const { cv, updateField, updateGeneralInfo } = useCvStore();
    const [showPreview, setShowPreview] = useState(false);

    return (
        <>
            <div className="flex flex-col gap-2 sm:gap-4 w-full max-w-7xl mx-auto mb-8">
                <div className="space-y-1 sm:space-y-2">
                    <h2 className="h2 text-primary">{t('editor.title')}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 w-full">
                    <div className="flex flex-col gap-1 sm:gap-2 w-full">
                        <div className="mb-2">
                            <GeneralInfo
                                currentState={cv.generalInfo}
                                onChange={updateGeneralInfo}
                            />
                        </div>
                        <div className="mb-2">
                            <TextBox
                                id="editor-section-profesional-profile"
                                title={t('editor.sections.profesionalProfile')}
                                placeholder={t('editor.fields.summary')}
                                value={cv.summary}
                                onChange={(val) => updateField('summary', val)}
                            />
                        </div>
                        <div className="mb-2">
                            <TextBox
                                id="editor-section-education"
                                title={t('editor.sections.education')}
                                placeholder={t('editor.fields.education')}
                                value={cv.education}
                                onChange={(val) => updateField('education', val)}
                            />
                        </div>
                        <div className="mb-2">
                            <Link
                                id="editor-section-repositories"
                                title={t('editor.sections.repositories')}
                                placeholder={t('editor.fields.repositoryLink')}
                                value={cv.repositories}
                                onChange={(val) => updateField('repositories', val)}
                            />
                        </div>
                        <div className="mb-2">
                            <Link
                                id="editor-section-portfolio"
                                title={t('editor.sections.portfolio')}
                                placeholder={t('editor.fields.portfolioLink')}
                                value={cv.portfolio}
                                onChange={(val) => updateField('portfolio', val)}
                            />
                        </div>
                        <div className="mb-2">
                            <TextBox
                                id="editor-section-extra-info"
                                title={t('editor.sections.extraInfo')}
                                placeholder={t('editor.fields.extraInfo')}
                                value={cv.extraInfo}
                                onChange={(val) => updateField('extraInfo', val)}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 sm:gap-2 w-full">
                        <div className="mb-2">
                            <Experience />
                        </div>
                        <div className="mb-2">
                            <Skill />
                        </div>
                    </div>
                </div>
                <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
                    <ButtonModalLink onClick={() => setShowPreview(true)} />
                </div>
            </div>
            {
                showPreview && (
                    <TemplatePreviewModal modalClose={() => setShowPreview(false)} />
                )
            }
        </>
    )
}