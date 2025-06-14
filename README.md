# 💬 Node WhatsApp-Style Chat App

A real-time, scalable web chat application built using **Node.js**, **Socket.IO**, and **Express**. Features WhatsApp-style UI, live user tracking, and real-time message broadcasting.

---

## 🔧 Features

- Real-time messaging (Socket.IO)
- Responsive WhatsApp-like interface
- Messages align based on sender (you vs others)
- Message timestamps
- Sidebar to view online users and your profile
- Scalable Node.js architecture
- Simple REST API (`/api/status`)

---
## 🔍 Why This Showcases Node.js

1. **Non-blocking I/O**: Multiple users send/receive chat messages without delay.
2. **Event-driven model**: Efficient real-time broadcasting using `socket.on` and `emit`.
3. **Concurrent API endpoints**: `/api/status` runs in parallel, shows live user count.
4. **Lightweight**: Minimal memory usage even under load.

---
## 🚀 Quick Start

1. **Clone the repo**

```bash
git clone https://github.com/tysod/node-chat-app
cd node-chat-app
npm install
npm start
