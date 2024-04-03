## Spotify-Now-Playing

Spotify-Now-Playing is a screensaver application that displays the currently playing song on your Spotify account. It utilizes the Spotify API to fetch the song information and display it in a visually appealing manner.

### Prerequisites

Before using this application, ensure you have the following installed:

- [Node.js](https://nodejs.org) - JavaScript runtime environment
- [Express.js](https://expressjs.com/) - Web application framework for Node.js

### Setup Instructions

1. **Clone the Repository**: Clone this repository to your local machine:
   ```bash
   git clone <repository-url>
   ```

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

### Safety and Security

- **Client Secrets**: Never expose your client secret in client-side code. Use environment variables or server-side code for secure handling.
- **Reauthorization**: Users may need to reauthorize every hour due to Spotify's token expiration policy. This may never be resolved in the code (You can probably find a workaround)
- **Vulnerabilities**: The code may contain vulnerabilities that could potentially compromise the security of your application. Review the code and address any security issues before deploying publicly.

### Expected Behavior

The site will display a white screen until music is being played. After authorization, it will display the currently playing song information.

---

<img width="1680" alt="Screenshot" src="https://github.com/11ason/Spotify-Now-Playing/assets/146950994/2d4e8cdc-a574-4f6f-802a-7081d92c56a4">


---
Created with <3 by Mason
