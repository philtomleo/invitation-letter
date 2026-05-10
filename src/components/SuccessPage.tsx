import { useInvitation } from '../context/InvitationContext';

export function SuccessPage({ attendance }: { attendance: 'attending' | 'absent' }) {
  const invitation = useInvitation();
  const isAttending = attendance === 'attending';

  const calendarUrl = buildCalendarUrl(invitation);

  return (
    <div className="flex min-h-screen items-center bg-[linear-gradient(180deg,#f7efe8_0%,#f3e4da_45%,#eed9cf_100%)] px-6 py-12 text-ink desktop:px-10">
      <div className="mx-auto max-w-4xl">
        <section className="rounded-[2.2rem] border border-white/70 bg-white/80 px-6 py-10 text-center shadow-soft backdrop-blur desktop:px-10 desktop:py-14">
          <p className="text-xl tracking-[0.35em] text-[#7a2234]">{invitation.success.eyebrow}</p>
          <h1 className="mt-4 font-serif text-4xl text-ink desktop:text-5xl">{invitation.success.title}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-xl leading-8 text-ink/70">
            {isAttending ? invitation.success.attendingMessage : invitation.success.absentMessage}
          </p>

          {isAttending ? (
            <div className="mt-8 flex flex-col items-center justify-center gap-3 desktop:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-full bg-[#7a2234] px-6 py-3 text-xl font-medium tracking-[0.15em] text-white transition hover:bg-[#651a2a]"
                href={calendarUrl}
                rel="noreferrer"
                target="_blank"
              >
                加入行事曆
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-[#7a2234]/15 bg-[#fff8f2]/90 px-6 py-3 text-xl font-medium tracking-[0.15em] text-[#7a2234] transition hover:border-[#7a2234]/35 hover:bg-white"
                href={invitation.event.mapUrl}
                rel="noreferrer"
                target="_blank"
              >
                查看地圖
              </a>
            </div>
          ) : null}
        </section>
      </div>
    </div>
  );
}

function buildCalendarUrl(invitation: ReturnType<typeof useInvitation>) {
  const eventDate = new Date(invitation.event.eventDate);
  const start = new Date(eventDate);
  const end = new Date(eventDate.getTime() + 3 * 60 * 60 * 1000);

  const toGoogleTime = (value: Date) => {
    const iso = value.toISOString().replace(/[-:]/g, '');
    return `${iso.slice(0, 15)}Z`;
  };

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `${invitation.couple.groom} & ${invitation.couple.bride} 婚宴`,
    dates: `${toGoogleTime(start)}/${toGoogleTime(end)}`,
    details: `誠摯邀請您參加 ${invitation.couple.groom} 與 ${invitation.couple.bride} 的婚宴。`,
    location: `${invitation.event.venue} ${invitation.event.address}`,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
