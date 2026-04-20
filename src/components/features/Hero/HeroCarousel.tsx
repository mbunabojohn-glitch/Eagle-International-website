import { useCarousel } from "@hooks/useCarousel";
import clsx from "clsx";
import type { HeroSlide } from "@types";

const HeroCarousel = () => {
  const { currentSlide, slides } = useCarousel();

  return (
    <div className="relative h-[280px] overflow-hidden mb-8">
      {slides.map((slide: HeroSlide, index: number) => (
        <div
          key={slide.id}
          className={clsx(
            "absolute w-full transition-all duration-1000",
            index === currentSlide
              ? "opacity-100 translate-y-0"
              : index < currentSlide
                ? "opacity-0 -translate-y-8"
                : "opacity-0 translate-y-8",
          )}
        >
          <h1 className="font-heading text-[3.5rem] font-bold leading-tight mb-6 text-white">
            {slide.title}{" "}
            {slide.highlight && (
              <>
                <span className="text-orange-primary">{slide.highlight}</span>
              </>
            )}
          </h1>
          <p className="text-[1.3rem] leading-relaxed text-grey-light font-light">
            {slide.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HeroCarousel;
