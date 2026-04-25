function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('RSVP');
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.name || '',
    data.phone || '',
    data.email || '',
    data.attendance || '',
    data.adultCount || '',
    data.childCount || '',
    data.childSeatCount || '',
    data.vegetarianCount || '',
    data.inviteType || '',
    data.address || '',
    data.note || '',
  ]);

  return ContentService.createTextOutput(
    JSON.stringify({
      ok: true,
      message: '表單已成功送出，謝謝你的回覆。',
    }),
  ).setMimeType(ContentService.MimeType.JSON);
}
