import { IoDocumentTextSharp, IoDocumentsSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { GrDocumentText } from "react-icons/gr";
import { MdEditDocument } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { LinkIcon } from "@components/ui/LinkIcon";
import { useUIStore } from "@stores/uiStore"

export function SideBar() {
    const { t } = useTranslation();
    const menuOpen = useUIStore((state) => state.menuOpen)

    return (
        <aside className={`hidden md:flex bg-surface border-r border-border sticky top-0 h-screen shrink-0 z-40 flex-col transition-[width] duration-300 overflow-y-auto custom-scrollbar ${menuOpen ? 'w-42' : 'w-0 border-r-0'}`}>
            <div className="flex h-16 shrink-0 items-center px-6">
                <GrDocumentText size={35} className="text-primary" />
            </div>
            <nav className="flex flex-1 flex-col px-4 py-4">
                <ul className="space-y-1 text-sm text-ts">
                    <li>
                        <LinkIcon
                            url="/"
                            label={t('sidebar.home')}
                            icon={<IoDocumentTextSharp size={16} />}
                            className="text-ts hover:bg-primary-soft hover:text-primary transition-colors"
                        />
                    </li>
                    <li>
                        <LinkIcon
                            url="/cvs"
                            label={t('sidebar.myCVs')}
                            icon={<IoDocumentsSharp size={16} />}
                            className="text-ts hover:bg-primary-soft hover:text-primary transition-colors"
                        />
                    </li>
                    <li>
                        <LinkIcon
                            url="/editor"
                            label={t('sidebar.editor')}
                            icon={<MdEditDocument size={16} />}
                            className="text-ts hover:bg-primary-soft hover:text-primary transition-colors"
                        />
                    </li>
                    <li>
                        <LinkIcon
                            url="/job-offers"
                            label={t('sidebar.jobOffers')}
                            icon={<IoLogoLinkedin size={16} />}
                            className="text-ts hover:bg-primary-soft hover:text-primary transition-colors"
                        />
                    </li>
                </ul>
            </nav>
        </aside>
    )
}