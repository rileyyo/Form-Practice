document.addEventListener("DOMContentLoaded", function () {
    var password = document.querySelector("#password")
    var confirm_password = document.querySelector("#confirm-password")
    var error_message = document.querySelector("#password-error")
    console.log(password)
    console.log(confirm_password)
    console.log(error_message)

    password.addEventListener("input", function () {
      check(password, confirm_password, error_message);
    });
    confirm_password.addEventListener("input", function () {
      check(password, confirm_password, error_message);
    });
})

var check = function (password, confirm_password, error_message) {
    if (password.value == confirm_password.value)
    {
      password.setCustomValidity("")
      confirm_password.setCustomValidity("")
      error_message.style.visibility = "hidden"
      console.log("yep")
    }
    else {
      password.setCustomValidity("Passwords do not match.")
      confirm_password.setCustomValidity("Passwords do not match.")
      error_message.style.visibility = "visible"
      console.log("nop")
    }
}

