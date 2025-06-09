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
![Go to friends and click on sent requests](https://github.com/mrbarujje/facebook-request-bulk-canceller/blob/main/SCREENSHOTS/1-friend-requests.png)
2. Manually scroll to bottom to load all friend requests
![Manually scroll to bottom to load all friend requests](https://github.com/mrbarujje/facebook-request-bulk-canceller/blob/main/SCREENSHOTS/2-friend-requests-sent.png)
3. Open DevTools (`F12`) → Console tab
![Open DevTools (`F12`) → Console tab](https://github.com/mrbarujje/facebook-request-bulk-canceller/blob/main/SCREENSHOTS/3-open-console.png.png)
4. Open Git repository
![Open Git repository](https://github.com/mrbarujje/facebook-request-bulk-canceller/blob/main/SCREENSHOTS/4-open-git-repo.png)
5. Copy Code
![Copy Code](https://github.com/mrbarujje/facebook-request-bulk-canceller/blob/main/SCREENSHOTS/5-copy-code.png)
6. Paste contents of [`facebook-request-bulk-canceller.js`](./facebook-request-bulk-canceller.js)
![Paste Code](https://github.com/mrbarujje/facebook-request-bulk-canceller/blob/main/SCREENSHOTS/6-paste-in-console.png)
7. Confirm you want to start cancelling your friend requests
![Confirm you want to start cancelling your friend requests](https://github.com/mrbarujje/facebook-request-bulk-canceller/blob/main/SCREENSHOTS/7-confirm-you-want-to-do-it.png)
8. Requests start being cancelled
![Requests start being cancelled](https://github.com/mrbarujje/facebook-request-bulk-canceller/blob/main/SCREENSHOTS/8-requests-being-cancelled.png)
9. Toggle Light / Dark mode
![Toggle Light / Dark mode](https://github.com/mrbarujje/facebook-request-bulk-canceller/blob/main/SCREENSHOTS/9-you-can-toggle-dark-light-mode.png)
10. All requests are cancelled eventually.
![All requests are cancelled eventually.](https://github.com/mrbarujje/facebook-request-bulk-canceller/blob/main/SCREENSHOTS/10-requests-are-cancelled.png)

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
