const eventDate = new Date('2026-09-19T12:00:00+08:00');

export function getCountdownParts(now = new Date()) {
  const diff = eventDate.getTime() - now.getTime();
  const safeDiff = Math.max(diff, 0);

  const days = Math.floor(safeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((safeDiff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((safeDiff / (1000 * 60)) % 60);
  const seconds = Math.floor((safeDiff / 1000) % 60);

  return {
    total: safeDiff,
    days,
    hours,
    minutes,
    seconds,
  };
}

export function buildSeptemberCalendar() {
  const year = 2026;
  const monthIndex = 8;
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  const cells: Array<{ day: number | null; isEventDay: boolean }> = [];

  for (let i = 0; i < firstDay; i += 1) {
    cells.push({ day: null, isEventDay: false });
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push({ day, isEventDay: day === 19 });
  }

  while (cells.length % 7 !== 0) {
    cells.push({ day: null, isEventDay: false });
  }

  return cells;
}
