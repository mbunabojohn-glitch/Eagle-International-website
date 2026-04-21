export declare const useCarousel: () => {
    currentSlide: number;
    slides: import("../types").HeroSlide[];
    isAutoPlaying: boolean;
    goToSlide: (index: number) => void;
    nextSlide: () => void;
    previousSlide: () => void;
    toggleAutoPlay: () => void;
    totalSlides: number;
};
