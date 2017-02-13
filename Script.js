
var password;
password="ScriptEd";

var guess;

$(document).ready(function(){
 console.log("ready");

   $("#submit").click(function(){
       console.log("click");
       guess = $('#words').val();
        console.log(guess);
        console.log(password);
        if (password===guess) {
            $('#after').append("WOOOOOOOHHHH!!111! You guessed the secret word!")
        }
   });
});