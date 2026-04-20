import { useCarousel } from "../../hooks/useCarousel";
import clsx from "clsx";
import type { HeroSlide } from "../../types";
import { Link } from "react-router-dom";
import Button from "../common/Button";

const HeroCarousel = () => {
  const { currentSlide, slides } = useCarousel();

  return (
    <section className="relative h-[95vh] min-h-[750px] flex flex-col justify-start overflow-hidden -mt-[100px] md:-mt-[130px]">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10 w-full pt-28 md:pt-40">
        <div className="max-w-4xl">
          {slides.map((slide: HeroSlide, index: number) => (
            <div
              key={slide.id}
              className={clsx(
                "transition-all duration-1000 ease-in-out",
                index === currentSlide
                  ? "opacity-100 translate-y-0 relative z-10"
                  : "opacity-0 translate-y-12 absolute inset-0 z-0",
              )}
            >
              {index === currentSlide && (
                <>
                  <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-6 text-white uppercase tracking-tighter text-shadow-lg">
                    {slide.title}{" "}
                    {slide.highlight && (
                      <span className="text-orange-primary block mt-1">
                        {slide.highlight}
                      </span>
                    )}
                  </h1>
                  <p className="text-xl md:text-2xl leading-relaxed text-grey-light font-light mb-8 max-w-2xl text-shadow">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 animate-slide-up" style={{ animationDelay: '400ms' }}>
                    <Link to="/contact">
                      <Button variant="primary" size="lg" className="w-full sm:w-auto px-10 py-5 text-lg shadow-2xl shadow-orange-primary/20">
                        Get Started
                      </Button>
                    </Link>
                    <Link to="/services">
                      <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 py-5 text-lg border-white text-white hover:bg-white hover:text-black shadow-2xl">
                        Our Services
                      </Button>
                    </Link>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <div
            key={index}
            className={clsx(
              "h-1.5 transition-all duration-500 rounded-full",
              index === currentSlide ? "w-12 bg-orange-primary" : "w-6 bg-white/30"
            )}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
