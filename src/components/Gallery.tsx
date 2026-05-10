import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Fade from 'embla-carousel-fade';
import { useInvitation } from '../context/InvitationContext';

export function Gallery() {
  const invitation = useInvitation();
  const galleryPhotos = invitation.gallery.photos;
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      duration: 40,
    },
    [Fade()],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    galleryPhotos.forEach((photo) => {
      const image = new Image();
      image.decoding = 'async';
      image.src = photo.image;
    });
  }, [emblaApi, galleryPhotos]);

  useEffect(() => {
    if (!emblaApi || galleryPhotos.length <= 1) return;

    const timer = window.setTimeout(() => {
      emblaApi.scrollNext();
    }, 8000);

    return () => window.clearTimeout(timer);
  }, [activeIndex, emblaApi, galleryPhotos.length]);

  const activeItem = galleryPhotos[activeIndex] ?? galleryPhotos[0];

  return (
    <section className="px-6 py-16 desktop:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center desktop:text-left">
          <p className="text-xl tracking-[0.35em] text-[#7a2234]">{invitation.gallery.eyebrow}</p>
          <h2 className="mt-3 font-serif text-4xl text-ink desktop:text-5xl">{invitation.gallery.title}</h2>
          {invitation.gallery.intro ? (
            <p className="mt-4 max-w-3xl text-xl leading-8 text-ink/70 desktop:mx-0">{invitation.gallery.intro}</p>
          ) : null}
        </div>

        <div>
          <article className="overflow-hidden rounded-[2rem] border border-white/70 bg-[#fff8f3]/84 shadow-soft">
            <div className="relative">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {galleryPhotos.map((photo) => (
                    <div className="min-w-0 flex-[0_0_100%]" key={photo.image}>
                      <div className="relative overflow-hidden bg-[#f6ebe4] desktop:h-[28rem] wide:h-[32rem]">
                        <img
                          alt={photo.title}
                          className="block h-auto w-full desktop:h-full desktop:object-contain"
                          decoding="async"
                          loading="eager"
                          src={photo.image}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <CarouselButton
                className="left-3 top-[calc(100%-1rem)] -translate-y-1/2 desktop:left-4 desktop:top-[calc(100%-1.5rem)]"
                direction="left"
                label="上一張"
                onClick={() => emblaApi?.scrollPrev()}
              />
              <CarouselButton
                className="right-3 top-[calc(100%-1rem)] -translate-y-1/2 desktop:right-4 desktop:top-[calc(100%-1.5rem)]"
                direction="right"
                label="下一張"
                onClick={() => emblaApi?.scrollNext()}
              />
            </div>
            <div className="space-y-3 p-6 desktop:p-8">
              <p className="text-xl tracking-[0.28em] text-[#7a2234]/70">
                {String(activeIndex + 1).padStart(2, '0')} / {String(galleryPhotos.length).padStart(2, '0')}
              </p>
              <h3 className="font-serif text-3xl text-ink desktop:text-4xl">{activeItem.title}</h3>
              <p className="max-w-xl text-xl leading-8 text-ink/70">{activeItem.description}</p>
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
      className={`absolute z-10 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#7a2234]/15 bg-[#fff8f3]/92 text-[#7a2234] shadow-soft backdrop-blur transition hover:border-[#7a2234]/35 hover:bg-white desktop:h-12 desktop:w-12 ${className}`}
      type="button"
      onClick={onClick}
    >
      <svg
        aria-hidden="true"
        className="h-3.5 w-3.5 desktop:h-5 desktop:w-5"
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
