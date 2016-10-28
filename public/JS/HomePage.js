/**
 * Created by sravyakalva on 9/14/16.
 */

//Sets the root of the accounts
var accountsRef = firebase.database().ref("User Accounts");

$(document).ready(function () 
{
    //Prevents popup from showing on load
    $('#signUpForm').dialog({autoOpen:false})
    $('#signUpLink').click(function(){
       $('#signUpForm').dialog('open');
       // validate();
       // $('input').on('keyup', validate);
        $('#Registration').submit(function(ev){


            ev.preventDefault(); // to stop the form from submitting
            var accountInput = $("input[name='username']").val();

            $.post('/createAccount',{accountNew: accountInput});

            //Closes the popup after hitting "submit"
            $('#signUpForm').dialog('close');
        });
    });
});








