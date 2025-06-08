# 📛 Facebook Request Canceller

A handy DevTools script to **cancel all your sent Facebook friend requests** — one by one — with smart delay, visibility detection, stop/resume toggle, and live UI feedback.

---

## ✨ Features

- 🔍 Cancels **only visible** "Cancel Request" buttons (DOM safe)
- ⏳ **Random delay** between 3–8 seconds (to mimic human behavior)
- 🛑 **Stop button** to pause cancelling anytime
- ▶️ **Resume button** to continue where it left off
- 📊 **Live counter** to track cancelled requests
- 🌗 **Theme toggle** for dark/light Facebook modes
- ✅ **Auto-hide** UI after all requests are done

---

## 🚀 How to Use

> ⚠️ This script works on the desktop version of Facebook only.  
> You must manually scroll the **"Sent Requests"** modal to load all entries before running.

1. Go to **Facebook → Friends → Sent Requests**
2. Manually scroll to bottom to load all friend requests
3. Open DevTools (`F12`) → Console tab
4. Paste contents of [`facebook-request-bulk-canceller.js`](./facebook-request-bulk-canceller.js)
5. Press `Enter` and confirm on-screen
6. Watch it cancel the requests for you 💺

---

## 💡 Notes

- 🚫 Script cancels only what’s **currently visible**.  
  Manually scroll to load more first.
- 💣 There’s no undo — proceed wisely.
- 📦 No extension or install required. Just a copy-paste script.

---

## 📁 Files

- [`facebook-request-bulk-canceller.js`](./facebook-request-bulk-canceller.js): The main script
- `README.md`: This file 😎

---

## 🛠 Tech Stack

- Vanilla JavaScript
- Pure DOM API
- No frameworks, no dependencies, no noise

---

## 👤 Author

Created with pain and coffee by  
**Suman Banerjee**  
📧 [suman@barujjes.com](mailto:suman@barujjes.com)

---

## 📜 License

MIT — Use, share, modify. No liability if Facebook breaks the script.  
All friend request karma is on you 😅

---

## 💬 Feedback?

Open an issue, fork it, or just use it as your quiet revenge on your friend-request past.
