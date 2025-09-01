const express = require('express');
const path = require('path');
const app = express();

console.log("Hello World");

// 1) serve static assets from /public
//  Requests like GET /public/style.css will be served from the /public folder.
app.use('/public', express.static(path.join(__dirname, 'public')));


// If you still have a previous root route like this, comment it out:
// app.get("/", (req, res) => res.send("Hello Express"));

// 2) Root route -> send index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

module.exports = app;





































 module.exports = app;
