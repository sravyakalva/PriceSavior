/**
 * Created by sravyakalva on 9/14/16.
 */
$(document).ready(function () 
{
    $('#signUpForm').dialog({autoOpen:false})
    $('#signUpLink').click(function(){
       $('#signUpForm').dialog('open');
       // validate();
       // $('input').on('keyup', validate);
    });
    
});

function validate()
{

    var inputsWithValues = 0;

    // get all input fields except for type='submit'
    var myInputs = $("input:not([type='submit'])");

    myInputs.each(function() 
    {
        // if it has a value, increment the counter
        if ($(this).val()) 
        {

                     inputsWithValues += 1;

           
        }
    });
    if (inputsWithValues == myInputs.length) 
    {
         $("input[type=submit]").prop("disabled", false);
    } else {
        $("input[type=submit]").prop("disabled", true);
    }
}
function validatePassword()
{
    var match =$("input[name='password']").val()==$("input[name='confirmPassword']").val();
    if(!match)
        {
            $("input[name='confirmPassword']").each(function(){
               this.setCustomValidity("Passwords Don't Match!"); 
            });
        }
}



//Updates firebase to add new users
function UpdateSignUpInformation()
{

    var username = $("input[name='username']").val();
    var password = $("input[name='password']").val();
    var zipcode = $("input[name='zipcode']").val();
    var email = $("input[name='email']").val();

    //Sets the node to the username
    var node = firebase.database().ref().child(username);
    node.set({
        "Username": username,
        "Password": password,
        "Zipcode":zipcode,
        "Email": email
    });
}
// Reads from firebase to console.
function giveBackUserInfo(){

    var childCountRef = firebase.database().ref().child('kiko');
    childCountRef.on('value', function(snapshot){
        var data = snapshot;
        console.log(data.username);
    });
}



