function registerUser() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var crop = document.getElementById("crop").value;

    // Here you can implement your registration logic
    // For simplicity, I'm just checking if all fields are not empty
    if (username && email && password && confirmPassword && crop) {
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }
        alert("Registration successful!");
        // Redirect the user to another page or perform any other action
    } else {
        alert("Please fill in all fields.");
    }
}
