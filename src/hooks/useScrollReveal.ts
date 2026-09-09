import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  /** Jika true, animasi hanya terjadi sekali saat elemen masuk viewport */
  once?: boolean;
}

/**
 * Hook yang menggunakan IntersectionObserver untuk mendeteksi
 * apakah elemen sudah masuk ke dalam viewport.
 */
export function useScrollReveal<T extends Element>({
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px',
  once = true,
}: UseScrollRevealOptions = {}) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}
