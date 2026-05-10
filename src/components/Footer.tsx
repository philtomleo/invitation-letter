import { useInvitation } from '../context/InvitationContext';

export function Footer({ attendance }: { attendance?: 'attending' | 'absent' }) {
  const invitation = useInvitation();
  const isAbsent = attendance === 'absent';

  return (
    <footer className="px-6 pb-12 pt-8 desktop:px-10">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/70 bg-white/75 px-6 py-8 shadow-soft backdrop-blur desktop:px-8">
        <div className="flex flex-col gap-6 desktop:flex-row desktop:items-end desktop:justify-between">
          <div>
            <p className="text-xl tracking-[0.35em] text-[#7a2234]">WITH LOVE</p>
            <p className="mt-3 font-serif text-4xl text-ink">
              {invitation.couple.groom} & {invitation.couple.bride}
            </p>
            <p className="mt-3 text-xl leading-8 text-ink/70">
              {isAbsent
                ? '很可惜您無法出席，但我們收到您的祝福了！'
                : `謝謝你看到這裡，期待在 ${invitation.event.dateLabel} 與你相見。`}
            </p>
          </div>
          <div className="text-xl leading-7 text-ink/65">
            <p>{invitation.event.timeLabel}</p>
            <p>{invitation.event.venue}</p>
            <p>{invitation.event.address}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
