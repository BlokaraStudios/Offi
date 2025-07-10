// Efecto de aparición suave para las tarjetas
document.addEventListener('DOMContentLoaded', () => {
    const planCards = document.querySelectorAll('.plan-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    // Efecto de pulso para el botón (opcional)
const discordBtn = document.querySelector('.discord-cta .discord-btn');
setInterval(() => {
    discordBtn.style.transform = 'scale(1.05)';
    setTimeout(() => {
        discordBtn.style.transform = 'scale(1)';
    }, 500);
}, 3000);

    planCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s, transform 0.5s';
        observer.observe(card);
    });
});