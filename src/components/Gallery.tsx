import type { ReactNode } from 'react';
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
          <p className="text-sm tracking-[0.35em] text-[#7a2234]">PHOTO STORY</p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">把我們喜歡的片刻放進來</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <article className="overflow-hidden rounded-[2rem] border border-white/70 bg-[#fff8f3]/84 shadow-soft">
            <div className="relative">
              <div className="aspect-[4/5] p-4 transition-all duration-500 md:aspect-[16/10] md:p-5">
                <div className="relative h-full overflow-hidden rounded-[1.5rem] border border-white/60 bg-[#f4e3d7]">
                  <img
                    alt={activeItem.title}
                    className="h-full w-full object-cover"
                    src={activeItem.image}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#2f1e19]/55 via-[#2f1e19]/10 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full bg-white/78 px-4 py-2 text-xs tracking-[0.28em] text-[#7a2234] backdrop-blur">
                    PHOTO {String(activeIndex + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 md:px-4">
                <div className="pointer-events-auto">
                  <CarouselButton label="上一張" onClick={goToPrevious}>
                    ←
                  </CarouselButton>
                </div>
                <div className="pointer-events-auto">
                  <CarouselButton label="下一張" onClick={goToNext}>
                    →
                  </CarouselButton>
                </div>
              </div>
            </div>
            <div className="space-y-3 p-6 md:p-8">
              <p className="text-sm tracking-[0.28em] text-[#7a2234]/70">
                {String(activeIndex + 1).padStart(2, '0')} / {String(galleryPhotos.length).padStart(2, '0')}
              </p>
              <h3 className="font-serif text-3xl text-ink md:text-4xl">{activeItem.title}</h3>
              <p className="max-w-xl leading-8 text-ink/70">{activeItem.description}</p>
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">
            {galleryPhotos.map((item, index) => (
              <button
                key={item.title}
                className={[
                  'overflow-hidden rounded-[1.7rem] border bg-[#fff8f3]/78 text-left shadow-soft transition duration-300',
                  activeIndex === index
                    ? 'border-[#7a2234]/40 ring-1 ring-[#7a2234]/20'
                    : 'border-white/70 hover:border-[#7a2234]/20',
                ].join(' ')}
                type="button"
                onClick={() => setActiveIndex(index)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img alt={item.title} className="h-full w-full object-cover" src={item.image} />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#2f1e19]/50 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full bg-white/78 px-3 py-1 text-[11px] tracking-[0.25em] text-[#7a2234] backdrop-blur">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                <div className="space-y-1 p-4">
                  <h3 className="font-serif text-2xl text-ink">{item.title}</h3>
                  <p className="line-clamp-2 text-sm leading-6 text-ink/65">{item.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CarouselButton({
  children,
  label,
  onClick,
}: {
  children: ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      aria-label={label}
      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#7a2234]/15 bg-[#fff8f3]/92 text-xl text-[#7a2234] shadow-soft backdrop-blur transition hover:border-[#7a2234]/35 hover:bg-white"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
