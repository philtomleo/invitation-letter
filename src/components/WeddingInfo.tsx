import { weddingInfo } from '../data/wedding';

export function WeddingInfo() {
  return (
    <section className="px-6 py-16 md:px-10">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-4">
          <p className="text-lg tracking-[0.35em] text-[#7a2234]">CEREMONY DETAILS</p>
          <h2 className="font-serif text-4xl text-ink md:text-5xl">8 YEARS & BEYOND</h2>
          <p className="max-w-md text-lg leading-8 text-ink/70">
            經過長達8年的相愛相殺，我們決定要給彼此一個堅定的承諾，一起去勇闖人生下半場了！
          </p>
          <p className="max-w-md text-lg leading-8 text-ink/70">
            誠摯邀請珍貴的各位來吃吃喝喝、一同來見證這份磨練後的愛情！
          </p>
          <p className="max-w-md text-lg leading-8 text-ink/70">
            有些風景，一起看才美；有些喜悅，與您們分享才完整❣️
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <DetailCard title="婚宴時間" content={weddingInfo.timeLabel} subContent={weddingInfo.dateLabel} />
          <DetailCard title="婚宴場地" content={weddingInfo.venue} subContent={weddingInfo.address} />
          <DetailCard title="RSVP 截止日" content={weddingInfo.rsvpDeadline} subContent="敬請於截止日前完成回覆" />
          <DetailCard title="交通資訊" content="台北捷運文湖線 / 開車皆方便抵達" subContent="實際路線可由地圖按鈕查看" />
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
      <p className="text-lg tracking-[0.26em] text-[#7a2234]/75">{title}</p>
      <p className="mt-4 text-xl font-medium leading-8 text-ink">{content}</p>
      <p className="text-xl leading-7 text-ink/70">{subContent}</p>
    </div>
  );
}
