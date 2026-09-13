import { ModalBase } from "@components/ui/ModalBase"

export function ProfileModal() {
    const modalContent = (
        <div className="flex flex-col gap-1 text-ts text-sm ">
            <p className="font-medium text-tp">Nombre: <span className="font-normal text-tp">Cristóbal Gutiérrez Chávez</span>
            </p>
            <p className="font-medium text-tp">Correo: <span className="font-normal text-tp">[EMAIL_ADDRESS]</span>
            </p>
            <p className="font-medium text-tp">Rol: <span className="font-normal text-tp">Administrador</span>
            </p>
        </div>
    )

    return (
        <ModalBase
            size="w-full sm:w-1/2 md:w-1/4"
            title="Mi perfil"
            modalContent={modalContent}
        />
    )
}