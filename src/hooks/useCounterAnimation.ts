import { useEffect, useState } from "react";

interface UseCounterAnimationOptions {
  start?: number;
  end: number;
  duration?: number;
  isVisible: boolean;
}

export const useCounterAnimation = ({
  start = 0,
  end,
  duration = 2000,
  isVisible,
}: UseCounterAnimationOptions) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      setCount(Math.floor(progress * (end - start) + start));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [start, end, duration, isVisible]);

  return count;
};
