function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Here you can implement your authentication logic
    // For simplicity, I'm just checking if the username and password are not empty
    if (username && password) {
        alert("Login successful!");
        // Redirect the user to another page or perform any other action
    } else {
        alert("Please enter a username and password.");
    }
}
