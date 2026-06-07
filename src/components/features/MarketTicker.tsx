import { useEffect, useRef } from "react";
import { clsx } from "clsx";
import { useMarketTicker } from "../../hooks/queries/useMarketTicker";
import type { EnergyPrice } from "../../types";

const MarketTickerSkeleton = () => {
  return (
    <div className="flex gap-4 overflow-x-auto carousel-hide-scroll pb-4">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
        <div
          key={i}
          className="min-w-[220px] bg-light-secondary dark:bg-dark-secondary border border-blue-primary/20 rounded-xl p-4 animate-pulse"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-blue-primary/10" />
            <div className="h-4 w-24 bg-light-tertiary dark:bg-dark-tertiary rounded" />
          </div>
          <div className="h-7 w-32 bg-light-tertiary dark:bg-dark-tertiary rounded mb-2" />
          <div className="h-4 w-28 bg-light-tertiary dark:bg-dark-tertiary rounded" />
        </div>
      ))}
    </div>
  );
};

const PriceCard = ({ price }: { price: EnergyPrice }) => {
  const isPositive = price.change >= 0;

  return (
    <div
      className="min-w-[220px] bg-light-secondary dark:bg-dark-secondary border border-blue-primary/20 hover:border-blue-primary/60 transition-all rounded-xl p-4 group shrink-0"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-full bg-blue-primary/10 flex items-center justify-center text-xl">
          {price.icon}
        </div>
        <h3 className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wide">
          {price.name}
        </h3>
      </div>

      <div className="text-2xl font-black text-slate-800 dark:text-white mb-1">
        ${price.currentPrice.toFixed(2)}
        <span className="text-xs font-light text-grey-medium ml-1">
          {price.unit}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span
          className={clsx(
            "text-sm font-bold",
            isPositive ? "text-green-500" : "text-red-500"
          )}
        >
          {isPositive ? "▲" : "▼"}
        </span>
        <span
          className={clsx(
            "text-sm font-medium",
            isPositive ? "text-green-500" : "text-red-500"
          )}
        >
          {isPositive ? "+" : ""}${Math.abs(price.change).toFixed(2)}
        </span>
        <span
          className={clsx(
            "text-sm font-medium",
            isPositive ? "text-green-500" : "text-red-500"
          )}
        >
          ({isPositive ? "+" : ""}
          {price.percentChange.toFixed(2)}%)
        </span>
      </div>
    </div>
  );
};

const MarketTicker = () => {
  const { data, isLoading, error, refetch } = useMarketTicker();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    if (isLoading || error || !data || !scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const totalWidth = container.scrollWidth / 2; // Halfway point (one full set)
    const scrollSpeed = 1; // Pixels per frame

    const animateScroll = () => {
      if (!container) return;

      scrollPositionRef.current += scrollSpeed;
      
      // Reset to start when reaching halfway (seamless loop)
      if (scrollPositionRef.current >= totalWidth) {
        scrollPositionRef.current = 0;
      }
      
      container.scrollLeft = scrollPositionRef.current;
      animationFrameRef.current = requestAnimationFrame(animateScroll);
    };

    // Start animation
    animationFrameRef.current = requestAnimationFrame(animateScroll);

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isLoading, error, data]);

  if (isLoading) {
    return (
      <div className="w-full">
        <MarketTickerSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full bg-light-secondary dark:bg-dark-secondary rounded-xl border border-blue-primary/30 p-6">
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <p className="text-grey-medium font-medium">
            Failed to load market prices
          </p>
          <button
            onClick={() => refetch()}
            className="px-4 py-2 bg-blue-primary text-white rounded-lg text-sm font-medium hover:bg-blue-primary/90 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Duplicate products array for seamless loop
  const allProducts = [...(data || []), ...(data || [])];

  return (
    <div className="w-full">
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto carousel-hide-scroll pb-4"
      >
        {allProducts.map((price, index) => (
          <PriceCard key={`${price.id}-${index}`} price={price} />
        ))}
      </div>

      {/* Hide scrollbar styles */}
      <style>{`
        .carousel-hide-scroll::-webkit-scrollbar {
          display: none;
        }
        .carousel-hide-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default MarketTicker;
