# Spotify-Now-Playing
Spotify-Now-Playing is a screensaver application that displays the currently playing song on your Spotify account. It utilizes the Spotify API to fetch the song information and display it in a visually appealing manner.

### Update
You can now use this project on my site free of charge by clicking this [link](https://11ason.space/nowplaying/)

### Prerequisites

Before using this application, ensure you have the following installed:

- [Node.js](https://nodejs.org) - JavaScript runtime environment
- [Express.js](https://expressjs.com/) - Web application framework for Node.js

### Setup Instructions

1. **Download Release**

2. **Install Dependencies**: Navigate to the project directory and install dependencies using npm:
   ```bash
   npm install
   ```

3. **Create Spotify Application**:
   - Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications).
   - Log in or sign up for a Spotify Developer account.
   - Create a new application and note down the client ID and client secret.

4. **Configure Application**:
   - Open `auth.html` file in the project directory.
   - Replace `'Client_id'` with your actual Spotify client ID.
   - Specify the correct redirect URI (`redirect_uri`) based on your setup.

### Running the Application

 **Local Network Deployment**: Start the server using the following command:
  ```bash
  node server.js
  ```

5. **Remote Access Deployment**:
   - If you want to keep the site on your local network, no further action is required.
   - If you want to make the site accessible from anywhere, use [ngrok](https://ngrok.com/):
     ```bash
     ngrok http --domain=your-domain-name 8080
     ```

### Issues and Security Risks

- **Client Secrets**: Never expose your client secret in client-side code. Use environment variables or server-side code for secure handling.
- **Reauthorization**: ~Users may need to reauthorize every hour due to Spotify's token expiration policy. This may never be resolved in the code (You can probably find a workaround)~ **Should be solved in the newest release.**
- **Vulnerabilities**: The code may contain vulnerabilities that could potentially compromise the security of your site. Review the code and address any security issues before deploying publicly.

### Accessing the Application

When running the site, accessing `localhost:8080` directly will not display anything. Instead, you need to follow a specific route to authorize the application and view the currently playing song.

1. **Authorization Page**: To begin, navigate to `localhost:8080/auth` in your web browser. This page prompts you to authorize the site to access your Spotify account.

2. **Main Page**: After authorizing the site, you will be redirected to `localhost:8080/main`, where you can see the currently playing song.


### Expected Behavior

The site will display a white screen until music is being played. After authorization, it will display the currently playing song information.

Please note that the site uses javascript and ***Will Not Work*** in browsers that don't have javascript.

---

<img width="1680" alt="Screenshot" src="https://github.com/11ason/Spotify-Now-Playing/assets/146950994/2d4e8cdc-a574-4f6f-802a-7081d92c56a4">

![media controls in use](https://github.com/11ason/Spotify-Now-Playing/assets/146950994/46cb9ac9-e97c-4813-ba60-862b79569f0a)

![Transition-example](https://github.com/11ason/Spotify-Now-Playing/assets/146950994/d85ae2be-5e38-49f2-8554-04502fba2c6d)

---
Created with <3 by Mason | Feel free to edit code, But please keep it free and open source.
