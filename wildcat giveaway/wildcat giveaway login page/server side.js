const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle form submissions
app.post('/process-message', (req, res) => {
    const sender = req.body.sender;
    const message = req.body.message;

    // Here, you can perform any processing or store the data as needed
    console.log(Received message from ${sender}: ${message});

    res.send('Received successfully! Kindly wait for feedback');
});

// Start the server
app.listen(port, () => {
    console.log(Server running at http://localhost:${port});
});