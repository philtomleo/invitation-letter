import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { galleryPlaceholders } from '../data/wedding';

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = galleryPlaceholders[activeIndex];

  function goToPrevious() {
    setActiveIndex((current) => (current === 0 ? galleryPlaceholders.length - 1 : current - 1));
  }

  function goToNext() {
    setActiveIndex((current) => (current === galleryPlaceholders.length - 1 ? 0 : current + 1));
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
          <p className="text-sm tracking-[0.35em] text-forest">PHOTO STORY</p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">之後可以直接替換成你們的照片</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <article className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-soft">
            <div className="relative">
              <div
                className={[
                  'aspect-[4/5] p-6 transition-all duration-500 md:aspect-[16/10]',
                  activeIndex === 0 ? 'bg-[linear-gradient(160deg,#efe6dc,#f8f4ee)]' : '',
                  activeIndex === 1 ? 'bg-[linear-gradient(160deg,#dce7df,#f6f2ec)]' : '',
                  activeIndex === 2 ? 'bg-[linear-gradient(160deg,#efe9df,#e6ede7)]' : '',
                ].join(' ')}
              >
                <div className="flex h-full items-end rounded-[1.5rem] border border-white/60 p-5">
                  <div className="rounded-full bg-white/80 px-4 py-2 text-xs tracking-[0.28em] text-forest">
                    PLACEHOLDER 0{activeIndex + 1}
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
              <p className="text-sm tracking-[0.28em] text-forest/70">
                {String(activeIndex + 1).padStart(2, '0')} / {String(galleryPlaceholders.length).padStart(2, '0')}
              </p>
              <h3 className="font-serif text-3xl text-ink md:text-4xl">{activeItem.title}</h3>
              <p className="max-w-xl leading-8 text-ink/70">{activeItem.description}</p>
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">
            {galleryPlaceholders.map((item, index) => (
              <button
                key={item.title}
                className={[
                  'overflow-hidden rounded-[1.7rem] border bg-white/75 text-left shadow-soft transition duration-300',
                  activeIndex === index
                    ? 'border-forest/40 ring-1 ring-forest/20'
                    : 'border-white/70 hover:border-forest/20',
                ].join(' ')}
                type="button"
                onClick={() => setActiveIndex(index)}
              >
                <div
                  className={[
                    'aspect-[4/3] p-4',
                    index === 0 ? 'bg-[linear-gradient(160deg,#efe6dc,#f8f4ee)]' : '',
                    index === 1 ? 'bg-[linear-gradient(160deg,#dce7df,#f6f2ec)]' : '',
                    index === 2 ? 'bg-[linear-gradient(160deg,#efe9df,#e6ede7)]' : '',
                  ].join(' ')}
                >
                  <div className="flex h-full items-end rounded-[1.2rem] border border-white/60 p-4">
                    <div className="rounded-full bg-white/80 px-3 py-1 text-[11px] tracking-[0.25em] text-forest">
                      0{index + 1}
                    </div>
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
      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-forest/20 bg-white/88 text-xl text-forest shadow-soft backdrop-blur transition hover:border-forest/40 hover:bg-white"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
