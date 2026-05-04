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
        <div className="rounded-[2rem] border border-white/70 bg-[#fff8f3]/84 p-6 shadow-soft backdrop-blur md:p-8">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="text-lg tracking-[0.35em] text-[#7a2234]">SEPTEMBER 2026</p>
              <h2 className="mt-3 font-serif text-4xl text-ink">把 9/19 留給我們</h2>
            </div>
            <div className="rounded-full bg-[#ead1ca] px-4 py-2 text-lg tracking-[0.25em] text-[#7a2234]">
              SAT
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2 text-center">
            {weekLabels.map((label) => (
              <div key={label} className="pb-2 text-xs tracking-[0.25em] text-[#7a2234]/60">
                {label}
              </div>
            ))}
            {calendarCells.map((cell, index) => (
              <div
                key={`${cell.day ?? 'blank'}-${index}`}
                className={[
                  'flex aspect-square items-center justify-center rounded-2xl text-lg',
                  cell.day ? 'bg-[#f7ece4] text-ink' : 'bg-transparent',
                  cell.isEventDay ? 'relative bg-transparent shadow-none' : '',
                ].join(' ')}
              >
                {cell.isEventDay ? (
                  <div className="relative flex h-full w-full items-center justify-center">
                    <svg
                      aria-hidden="true"
                      className="absolute inset-x-[-24%] inset-y-[-18%] h-[136%] w-[152%] rotate-[3deg]"
                      viewBox="0 0 100 100"
                    >
                      <path
                        d="M50 84
                           C45 80, 14 61, 14 38
                           C14 26, 25 19, 37 19
                           C38.2 19, 43 21.5, 45.2 25
                           Q49 29, 50 33
                           Q51 29, 54.8 25
                           C57 21.5, 61.8 19, 65.8 19
                           C75 19, 86 26, 86 38
                           C86 61, 55 80, 50 84 Z"
                        fill="rgba(210, 24, 36, 0.18)"
                      />
                    </svg>
                    <span className="relative z-10 text-lg font-normal text-ink">{cell.day}</span>
                  </div>
                ) : (
                  cell.day
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,249,244,0.92),rgba(226,193,184,0.82))] p-6 shadow-soft backdrop-blur md:p-8">
          <p className="text-lg tracking-[0.35em] text-[#7a2234]">COUNTDOWN</p>
          <h2 className="mt-3 font-serif text-4xl text-ink">幸福倒數中</h2>
          <p className="mt-4 max-w-lg text-lg leading-8 text-ink/70">
            距離 2026 年 9 月 19 日午宴 12:00 開桌，還有一點點時間把這天好好記在心裡。
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <CountdownCard label="Days" value={countdown.days} />
            <CountdownCard label="Hours" value={countdown.hours} />
            <CountdownCard label="Minutes" value={countdown.minutes} />
            <CountdownCard label="Seconds" value={countdown.seconds} />
          </div>
        </div>
      </div>
    </section>
  );
}

function CountdownCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-[1.6rem] border border-white/70 bg-[#fff8f3]/88 p-5 text-center shadow-soft">
      <p className="font-serif text-4xl text-ink md:text-5xl">{String(value).padStart(2, '0')}</p>
      <p className="mt-2 text-lg tracking-[0.3em] text-[#7a2234]/70">{label}</p>
    </div>
  );
}
