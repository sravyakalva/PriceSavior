/**
 * Created by kikovinh on 10/26/2016.
 */

var	express	= require('express');
var	app	= express();
var	port	=	process.env.port	||	3000;
app.get('/', function (req,	res) {
    res.send("You're a bitch");
});
app.listen(port, function () {
    console.log('Example	app	listening	on	port'	+	port);
});