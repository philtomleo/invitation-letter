# Wedding Invitation

## Start

```bash
npm install
npm run dev
```

## Google Sheets integration

1. Copy `.env.example` to `.env`.
2. Fill `VITE_GOOGLE_SCRIPT_URL`.
3. Create a Google Sheet with these columns:
   - Timestamp
   - 姓名
   - 手機
   - Email
   - 是否出席
   - 成人數
   - 小孩數
   - 兒童座椅
   - 素食份數
   - 喜帖形式
   - 地址
   - 備註

## Notes

- Photos are placeholders for now.
- The form requires an address when `紙本喜帖` is selected.
- Attendance detail fields are hidden when `不出席` is selected.
