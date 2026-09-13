import { DropdownMenu } from "@components/ui/DropdownMenu";
import { FaUserCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export function DropdownMenuUser() {
    const { t } = useTranslation()
    return (
        <DropdownMenu
            icon={<FaUserCircle />}
            className="text-xl hover:text-primary transition-colors"
        >
            <button
                onClick={() => alert("Perfil")}
                className="cursor-pointer hover:text-primary transition-colors w-full text-start">
                {t("dropdownMenuUser.profile")}
            </button>
            <button
                onClick={() => alert("Cerrar sesión")}
                className="cursor-pointer hover:text-primary transition-colors w-full text-start">
                {t("dropdownMenuUser.logout")}
            </button>
        </DropdownMenu>
    )
}