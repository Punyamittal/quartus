chrome.runtime.onInstalled.addListener(() => {
    chrome.commands.getAll((commands) => {
      console.log("Available commands:", commands);
    });
  });
  chrome.commands.onCommand.addListener((command) => {
    if (command === "toggle_taskbar") {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, "toggle_taskbar");
      });
    }
  });
  