import type { ReactNode } from "react";
interface UIState {
    isMobileMenuOpen: boolean;
    toggleMobileMenu: () => void;
    closeMobileMenu: () => void;
    isModalOpen: boolean;
    modalContent: ReactNode | null;
    openModal: (content: ReactNode) => void;
    closeModal: () => void;
    isLoading: boolean;
    setLoading: (loading: boolean) => void;
}
export declare const useUIStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<UIState>, "setState"> & {
    setState<A extends string | {
        type: string;
    }>(partial: UIState | Partial<UIState> | ((state: UIState) => UIState | Partial<UIState>), replace?: boolean, action?: A): void;
}>;
export {};
