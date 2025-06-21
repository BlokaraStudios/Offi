(function() {
    const SESSION_KEY = 'blokara_session';
    const LOCAL_KEY = 'blokara_local';
    const BACKUP_KEY = 'blokara_backup';
    const SAFE_ORIGIN = window.location.protocol + '//' + window.location.host;
    const STEALTH = true;
    function log(msg) { if (!STEALTH) console.log('[SEGURIDAD]', msg); }
    function warn(msg) { if (!STEALTH) console.warn('[SEGURIDAD]', msg); }
    function error(msg) { if (!STEALTH) console.error('[SEGURIDAD]', msg); }
    if (window.location.protocol === 'file:') {
        alert('Por seguridad, este sitio no puede abrirse localmente. Usa un servidor web.');
        window.location.href = 'https://blokarastudios.com';
        return;
    }
    try {
        if (localStorage.getItem(SESSION_KEY)) {
            if (sessionStorage.getItem(SESSION_KEY)) {
            } else {
                sessionStorage.setItem(SESSION_KEY, 'active');
            }
        } else {
            localStorage.setItem(SESSION_KEY, 'active');
            sessionStorage.setItem(SESSION_KEY, 'active');
        }
    } catch (e) { warn('Error en anti-duplicación de sesión'); }
    function backupStorage() {
        try {
            const backup = {
                local: {...localStorage},
                session: {...sessionStorage}
            };
            localStorage.setItem(BACKUP_KEY, JSON.stringify(backup));
        } catch (e) { warn('No se pudo respaldar storage'); }
    }
    function restoreStorage() {
        try {
            const backup = JSON.parse(localStorage.getItem(BACKUP_KEY));
            if (backup && backup.local) {
                for (const k in backup.local) localStorage.setItem(k, backup.local[k]);
            }
            if (backup && backup.session) {
                for (const k in backup.session) sessionStorage.setItem(k, backup.session[k]);
            }
        } catch (e) { warn('No se pudo restaurar storage'); }
    }
    backupStorage();
    window.addEventListener('storage', function(e) {
        if (e.storageArea === localStorage || e.storageArea === sessionStorage) {
            restoreStorage();
        }
    });
    setInterval(() => {
        try {
            if (!localStorage.getItem(SESSION_KEY) || !sessionStorage.getItem(SESSION_KEY)) {
                restoreStorage();
            }
        } catch (e) { warn('Error en verificación de storage'); }
    }, 3000);
    function sanitizeInput(input) {
        return input.replace(/[<>"'`]/g, '');
    }
    document.addEventListener('input', function(e) {
        if (e.target && e.target.value) {
            e.target.value = sanitizeInput(e.target.value);
        }
    }, true);
    document.addEventListener('submit', function(e) {
        const els = e.target.querySelectorAll('input, textarea');
        els.forEach(el => {
            if (el.value) el.value = sanitizeInput(el.value);
        });
    }, true);
    document.addEventListener('keydown', function(e) {
        if (
            e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
            (e.ctrlKey && e.key === 'U')
        ) {
            e.preventDefault();
            warn('Intento de abrir herramientas de desarrollo bloqueado.');
        }
    });
    let devtoolsOpen = false;
    setInterval(() => {
        if (window.outerWidth - window.innerWidth > 160 || window.outerHeight - window.innerHeight > 160) {
            if (!devtoolsOpen) warn('DevTools detectado.');
            devtoolsOpen = true;
        } else {
            devtoolsOpen = false;
        }
    }, 1000);
    if (/[<>"'`]/.test(window.location.search + window.location.hash)) {
        window.location.href = SAFE_ORIGIN;
    }
    window.onerror = function() { return STEALTH; };
    window.onunhandledrejection = function() { return STEALTH; };
    log('Seguridad avanzada activada.');
})();
