import { create } from 'zustand'

type ModalType = 'profile' | null

interface UIState {
    // Sidebar State
    sidebarOpen: boolean
    toggleSidebar: () => void

    // Modal State
    activeModal: ModalType
    toggleModal: (modal: ModalType) => void
}

export const useUIStore = create<UIState>((set) => ({
    // Sidebar
    sidebarOpen: true,
    toggleSidebar: () =>
        set((state) => ({
            sidebarOpen: !state.sidebarOpen,
        })),

    // Modal
    activeModal: null,
    toggleModal: (modal: ModalType) =>
        set((state) => ({
            activeModal: state.activeModal === modal ? null : modal,
        })),
}))