import type { ReactNode } from "react";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface UIState {
  // Mobile menu
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;

  // Theme (dark/light mode)
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  initTheme: () => void;

  // Modal
  isModalOpen: boolean;
  modalContent: ReactNode | null;
  openModal: (content: ReactNode) => void;
  closeModal: () => void;

  // Loading
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

export const useUIStore = create<UIState>()(
  devtools(
    persist(
      (set, get) => ({
        // Mobile menu
        isMobileMenuOpen: false,
        toggleMobileMenu: () =>
          set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
        closeMobileMenu: () => set({ isMobileMenuOpen: false }),

        // Theme
        isDarkMode: false,
        toggleDarkMode: () => {
          const next = !get().isDarkMode;
          set({ isDarkMode: next });
          if (next) {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }
        },
        initTheme: () => {
          const isDark = get().isDarkMode;
          if (isDark) {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }
        },

        // Modal
        isModalOpen: false,
        modalContent: null,
        openModal: (content) => set({ isModalOpen: true, modalContent: content }),
        closeModal: () => set({ isModalOpen: false, modalContent: null }),

        // Loading
        isLoading: false,
        setLoading: (loading) => set({ isLoading: loading }),
      }),
      {
        name: "eagle-ui-store",
        partialize: (state) => ({ isDarkMode: state.isDarkMode }),
      }
    ),
    { name: "UI Store" }
  )
);
