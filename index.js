/**
 * Created by kikovinh on 10/26/2016.
 */
var firebase = require("firebase");
var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


firebase.initializeApp({
    serviceAccount:"./pricesavior-node-client-service-account.json",
    databaseURL:"https://pricesavior-23da4.firebaseio.com"
});

var ref = firebase.database().ref('Users');
/*ref.once('value').then(function(snap){
    console.log('snap.val()', snap.val());
});*/
var	port	=	process.env.PORT	||	3000;


app.post('/HTML/Home.html', function (req, res) {

    var email = req.body.email;
    email = email.replace(/\./g, '|');

    //Sets the node to the email, each node is a child of User Accounts
    ref.child(email).set({
            Username: req.body.username,
            Password: req.body.confirmPassword,
            Zipcode: req.body.zipcode
    },function () {
        res.sendFile('public/HTML/Home.html', { root : __dirname});
    }).catch(function(){
        res.status(403);
        res.send();
    });

    console.log("You have created a new user");
});


app.use(express.static('public'));

app.get('/', function (req,	res) {
    res.send('Hello	World!');
});


app.listen(port, function () {
    console.log('Example	app	listening	on	port'	+	port);
});