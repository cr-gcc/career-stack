import { useUIStore } from "@stores/uiStore"
import { useNavigate } from "react-router"
import { DropdownMenu } from "@components/ui/DropdownMenu";
import { FaUserCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { authService } from '@domains/auth/services/auth.service'

export function DropdownMenuUser() {
    const { toggleModal, setIsLoading } = useUIStore()
    const { t } = useTranslation()
    const navigate = useNavigate()

    const handleLogout = async () => {
        setIsLoading(true)
        await authService.logout()
        setIsLoading(false)
        navigate('/login')
    }

    return (
        <DropdownMenu
            icon={<FaUserCircle />}
            className="text-xl hover:text-primary transition-colors"
        >
            <button
                onClick={() => toggleModal('profile')}
                className="cursor-pointer hover:text-primary transition-colors w-full text-start">
                {t("dropdownMenuUser.profile")}
            </button>
            <button
                onClick={() => handleLogout()}
                className="cursor-pointer hover:text-primary transition-colors w-full text-start">
                {t("dropdownMenuUser.logout")}
            </button>
        </DropdownMenu>
    )
}