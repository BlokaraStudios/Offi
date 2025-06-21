document.addEventListener('DOMContentLoaded', function() {
    let frases = window.frases || [
        'Tu Proyecto, Tu Visión, Nuestra Experiencia',
        'Tu Proyecto, Tu Visión, Nuestro Trabajo',
        '¡Hazlo Épico con Blokara Studios!',
        'Soluciones creativas, resultados reales.'
    ];
    let idx = 0;
    setInterval(() => {
        idx = (idx + 1) % frases.length;
        document.getElementById('rotating-text').innerHTML = `<i class='fas fa-quote-left'></i> ${frases[idx]}`;
    }, 3000);
    const cards = document.querySelectorAll('.hub-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.03)';
            this.style.boxShadow = '0 16px 48px #ff2d5522';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
    const bg = document.querySelector('.background-animated');
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        bg.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
    });
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    // Actualizar frases dinámicamente al cambiar idioma
    if(document.getElementById('lang-switch')) {
        document.getElementById('lang-switch').addEventListener('change', function() {
            frases = window.frases;
            idx = 0;
            document.getElementById('rotating-text').innerHTML = `<i class='fas fa-quote-left'></i> ${frases[idx]}`;
        });
    }
});