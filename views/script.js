const form = document.getElementById('form');
const fullname = document.getElementById('name');
const email = document.getElementById('email');
const errorMessage = document.querySelector('.errorMessage'); // Changed to class selector
const confirmpass = document.getElementById('confirmPassword');
const password = document.getElementById('password');
const successMessage = document.querySelector('.successMessage'); // Changed to class selector

form.addEventListener('submit', (e) => {
    let hasError = false; // Flag to track if there's an error

    // Clear previous messages
    errorMessage.innerText = "";
    successMessage.innerText = "";

    // Validate full name
    if (!fullname.value.trim()) {
        errorMessage.innerText = "Please enter your full name!";
        fullname.classList.add('border-2', 'border-[#FF0000]');
        hasError = true;
    } else {
        fullname.classList.remove('border-2', 'border-[#FF0000]');
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
    if (!emailRegex.test(email.value.trim())) {
        errorMessage.innerText = "Please enter a valid email address!";
        email.classList.add('border-2', 'border-[#FF0000]');
        hasError = true;
    } else {
        email.classList.remove('border-2', 'border-[#FF0000]');
    }

    // Validate password
    if (!password.value.trim()) {
        errorMessage.innerText = "Please enter a password!";
        password.classList.add('border-2', 'border-[#FF0000]');
        hasError = true;
    } else {
        password.classList.remove('border-2', 'border-[#FF0000]');
    }

    // Validate confirm password
    if (password.value !== confirmpass.value) {
        errorMessage.innerText = "Passwords do not match!";
        confirmpass.classList.add('border-2', 'border-[#FF0000]');
        hasError = true;
    } else {
        confirmpass.classList.remove('border-2', 'border-[#FF0000]');
    }

    // If there's an error, prevent form submission
    if (hasError) {
        e.preventDefault();
    } else {
        successMessage.innerText = "Account created successfully!";
    }
});