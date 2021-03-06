const express = require('express');
const app = express();

// Express Middleware
// Between an incoming request
// and an outgoing response
app.use(require('./middleware/logger'));

// Body Parser
app.use(express.json());

// if http://localhost:7890/tweets
// go to tweetsRoutes
app.use('/tweets', require('./routes/tweets'));

// eslint-disable-next-line no-unused-vars
app.use(require('./middleware/not-found'));

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(500).send({ error: err });
});

module.exports = app;
