# 📘 Chat Application Manual

Welcome to the official manual for the **Node WhatsApp-Style Chat App**. This guide explains how to use, administer, and scale the application.

---

## 📂 Table of Contents

1. [Introduction](#introduction)
2. [System Requirements](#system-requirements)
3. [Installation](#installation)
4. [Starting the App](#starting-the-app)
5. [Using the Chat Interface](#using-the-chat-interface)
6. [Admin Functions](#admin-functions)
7. [API Reference](#api-reference)
8. [Deployment & Scaling](#deployment--scaling)
9. [Security Recommendations](#security-recommendations)
10. [Troubleshooting](#troubleshooting)

---

## 🧩 Introduction

This chat app provides:
- Real-time WebSocket-based communication
- A familiar WhatsApp-style UI
- Live user tracking
- Scalable Node.js architecture using Express + Socket.IO

---

## 💻 System Requirements

- Node.js (v14+ recommended)
- NPM
- Internet browser (Chrome, Firefox, Edge)

---

## 📦 Installation

1. **Clone the repo:**

```bash
git clone https://github.com/yourname/node-chat-app
cd node-chat-app
````

2. **Install dependencies:**

```bash
npm install
```

---

## 🚀 Starting the App

Run the following:

```bash
npm start
```

Then navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## 💬 Using the Chat Interface

1. Enter a unique **username** to join the chat.
2. Chat screen opens:

   * Your messages: right-aligned
   * Others' messages: left-aligned
   * Timestamp shown on each message
3. Sidebar:

   * See all online users
   * Your username is shown under "My Profile"

---

## 🔧 Admin Functions

While there’s no admin panel yet, you can monitor sessions via server logs or add these tools:

* **Socket.IO Dashboard** for socket status
* Extend API with:

  * `/api/active-users`
  * `/api/message-logs`

For large-scale setups, implement user authentication (e.g., JWT) and moderation tools.

---

## 📡 API Reference

| Method | Endpoint    | Description          |
| ------ | ----------- | -------------------- |
| GET    | /api/status | Returns server info  |
| GET    | /api/users  | Returns sample users |

**Example:**

```bash
curl http://localhost:3000/api/status
```

---

## ⚙️ Deployment & Scaling

### Hosting Options:

* Render (recommended)
* Railway
* Vercel (static + serverless API)
* Heroku (legacy)

### Scaling with Redis:

Install:

```bash
npm install socket.io-redis
```

Setup in `server.js`:

```js
const redisAdapter = require('socket.io-redis');
io.adapter(redisAdapter({ host: 'localhost', port: 6379 }));
```

Ensure sticky sessions or WebSocket affinity is set in load balancer.

---

## 🔐 Security Recommendations

* Use HTTPS in production
* Sanitize all input (avoid XSS)
* Use rate limiting for `/api/*`
* Consider user authentication with tokens

---

## 🧯 Troubleshooting

| Issue                         | Solution                                   |
| ----------------------------- | ------------------------------------------ |
| Port already in use           | Change port in `server.js`                 |
| Messages not sending          | Check if Socket.IO client script loads     |
| UI doesn't update users       | Confirm `register` and `userList` handlers |
| Scaling across machines fails | Ensure Redis is shared and reachable       |

---

## 🧾 License

This project is licensed under the MIT License.

---
