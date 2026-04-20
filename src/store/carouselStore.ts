import { create } from "zustand";
import { devtools } from "zustand/middleware";
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

const defaultSlides: HeroSlide[] = [
  {
    id: "1",
    title: "Eagle International Group LLC",
    description:
      "Soaring high to make the difference with the best practice in the Oil and Gas sub-sector and the Energy industry",
  },
  {
    id: "2",
    title: "Engineering the",
    highlight: "Future of Energy",
    description:
      "Delivering innovative, sustainable, and efficient solutions across global markets with over 25 years of proven excellence",
  },
  {
    id: "3",
    title: "25 Years",
    highlight: "of Global Excellence",
    description:
      "Strategic partnerships with World Bank, IFC, Royal Dutch Shell, and major multinationals across 6 countries",
  },
  {
    id: "4",
    title: "From Crude to",
    highlight: "Clean Energy",
    description:
      "Comprehensive solutions in Oil & Gas trading, Renewable Energy, and Strategic Engineering services",
  },
];

export const useCarouselStore = create<CarouselState>()(
  devtools(
    (set) => ({
      currentSlide: 0,
      slides: defaultSlides,
      isAutoPlaying: true,

      setCurrentSlide: (index) => set({ currentSlide: index }),

      nextSlide: () =>
        set((state) => ({
          currentSlide: (state.currentSlide + 1) % state.slides.length,
        })),

      previousSlide: () =>
        set((state) => ({
          currentSlide:
            state.currentSlide === 0
              ? state.slides.length - 1
              : state.currentSlide - 1,
        })),

      setSlides: (slides) => set({ slides }),

      toggleAutoPlay: () =>
        set((state) => ({ isAutoPlaying: !state.isAutoPlaying })),
    }),
    { name: "Carousel Store" },
  ),
);
