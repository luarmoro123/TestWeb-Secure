// Actualizar año automáticamente
document.getElementById('current-year').textContent = new Date().getFullYear();

// Form submission handler
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here you would normally send the data to your backend
    console.log('Login attempt:', { email, password });

    // For demo purposes, simulate a successful login
    alert('Inicio de sesión exitoso! Redirigiendo al dashboard...');

    // Redirect to dashboard (in a real app)
    // window.location.href = 'dashboard.html';
});