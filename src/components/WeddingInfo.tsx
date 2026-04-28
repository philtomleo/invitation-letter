import { timelineNotes, weddingInfo } from '../data/wedding';

export function WeddingInfo() {
  return (
    <section className="px-6 py-16 md:px-10">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-4">
          <p className="text-sm tracking-[0.35em] text-[#7a2234]">CEREMONY DETAILS</p>
          <h2 className="font-serif text-4xl text-ink md:text-5xl">把重要資訊放在最前面</h2>
          <p className="max-w-md leading-8 text-ink/70">
            我們把婚禮日期、地點與 RSVP 截止時間集中整理，讓親友在手機上也能快速閱讀與回覆。
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <DetailCard title="婚宴時間" content={weddingInfo.timeLabel} subContent={weddingInfo.dateLabel} />
          <DetailCard title="婚宴場地" content={weddingInfo.venue} subContent={weddingInfo.address} />
          <DetailCard title="RSVP 截止日" content={weddingInfo.rsvpDeadline} subContent="敬請於截止日前完成回覆" />
          <DetailCard title="交通資訊" content="台北捷運文湖線 / 開車皆方便抵達" subContent="實際路線可由地圖按鈕查看" />
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl rounded-[2rem] border border-white/70 bg-[#fff8f3]/72 p-6 shadow-soft backdrop-blur md:p-8">
        <div className="grid gap-4 md:grid-cols-3">
          {timelineNotes.map((note) => (
            <div key={note} className="rounded-[1.5rem] border border-sand bg-[#f8eee6] p-5">
              <p className="leading-7 text-ink/75">{note}</p>
            </div>
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
    <div className="rounded-[1.7rem] border border-white/70 bg-[#fff8f3]/84 p-6 shadow-soft backdrop-blur">
      <p className="text-xs tracking-[0.3em] text-[#7a2234]/70">{title}</p>
      <p className="mt-4 text-lg font-medium leading-8 text-ink">{content}</p>
      <p className="mt-2 text-sm leading-7 text-ink/70">{subContent}</p>
    </div>
  );
}
