const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get('*', function (req, res) {
  res.send('hello world');
});

app.get('/env', function (req, res) {
  console.log('>>> env', process.env.NEWSAPI_API_KEY);
});
