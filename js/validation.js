$(document).ready(function(){
    $("#firstName").bt();
    $("#lastName").bt();
    $("#userName").bt();
    $("#password").bt();
    $("#confirmPassword").bt();
    $("#email").bt();
    $.validator.addMethod('strongPassword', function(value, element){
        return this.optional(element)
        || value.length >= 6
        && /\d/.test(value)
        &&/[a-z]/i.test(value);
    }, 'Your password must be atleast 6 characters long and contain atleast one number and one characters')

    
    $.validator.setDefaults({
        errorClass: 'help-block',
        highlight: function(element){
            $(element)
            .closest('.form-group')
            .addClass('has-error');
        },
        unhighlight: function(element){
            $(element)
            .closest('.form-group')
            .removeClass('has-error');
        }
      
    });

    $("#userName").focus(function(){
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        if(firstName && lastName && !this.value){
            this.value = firstName + "." + lastName;
        }
    });


    $("#register-form").validate({
        rules:{
            firstName:{
                required: true,
                nowhitespace: true,
                lettersonly: true
            },
            lastName:{
                required: true
            },
            userName:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            password: {
                required: true,
                strongPassword: true
            },
            confirmPassword:{
                required: true,
                equalTo: "#password"
            }  

        },
        messages:{
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            confirmPassword: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long",
                equalTo: "Please enter the same password as above"
            },
            email:{
                required: "Please enter an email address",
                email:"Please enter a <em>Valid</em> email address"
            }

        }
    });

});