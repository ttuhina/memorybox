# ⏳ Memory Box

![Project Banner](https://github.com/ttuhina/memorybox/blob/main/screenshot/sc1.png)  

A beautifully animated, calming web app where users can write a message to their future selves. Type a message, choose a date and time, and watch it safely get locked away in a virtual time capsule.

---

## ✨ Features

- 🌌 Animated starry night background for an immersive feel
- 📨 Upload a message with your email and a scheduled time
- 💌 Dynamic animations on submit (symbolizing "locking" the message)
- 📁 Optional file upload with your message
- 📆 Date and time picker (DD/MM/YYYY, HH:MM format)
- 🎨 Minimalist yet magical design built with React and custom CSS

---
## 🧱 Tech Stack

### 🌐 Frontend

| Tech             | Purpose                                                                 |
|------------------|-------------------------------------------------------------------------|
| **React.js**      | For building a fast, component-based user interface.                    |
| **Vanilla CSS**   | For custom styling and layout  |
| **JavaScript Animations** | Used for interactive animations and dynamic visual effects.            |
| **FileReader API**| Allows previewing and handling of file uploads before submission.       |

### 🗃️ Backend 

| Tech             | Purpose                                                                 |
|------------------|-------------------------------------------------------------------------|
| **Node.js**       | Handles server-side logic and message storage.                |
| **Express.js**    | Provides API routes for handling uploads and form submissions.|
| **Multer**        | Manages multipart file uploads to the server.                 |

### 🧪 Tooling

| Tool            | Purpose                                                                 |
|-----------------|-------------------------------------------------------------------------|
| **Vite / Create React App** | Bootstrap and serve the React project locally.                        |
| **npm**          | Manage dependencies and project scripts.                               |


---

## 📂 Folder Structure

```
memorybox/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── UploadForm.jsx
│   ├── App.jsx
│   ├── App.css
│   └── index.js
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/memorybox.git
cd memorybox
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

---

