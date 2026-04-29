import photo0360 from '../images/260302_0360.JPG';
import { weddingInfo } from '../data/wedding';

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-8 md:px-10 md:pb-24 md:pt-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-[#7a2234]/20 bg-[#fff8f2]/90 px-4 py-2 text-xs tracking-[0.35em] text-[#7a2234]">
              WEDDING INVITATION
            </p>
            <div className="space-y-4">
              <h1 className="font-serif text-5xl leading-tight text-ink md:text-7xl">
                {weddingInfo.title}
              </h1>
              <p className="text-lg tracking-[0.25em] text-[#7a2234] md:text-xl">
                {weddingInfo.groom} &nbsp;·&nbsp; {weddingInfo.bride}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <InfoCard label="訂婚日期" value={weddingInfo.dateLabel} detail={weddingInfo.timeLabel} />
              <InfoCard label="宴客地點" value={weddingInfo.venue} detail={weddingInfo.address} />
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-full bg-[#7a2234] px-6 py-3 text-sm font-medium tracking-[0.2em] text-white transition hover:bg-[#651a2a]"
                href="#rsvp"
              >
                立即回覆出席
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-[#7a2234]/15 bg-[#fff8f2]/90 px-6 py-3 text-sm font-medium tracking-[0.15em] text-[#7a2234] transition hover:border-[#7a2234]/35 hover:bg-white"
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
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[#fff8f3]/82 p-4 shadow-soft backdrop-blur">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-[#ead4c9]">
                <img
                  alt={`${weddingInfo.groom} 與 ${weddingInfo.bride} 的婚紗照`}
                  className="h-full w-full object-contain"
                  src={photo0360}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,248,243,0.16),rgba(67,34,28,0.12))]" />
                <div className="absolute inset-6 flex h-[calc(100%-3rem)] flex-col justify-between rounded-[1.35rem] border border-white/55 p-6 text-ink">
                  <div className="space-y-3">
                    <p className="text-sm tracking-[0.35em] text-[#7a2234]/80">SAVE THE DATE</p>
                    <p className="font-serif text-4xl leading-none md:text-5xl">09.19</p>
                    <p className="text-sm tracking-[0.25em] text-[#7a2234]/80">SATURDAY</p>
                  </div>
                  <div className="space-y-2 text-right">
                    <p className="font-serif text-3xl text-[#412a24] drop-shadow-[0_1px_1px_rgba(255,248,243,0.4)]">
                      {weddingInfo.groom}
                    </p>
                    <p className="font-serif text-3xl text-[#412a24] drop-shadow-[0_1px_1px_rgba(255,248,243,0.4)]">
                      &
                    </p>
                    <p className="font-serif text-3xl text-[#412a24] drop-shadow-[0_1px_1px_rgba(255,248,243,0.4)]">
                      {weddingInfo.bride}
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
      <p className="mb-3 text-xs tracking-[0.3em] text-[#7a2234]/70">{label}</p>
      <p className="mb-2 text-lg font-medium text-ink">{value}</p>
      <p className="text-sm leading-6 text-ink/70">{detail}</p>
    </div>
  );
}
