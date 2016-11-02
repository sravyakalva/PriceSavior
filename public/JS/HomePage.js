/**
 * Created by sravyakalva on 9/14/16.
 */

//Sets the root of the accounts
var accountsRef = firebase.database().ref("Users");

$(document).ready(function () 
{
    //Prevents popup from showing on load
    $('#signUpForm').dialog({autoOpen:false})
    $('#signUpLink').click(function(){
       $('#signUpForm').dialog('open');

        $('#Registration').submit(function(ev){
            //Closes the popup after hitting "submit"
            $('#signUpForm').dialog('close');
        });
    });
});








