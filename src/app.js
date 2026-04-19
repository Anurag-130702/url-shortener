const express = require('express');
const urlRoutes = require('./routes/url.routes');
const rateLimiter = require('./middleware/rateLimiter');

const app = express();

app.use(express.json());
app.use(rateLimiter);

app.use('/', urlRoutes);

module.exports = app;