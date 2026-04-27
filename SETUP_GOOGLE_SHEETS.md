# 📊 Connect Glow to Google Sheets

Follow these steps to receive every consultation form submission directly in a Google Sheet. Takes about 3 minutes.

---

## Step 1 — Create your Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new spreadsheet
2. Name it **"Glow — Consultations"**
3. In **Row 1**, add these headers (one per column):

| A | B | C | D | E | F | G | H | I | J |
|---|---|---|---|---|---|---|---|---|---|
| Timestamp | Plan | Name | Age | Budget | Location | Skin Type | Concerns | Open To | Message |

---

## Step 2 — Add the Apps Script

1. In your Google Sheet, go to **Extensions → Apps Script**
2. Delete everything in the editor and paste the following:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.timestamp,
    data.plan,
    data.name,
    data.age,
    data.budget,
    data.location,
    data.skinType,
    data.concerns,
    data.procedureOpenness,
    data.message
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Click **Save** (💾 icon or Ctrl+S)

---

## Step 3 — Deploy as a Web App

1. Click **Deploy → New deployment**
2. Click the ⚙️ gear icon → select **Web app**
3. Set:
   - **Description:** Glow form handler
   - **Execute as:** Me
   - **Who has access:** **Anyone**
4. Click **Deploy**
5. **Authorize** when prompted (click "Advanced" → "Go to Glow (unsafe)" if needed)
6. Copy the **Web app URL** — it looks like:
   ```
   https://script.google.com/macros/s/AKfycbx.../exec
   ```

---

## Step 4 — Paste the URL in your code

Open `consult.js` and paste your URL at the top:

```javascript
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbx.../exec";
```

Commit and push — that's it! Every form submission will now appear as a new row in your spreadsheet in real time. ✨

---

## What you'll see in the sheet

Each submission creates a row with:

| Timestamp | Plan | Name | Age | Budget | Location | Skin Type | Concerns | Open To | Message |
|-----------|------|------|-----|--------|----------|-----------|----------|---------|---------|
| 2026-04-27T19:30:00Z | pro | Sarah | 25-29 | $50 – $150 | Paris | combo | Acne, Dark spots | Open to injectables | I've tried retinol before... |

---

## Optional: Get email notifications

In your Google Sheet, go to **Tools → Notification rules** and set up email alerts for new form submissions.
