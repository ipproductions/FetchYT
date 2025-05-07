# 🎬 YouTube Info Context Menu Extension

A lightweight Chrome extension that lets you right-click a **YouTube URL** and quickly fetch the video's **title** and **author**, copying the info to your clipboard.

---

## ✨ Features

- Adds a context menu when you select text
- Detects valid YouTube URLs
- Fetches metadata using YouTube's [oEmbed API](https://developers.google.com/youtube/v3/guides/implementation/oembed)
- Automatically copies video title and author to clipboard
- Fast, simple, and no popups

---

## 📦 Installation

1. Clone or download this repo
2. Go to `chrome://extensions`
3. Enable **Developer mode**
4. Click **"Load unpacked"**
5. Select the folder containing the extension

---

## 🧪 Usage

1. Select any valid YouTube video URL (e.g., `https://www.youtube.com/watch?v=abc123`)
2. Right-click → **Get YouTube Info**
3. The title and author will be copied to your clipboard in this format:

🎵 Title: Some Video Title
👤 Author: Channel Name

---

## 🛠️ Tech Stack

- Manifest V3
- `chrome.contextMenus`
- `chrome.scripting.executeScript`
- YouTube oEmbed API

---

## ⚠️ Limitations

- Only works on valid YouTube video URLs
- Requires clipboard permissions (handled via scripting API)
- Alert modals are disabled by default for a cleaner experience

---

## 📄 License

[MIT](./LICENSE) © 2025 Pietro Impagliazzo