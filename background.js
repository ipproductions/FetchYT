chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "getYoutubeInfo",
    title: "Get YouTube Info",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "getYoutubeInfo") {
    const selectedText = info.selectionText.trim();
    if (!selectedText.startsWith("http")) {
      // showAlert(tab.id, "Invalid URL."); // <- disabled modal
      return;
    }

    const apiUrl = "https://www.youtube.com/oembed?url=" + encodeURIComponent(selectedText) + "&format=json";

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const result = `🎵 Title: ${data.title}\n👤 Author: ${data.author_name}`;
        copyToClipboard(tab.id, result);
        // showAlert(tab.id, "✅ YouTube info copied to clipboard!"); // <- disabled modal
      })
      .catch(() => {
        // showAlert(tab.id, "❌ Failed to fetch info."); // <- disabled modal
      });
  }
});

function copyToClipboard(tabId, text) {
  chrome.scripting.executeScript({
    target: { tabId },
    func: (text) => {
      navigator.clipboard.writeText(text);
    },
    args: [text]
  });
}

// function showAlert(tabId, message) {
//   chrome.scripting.executeScript({
//     target: { tabId },
//     func: (msg) => alert(msg),
//     args: [message]
//   });
// }