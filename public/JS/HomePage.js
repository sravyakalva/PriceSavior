/**
 * Created by sravyakalva on 9/14/16.
 */
$(document).ready(function () 
{
    $('#signUpForm').dialog({autoOpen:false})
    $('#signUpLink').click(function(){
       $('#signUpForm').dialog('open');
        validate();
        $('input').on('keyup', validate);
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
            if($(this).valid()==true)
                {
                     inputsWithValues += 1;
                }
           
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
function UpdateSignUpInformation()
{
    var signUp=firebase.database().ref("SignUp");
    signUp.push({"Username":($("input[name='username']").val()),"Password":($("input[name='password']").val()),"Zipcode":($("input[name='zipcode']").val()),"Email":($("input[name='email']").val())});
    
}


