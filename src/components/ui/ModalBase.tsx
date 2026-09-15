import { useEffect, useRef, type ReactNode } from "react"
import { useUIStore } from "@stores/uiStore"
import { ButtonIcon } from "@components/ui/ButtonIcon"
import { IoCloseCircleSharp } from "react-icons/io5";

interface ModalBaseProps {
    size: string
    title: string
    modalContent: ReactNode,
    optionButtons?: ReactNode
}

export function ModalBase({ size, title, modalContent, optionButtons }: ModalBaseProps) {
    const { toggleModal } = useUIStore()
    const dialogRef = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        const dialog = dialogRef.current
        if (dialog && !dialog.open) {
            dialog.showModal()
        }
    }, [])

    return (
        <dialog
            ref={dialogRef}
            closedby="any"
            className={`backdrop:bg-black/60 bg-transparent border-0 outline-none p-0 m-auto transition-all duration-300 sm:h-full md:h-auto ${size}`}
        >
            <div className="bg-surface border border-border text-t-primary px-3 pt-0.5 pb-2 rounded-sm flex flex-col">
                <div id="modal-header" className="flex items-center mb-2">
                    <h5 id="modalTitle" className="h5 text-primary">{title}</h5>
                </div>
                <div id="modal-content" className="mb-3">
                    {modalContent}
                </div>
                <div id="modal-footer" className="flex justify-end gap-2">
                    {optionButtons}
                    <ButtonIcon
                        label="Salir"
                        icon={<IoCloseCircleSharp />}
                        onClick={() => toggleModal(null)}
                        className="w-auto bg-border text-xs text-tp hover:bg-border/80 hover:text-ts"
                    />
                </div>
            </div>
        </dialog>
    )
}
