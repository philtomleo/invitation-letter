import { galleryPlaceholders } from '../data/wedding';

export function Gallery() {
  return (
    <section className="px-6 py-16 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="text-sm tracking-[0.35em] text-forest">PHOTO STORY</p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">之後可以直接替換成你們的照片</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {galleryPlaceholders.map((item, index) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-soft"
            >
              <div
                className={[
                  'aspect-[4/5] p-6',
                  index === 0 ? 'bg-[linear-gradient(160deg,#efe6dc,#f8f4ee)]' : '',
                  index === 1 ? 'bg-[linear-gradient(160deg,#dce7df,#f6f2ec)]' : '',
                  index === 2 ? 'bg-[linear-gradient(160deg,#efe9df,#e6ede7)]' : '',
                ].join(' ')}
              >
                <div className="flex h-full items-end rounded-[1.5rem] border border-white/60 p-5">
                  <div className="rounded-full bg-white/80 px-4 py-2 text-xs tracking-[0.28em] text-forest">
                    PLACEHOLDER 0{index + 1}
                  </div>
                </div>
              </div>
              <div className="space-y-2 p-6">
                <h3 className="font-serif text-3xl text-ink">{item.title}</h3>
                <p className="leading-7 text-ink/70">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
