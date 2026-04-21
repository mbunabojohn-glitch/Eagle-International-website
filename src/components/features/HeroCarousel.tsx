import { useEffect, useState } from "react";
import { useCarousel } from "../../hooks/useCarousel";
import clsx from "clsx";
import type { HeroSlide } from "../../types";
import { Link } from "react-router-dom";
import Button from "../common/Button";

const HeroCarousel = () => {
  const { currentSlide, slides } = useCarousel();
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = document.querySelector('video');
    if (video) {
      video.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative h-[95vh] min-h-[600px] md:min-h-[750px] flex flex-col justify-start overflow-hidden -mt-[100px] md:-mt-[130px]">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={clsx(
            "w-full h-full object-cover object-center",
            videoLoaded ? "opacity-100" : "opacity-0"
          )}
          style={{ filter: "brightness(1.1) contrast(1.05)" }}
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
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
                  : "opacity-0 translate-y-12 absolute inset-0 z-0"
              )}
            >
              {index === currentSlide && (
                <>
                  <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] mb-4 sm:mb-6 text-white uppercase tracking-tighter text-shadow-lg">
                    {slide.title}{" "}
                    {slide.highlight && (
                      <span className="text-orange-primary block mt-1">
                        {slide.highlight}
                      </span>
                    )}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-grey-light font-light mb-6 sm:mb-8 max-w-xl sm:max-w-2xl text-shadow">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-slide-up" style={{ animationDelay: '400ms' }}>
                    <Link to="/contact">
                      <Button variant="primary" size="lg" className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg shadow-2xl shadow-orange-primary/20">
                        Get Started
                      </Button>
                    </Link>
                    <Link to="/services">
                      <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg border-white text-white hover:bg-white hover:text-black shadow-2xl">
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

      <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
        {slides.map((_, index) => (
          <div
            key={index}
            className={clsx(
              "h-1 sm:h-1.5 transition-all duration-500 rounded-full",
              index === currentSlide ? "w-8 sm:w-12 bg-orange-primary" : "w-4 sm:w-6 bg-white/30"
            )}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
