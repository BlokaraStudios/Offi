document.addEventListener('DOMContentLoaded', function() {
    const btnServers = document.getElementById('btn-servers');
    const btnBots = document.getElementById('btn-bots');
    const content = document.getElementById('discord-content');
    let currentLang = document.getElementById('lang-switch') ? document.getElementById('lang-switch').value : 'es';
    let currentSection = null;

    const translations = {
        es: {
            servers: [
                {
                    title: 'Plan Simple',
                    price: '$2 USD',
                    features: [
                        'Estructura básica de canales',
                        'Categorías organizadas',
                        'Roles con permisos básicos',
                        'Emojis personalizados',
                        'Diseño estético simple'
                    ]
                },
                {
                    title: 'Plan Pro',
                    price: '$5 USD',
                    features: [
                        'Todo lo del Plan Simple +',
                        'Diseño profesional',
                        'Roles por colores/niveles',
                        'Bots instalados',
                        'Sistema de verificación',
                        'Sistema Anti Raid',
                        'Hasta 2 revisiones'
                    ]
                }
            ],
            bots: [
                {
                    title: 'Plan Starter',
                    price: '$2 USD',
                    features: [
                        '+1 Función automática',
                        '1 Comando a Elección',
                        'Prefijo o Slash Commands',
                        '1 Revisión o Ajuste'
                    ]
                },
                {
                    title: "Recomendado<br>Plan Pro",
                    price: '$5 USD',
                    features: [
                        'Todo lo del Starter',
                        '3-5 Comandos Personalizados',
                        'Sistema de Embeds',
                        'Autoroles',
                        'Bienvenidas/Despedidas',
                        'Hasta 3 Revisiones',
                        'Anti Spam/Flood'
                    ]
                },
                {
                    title: 'Plan Max',
                    price: '$10 USD',
                    features: [
                        'Todo el Pro+',
                        '6-10 Comandos Personalizados',
                        'Sistema de Moderación',
                        'Anti-Raid Simple',
                        'Sistema de Tickets',
                        'Sistema de Logs',
                        'Comandos de moderación'
                    ]
                }
            ]
        },
        en: {
            servers: [
                {
                    title: 'Simple Plan',
                    price: '$2 USD',
                    features: [
                        'Basic channel structure',
                        'Organized categories',
                        'Roles with basic permissions',
                        'Custom emojis',
                        'Simple aesthetic design'
                    ]
                },
                {
                    title: 'Pro Plan',
                    price: '$5 USD',
                    features: [
                        'Everything in Simple Plan +',
                        'Professional design',
                        'Roles by color/level',
                        'Bots installed',
                        'Verification system',
                        'Anti Raid system',
                        'Up to 2 revisions'
                    ]
                }
            ],
            bots: [
                {
                    title: 'Starter Plan',
                    price: '$2 USD',
                    features: [
                        '+1 Automatic function',
                        '1 Custom Command',
                        'Prefix or Slash Commands',
                        '1 Revision or Adjustment'
                    ]
                },
                {
                    title: "Recommended<br>Pro Plan",
                    price: '$5 USD',
                    features: [
                        'Everything in Starter',
                        '3-5 Custom Commands',
                        'Embeds system',
                        'Autoroles',
                        'Welcome/Goodbye',
                        'Up to 3 Revisions',
                        'Anti Spam/Flood'
                    ]
                },
                {
                    title: 'Max Plan',
                    price: '$10 USD',
                    features: [
                        'Everything in Pro+',
                        '6-10 Custom Commands',
                        'Moderation system',
                        'Simple Anti-Raid',
                        'Ticket system',
                        'Logs system',
                        'Moderation commands'
                    ]
                }
            ]
        }
    };

    function renderServers(lang) {
        const cards = translations[lang].servers;
        content.innerHTML = `
        <div class="discord-plan">
            <div class="discord-plan-title">${cards[0].title}</div>
            <div class="discord-plan-price">${cards[0].price}</div>
            <ul>
                ${cards[0].features.map(f => `<li>${f}</li>`).join('')}
            </ul>
        </div>
        <div class="discord-plan">
            <div class="discord-plan-title">${cards[1].title}</div>
            <div class="discord-plan-price">${cards[1].price}</div>
            <ul>
                ${cards[1].features.map(f => `<li>${f}</li>`).join('')}
            </ul>
        </div>
        `;
    }

    function renderBots(lang) {
        const cards = translations[lang].bots;
        content.innerHTML = `
        <div class="discord-plan">
            <div class="discord-plan-title">${cards[0].title}</div>
            <div class="discord-plan-price">${cards[0].price}</div>
            <ul>
                ${cards[0].features.map(f => `<li>${f}</li>`).join('')}
            </ul>
        </div>
        <div class="discord-plan">
            <div class="discord-plan-title">${cards[1].title}</div>
            <div class="discord-plan-price">${cards[1].price}</div>
            <ul>
                ${cards[1].features.map(f => `<li>${f}</li>`).join('')}
            </ul>
        </div>
        <div class="discord-plan">
            <div class="discord-plan-title">${cards[2].title}</div>
            <div class="discord-plan-price">${cards[2].price}</div>
            <ul>
                ${cards[2].features.map(f => `<li>${f}</li>`).join('')}
            </ul>
        </div>
        `;
    }

    btnServers.addEventListener('click', function() {
        btnServers.classList.add('selected');
        btnBots.classList.remove('selected');
        renderServers(currentLang);
        currentSection = 'servers';
    });

    btnBots.addEventListener('click', function() {
        btnBots.classList.add('selected');
        btnServers.classList.remove('selected');
        renderBots(currentLang);
        currentSection = 'bots';
    });

    if(document.getElementById('lang-switch')) {
        document.getElementById('lang-switch').addEventListener('change', function() {
            currentLang = this.value;
            if(currentSection === 'servers') {
                renderServers(currentLang);
            } else if(currentSection === 'bots') {
                renderBots(currentLang);
            }
        });
    }
    // Render por defecto
    if(btnServers.classList.contains('selected')) {
        renderServers(currentLang);
        currentSection = 'servers';
    } else if(btnBots.classList.contains('selected')) {
        renderBots(currentLang);
        currentSection = 'bots';
    }
});
