const path = require('path');
const express = require('express');
const app = express();

// static middleware so browser can request 'bundle.js'
app.use(express.static(path.join(__dirname, './path/to/your/static/assets')));

// other routes and middlewares

// the following belongs at the end of server logic
// only possible exception: middleware to serve up 500 errors for server problems
// note: middleware to serve up 404s will still go above this
app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
