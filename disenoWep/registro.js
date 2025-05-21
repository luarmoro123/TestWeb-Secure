// Actualizar año automáticamente
document.getElementById('current-year').textContent = new Date().getFullYear();

// Password strength checker
const passwordInput = document.getElementById('password');
const passwordStrength = document.getElementById('passwordStrength');
const passwordStrengthText = document.getElementById('passwordStrengthText');
const confirmPasswordInput = document.getElementById('confirmPassword');
const passwordMatch = document.getElementById('passwordMatch');

passwordInput.addEventListener('input', function () {
    const password = passwordInput.value;
    let strength = 0;

    // Length check
    if (password.length >= 8) {
        strength += 25;
    }

    // Contains lowercase
    if (/[a-z]/.test(password)) {
        strength += 25;
    }

    // Contains uppercase
    if (/[A-Z]/.test(password)) {
        strength += 25;
    }

    // Contains number or special char
    if (/[0-9!@#$%^&*(),.?":{}|<>]/.test(password)) {
        strength += 25;
    }

    // Update UI
    passwordStrength.style.width = strength + '%';

    // Remove all classes first
    passwordStrength.className = 'password-strength-bar';
    passwordStrengthText.className = 'password-strength-text';

    if (strength < 25) {
        passwordStrength.classList.add('password-strength-weak');
        passwordStrengthText.textContent = 'Muy débil';
        passwordStrengthText.style.color = '#ef4444';
    } else if (strength < 50) {
        passwordStrength.classList.add('password-strength-weak');
        passwordStrengthText.textContent = 'Débil';
        passwordStrengthText.style.color = '#f97316';
    } else if (strength < 75) {
        passwordStrength.classList.add('password-strength-medium');
        passwordStrengthText.textContent = 'Media';
        passwordStrengthText.style.color = '#f59e0b';
    } else {
        passwordStrength.classList.add('password-strength-strong');
        passwordStrengthText.textContent = 'Fuerte';
        passwordStrengthText.style.color = '#10b981';
    }

    // Check if passwords match
    checkPasswordsMatch();
});

confirmPasswordInput.addEventListener('input', checkPasswordsMatch);

function checkPasswordsMatch() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (confirmPassword === '') {
        passwordMatch.classList.remove('visible', 'success', 'error');
        return;
    }

    if (password === confirmPassword) {
        passwordMatch.textContent = '¡Las contraseñas coinciden!';
        passwordMatch.className = 'password-match visible success';
    } else {
        passwordMatch.textContent = 'Las contraseñas no coinciden';
        passwordMatch.className = 'password-match visible error';
    }
}

// Form submission handler
document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const organization = document.getElementById('organization').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate passwords match
    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    // Validate terms checkbox
    if (!document.getElementById('terms').checked) {
        alert('Debes aceptar los términos y condiciones');
        return;
    }

    // Here you would normally send the data to your backend
    console.log('Registration data:', { firstName, lastName, email, organization, password });

    // For demo purposes, simulate a successful registration
    alert('¡Registro exitoso! Redirigiendo al inicio de sesión...');

    // Redirect to login (in a real app)
    // window.location.href = 'login.html';
});