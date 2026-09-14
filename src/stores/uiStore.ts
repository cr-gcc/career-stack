import { create } from 'zustand'

type ModalType = 'profile' | null

interface UIState {
    // Menu State
    menuOpen: boolean
    toggleMenu: () => void
    closeMenu: () => void

    // Modal State
    activeModal: ModalType
    toggleModal: (modal: ModalType) => void
}

export const useUIStore = create<UIState>((set) => ({
    // Sidebar
    menuOpen: false,
    toggleMenu: () =>
        set((state) => ({
            menuOpen: !state.menuOpen,
        })),
    closeMenu: () =>
        set(() => ({
            menuOpen: false,
        })),

    // Modal
    activeModal: null,
    toggleModal: (modal: ModalType) =>
        set((state) => ({
            activeModal: state.activeModal === modal ? null : modal,
        })),
}))