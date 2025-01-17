// server.js
const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('combined'));

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Server closed');
    });
});
