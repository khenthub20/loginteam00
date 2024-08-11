document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Hardcoded username and password for demonstration
    const correctUsername = 'admin';
    const correctPassword = '123';

    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
        messageElement.textContent = 'Login successful!';
        messageElement.style.color = 'green';

        // Redirect to welcome page after 1 second
        setTimeout(function() {
            window.location.href = 'welcome.html';
        }, 1000);
    } else {
        messageElement.textContent = 'Invalid username or password. Please try again.';
        messageElement.style.color = 'red';
    }
});
