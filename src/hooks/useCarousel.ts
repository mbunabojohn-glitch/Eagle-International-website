import { useEffect, useCallback } from 'react'
import { useCarouselStore } from '../store/useCarouselStore'
import { CAROUSEL_INTERVAL } from '../utils/constants'

export const useCarousel = () => {
  const {
    currentSlide,
    slides,
    isAutoPlaying,
    setCurrentSlide,
    nextSlide,
    previousSlide,
    toggleAutoPlay,
  } = useCarouselStore()

  const goToSlide = useCallback(
    (index: number) => {
      if (index >= 0 && index < slides.length) {
        setCurrentSlide(index)
      }
    },
    [slides.length, setCurrentSlide]
  )

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, CAROUSEL_INTERVAL)

    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  return {
    currentSlide,
    slides,
    isAutoPlaying,
    goToSlide,
    nextSlide,
    previousSlide,
    toggleAutoPlay,
    totalSlides: slides.length,
  }
}