require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

console.log("Hello World");

// --- Logger middleware (root-level) ---
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

// Static assets
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false}));

// Root page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// JSON API
app.get('/json', (req, res) => {
  const msg = 'Hello json';
  const style = process.env.MESSAGE_STYLE;
  res.json({ message: style === 'uppercase' ? msg.toUpperCase() : msg });
});

// /now -> returns current time
app.get('/now',
  (req, res, next) => {
    req.time = new Date().toString(); // middleware adds time
    next();
  },
  (req, res) => {
    res.json({ time: req.time }); // final handler sends JSON
  }
);

// Echo server: GET /:word/echo -> { "echo": "<word>" }
app.get('/:word/echo', (req, res) => {
  const {word} = req.params;  // word comes from the URL 
  res.json({ echo: word }); // exact format required by FCC 
});

// GET /name?first=firstname&last=lastname  -> { name: "firstname lastname" }
app.route('/name').get((req, res) => {
  const { first, last } = req.query;
  res.json({ name: `${first} ${last}`});  // exact format FCC expects
});

module.exports = app;





































 module.exports = app;
