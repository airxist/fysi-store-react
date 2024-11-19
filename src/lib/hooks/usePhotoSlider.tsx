import { useEffect, useState } from "react";

export const usePhotoSlider = (
  numberOfSlides: number,
  duration: number = 8000
) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let intervaId: any;

    const nextSlide = () => {
      if (activeIndex >= numberOfSlides) {
        setActiveIndex(0);
        return;
      }
      setActiveIndex((prev) => ++prev);
    };

    intervaId = setInterval(nextSlide, duration);
    return () => clearInterval(intervaId);
  }, [activeIndex]);

  return {
    activeIndex,
  };
};
