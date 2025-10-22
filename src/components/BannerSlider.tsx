import { useEffect, useRef, useState } from 'react';

const banners = [
  '/Bannercarnes-monumental.webp',
  '/Bannercarnes-monumental-minoristas.webp',
];

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % banners.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + banners.length) % banners.length);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      nextSlide();
    }, 4000);
    return () => {
  if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  return (
  <div className="relative w-full mt-4 mb-8 overflow-hidden shadow-lg">
      {banners.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt={`Banner ${idx + 1}`}
          className={`w-full h-[28vw] min-h-[140px] max-h-[320px] object-cover transition-opacity duration-700 ${idx === current ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'}`}
          style={{ zIndex: idx === current ? 1 : 0 }}
        />
      ))}
      {/* Controles manuales */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-md"
        aria-label="Anterior"
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-md"
        aria-label="Siguiente"
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
      </button>
      {/* Indicadores */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${idx === current ? 'bg-primary' : 'bg-white border border-primary'}`}
            aria-label={`Ir al banner ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
