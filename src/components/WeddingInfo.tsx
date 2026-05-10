import { useInvitation } from '../context/InvitationContext';

export function WeddingInfo() {
  const invitation = useInvitation();

  return (
    <section className="px-6 py-16 desktop:px-10">
      <div className="mx-auto grid max-w-6xl gap-10 desktop:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-4 text-center desktop:text-left">
          <p className="text-xl tracking-[0.35em] text-[#7a2234]">{invitation.weddingInfo.eyebrow}</p>
          <h2 className="font-serif text-4xl text-ink desktop:text-5xl">{invitation.weddingInfo.title}</h2>
          {invitation.weddingInfo.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mx-auto max-w-md text-xl leading-8 text-ink/70 desktop:mx-0">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid gap-4 desktop:grid-cols-2">
          {invitation.weddingInfo.cards.map((card) => (
            <DetailCard
              key={card.title}
              title={card.title}
              content={card.content}
              subContent={card.subContent}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function DetailCard({
  title,
  content,
  subContent,
}: {
  title: string;
  content: string;
  subContent: string;
}) {
  return (
    <div className="rounded-[1.7rem] border border-white/70 bg-[#fff8f3]/84 p-6 text-center shadow-soft backdrop-blur desktop:text-left">
      <p className="text-xl tracking-[0.26em] text-[#7a2234]/75">{title}</p>
      <p className="mt-4 text-xl font-medium leading-8 text-ink">{content}</p>
      <p className="text-xl leading-7 text-ink/70">{subContent}</p>
    </div>
  );
}
