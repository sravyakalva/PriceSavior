/**
 * Created by sravyakalva on 9/14/16.
 */
$(document).ready(function () {
    $('#signUpForm').dialog({autoOpen:false})
    $('#signUpLink').click(function(){
       $('#signUpForm').dialog('open');
    });
});