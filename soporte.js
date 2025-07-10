// Configuración de EmailJS
const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_eeweg3r',
    TEMPLATE_ID: 'template_zw15n6b',
    PUBLIC_KEY: 'KClowgIj1k6B1J6cg'
};

// Inicializar EmailJS
(function() {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
})();

document.getElementById('support-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('.submit-btn');
    const messageDiv = document.getElementById('form-message');
    
    // Cambiar texto del botón durante el envío
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;
    
    // Obtener datos del formulario
    const formData = {
        email: form.email.value,
        name: form.name.value,
        lastname: form.lastname.value || 'No especificado',
        subject: form.subject.value,
        message: form.message.value
    };
    
    // Enviar email
    emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formData
    )
    .then(() => {
        // Éxito
        messageDiv.textContent = '¡Mensaje enviado con éxito! Te responderemos pronto.';
        messageDiv.className = 'message success';
        form.reset();
    })
    .catch((error) => {
        // Error
        messageDiv.textContent = 'Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.';
        messageDiv.className = 'message error';
        console.error('EmailJS Error:', error);
    })
    .finally(() => {
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar reporte';
        submitBtn.disabled = false;
    });
});