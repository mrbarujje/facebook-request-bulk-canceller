(async function () {
  const MIN_DELAY = 3000;
  const MAX_DELAY = 8000;
  let totalCancelled = 0;
  let isStopped = false;
  let isRunning = false;
  let currentTheme = detectFacebookTheme();

  function detectFacebookTheme() {
    const bg = getComputedStyle(document.body).backgroundColor;
    const rgb = bg.match(/\d+/g).map(Number);
    const brightness = rgb.reduce((a, b) => a + b, 0) / 3;
    return brightness < 128 ? "dark" : "light";
  }

  function createUIPanel() {
    const panel = document.createElement("div");
    panel.id = "fb-cancel-panel";
    panel.innerHTML = `
      <div id="fb-panel-header">📛 Facebook Request Canceller</div>
      <div id="fb-panel-body">
        <p>This will cancel all <strong>visible</strong> sent friend requests.</p>
        <p>Please scroll to load all requests before proceeding.</p>
        <div class="fb-button-row">
          <button class="fb-btn" id="fb-confirm-start">✅ Start</button>
          <button class="fb-btn" id="fb-confirm-cancel">❌ Cancel</button>
        </div>
      </div>
    `;

    Object.assign(panel.style, {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      minWidth: "260px",
      padding: "16px",
      borderRadius: "12px",
      fontFamily: "Arial, sans-serif",
      fontSize: "14px",
      zIndex: 999999,
      textAlign: "center",
      boxShadow: "0 0 16px rgba(0,0,0,0.25)",
      transition: "all 0.3s ease"
    });

    panel.className = currentTheme === "dark" ? "fb-dark" : "fb-light";
    document.body.appendChild(panel);
    injectStyles();
    makeDraggable(panel);

    document.getElementById("fb-confirm-start").onclick = () => {
      renderControls();
      isRunning = true;
      cancelNext();
    };
    document.getElementById("fb-confirm-cancel").onclick = () => panel.remove();
  }

  function injectStyles() {
    const style = document.createElement("style");
    style.textContent = `
      .fb-dark {
        background: #1e1e1e;
        color: #fff;
      }
      .fb-light {
        background: #fff;
        color: #000;
      }
      #fb-panel-header {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 8px;
      }
      .fb-btn {
        background: #4267B2;
        border: none;
        color: white;
        padding: 6px 12px;
        margin: 4px;
        border-radius: 6px;
        cursor: pointer;
        transition: background 0.2s ease;
        font-weight: bold;
      }
      .fb-btn:hover {
        background: #365899;
      }
      .fb-button-row {
        margin-top: 10px;
      }
      #fb-count.animate {
        animation: flash 0.5s;
      }
      @keyframes flash {
        0% { background: lime; color: black; }
        100% { background: inherit; color: inherit; }
      }
    `;
    document.head.appendChild(style);
  }

  function renderControls() {
    const body = document.getElementById("fb-panel-body");
    body.innerHTML = `
      <div>🚫 Requests cancelled: <span id="fb-count">0</span></div>
      <div class="fb-button-row">
        <button class="fb-btn" id="fb-toggle-btn">🔴 Stop</button>
        <button class="fb-btn" id="fb-theme-btn">🌗 Toggle Theme</button>
      </div>
    `;

    document.getElementById("fb-toggle-btn").onclick = () => {
      const btn = document.getElementById("fb-toggle-btn");
      if (isRunning) {
        isStopped = true;
        isRunning = false;
        btn.textContent = "▶️ Resume";
        btn.style.backgroundColor = "green";
      } else {
        isStopped = false;
        isRunning = true;
        btn.textContent = "🔴 Stop";
        btn.style.backgroundColor = "";
        cancelNext();
      }
    };

    document.getElementById("fb-theme-btn").onclick = () => {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      document.getElementById("fb-cancel-panel").className = currentTheme === "dark" ? "fb-dark" : "fb-light";
    };
  }

  function updateCount() {
    const el = document.getElementById("fb-count");
    if (el) {
      el.textContent = totalCancelled;
      el.classList.remove("animate");
      void el.offsetWidth;
      el.classList.add("animate");
    }
  }

  function makeDraggable(panel) {
    let isDragging = false, offsetX = 0, offsetY = 0;
    const header = panel.querySelector("#fb-panel-header");
    header.style.cursor = "move";
    header.onmousedown = (e) => {
      isDragging = true;
      offsetX = e.clientX - panel.offsetLeft;
      offsetY = e.clientY - panel.offsetTop;
    };
    document.onmouseup = () => isDragging = false;
    document.onmousemove = (e) => {
      if (isDragging) {
        panel.style.top = `${e.clientY - offsetY}px`;
        panel.style.left = `${e.clientX - offsetX}px`;
        panel.style.transform = "";
      }
    };
  }

  function getCancelButtons() {
    return Array.from(document.querySelectorAll('span'))
      .filter(el => el.innerText?.toLowerCase() === 'cancel request' && el.offsetParent !== null);
  }

  async function cancelNext() {
    if (isStopped) return;
    const buttons = getCancelButtons();
    if (buttons.length === 0) {
      console.log(`✅ All visible requests cancelled. Total: ${totalCancelled}`);
      document.getElementById("fb-cancel-panel")?.remove();
      return;
    }
    const btn = buttons[0].closest('div[role="button"]');
    if (btn) {
      btn.click();
      totalCancelled++;
      updateCount();
      console.log(`❌ Cancelled #${totalCancelled}`);
    }
    const delay = Math.floor(Math.random() * (MAX_DELAY - MIN_DELAY + 1)) + MIN_DELAY;
    setTimeout(() => { if (!isStopped) cancelNext(); }, delay);
  }

  createUIPanel();
})();
