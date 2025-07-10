// Textos rotativos
const texts = [
    {
        title: "Servicios Garantizados",
        description: "Nuestro equipo de desarrolladores, diseñadores y más están dispuestos a ofrecerte la mejor calidad y a terminar tus productos cuanto antes."
    },
    {
        title: "Calidad Premium",
        description: "Ofrecemos productos de muy buena calidad, gracias a nuestros expertos. Todo lo mejor para el cliente."
    },
    {
        title: "Equipo Elite",
        description: "Profesionales certificados en cada área de desarrollo para la mejor atención."
    },
    {
        title: "Soporte 24/7",
        description: "Siempre disponibles para ayudarte en cualquier momento que lo necesites."
    }
];

let currentIndex = 0;
const titleElement = document.querySelector('.rotating-text');
const descElement = document.getElementById('rotating-description');

function rotateText() {
    currentIndex = (currentIndex + 1) % texts.length;
    titleElement.textContent = texts[currentIndex].title;
    descElement.textContent = texts[currentIndex].description;
}

setInterval(rotateText, 3000); // Cambia cada 3 segundos