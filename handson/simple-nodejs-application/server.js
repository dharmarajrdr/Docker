/**
 * A simple Node.js service that returns a greeting message.
 */

const express = require('express');
const app = express();
const port = 3000;

// Define a route that returns a greeting message
app.get('/', (req, res) => {
    res.send('Hello, welcome to the simple Node.js application!');
});

// Start the server
app.listen(port, () => {
    console.log(`Service is running at http://localhost:${port}`);
});