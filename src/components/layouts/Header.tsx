import { useTranslation } from "react-i18next";
import { MdLightMode, MdDarkMode, MdMenu, MdClose } from "react-icons/md";
import { RiSidebarFoldFill, RiSidebarUnfoldFill } from "react-icons/ri";
import { GrDocumentText } from "react-icons/gr";
import { ButtonIcon } from "@components/ui/ButtonIcon"
import { useThemeStore } from "@stores/themeStore"
import { useUIStore } from "@stores/uiStore"
import { DropdownMenuUser } from "@/components/common/DropdownMenuUser";
import { LinkIcon } from "@components/ui/LinkIcon";
import { IoDocumentTextSharp, IoDocumentsSharp, IoLogoLinkedin } from "react-icons/io5";
import { MdEditDocument } from "react-icons/md";

export function Header() {
    const { t, i18n } = useTranslation()
    const theme = useThemeStore((state) => state.theme)
    const toggleTheme = useThemeStore((state) => state.toggleTheme)
    const menuOpen = useUIStore((state) => state.menuOpen)
    const toggleMenu = useUIStore((state) => state.toggleMenu)
    const closeMenu = useUIStore((state) => state.closeMenu)

    const toggleLanguage = () => {
        const nextLang = i18n.language.startsWith('es') ? 'en' : 'es'
        i18n.changeLanguage(nextLang)
    }

    return (
        <header className="bg-surface border-b border-border z-30 relative w-full">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* IZQUIERDA: Logo y Control del Menú */}
                    <div className="flex items-center gap-2">
                        {/* Menú Hamburguesa (Solo Móvil) */}
                        <ButtonIcon
                            icon={menuOpen ? <MdClose /> : <MdMenu />}
                            className="text-2xl text-ts hover:text-primary transition-colors md:hidden"
                            onClick={toggleMenu}
                        />
                        {/* Botón Fold/Unfold (Solo Escritorio) */}
                        <ButtonIcon
                            icon={menuOpen ? <RiSidebarFoldFill /> : <RiSidebarUnfoldFill />}
                            className="text-xl text-ts font-semibold cursor-pointer hover:text-primary transition-colors hidden md:block"
                            onClick={toggleMenu}
                        />
                        {/* Logo */}
                        <div className="flex items-center gap-2 ml-1 md:hidden">
                            <GrDocumentText size={24} className="text-primary" />
                        </div>
                    </div>
                    {/* DERECHA: Traducción, Tema, Perfil */}
                    <div className="flex items-center justify-end">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-1 sm:gap-2 text-sm text-ts">
                                <li>
                                    <ButtonIcon
                                        label={i18n.language.startsWith('es') ? 'EN' : 'ES'}
                                        className="text-md font-semibold cursor-pointer hover:text-primary transition-colors"
                                        onClick={toggleLanguage}
                                    />
                                </li>
                                <li>
                                    <ButtonIcon
                                        icon={theme === 'light' ? <MdLightMode /> : <MdDarkMode />}
                                        className="text-xl hover:text-primary transition-colors"
                                        onClick={toggleTheme}
                                    />
                                </li>
                                <li>
                                    <DropdownMenuUser />
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            {/* MENÚ DESPLEGABLE (Solo Móvil) */}
            {menuOpen && (
                <div className="md:hidden border-t border-border bg-surface absolute top-16 left-0 w-full shadow-lg">
                    <nav className="flex flex-col px-4 py-2">
                        <ul className="space-y-1 text-sm text-ts">
                            <li>
                                <LinkIcon
                                    url="/"
                                    label={t('sidebar.home')}
                                    icon={<IoDocumentTextSharp size={16} />}
                                    className="text-ts hover:bg-primary-soft hover:text-primary transition-colors py-3"
                                    onClick={closeMenu}
                                />
                            </li>
                            <li>
                                <LinkIcon
                                    url="/cvs"
                                    label={t('sidebar.myCVs')}
                                    icon={<IoDocumentsSharp size={16} />}
                                    className="text-ts hover:bg-primary-soft hover:text-primary transition-colors py-3"
                                    onClick={closeMenu}
                                />
                            </li>
                            <li>
                                <LinkIcon
                                    url="/editor"
                                    label={t('sidebar.editor')}
                                    icon={<MdEditDocument size={16} />}
                                    className="text-ts hover:bg-primary-soft hover:text-primary transition-colors py-3"
                                    onClick={closeMenu}
                                />
                            </li>
                            <li>
                                <LinkIcon
                                    url="/job-offers"
                                    label={t('sidebar.jobOffers')}
                                    icon={<IoLogoLinkedin size={16} />}
                                    className="text-ts hover:bg-primary-soft hover:text-primary transition-colors py-3"
                                    onClick={closeMenu}
                                />
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    )
}