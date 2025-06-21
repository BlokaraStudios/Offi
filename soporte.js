const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_eeweg3r',
    TEMPLATE_ID: 'template_zw15n6b',
    PUBLIC_KEY: 'KClowgIj1k6B1J6cg'
};

document.addEventListener('DOMContentLoaded', function() {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

    const soporteForm = document.getElementById('soporteForm');
    const mensajeExito = document.getElementById('mensajeExito');
    const submitBtn = document.getElementById('submitBtn');
    const nuevoReporteBtn = document.getElementById('nuevoReporteBtn');

    mensajeExito.style.display = 'none';

    document.getElementById('email').addEventListener('input', validateEmail);
    document.getElementById('nombre').addEventListener('input', validateNombre);
    document.getElementById('asunto').addEventListener('input', validateAsunto);
    document.getElementById('descripcion').addEventListener('input', validateDescripcion);

    soporteForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const isEmailValid = validateEmail();
        const isNombreValid = validateNombre();
        const isAsuntoValid = validateAsunto();
        const isDescripcionValid = validateDescripcion();
        if (!isEmailValid || !isNombreValid || !isAsuntoValid || !isDescripcionValid) {
            return;
        }
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        try {
            const formData = {
                from_email: document.getElementById('email').value,
                from_name: `${document.getElementById('nombre').value} ${document.getElementById('apellido').value || ''}`.trim(),
                subject: document.getElementById('asunto').value,
                message: document.getElementById('descripcion').value,
                date: new Date().toLocaleString()
            };
            await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                formData
            );
            soporteForm.style.display = 'none';
            mensajeExito.style.display = 'flex';
            mensajeExito.innerHTML = '<i class="fas fa-check-circle"></i> ¡Reporte enviado correctamente!<br><button id="nuevoReporteBtn" class="soporte-btn">Enviar otro reporte</button>';
            soporteForm.reset();
            document.getElementById('nuevoReporteBtn').onclick = function() {
                mensajeExito.style.display = 'none';
                soporteForm.style.display = 'flex';
            };
        } catch (error) {
            mensajeExito.style.display = 'flex';
            mensajeExito.innerHTML = '<i class="fas fa-times-circle"></i> Ocurrió un error al enviar tu reporte.<br><button id="nuevoReporteBtn" class="soporte-btn">Intentar de nuevo</button>';
            document.getElementById('nuevoReporteBtn').onclick = function() {
                mensajeExito.style.display = 'none';
                soporteForm.style.display = 'flex';
            };
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Reporte';
        }
    });

    nuevoReporteBtn.addEventListener('click', function() {
        mensajeExito.style.display = 'none';
        soporteForm.style.display = 'flex';
    });
});

function validateEmail() {
    const email = document.getElementById('email').value.trim();
    const error = document.getElementById('emailError');
    if (!email) {
        error.textContent = 'El email es obligatorio.';
        return false;
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        error.textContent = 'Email inválido.';
        return false;
    }
    error.textContent = '';
    return true;
}

function validateNombre() {
    const nombre = document.getElementById('nombre').value.trim();
    const error = document.getElementById('nombreError');
    if (!nombre) {
        error.textContent = 'El nombre es obligatorio.';
        return false;
    }
    error.textContent = '';
    return true;
}

function validateAsunto() {
    const asunto = document.getElementById('asunto').value.trim();
    const error = document.getElementById('asuntoError');
    if (!asunto) {
        error.textContent = 'El asunto es obligatorio.';
        return false;
    }
    error.textContent = '';
    return true;
}

function validateDescripcion() {
    const descripcion = document.getElementById('descripcion').value.trim();
    const error = document.getElementById('descripcionError');
    if (!descripcion) {
        error.textContent = 'La descripción es obligatoria.';
        return false;
    }
    error.textContent = '';
    return true;
}
