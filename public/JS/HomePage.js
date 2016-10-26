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
            var username = $("input[name='username']").val();
            var password = $("input[name='password']").val();
            var zipcode = $("input[name='zipcode']").val();
            var email = $("input[name='email']").val();

            //Replaces "." since Firebase does not accept periods
            var account = email.replace(/\./g,'|');


            //Sets the node to the email, each node is a child of User Accounts
            var node = accountsRef.child(account);
            node.set({
                "Username": username,
                "Password": password,
                "Zipcode":zipcode,
                "Email": email
            });

            //Closes the popup after hitting "submit"
            $('#signUpForm').dialog('close');
        });
    });
});








