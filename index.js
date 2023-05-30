const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('こんにちは');
});

app.listen(5050, function () {
  console.log('listeing on localhost port 5000');
});
