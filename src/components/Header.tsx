import { useTranslation } from "react-i18next";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { RiSidebarFoldFill, RiSidebarUnfoldFill } from "react-icons/ri";
import { ButtonIcon } from "@/components/ui/ButtonIcon"

export function Header() {
    const { i18n } = useTranslation()

    const toggleLanguage = () => {
        const nextLang = i18n.language.startsWith('es') ? 'en' : 'es'
        i18n.changeLanguage(nextLang)
    }

    return (
        <header className="bg-surface border-b border-border">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center justify-end w-full">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm text-ts">
                                <li>
                                    <ButtonIcon
                                        className="text-xl hover:text-primary transition-colors"
                                        icon={<RiSidebarFoldFill />}
                                    />
                                </li>
                                <li>
                                    <ButtonIcon
                                        label={i18n.language.startsWith('es') ? 'EN' : 'ES'}
                                        className="text-md font-semibold cursor-pointer hover:text-primary transition-colors"
                                        onClick={toggleLanguage}
                                    />
                                </li>
                                <li>
                                    <ButtonIcon
                                        className="text-xl hover:text-primary transition-colors"
                                        icon={<MdLightMode />}
                                    />
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}