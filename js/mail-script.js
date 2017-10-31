$("#contactForm").submit(function(event){
    // cancels the form submission
    event.preventDefault();
});


function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
 
    $.ajax({
        type: "POST",
        url: "../php/mail-process.php",
        data: "name=" + name + "&email=" + email + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            }
        }
    });
}


function formSuccess(){
    $( "#msgSubmit" ).removeClass( "hidden" );
}