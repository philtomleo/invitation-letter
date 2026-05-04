import photo0135 from '../images/webp/260302_0135.webp';
import photo0360 from '../images/webp/260302_0360.webp';
import { weddingInfo } from '../data/wedding';

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-8 md:px-10 md:pb-24 md:pt-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6 text-center md:text-left">
            <p className="inline-flex rounded-full border border-[#7a2234]/20 bg-[#fff8f2]/90 px-4 py-2 text-lg tracking-[0.35em] text-[#7a2234]">
              WEDDING INVITATION
            </p>
            <div className="space-y-4">
              <h1 className="font-serif text-5xl leading-tight text-ink md:text-7xl">
                {weddingInfo.title}
              </h1>
              <div className="flex flex-wrap items-end justify-center gap-x-8 gap-y-3 text-[#7a2234] md:justify-start">
                <div className="space-y-0">
                  <p className="text-2xl tracking-[0.18em] md:text-3xl">{weddingInfo.groom}</p>
                  <p className="-mt-2 text-base tracking-[0.32em] text-ink/50">GROOM</p>
                </div>
                <div className="space-y-0">
                  <p className="text-2xl tracking-[0.18em] md:text-3xl">{weddingInfo.bride}</p>
                  <p className="-mt-2 text-base tracking-[0.32em] text-ink/50">BRIDE</p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-[1.8rem] border border-white/70 shadow-soft">
              <img
                alt={`${weddingInfo.groom} 與 ${weddingInfo.bride} 的婚紗照`}
                className="block h-auto w-full"
                decoding="async"
                fetchPriority="high"
                src={photo0135}
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <InfoCard label="訂婚日期" value={weddingInfo.dateLabel} detail={weddingInfo.timeLabel} />
              <InfoCard label="宴客地點" value={weddingInfo.venue} detail={weddingInfo.address} />
            </div>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:items-start md:justify-start">
              <a
                className="inline-flex items-center justify-center rounded-full bg-[#7a2234] px-6 py-3 text-lg font-medium tracking-[0.2em] text-white transition hover:bg-[#651a2a]"
                href="#rsvp"
              >
                立即回覆出席
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-[#7a2234]/15 bg-[#fff8f2]/90 px-6 py-3 text-lg font-medium tracking-[0.15em] text-[#7a2234] transition hover:border-[#7a2234]/35 hover:bg-white"
                href={weddingInfo.mapUrl}
                target="_blank"
                rel="noreferrer"
              >
                查看地圖
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-10 hidden h-48 w-48 rounded-full bg-[#dcb8b2]/80 blur-3xl md:block" />
            <div className="absolute -bottom-8 right-0 hidden h-52 w-52 rounded-full bg-[#b97a84]/35 blur-3xl md:block" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[#fff8f3]/82 shadow-soft backdrop-blur">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#ead4c9]">
                <img
                  alt={`${weddingInfo.groom} 與 ${weddingInfo.bride} 的婚紗照`}
                  className="h-full w-full object-contain"
                  decoding="async"
                  loading="lazy"
                  src={photo0360}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,248,243,0.16),rgba(67,34,28,0.12))]" />
                <div className="absolute inset-4 flex h-[calc(100%-2rem)] flex-col justify-between rounded-[1.35rem] border border-white/55 p-5 text-ink md:inset-6 md:h-[calc(100%-3rem)] md:p-6">
                  <div className="space-y-4 md:space-y-3">
                    <p className="text-base tracking-[0.32em] text-[#7a2234]/80 md:text-lg md:tracking-[0.35em]">SAVE THE DATE</p>
                    <p className="font-serif text-[2.15rem] leading-[1.1] md:text-5xl md:leading-none">2026 / 09 / 19</p>
                    <p className="text-base tracking-[0.22em] text-[#7a2234]/80 md:text-lg md:tracking-[0.25em]">SATURDAY</p>
                  </div>
                  <div className="mb-1 self-end text-right md:-mr-2 md:mb-3">
                    <p className="font-serif text-[2rem] tracking-[0.08em] text-[#412a24] drop-shadow-[0_1px_1px_rgba(255,248,243,0.45)] md:text-[2.6rem]">
                      怡翔&培紹
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-[1.5rem] border border-white/70 bg-white/80 p-5 shadow-soft backdrop-blur">
      <p className="mb-3 text-lg tracking-[0.26em] text-[#7a2234]/75">{label}</p>
      <p className="text-xl font-medium leading-8 text-ink">{value}</p>
      <p className="text-xl leading-7 text-ink/70">{detail}</p>
    </div>
  );
}
