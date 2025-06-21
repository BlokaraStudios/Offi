document.addEventListener('DOMContentLoaded', function() {
    const btnBuilds = document.getElementById('btn-builds');
    const btnConfig = document.getElementById('btn-config');
    const content = document.getElementById('mc-content');
    let currentLang = document.getElementById('lang-switch') ? document.getElementById('lang-switch').value : 'es';
    let currentSection = null;

    const translations = {
        es: {
            builds: [
                {
                    title: 'Plan Starter',
                    price: '$5 USD',
                    features: [
                        'Construcciones Simples (Máx. 3)',
                        'Tamaño Máximo 50x50',
                        'Estilo a Elección',
                        '2 Revisiones',
                        'Decoración Exterior'
                    ]
                },
                {
                    title: "Plan Pro <span class='badge'>Popular</span>",
                    price: '$10 USD',
                    features: [
                        'Todo lo del Starter',
                        '+ Construcción Pro (Máx. 2)',
                        'Tamaño Máximo 70x70',
                        'Decoración Interior/Exterior',
                        'Detalles Visuales',
                        'Texturizado Simple'
                    ]
                },
                {
                    title: 'Plan Max',
                    price: '$15 USD',
                    features: [
                        'Todo lo del Pro',
                        'Construcción Max (Máx. 2)',
                        'Tamaño máximo 100x100',
                        'Detalles Avanzados',
                        'Texturizado Avanzado'
                    ]
                },
                {
                    title: 'Plan Custom',
                    price: '$5 - $100 USD',
                    features: [
                        'Tamaño Máximo 110x110',
                        'Detalles Avanzados',
                        'Texturizado Avanzado',
                        'Totalmente personalizado'
                    ]
                }
            ],
            config: [
                {
                    title: 'Plan Simple',
                    price: '$6 USD',
                    features: [
                        'Instalación de Plugins (Máx. 5)',
                        'Configuración Básica de Permisos',
                        'Traducción de Plugin Simple (2)',
                        'Configuración de Hologramas',
                        'Compatibilidad De Versiones'
                    ]
                },
                {
                    title: "Plan Pro <span class='badge'>Popular</span>",
                    price: '$12 USD',
                    features: [
                        'Todo el plan Simple',
                        'Hasta 10 plugins configurados',
                        'Configuración avanzada de permisos',
                        'Soporte para placeholders',
                        'Configuración de Scoreboards',
                        'Soporte 24/7 por Discord'
                    ]
                }
            ]
        },
        en: {
            builds: [
                {
                    title: 'Starter Plan',
                    price: '$5 USD',
                    features: [
                        'Simple Builds (Max. 3)',
                        'Max Size 50x50',
                        'Style of Your Choice',
                        '2 Revisions',
                        'Exterior Decoration'
                    ]
                },
                {
                    title: "Pro Plan <span class='badge'>Popular</span>",
                    price: '$10 USD',
                    features: [
                        'Everything in Starter',
                        '+ Pro Build (Max. 2)',
                        'Max Size 70x70',
                        'Interior/Exterior Decoration',
                        'Visual Details',
                        'Simple Texturing'
                    ]
                },
                {
                    title: 'Max Plan',
                    price: '$15 USD',
                    features: [
                        'Everything in Pro',
                        'Max Build (Max. 2)',
                        'Max Size 100x100',
                        'Advanced Details',
                        'Advanced Texturing'
                    ]
                },
                {
                    title: 'Custom Plan',
                    price: '$5 - $100 USD',
                    features: [
                        'Max Size 110x110',
                        'Advanced Details',
                        'Advanced Texturing',
                        'Fully Customized'
                    ]
                }
            ],
            config: [
                {
                    title: 'Simple Plan',
                    price: '$6 USD',
                    features: [
                        'Plugin Installation (Max. 5)',
                        'Basic Permission Setup',
                        'Simple Plugin Translation (2)',
                        'Hologram Setup',
                        'Version Compatibility'
                    ]
                },
                {
                    title: "Pro Plan <span class='badge'>Popular</span>",
                    price: '$12 USD',
                    features: [
                        'Everything in Simple Plan',
                        'Up to 10 plugins configured',
                        'Advanced permission setup',
                        'Placeholder support',
                        'Scoreboard setup',
                        '24/7 Discord Support'
                    ]
                }
            ]
        }
    };

    function renderBuilds(lang) {
        const builds = translations[lang].builds;
        content.innerHTML = `
        <div class="mc-grid">
            ${builds.map((plan, i) => `
                <div class="mc-card${i === 1 ? ' popular' : ''}">
                    <div class="mc-card-title">${plan.title}</div>
                    <div class="mc-card-price">${plan.price}</div>
                    <ul>
                        ${plan.features.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                </div>
            `).join('')}
        </div>
        `;
    }

    function renderConfig(lang) {
        const config = translations[lang].config;
        content.innerHTML = `
        <div class="mc-grid">
            ${config.map((plan, i) => `
                <div class="mc-card${i === 1 ? ' popular' : ''}">
                    <div class="mc-card-title">${plan.title}</div>
                    <div class="mc-card-price">${plan.price}</div>
                    <ul>
                        ${plan.features.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                </div>
            `).join('')}
        </div>
        `;
    }

    btnBuilds.addEventListener('click', function() {
        btnBuilds.classList.add('selected');
        btnConfig.classList.remove('selected');
        renderBuilds(currentLang);
        currentSection = 'builds';
    });

    btnConfig.addEventListener('click', function() {
        btnConfig.classList.add('selected');
        btnBuilds.classList.remove('selected');
        renderConfig(currentLang);
        currentSection = 'config';
    });

    if(document.getElementById('lang-switch')) {
        document.getElementById('lang-switch').addEventListener('change', function() {
            currentLang = this.value;
            if(currentSection === 'builds') {
                renderBuilds(currentLang);
            } else if(currentSection === 'config') {
                renderConfig(currentLang);
            }
        });
    }
    // Render por defecto
    if(btnBuilds.classList.contains('selected')) {
        renderBuilds(currentLang);
        currentSection = 'builds';
    } else if(btnConfig.classList.contains('selected')) {
        renderConfig(currentLang);
        currentSection = 'config';
    }
});
