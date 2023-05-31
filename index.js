const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('<h1>こんにちはの見出し</h1>');
});

app.listen(5050, function () {
  console.log('listening on localhost port 5050');
});
