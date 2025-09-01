const express = require('express');
const path = require('path');
const app = express();

console.log("Hello World");

// If you still have a previous root route like this, comment it out:
// app.get("/", (req, res) => res.send("Hello Express"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

module.exports = app;





































 module.exports = app;
