const pw = document.getElementById('password');
const toggle = document.getElementById('togglePassword');

if (pw && toggle) {
    toggle.addEventListener('click', () => {
        const isPassword = pw.getAttribute('type') === 'password';
        pw.setAttribute('type', isPassword ? 'text' : 'password');

        // Aggiorna icona (Font Awesome)
        const icon = toggle.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-eye', !isPassword);     // mostra occhio aperto quando è text
            icon.classList.toggle('fa-eye-slash', isPassword); // occhio barrato quando è password
        }

        // Aggiorna attributi accessibilità
        toggle.setAttribute('aria-pressed', String(isPassword));
        toggle.setAttribute('aria-label', isPassword ? 'Nascondi password' : 'Mostra password');
    });
}