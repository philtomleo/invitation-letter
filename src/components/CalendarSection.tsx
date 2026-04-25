import { useEffect, useState } from 'react';
import { buildSeptemberCalendar, getCountdownParts } from '../lib/date';

const weekLabels = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const calendarCells = buildSeptemberCalendar();

export function CalendarSection() {
  const [countdown, setCountdown] = useState(getCountdownParts());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getCountdownParts());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="px-6 py-16 md:px-10">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-soft backdrop-blur md:p-8">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="text-sm tracking-[0.35em] text-forest">SEPTEMBER 2026</p>
              <h2 className="mt-3 font-serif text-4xl text-ink">把 9/19 留給我們</h2>
            </div>
            <div className="rounded-full bg-blush px-4 py-2 text-sm tracking-[0.25em] text-forest">
              SAT
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2 text-center">
            {weekLabels.map((label) => (
              <div key={label} className="pb-2 text-xs tracking-[0.25em] text-forest/60">
                {label}
              </div>
            ))}
            {calendarCells.map((cell, index) => (
              <div
                key={`${cell.day ?? 'blank'}-${index}`}
                className={[
                  'flex aspect-square items-center justify-center rounded-2xl text-sm',
                  cell.day ? 'bg-cream text-ink' : 'bg-transparent',
                  cell.isEventDay ? 'border border-forest bg-forest text-white shadow-soft' : '',
                ].join(' ')}
              >
                {cell.day}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.88),rgba(243,229,222,0.75))] p-6 shadow-soft backdrop-blur md:p-8">
          <p className="text-sm tracking-[0.35em] text-forest">COUNTDOWN</p>
          <h2 className="mt-3 font-serif text-4xl text-ink">幸福倒數中</h2>
          <p className="mt-4 max-w-lg leading-8 text-ink/70">
            距離 2026 年 9 月 19 日午宴 12:00 開桌，還有一點點時間把這天好好記在心裡。
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <CountdownCard label="Days" value={countdown.days} />
            <CountdownCard label="Hours" value={countdown.hours} />
            <CountdownCard label="Minutes" value={countdown.minutes} />
            <CountdownCard label="Seconds" value={countdown.seconds} />
          </div>

          <p className="mt-8 text-sm leading-7 text-ink/60">
            如果目前時間已超過宴客時間，倒數會自動停在 0，之後也可以改成婚禮回顧版本。
          </p>
        </div>
      </div>
    </section>
  );
}

function CountdownCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-[1.6rem] border border-white/70 bg-white/80 p-5 text-center shadow-soft">
      <p className="font-serif text-4xl text-ink md:text-5xl">{String(value).padStart(2, '0')}</p>
      <p className="mt-2 text-xs tracking-[0.3em] text-forest/70">{label}</p>
    </div>
  );
}
