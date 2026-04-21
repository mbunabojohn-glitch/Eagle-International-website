import type { HeroSlide } from "../types";
interface CarouselState {
    currentSlide: number;
    slides: HeroSlide[];
    isAutoPlaying: boolean;
    setCurrentSlide: (index: number) => void;
    nextSlide: () => void;
    previousSlide: () => void;
    setSlides: (slides: HeroSlide[]) => void;
    toggleAutoPlay: () => void;
}
export declare const useCarouselStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<CarouselState>, "setState"> & {
    setState<A extends string | {
        type: string;
    }>(partial: CarouselState | Partial<CarouselState> | ((state: CarouselState) => CarouselState | Partial<CarouselState>), replace?: boolean, action?: A): void;
}>;
export {};
