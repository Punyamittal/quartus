function createTaskbar() {
  const taskbar = document.createElement("div");
  taskbar.id = "fake-taskbar";
  taskbar.innerHTML = `
    <div class="taskbar-left">
      <button class="nav-btn" onclick="history.back()">←</button>
      <button class="nav-btn" onclick="history.forward()">→</button>
      <button class="nav-btn" onclick="location.reload()">⟳</button>
    </div>
    <div class="taskbar-right">
      <button class="exit-btn" onclick="document.getElementById('fake-taskbar').remove()">Exit</button>
    </div>
  `;
  document.body.appendChild(taskbar);

  // Adjust body content to be pushed down
  document.body.style.marginTop = '86px';
}

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "toggle_taskbar") {
    const existing = document.getElementById("fake-taskbar");
    if (existing) {
      existing.remove();
      document.body.style.marginTop = '70px';
    } else {
      createTaskbar();
    }
  }
});

createTaskbar(); // Initial render



  