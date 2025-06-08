// facebook-request-bulk-canceller.js
// Version: 1.0.0
// Author: Suman Banerjee (suman@barujjes.com)
// Description: DevTools script to bulk cancel sent friend requests on Facebook with smart delay and UI control.

/**
 * Immediately Invoked Async Function Expression (IIFE) to isolate scope
 */
(async function () {
    // --- Configuration ---
    const MIN_DELAY = 3000; // 3 seconds
    const MAX_DELAY = 8000; // 8 seconds

    // --- State Variables ---
    let totalCancelled = 0;
    let isStopped = false;
    let isRunning = false;
    let controlBtn;

    /**
     * Generates a random delay (ms) between min and max
     */
    function getRandomDelay(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * Returns a list of all visible "Cancel Request" buttons
     */
    function getCancelButtons() {
        return Array.from(document.querySelectorAll('span'))
            .filter(el =>
                el.innerText?.toLowerCase() === 'cancel request' &&
                el.offsetParent !== null // only visible ones
            );
    }

    /**
     * Adds a control button (Stop/Resume) to the page
     */
    function addControlButton() {
        controlBtn = document.createElement("button");
        controlBtn.id = "fb-control-button";
        controlBtn.innerText = "🔴 Stop Cancelling";

        Object.assign(controlBtn.style, {
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 9999,
            background: "red",
            color: "white",
            padding: "10px 15px",
            fontSize: "14px",
            borderRadius: "8px",
            cursor: "pointer"
        });

        controlBtn.onclick = () => {
            if (isRunning) {
                // Pause the process
                isStopped = true;
                isRunning = false;
                controlBtn.innerText = "▶️ Resume Cancelling";
                controlBtn.style.background = "green";
                console.log("🚫 Cancelling paused.");
            } else {
                // Resume the process
                isStopped = false;
                isRunning = true;
                controlBtn.innerText = "🔴 Stop Cancelling";
                controlBtn.style.background = "red";
                console.log("▶️ Resumed.");
                cancelNext(); // resume cancel loop
            }
        };

        document.body.appendChild(controlBtn);
    }

    /**
     * Adds a live counter display for cancelled requests
     */
    function addStatusDisplay() {
        const div = document.createElement("div");
        div.id = "fb-status-display";
        div.innerHTML = `✅ Cancelled: <strong>0</strong>`;

        Object.assign(div.style, {
            position: "fixed",
            bottom: "20px",
            left: "20px",
            zIndex: 9999,
            background: "#222",
            color: "#0f0",
            padding: "10px 15px",
            fontSize: "14px",
            borderRadius: "8px",
            fontFamily: "monospace"
        });

        document.body.appendChild(div);
    }

    /**
     * Updates the status display
     */
    function updateStatus() {
        const counter = document.querySelector("#fb-status-display strong");
        if (counter) counter.textContent = totalCancelled;
    }

    /**
     * Core recursive function that clicks one cancel button at a time
     * and waits randomly before calling itself again.
     */
    async function cancelNext() {
        if (isStopped) return;

        const cancelButtons = getCancelButtons();

        // All done
        if (cancelButtons.length === 0) {
            console.log(`✅ All visible requests cancelled. Total: ${totalCancelled}`);
            removeControls();
            return;
        }

        // Click the first available button
        const btn = cancelButtons[0].closest('div[role="button"]');
        if (btn) {
            btn.click();
            totalCancelled++;
            updateStatus();
            console.log(`❌ Cancelled #${totalCancelled}`);
        }

        // Wait before continuing
        const delay = getRandomDelay(MIN_DELAY, MAX_DELAY);
        console.log(`⏱ Waiting ${delay / 1000}s...`);
        setTimeout(() => {
            if (!isStopped) cancelNext();
        }, delay);
    }

    /**
     * Removes control UI from the screen
     */
    function removeControls() {
        if (controlBtn) controlBtn.remove();
        const statusDiv = document.getElementById("fb-status-display");
        if (statusDiv) statusDiv.remove();
        console.log("🎉 All done. UI cleaned up.");
    }

    /**
     * Initial prompt and kickstart
     */
    if (!confirm("This will cancel all VISIBLE Facebook friend requests.\nYou must scroll manually to load all.\nContinue?")) {
        console.log("❌ Operation aborted.");
        return;
    }

    addControlButton();
    addStatusDisplay();
    isRunning = true;
    cancelNext(); // Start cancelling
})();
