var firebase = require("firebase");
var express = require('express');
var app = express();

firebase.initializeApp({
  serviceAccount: "./PriceSavior-6bc819483d90.json",
  databaseURL: "https://pricesavior-23da4.firebaseio.com"
});

var port = process.env.PORT || 3000;

var counter = 0;
app.get('/', function (req, res) {
  res.send('Hello World has been said ' + counter + ' times!');
  counter++;
});

app.use(express.static('public'));

app.listen(port, function () {
  console.log('Example app listening on port' + port);
});