document.addEventListener('DOMContentLoaded', function() {
    const btnS4F = document.getElementById('btn-s4f');
    const btnWebs = document.getElementById('btn-webs');
    const content = document.getElementById('webs-content');
    let currentLang = document.getElementById('lang-switch') ? document.getElementById('lang-switch').value : 'es';
    let currentSection = null;

    const translations = {
        es: {
            s4f: {
                title: 'S4F Security',
                price: '+1 USD extra',
                features: [
                    'Protección Sencilla contra XSS',
                    'Eliminación de Errores Visibles',
                    'Protección contra SQLi',
                    'Prevención de Leaks Básicos'
                ]
            },
            plans: [
                {
                    title: 'Plan Starter',
                    price: '3 USD',
                    features: [
                        'Máximo 2 Páginas',
                        'Diseño Simple',
                        '1 Revisión Gratuita',
                        'Entrega en 1 a 3 Días',
                        'Resolución Básica (720P)'
                    ]
                },
                {
                    title: "Plan Pro <span class='badge'>Popular</span>",
                    price: '7 USD',
                    features: [
                        'Máximo 5 Páginas',
                        'GIFS/Videos incluidos',
                        '2 Revisiones Gratuitas',
                        '1 Cambio Gratis',
                        'Entrega en 1 a 3 Días',
                        'Resolución Pro (1080P)'
                    ]
                },
                {
                    title: 'Plan Max',
                    price: '10 USD',
                    features: [
                        'Máximo 10 Páginas',
                        'GIFS/Videos incluidos',
                        '3 Revisiones Gratuitas',
                        '1 Cambio Gratis',
                        'Optimización para PC y Móvil',
                        'Entrega de 1 a 5 Días',
                        'Resolución Pro+ (1080P - 2x)',
                        'Sonidos integrados',
                        '+1 Animación'
                    ]
                }
            ]
        },
        en: {
            s4f: {
                title: 'S4F Security',
                price: '+1 USD extra',
                features: [
                    'Simple XSS Protection',
                    'Visible Error Removal',
                    'SQLi Protection',
                    'Basic Leak Prevention'
                ]
            },
            plans: [
                {
                    title: 'Starter Plan',
                    price: '3 USD',
                    features: [
                        'Up to 2 Pages',
                        'Simple Design',
                        '1 Free Revision',
                        'Delivery in 1 to 3 Days',
                        'Basic Resolution (720P)'
                    ]
                },
                {
                    title: "Pro Plan <span class='badge'>Popular</span>",
                    price: '7 USD',
                    features: [
                        'Up to 5 Pages',
                        'GIFS/Videos included',
                        '2 Free Revisions',
                        '1 Free Change',
                        'Delivery in 1 to 3 Days',
                        'Pro Resolution (1080P)'
                    ]
                },
                {
                    title: 'Max Plan',
                    price: '10 USD',
                    features: [
                        'Up to 10 Pages',
                        'GIFS/Videos included',
                        '3 Free Revisions',
                        '1 Free Change',
                        'PC & Mobile Optimization',
                        'Delivery in 1 to 5 Days',
                        'Pro+ Resolution (1080P - 2x)',
                        'Integrated Sounds',
                        '+1 Animation'
                    ]
                }
            ]
        }
    };

    function renderS4F(lang) {
        const t = translations[lang].s4f;
        content.innerHTML = `
        <div class="webs-grid">
            <div class="webs-card highlight">
                <div class="webs-card-icon"><i class='fas fa-shield-alt'></i></div>
                <div class="webs-card-title">${t.title}</div>
                <div class="webs-card-price">${t.price}</div>
                <ul>
                    ${t.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>
        </div>
        `;
    }

    function renderPlans(lang) {
        const plans = translations[lang].plans;
        content.innerHTML = `
        <div class="webs-grid">
            <div class="webs-card">
                <div class="webs-card-title">${plans[0].title}</div>
                <div class="webs-card-price">${plans[0].price}</div>
                <ul>
                    ${plans[0].features.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>
            <div class="webs-card popular">
                <div class="webs-card-title">${plans[1].title}</div>
                <div class="webs-card-price">${plans[1].price}</div>
                <ul>
                    ${plans[1].features.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>
            <div class="webs-card">
                <div class="webs-card-title">${plans[2].title}</div>
                <div class="webs-card-price">${plans[2].price}</div>
                <ul>
                    ${plans[2].features.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>
        </div>
        `;
    }

    btnS4F.addEventListener('click', function() {
        btnS4F.classList.add('selected');
        btnWebs.classList.remove('selected');
        renderS4F(currentLang);
        currentSection = 's4f';
    });

    btnWebs.addEventListener('click', function() {
        btnWebs.classList.add('selected');
        btnS4F.classList.remove('selected');
        renderPlans(currentLang);
        currentSection = 'plans';
    });

    // Cambio de idioma dinámico para las cards
    if(document.getElementById('lang-switch')) {
        document.getElementById('lang-switch').addEventListener('change', function() {
            currentLang = this.value;
            if(currentSection === 's4f') {
                renderS4F(currentLang);
            } else if(currentSection === 'plans') {
                renderPlans(currentLang);
            }
        });
    }
    // Render por defecto
    if(btnS4F.classList.contains('selected')) {
        renderS4F(currentLang);
        currentSection = 's4f';
    } else if(btnWebs.classList.contains('selected')) {
        renderPlans(currentLang);
        currentSection = 'plans';
    }
});
