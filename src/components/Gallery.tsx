import { useEffect, useState } from 'react';
import { galleryPhotos } from '../data/wedding';

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = galleryPhotos[activeIndex];

  function goToPrevious() {
    setActiveIndex((current) => (current === 0 ? galleryPhotos.length - 1 : current - 1));
  }

  function goToNext() {
    setActiveIndex((current) => (current === galleryPhotos.length - 1 ? 0 : current + 1));
  }

  useEffect(() => {
    const timer = window.setInterval(() => {
      goToNext();
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="px-6 py-16 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center md:text-left">
          <p className="text-lg tracking-[0.35em] text-[#7a2234]">PHOTO STORY</p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">把我們喜歡的片刻放進來</h2>
        </div>

        <div>
          <article className="overflow-hidden rounded-[2rem] border border-white/70 bg-[#fff8f3]/84 shadow-soft">
            <div className="relative">
              <div className="transition-all duration-500">
                <div className="relative overflow-hidden">
                  <img
                    alt={activeItem.title}
                    className="block h-auto w-full"
                    decoding="async"
                    loading="lazy"
                    src={activeItem.image}
                  />
                </div>
              </div>
              <CarouselButton className="left-3 top-[calc(100%-1rem)] -translate-y-1/2 md:left-4 md:top-[calc(100%-1.5rem)]" direction="left" label="上一張" onClick={goToPrevious} />
              <CarouselButton className="right-3 top-[calc(100%-1rem)] -translate-y-1/2 md:right-4 md:top-[calc(100%-1.5rem)]" direction="right" label="下一張" onClick={goToNext} />
            </div>
            <div className="space-y-3 p-6 md:p-8">
              <p className="text-lg tracking-[0.28em] text-[#7a2234]/70">
                {String(activeIndex + 1).padStart(2, '0')} / {String(galleryPhotos.length).padStart(2, '0')}
              </p>
              <h3 className="font-serif text-3xl text-ink md:text-4xl">{activeItem.title}</h3>
              <p className="max-w-xl leading-8 text-ink/70">{activeItem.description}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function CarouselButton({
  className,
  direction,
  label,
  onClick,
}: {
  className: string;
  direction: 'left' | 'right';
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      aria-label={label}
      className={`absolute z-10 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#7a2234]/15 bg-[#fff8f3]/92 text-[#7a2234] shadow-soft backdrop-blur transition hover:border-[#7a2234]/35 hover:bg-white md:h-12 md:w-12 ${className}`}
      type="button"
      onClick={onClick}
    >
      <svg
        aria-hidden="true"
        className="h-3.5 w-3.5 md:h-5 md:w-5"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={direction === 'left' ? 'M14.5 6 8.5 12l6 6' : 'M9.5 6 15.5 12l-6 6'}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.2"
        />
      </svg>
    </button>
  );
}
