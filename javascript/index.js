document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');

    menuButton.addEventListener('click', function () {
        // Alternar clase active para mostrar/ocultar menú
        navLinks.classList.toggle('active');

        // Cambiar icono del botón (opcional)
        const icon = menuButton.querySelector('svg');
        if (navLinks.classList.contains('active')) {
            icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
        } else {
            icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
        }
    });

    // Cerrar menú al hacer clic en enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            // Restaurar icono del menú (opcional)
            menuButton.querySelector('svg').innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
        });
    });
});