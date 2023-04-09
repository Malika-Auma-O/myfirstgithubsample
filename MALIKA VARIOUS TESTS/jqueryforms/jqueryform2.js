//https://jqueryvalidation.org/
//https://jqueryvalidation.org/documentation/ has list of built in validation methods
//https://github.com/jquery-validation/jquery-validation/tree/master/src/additional

$.validator.setDefaults({
    submitHandler: function() {
        alert("submitted!");
    }
});

$().ready(function() {
    // validate the comment form when it is submitted
    $("#commentForm").validate();

    // validate signup form on keyup and submit
    $("#signupForm").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            username: {
                required: true,
                minlength: 2
            },
            password: {
                required: true,
                minlength: 5
            },
            confirm_password: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            },
            email: {
                required: true,
                email: true
            },
            topic: {
                required: "#newsletter:checked",
                minlength: 2
            },
            agree: "required"
        },
        messages: {
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
            username: {
                required: "Please enter a username",
                minlength: "Your username must consist of at least 2 characters"
            },
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            confirm_password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long",
                equalTo: "Please enter the same password as above"
            },
            email: "Please enter a valid email address",
            agree: "Please accept our policy",
            topic: "Please select at least 2 topics"
        }
    });

    // propose username by combining first- and lastname
    $("#username").focus(function() {
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        if (firstname && lastname && !this.value) {
            this.value = firstname + "." + lastname;
        }
    });

    //code to hide topic selection, disable for demo
    var newsletter = $("#newsletter");
    // newsletter topics are optional, hide at first
    var inital = newsletter.is(":checked");
    var topics = $("#newsletter_topics")[inital ? "removeClass" : "addClass"]("gray");
    var topicInputs = topics.find("input").attr("disabled", !inital);
    // show when newsletter is checked
    newsletter.click(function() {
        topics[this.checked ? "removeClass" : "addClass"]("gray");
        topicInputs.attr("disabled", !this.checked);
    });
});


/*
$(document).ready(function(){
    // validate the sign-up-form on keyup and submit
    $("#sign-up-form").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                phoneUS: true
            },
            password: {
                required: true,
                minlength: 8,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/
            },
            confirm_password: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            }
        },
        messages: {
            email: "Please enter a valid email address",
            phone: "Enter your phone number.",
            password : {
                minlength: "Use 8 or more characters",
                pattern: "Use upper and lower case letters",
                pattern: "Use a number",
                pattern: "Use a symbol"
            },
            confirm_password: "Confirm password field does not match the password field."
        }
    });

    //code to hide verify-message
    let  verifyMessage = $("#verify-message");
    verifyMessage.hide();

    //show verify-message when phoneInput is clicked
    let phoneInput = $("#phone");
    phoneInput.click(function() {
        verifyMessage.show();
    });

    //code to hide hide_password
    let confirmPassword = $("#hide_password")
    confirmPassword.hide();

    //show confirmPassword when passwordInput is clicked
    let passwordInput = $("#password");
    passwordInput.click(function(){
        confirmPassword.show();
    })



})
*/