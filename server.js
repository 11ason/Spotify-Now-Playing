const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the authentication page
app.get('/auth', (req, res) => {
    res.sendFile(path.join(__dirname, 'auth.html'));
    console.log(`Pushing Page auth.html`);
});

// Route for the main page
app.get('/main', (req, res) => {
    res.sendFile(path.join(__dirname, 'main.html'));
    console.log(`Pushing Page main.html`);
});

// Route for the TV main page
app.get('/TV', (req, res) => {
    res.sendFile(path.join(__dirname, 'TV.html'));
    console.log(`Pushing Page TV.html`);
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
