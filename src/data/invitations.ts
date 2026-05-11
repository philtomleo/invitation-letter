import photo0088 from '../images/webp/260302_0088.webp';
import photo0135 from '../images/webp/260302_0135.webp';
import photo0207 from '../images/webp/260302_0207.webp';
import photo0303 from '../images/webp/260302_0303.webp';
import photo0358 from '../images/webp/260302_0358.webp';
import photo0360 from '../images/webp/260302_0360.webp';
import photo0367 from '../images/webp/260302_0367.webp';

export type InvitationVariantSlug = 'engagement' | 'wedding';

export type InvitationGalleryPhoto = {
  title: string;
  description: string;
  image: string;
};

export type InvitationConfig = {
  slug: InvitationVariantSlug;
  googleScriptUrl: string;
  couple: {
    groom: string;
    bride: string;
    compact: string;
  };
  event: {
    title: string;
    eventDate: string;
    dateLabel: string;
    timeLabel: string;
    venue: string;
    address: string;
    mapUrl: string;
    rsvpDeadline: string;
    rsvpDeadlineShort: string;
  };
  hero: {
    badge: string;
    roleLabels: {
      groom: string;
      bride: string;
    };
    dateCardLabel: string;
    venueCardLabel: string;
    primaryImage: string;
    saveTheDateImage: string;
    saveTheDateLabel: string;
    saveTheDateDateText: string;
    saveTheDateDayText?: string;
  };
  weddingInfo: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    cards: Array<{
      title: string;
      content: string;
      subContent: string;
    }>;
  };
  calendar: {
    monthLabel: string;
    weekdayChip: string;
    title: string;
    countdownEyebrow: string;
    countdownTitle: string;
    countdownDescription: string;
    countdownFooter: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    intro?: string;
    photos: InvitationGalleryPhoto[];
  };
  rsvp: {
    eyebrow: string;
    title: string;
    intro: string;
    reminderTitle: string;
    reminderItems: string[];
    relationLabel: string;
    relationOptions: string[];
    noteLabel: string;
  };
  success: {
    eyebrow: string;
    title: string;
    attendingMessage: string;
    absentMessage: string;
  };
};

const sharedMapUrl =
  'https://www.google.com/maps/search/?api=1&query=%E5%8F%B0%E5%8C%97%E8%90%AC%E8%B1%AA%E9%85%92%E5%BA%975%E6%A8%93';

const weddingMapUrl =
  'https://www.google.com/maps/search/?api=1&query=%E9%95%B7%E6%A6%AE%E9%B3%B3%E5%87%B0%E9%85%92%E5%BA%97%20%E9%95%B7%E6%A6%AE%E5%BB%B3%20%E7%A4%81%E6%BA%AA%E9%84%89%E7%8E%89%E7%9F%B3%E6%9D%91%E5%81%A5%E5%BA%B7%E8%B7%AF77%E8%99%9F';

const engagementEndpoint =
  import.meta.env.VITE_GOOGLE_SCRIPT_URL_ENGAGEMENT ||
  import.meta.env.VITE_GOOGLE_SCRIPT_URL ||
  'https://script.google.com/macros/s/AKfycbxkSuYIEIrTzog-Fow7aJau9J27hrdcVozHH9tRWqzAatAmNCczgWeJ9WUqnD_o-n5f/exec';

const weddingEndpoint =
  import.meta.env.VITE_GOOGLE_SCRIPT_URL_WEDDING ||
  import.meta.env.VITE_GOOGLE_SCRIPT_URL_WEDDING_ONLY ||
  'https://script.google.com/macros/s/AKfycbxXxMfA1NrzuIuhCl2wZeB2Ex0D0B-JjPrcg_HcndN9QxiQ5Kx5JM3-M9g46aBc1tjzbg/exec';

