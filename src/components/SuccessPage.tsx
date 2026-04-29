import { Footer } from './Footer';
import { weddingInfo } from '../data/wedding';

export function SuccessPage({ attendance }: { attendance: 'attending' | 'absent' }) {
  const isAttending = attendance === 'attending';
  const wrapperClassName = isAttending
    ? 'min-h-screen bg-[linear-gradient(180deg,#f7efe8_0%,#f3e4da_45%,#eed9cf_100%)] px-6 py-12 text-ink md:px-10'
    : 'min-h-screen bg-[linear-gradient(180deg,#f7efe8_0%,#f3e4da_45%,#eed9cf_100%)] px-6 py-12 text-ink md:px-10 flex items-center';

  return (
    <div className={wrapperClassName}>
      <div className="mx-auto max-w-4xl">
        <section className="rounded-[2.2rem] border border-white/70 bg-white/80 px-6 py-10 text-center shadow-soft backdrop-blur md:px-10 md:py-14">
          <p className="text-sm tracking-[0.35em] text-[#7a2234]">RSVP RECEIVED</p>
          <h1 className="mt-4 font-serif text-4xl text-ink md:text-6xl">表單已成功送出，謝謝您的回覆！</h1>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-ink/70">
            {isAttending
              ? '我們很期待在婚禮當天與您相見，謝謝您和我們一起見證幸福時刻。'
              : '很可惜您無法出席，但我們收到您的祝福了！'}
          </p>

          {isAttending ? (
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-full bg-[#7a2234] px-6 py-3 text-sm font-medium tracking-[0.15em] text-white transition hover:bg-[#651a2a]"
                href={buildCalendarUrl()}
                rel="noreferrer"
                target="_blank"
              >
                加入行事曆
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-[#7a2234]/15 bg-[#fff8f2]/90 px-6 py-3 text-sm font-medium tracking-[0.15em] text-[#7a2234] transition hover:border-[#7a2234]/35 hover:bg-white"
                href={weddingInfo.mapUrl}
                rel="noreferrer"
                target="_blank"
              >
                查看地圖
              </a>
            </div>
          ) : null}
        </section>

        {isAttending ? <Footer attendance={attendance} /> : null}
      </div>
    </div>
  );
}

function buildCalendarUrl() {
  const start = '20260919T040000Z';
  const end = '20260919T070000Z';
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `${weddingInfo.groom} & ${weddingInfo.bride} 婚宴`,
    dates: `${start}/${end}`,
    details: `誠摯邀請您參加 ${weddingInfo.groom} 與 ${weddingInfo.bride} 的婚宴。`,
    location: `${weddingInfo.venue} ${weddingInfo.address}`,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
