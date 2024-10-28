// Switch between Login and Signup
$("#signup").click(function() {
  $("#first").fadeOut("fast", function() {
    $("#second").fadeIn("fast");
  });
});

$("#signin").click(function() {
  $("#second").fadeOut("fast", function() {
    $("#first").fadeIn("fast");
  });
});

// Form validation for login
$(function() {
  $("form[name='login']").validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      password: {
        required: true
      }
    },
    messages: {
      email: "Please enter a valid email address",
      password: "Please enter your password"
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});

// Form validation for registration
$(function() {
  $("form[name='registration']").validate({
    rules: {
      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 5
      },
      Cpassword: {
        required: true,
        equalTo: "#password"
      }
    },
    messages: {
      firstname: "Please enter your first name",
      lastname: "Please enter your last name",
      email: "Please enter a valid email address",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
      Cpassword: {
        required: "Please confirm your password",
        equalTo: "Passwords do not match"
      }
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});

// Redirect to interest.html only if login form is valid
$(document).ready(function() {
  $("#log").click(function(e) {
    e.preventDefault();
    if ($("form[name='login']").valid()) {
      window.location.href = "interest.html";
    }
  });
});

// Prevent signup redirect if form is invalid
$(document).ready(function() {
  $("#signinn").click(function(event) {
    event.preventDefault();
    if ($("form[name='registration']").valid()) {
      const Fname = $("#firstname").val();
      const Lname = $("#lastname").val();
      const newperson = new Name(Fname, Lname);
      Fname1 = newperson.fullname();
      $("#namess").append(Fname1);
      $("#sasasa").append(Fname1);
      window.location.href = "interest.html";
    }
  });
});

// Constructor and method for handling full name
function Name(name1, name2) {
  this.Firstname = name1;
  this.Lastname = name2;
}
Name.prototype.fullname = function() {
  return this.Firstname + " " + this.Lastname;
};
