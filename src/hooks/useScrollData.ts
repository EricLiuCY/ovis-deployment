import { useEffect, useState } from 'react';

interface Threshold {
    scrolledPast: number;
    scrollingDown: number;
}

export const useScrollData = (inputThreshold: Threshold) => {
  const [hasScrolledPast, setHasScrolledPast] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  const scrolledPastThreshold =
    (inputThreshold.scrolledPast
      ? inputThreshold.scrolledPast
      : inputThreshold) || 100;
  const scrollingDownThreshold =
    (inputThreshold.scrollingDown
      ? inputThreshold.scrollingDown
      : inputThreshold) || 100;

  useEffect(() => {
    let lastPosition = 0;

    const handleScroll = (e: any) => {
      let scrollPos = window.pageYOffset;

      // checks to see if user has scrolled past the threshold
      if (scrollPos >= scrolledPastThreshold) {
        setHasScrolledPast(true);
      } else {
        setHasScrolledPast(false);
      }

      // checks to see if user is scrolling up or down
      if (
        scrollPos > lastPosition &&
        e.target.scrollingElement.scrollTop > scrollingDownThreshold
      ) {
        setIsScrollingDown(true);
      } else if (scrollPos < lastPosition) {
        setIsScrollingDown(false);
      }
      lastPosition = scrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolledPastThreshold, scrollingDownThreshold]);

  return { hasScrolledPast, isScrollingDown };
};