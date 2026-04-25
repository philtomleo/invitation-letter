import { weddingInfo } from '../data/wedding';

export function Footer() {
  return (
    <footer className="px-6 pb-12 pt-8 md:px-10">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/70 bg-white/75 px-6 py-8 shadow-soft backdrop-blur md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm tracking-[0.35em] text-forest">WITH LOVE</p>
            <p className="mt-3 font-serif text-4xl text-ink">
              {weddingInfo.groom} & {weddingInfo.bride}
            </p>
            <p className="mt-3 leading-8 text-ink/70">
              謝謝你看到這裡，期待在 {weddingInfo.dateLabel} 與你相見。
            </p>
          </div>
          <div className="text-sm leading-7 text-ink/65">
            <p>{weddingInfo.timeLabel}</p>
            <p>{weddingInfo.venue}</p>
            <p>{weddingInfo.address}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