export const invitationConfigs: Record<InvitationVariantSlug, InvitationConfig> = {
  engagement: {
    slug: 'engagement',
    googleScriptUrl: engagementEndpoint,
    couple: {
      groom: '許怡翔',
      bride: '陳培紹',
      compact: '怡翔&培紹',
    },
    event: {
      title: '我們要結婚了',
      eventDate: '2026-09-19T12:00:00+08:00',
      dateLabel: '2026 / 09 / 19 星期六',
      timeLabel: '午宴 12:00 準時開桌',
      venue: '萬豪酒店 5 樓 萬豪二廳',
      address: '台北市中山區樂群二路199號',
      mapUrl: sharedMapUrl,
      rsvpDeadline: '2026 / 05 / 31',
      rsvpDeadlineShort: '5/31',
    },
    hero: {
      badge: 'WEDDING INVITATION',
      roleLabels: {
        groom: 'GROOM',
        bride: 'BRIDE',
      },
      dateCardLabel: '訂婚日期',
      venueCardLabel: '宴客地點',
      primaryImage: photo0135,
      saveTheDateImage: photo0360,
      saveTheDateLabel: 'SAVE THE DATE',
      saveTheDateDateText: '2026 / 09 / 19 (六)',
      saveTheDateDayText: '',
    },
    weddingInfo: {
      eyebrow: 'CEREMONY DETAILS',
      title: '8 YEARS & BEYOND',
      paragraphs: [
        '經過長達8年的相愛相殺，我們決定要給彼此一個堅定的承諾，一起去勇闖人生下半場了！',
        '誠摯邀請珍貴的各位來吃吃喝喝、一同來見證這份磨練後的愛情！',
        '有些風景，一起看才美；有些喜悅，與您們分享才完整❣️',
      ],
      cards: [
        { title: '婚宴時間', content: '午宴 12:00 準時開桌', subContent: '2026 / 09 / 19 星期六' },
        { title: '婚宴場地', content: '萬豪酒店 5 樓 萬豪二廳', subContent: '台北市中山區樂群二路199號' },
        { title: 'RSVP 截止日', content: '2026 / 05 / 31', subContent: '敬請於截止日前完成回覆' },
        { title: '交通資訊', content: '台北捷運文湖線 / 開車皆方便抵達', subContent: '實際路線可由地圖按鈕查看' },
      ],
    },
    calendar: {
      monthLabel: 'SEPTEMBER 2026',
      weekdayChip: 'SAT',
      title: '把 9/19 留給我們',
      countdownEyebrow: 'COUNTDOWN',
      countdownTitle: '幸福倒數中',
      countdownDescription: '距離 2026 年 9 月 19 日午宴 12:00 開桌，還有一點點時間把這天好好記在心裡。',
      countdownFooter: '',
    },
    gallery: {
      eyebrow: 'PHOTO STORY',
      title: '把我們喜歡的片刻放進來',
      photos: [
        {
          title: '向陽而生的幸福',
          description:
            '你是夏日裡最燦爛的向日葵，而我是那個永遠繞著你轉的暖陽。未來的日子，我們要一起開花，一起大笑。',
          image: photo0088,
        },
        {
          title: '與你，花漾生活',
          description: '世界上最浪漫的事，就是找個能陪你一起搞怪、一起可愛，把生活過成彩色的人。',
          image: photo0358,
        },
        {
          title: '幸福的重量，只有你能承擔',
          description: '聽說接住我的人，要負責一輩子喔！',
          image: photo0207,
        },
        {
          title: '定格，愛情的模樣',
          description:
            '最好的愛，是你懂我的胡鬧，而我懂你的深情；是你望著我時，眼裡藏不住的偏愛。',
          image: photo0303,
        },
      ],
    },
    rsvp: {
      eyebrow: 'RSVP',
      title: '敬請留下回覆',
      intro: '無論是否能到場，都希望您能撥空協助填寫表單，即使當天無法親自前來，也歡迎在表單結尾留下給我們的祝福，讓我們能帶著這份暖意，邁向人生的下一個階段。',
      reminderTitle: '溫馨提醒：',
      reminderItems: ['您的回覆對我們安排座位和餐點至關重要，請務必在 {rsvpDeadlineShort} 前填寫完畢。'],
      relationLabel: '您和培紹的關係？',
      relationOptions: [
        '培紹爸媽朋友',
        '培紹親戚',
        '培紹國小朋友',
        '培紹國中朋友',
        '培紹高中朋友',
        '培紹大學朋友',
        '培紹同事',
        '培紹其他朋友',
      ],
      noteLabel: '想對 怡翔&培紹 說的話',
    },
    success: {
      eyebrow: 'RSVP RECEIVED',
      title: '表單已成功送出，謝謝您的回覆！',
      attendingMessage: '我們很期待在婚禮當天與您相見，謝謝您和我們一起見證幸福時刻。',
      absentMessage: '很可惜您無法出席，但我們收到您的祝福了！',
    },
  },
  wedding: {
    slug: 'wedding',
    googleScriptUrl: weddingEndpoint,
    couple: {
      groom: '許怡翔',
      bride: '陳培紹',
      compact: '怡翔&培紹',
    },
    event: {
      title: '我們要結婚了',
      eventDate: '2026-09-28T18:00:00+08:00',
      dateLabel: '2026 / 09 / 28 星期一',
      timeLabel: '晚宴 18:00 準時開桌',
      venue: '長榮鳳凰酒店 長榮廳',
      address: '礁溪鄉玉石村健康路77號',
      mapUrl: weddingMapUrl,
      rsvpDeadline: '2026 / 05 / 31',
      rsvpDeadlineShort: '5/31',
    },
    hero: {
      badge: 'WEDDING INVITATION',
      roleLabels: {
        groom: 'GROOM',
        bride: 'BRIDE',
      },
      dateCardLabel: '結婚日期',
      venueCardLabel: '宴客地點',
      primaryImage: photo0135,
      saveTheDateImage: photo0367,
      saveTheDateLabel: 'SAVE THE DATE',
      saveTheDateDateText: '2026 / 09 / 28 (一)',
      saveTheDateDayText: '',
    },
    weddingInfo: {
      eyebrow: 'CEREMONY DETAILS',
      title: '8 YEARS & BEYOND',
      paragraphs: [
        '經過長達8年的相愛相殺，我們決定要給彼此一個堅定的承諾，一起去勇闖人生下半場了！',
        '誠摯邀請珍貴的各位來吃吃喝喝、一同來見證這份磨練後的愛情！',
        '有些風景，一起看才美；有些喜悅，與您們分享才完整❣️',
      ],
      cards: [
        { title: '婚宴時間', content: '晚宴 18:00', subContent: '2026 / 09 / 28 星期一' },
        { title: '婚宴場地', content: '長榮鳳凰酒店 長榮廳', subContent: '礁溪鄉玉石村健康路77號' },
        { title: 'RSVP 截止日', content: '2026 / 05 / 31', subContent: '敬請於截止日前完成回覆' },
        { title: '交通資訊', content: '當天可自駕前往礁溪', subContent: '實際路線可由地圖按鈕查看' },
      ],
    },
    calendar: {
      monthLabel: 'SEPTEMBER 2026',
      weekdayChip: 'MON',
      title: '把 9/28 留給我們',
      countdownEyebrow: 'COUNTDOWN',
      countdownTitle: '幸福倒數中',
      countdownDescription: '距離 2026 年 9 月 28 日晚宴 18:00 開席，還有一點點時間把這天好好留在心裡。',
      countdownFooter: '',
    },
    gallery: {
      eyebrow: 'PHOTO STORY',
      title: '把我們喜歡的片刻放進來',
      photos: [
        {
          title: '向陽而生的幸福',
          description:
            '你是夏日裡最燦爛的向日葵，而我是那個永遠繞著你轉的暖陽。未來的日子，我們要一起開花，一起大笑。',
          image: photo0088,
        },
        {
          title: '與你，花漾生活',
          description: '世界上最浪漫的事，就是找個能陪你一起搞怪、一起可愛，把生活過成彩色的人。',
          image: photo0358,
        },
        {
          title: '幸福的重量，只有你能承擔',
          description: '聽說接住我的人，要負責一輩子喔！',
          image: photo0207,
        },
        {
          title: '定格，愛情的模樣',
          description:
            '最好的愛，是你懂我的胡鬧，而我懂你的深情；是你望著我時，眼裡藏不住的偏愛。',
          image: photo0303,
        },
      ],
    },
    rsvp: {
      eyebrow: 'RSVP',
      title: '敬請留下回覆',
      intro: '無論是否能到場，都希望您能撥空協助填寫表單，即使當天無法親自前來，也歡迎在表單結尾留下給我們的祝福，讓我們能帶著這份暖意，邁向人生的下一個階段。',
      reminderTitle: '溫馨提醒：',
      reminderItems: ['您的回覆對我們安排座位和餐點至關重要，請務必在 {rsvpDeadlineShort} 前填寫完畢。'],
      relationLabel: '您和怡翔的關係？',
      relationOptions: [
        '怡翔爸媽朋友',
        '怡翔親戚',
        '怡翔國小朋友',
        '怡翔國中朋友',
        '怡翔高中朋友',
        '怡翔大學朋友',
        '怡翔同事',
        '怡翔其他朋友',
      ],
      noteLabel: '想對 怡翔&培紹 說的話',
    },
    success: {
      eyebrow: 'RSVP RECEIVED',
      title: '表單已成功送出，謝謝您的回覆！',
      attendingMessage: '我們很期待在婚禮當天與您相見，謝謝您和我們一起見證幸福時刻。',
      absentMessage: '很可惜您無法出席，但我們收到您的祝福了！',
    },
  },
};

export function getInvitationConfig(slug: InvitationVariantSlug) {
  return invitationConfigs[slug];
}
