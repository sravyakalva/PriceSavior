/**
 * Created by kikovinh on 11/2/2016.
 */
var provider = new firebase.auth.GoogleAuthProvider();
var user;
$(document).ready(function(){
   $("#Welcome").hide();
});
function signIn(){
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        user = result.user;
        $("#login").hide();
        $("#Welcome").show();
        $("#welcometext").html("Hello, "+ user.displayName);
        $("#welcometext").css({"text-align":"center"});
        $("#clickOnHome").html(" <a class='btn btn-lg btn-primary btn-block' style='background:orange' href='Home.html'>Go To Home</a>");

        // ...
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
}