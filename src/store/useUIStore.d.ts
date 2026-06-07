import type { ReactNode } from "react";
interface UIState {
    isMobileMenuOpen: boolean;
    toggleMobileMenu: () => void;
    closeMobileMenu: () => void;
    isDarkMode: boolean;
    toggleDarkMode: () => void;
    initTheme: () => void;
    isModalOpen: boolean;
    modalContent: ReactNode | null;
    openModal: (content: ReactNode) => void;
    closeModal: () => void;
    isLoading: boolean;
    setLoading: (loading: boolean) => void;
}
export declare const useUIStore: import("zustand").UseBoundStore<Omit<Omit<import("zustand").StoreApi<UIState>, "setState"> & {
    setState<A extends string | {
        type: string;
    }>(partial: UIState | Partial<UIState> | ((state: UIState) => UIState | Partial<UIState>), replace?: boolean, action?: A): void;
}, "persist"> & {
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<UIState, {
            isDarkMode: boolean;
        }>>) => void;
        clearStorage: () => void;
        rehydrate: () => Promise<void> | void;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: UIState) => void) => () => void;
        onFinishHydration: (fn: (state: UIState) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<UIState, {
            isDarkMode: boolean;
        }>>;
    };
}>;
export {};
