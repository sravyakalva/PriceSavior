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
            var accountInput = [];
            accountInput.push($("input[name='username']").val());
            accountInput.push($("input[name='password']").val());
            accountInput.push($("input[name='zipcode']").val());
            var email = $("input[name='email']").val();

            //Replaces "." since Firebase does not accept periods
            email = email.replace(/\./g,'|');

            accountInput.push(email);
            $.post('/createAccount',{accountNew: accountInput});

            //Closes the popup after hitting "submit"
            $('#signUpForm').dialog('close');
        });
    });
});








