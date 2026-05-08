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
2. Fill these env vars as needed:
   - `VITE_GOOGLE_SCRIPT_URL_ENGAGEMENT`
   - `VITE_GOOGLE_SCRIPT_URL_WEDDING`
3. Create a Google Sheet for each version with these columns:
   - Timestamp
   - 姓名
   - 聯絡電話
   - 與新人關係
   - 是否出席
   - 喜帖形式
   - 備註
   - Email
   - 成人數
   - 小孩數
   - 兒童座椅
   - 素食份數
   - 地址

4. Engagement and wedding can use different Apps Script Web App URLs, so each version can write into a different Google Sheet.

The current production build already includes a default Google Apps Script endpoint for the engagement version, so the hosted engagement page can submit without a local `.env`. The wedding version still needs its own `VITE_GOOGLE_SCRIPT_URL_WEDDING` if you want it to write to a separate sheet.

## Notes

- Photos are placeholders for now.
- The form requires an address when `紙本喜帖` is selected.
- Attendance detail fields are hidden when `不出席` is selected.
