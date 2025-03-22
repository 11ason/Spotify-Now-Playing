# Spotify Now Playing 🎶
<img width="1000" alt="Projector Mode" src="https://11ason.space/_astro/SpotifyNowPlayingBanner.DSa547dp_Z1I6pri.webp" />
**Spotify Now Playing** is a sleek, self-hosted screensaver-style web app that displays your currently playing Spotify track in real-time. It fetches track details using the Spotify Web API and presents them with a clean UI, synced lyrics, and smooth visual transitions — perfect for use on a secondary monitor or projector display.

> ✨ Built to be lightweight, aesthetic, and self-hostable.


## 🔧 Features

- 🎵 Real-time display of track, artist, album cover
- 🕘 Progress bar and timestamps
- 📃 Synced lyrics (via [LRC Lib](https://lrclib.net))
- 🎨 Smooth transitions and modern UI
- 🖥️ Projector-friendly display mode
- 💚 Built entirely with HTML/CSS/JavaScript — no frameworks

---

## 📦 Prerequisites

Before getting started, make sure you have:

- [Node.js](https://nodejs.org/) – JavaScript runtime
- [Express.js](https://expressjs.com/) – Web server (installed via setup)
- [Spotify Developer Account](https://developer.spotify.com/dashboard)

---

## 🚀 Setup Instructions

### 1. Download the Release

download the latest release locally into a folder (this will be the root folder for the server)

### 2. Install Dependencies
In your terminal, navigate to the project root and run:
```bash
npm install express
```

### 3. Create a Spotify Application
- Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard).
- Create a new application.
- Note your **Client ID** and **Client Secret**.
- Add your **Redirect URIs** (e.g., `http://localhost:8080/app, http://localhost:8080/p, http://localhost:8080/`).

### 4. Configure the App
- Open `index.html`, `app.html`, and `p.html` in your code editor.
- Replace the placeholder `client_id` and `redirect_uri` values with your own from the Spotify dashboard.

---

## 💻 Running the App

### Run locally on your network:
```bash
node server.js
```

### (Optional) Expose to the web with ngrok:
```bash
ngrok http 8080
```

> Update your Spotify app's redirect URIs with your ngrok URL if using this method.

---

## 🌐 Accessing the App

- **Start Page** → `http://localhost:8080/`  
  Authorize your Spotify account.

- **Main Display Page** → `http://localhost:8080/app`  
  See your now playing info.

- **Projector Mode (minimal view)** → `http://localhost:8080/p`  
  Perfect for clean ambient screens or wall projections.

---

## ⚠️ Notes & Behavior

- The screen may appear blank until music is playing.
- If you stop playback, the app will continue displaying the last song until refreshed.
- JavaScript must be enabled — this app will not work in JS-disabled browsers.

---

## 📸 Screenshots
<img width="1000" alt="Projector Mode" src="https://github.com/user-attachments/assets/5e1d9b81-7d3f-42e6-aaa7-4b90a7747455" />
<img width="1000" alt="Desktop Mode" src="https://github.com/user-attachments/assets/9aa75e63-9fbf-43d3-a9da-dbb18bd7489c" />
<img width="1000" alt="Main Page" src="https://github.com/user-attachments/assets/19329627-676a-4ad0-8d5f-26a0c3f8fb3f" />

---

That’s it! You’re ready to run your Spotify Now Playing display.

Built with <3 by **Mason**.  
>Feel free to fork, modify, and expand — just keep it free, open, and accessible.  
>If you use it or improve on it, I’d love to see what you come up with.
