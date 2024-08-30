function showLogin() {
    document.getElementById("login-form").classList.remove("hidden");
    document.getElementById("register-form").classList.add("hidden");
}

function showRegister() {
    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("register-form").classList.remove("hidden");
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateRegistration() {
    // Clear previous error messages
    document.getElementById("register-usernameError").innerHTML = "";
    document.getElementById("register-emailError").innerHTML = "";
    document.getElementById("register-passwordError").innerHTML = "";

    // Get form values
    const username = document.getElementById("register-username").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    let isValid = true;

    // Username validation
    if (username.length < 3) {
        document.getElementById("register-usernameError").innerHTML = "Username must be at least 3 characters long.";
        isValid = false;
    }

    // Email validation
    if (!validateEmail(email)) {
        document.getElementById("register-emailError").innerHTML = "Please enter a valid email address.";
        isValid = false;
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById("register-passwordError").innerHTML = "Password must be at least 6 characters long.";
        isValid = false;
    }

    if (isValid) {
        // Store user data in an object
        const userData = {
            username: username,
            email: email,
            password: password
        };

        // Save the user data in localStorage
        localStorage.setItem("userData", JSON.stringify(userData));

        // Redirect to a different page 
        alert("Registration successful!");
        showLogin();
    }

    return false; 
}

function validateLogin() {
    // Clear previous error messages
    document.getElementById("login-usernameError").innerHTML = "";
    document.getElementById("login-passwordError").innerHTML = "";

    // Get form values
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    // Retrieve stored user data from localStorage
    const storedData = localStorage.getItem("userData");
    const userData = storedData ? JSON.parse(storedData) : null;

    let isValid = true;

    // Validate username and password
    console.log("Entered username:", username);
    console.log("Entered password:", password);
    console.log("Stored user data:", userData);

    if (!userData || userData.username !== username || userData.password !== password) {
        document.getElementById("login-usernameError").innerHTML = "Invalid username or password.";
        isValid = false;
    }

    if (isValid) {
        // Simulate a successful login
        // Redirect to a different page
        window.location.href = "https://www.google.com/";
    }

    return false;
}
