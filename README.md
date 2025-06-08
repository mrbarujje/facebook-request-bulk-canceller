# 📛 Bulk Facebook Friend Request Canceller

A handy DevTools script to **cancel all your sent Facebook friend requests** — one by one — with smart delay, visibility detection, stop/resume toggle, and live UI feedback.

---

## ✨ Features

- 🔍 Cancels **only visible** "Cancel Request" buttons (DOM safe)
- ⏳ **Random delay** between 3–8 seconds (to mimic human behavior)
- 🛑 **Stop button** to pause cancelling anytime
- ▶️ **Resume button** to continue where it left off
- 📊 **Live counter** to track how many cancelled
- ✅ **Auto-hide** UI after all requests are done

---

## 🚀 How to Use

> ⚠️ **This script works on the desktop version of Facebook** only. You must manually scroll the **"Sent Requests"** modal to load all entries before running.

1. Go to **Facebook > Friends > Sent Requests**
2. Manually scroll to bottom to load all pending requests
3. Press `F12` to open DevTools > Console
4. Paste the contents of [`facebook-request-bulk-canceller.js`](./facebook-request-bulk-canceller.js)
5. Hit `Enter`
6. Sit back and relax 💺

---

## 💡 Pro Tips

- ❗ This does not auto-scroll; you must **scroll yourself** to load more before running the script
- 🎛️ Cancel requests at your own risk — **no undo**
- ✅ Safe for normal use; doesn’t touch anything beyond visible buttons

---

## 📁 Files

- [`facebook-request-bulk-canceller.js`](./facebook-request-bulk-canceller.js): The main script
- `README.md`: You're reading it 😎

---

## 🛠 Tech Stack

- Vanilla JavaScript
- DOM API
- No frameworks, no dependencies, no bullshit

---

## 🧠 Credits

Developed by **Suman Banerjee** (📧 suman@barujjes.com). Inspired by real pain: too many accidental friend requests 😅

---

## 📜 License

MIT — Do whatever you want. Just don’t sue me. Facebook may change DOM in future — use at your own risk.

---

## 💬 Questions?

Drop an issue or fork the project. Collaboration welcome!
