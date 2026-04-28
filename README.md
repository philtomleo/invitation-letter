# Wedding Invitation

## Start

```bash
npm install
npm run dev
```

## GitHub Pages

- This project is configured for GitHub Pages at `/invitation-letter/`.
- Pushing to `main` will trigger `.github/workflows/deploy-pages.yml`.

## Google Sheets integration

1. Copy `.env.example` to `.env`.
2. Fill `VITE_GOOGLE_SCRIPT_URL`.
3. Create a Google Sheet with these columns:
   - Timestamp
   - 姓名
   - 手機
   - 是否出席
   - 喜帖形式
   - 備註
   - Email
   - 成人數
   - 小孩數
   - 兒童座椅
   - 素食份數
   - 地址

The current production build already includes a default Google Apps Script endpoint, so the hosted site can submit without a local `.env`.

## Notes

- Photos are placeholders for now.
- The form requires an address when `紙本喜帖` is selected.
- Attendance detail fields are hidden when `不出席` is selected.
