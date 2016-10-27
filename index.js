var firebase = require("firebase");
var express = require('express');
var app = express();
var gcloud = require('google-cloud');
var multer = require("multer");
var uploader = multer({ storage: multer.memoryStorage({}) });


firebase.initializeApp({
  serviceAccount: "PriceSavior-6bc819483d90.json",
  databaseURL: "https://pricesavior-23da4.firebaseio.com"
});
var accountsRef = firebase.database().ref();

var port = process.env.PORT || 3000;

var counter = 0;

var CLOUD_BUCKET="pricesavior-23da4.appspot.com"; //From storage console, list of buckets
var gcs = gcloud.storage({
  projectId: '581506839881', //from storage console, then click settings, then "x-goog-project-id"
  keyFilename: 'PriceSavior-6bc819483d90.json' //the key we already set up
});
function getPublicUrl (filename) {
  return 'https://storage.googleapis.com/' + CLOUD_BUCKET + '/' + filename;
}

var bucket = gcs.bucket(CLOUD_BUCKET);

//From https://cloud.google.com/nodejs/getting-started/using-cloud-storage
function sendUploadToGCS (req, res, next) {
  console.log("POST HANDLER START");

  if (!req.file) {
    return next();
  }

  var gcsname = Date.now() + req.file.originalname;
  var file = bucket.file(gcsname);


  var stream = file.createWriteStream({
    metadata: {
      contentType: req.file.mimetype
    }
  });

  stream.on('error', function (err) {
    req.file.cloudStorageError = err;
    console.log("ERROR");
    console.log(err);
    next(err);
  });

  stream.on('finish', function () {
    req.file.cloudStorageObject = gcsname;
    req.file.cloudStoragePublicUrl = getPublicUrl(gcsname);
    var options = {
      entity: 'allUsers',
      role: gcs.acl.READER_ROLE
    };
    file.acl.add(options, function(a,e){next();});//Make file world-readable; this is async so need to wait to return OK until its done
  });

  stream.end(req.file.buffer);
}


app.post('/createAccount', function (req, res) {
  console.log("New User");
  //Sets the node to the email, each node is a child of User Accounts

  var node = accountsRef.child('User Accounts');
  node.set({
    Username: req.body.accountNew[0],
    Password: req.body.accountNew[1],
    Zipcode: req.body.accountNew[2],
    Email: req.body.accountNew[3]

  });
  res.send("Account has been made!")
});



app.get('/', function (req, res) {
  res.send('Hello World has been said ' + counter + ' times!');
  counter++;
});

app.use(express.static('public'));

app.listen(port, function () {
  console.log('Example app listening on port' + port);
});