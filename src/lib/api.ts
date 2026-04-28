export type RSVPFormPayload = {
  name: string;
  phone: string;
  brideRelation: string;
  email: string;
  attendance: string;
  adultCount: string;
  childCount: string;
  childSeatCount: string;
  vegetarianCount: string;
  inviteType: string;
  address: string;
  note: string;
};

const endpoint =
  import.meta.env.VITE_GOOGLE_SCRIPT_URL ||
  'https://script.google.com/macros/s/AKfycbxkSuYIEIrTzog-Fow7aJau9J27hrdcVozHH9tRWqzAatAmNCczgWeJ9WUqnD_o-n5f/exec';

export async function submitRsvp(payload: RSVPFormPayload) {
  if (!endpoint) {
    await new Promise((resolve) => setTimeout(resolve, 800));
    return {
      ok: true,
      message: '尚未設定 Google Sheets API，已先完成前端送出流程示意。',
    };
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('表單送出失敗，請稍後再試。');
  }

  return response.json();
}
