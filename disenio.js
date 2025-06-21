document.addEventListener('DOMContentLoaded', function() {
    const btnAnuncio = document.getElementById('btn-anuncio');
    const btnMinecraft = document.getElementById('btn-minecraft');
    const content = document.getElementById('disenio-content');
    let currentLang = document.getElementById('lang-switch') ? document.getElementById('lang-switch').value : 'es';
    let currentSection = null;

    const translations = {
        es: {
            anuncio: [
                {
                    title: 'Anuncio Server',
                    price: '$4 USD',
                    features: [
                        'Diseño personalizado',
                        'Formato para redes sociales',
                        '1 Revisión',
                        'Entrega en 1-2 días',
                        'Explica tus deseos'
                    ]
                },
                {
                    title: "Anuncio con Render <span class='badge'>Popular</span>",
                    price: '$6 USD',
                    features: [
                        'Todo lo del básico',
                        'Render personalizado',
                        'Efectos visuales avanzados',
                        '2 Revisiones',
                        'Explica tus deseos'
                    ]
                },
                {
                    title: 'Render Blender',
                    price: '$2 USD',
                    features: [
                        'Iluminación personalizada',
                        'Pose a elección',
                        'Formato PNG transparente',
                        'Explica la pose deseada'
                    ]
                }
            ],
            minecraft: [
                {
                    title: 'Logo Minecraft',
                    price: '$2.50 USD',
                    features: [
                        'Logotipo, imagotipo, isologo o isotipo.',
                        'Colores personalizados.',
                        'Diseño estético.',
                        '1 Revisión',
                        'Tiempo de entrega: 1.5 días'
                    ]
                },
                {
                    title: 'Logo Profesional',
                    price: '$2.50 USD',
                    features: [
                        'Logotipo, imagotipo, isologo o isotipo.',
                        'Colores personalizados.',
                        'Diseño estético.',
                        '2 Revisiones',
                        'Tiempo de entrega: 1.5 días'
                    ]
                },
                {
                    title: 'Banner Minecraft Básico',
                    price: '$6 USD',
                    features: [
                        'Banner para servidor',
                        'Diseño personalizado',
                        '1 Revisión'
                    ]
                }
            ]
        },
        en: {
            anuncio: [
                {
                    title: 'Server Ad',
                    price: '$4 USD',
                    features: [
                        'Custom design',
                        'Social media format',
                        '1 Revision',
                        'Delivery in 1-2 days',
                        'Describe your wishes'
                    ]
                },
                {
                    title: "Ad with Render <span class='badge'>Popular</span>",
                    price: '$6 USD',
                    features: [
                        'Everything in basic',
                        'Custom render',
                        'Advanced visual effects',
                        '2 Revisions',
                        'Describe your wishes'
                    ]
                },
                {
                    title: 'Blender Render',
                    price: '$2 USD',
                    features: [
                        'Custom lighting',
                        'Pose of your choice',
                        'Transparent PNG format',
                        'Describe the desired pose'
                    ]
                }
            ],
            minecraft: [
                {
                    title: 'Minecraft Logo',
                    price: '$2.50 USD',
                    features: [
                        'Logotype, imagotype, isologo or isotipo.',
                        'Custom colors.',
                        'Aesthetic design.',
                        '1 Revision',
                        'Delivery time: 1.5 days'
                    ]
                },
                {
                    title: 'Professional Logo',
                    price: '$2.50 USD',
                    features: [
                        'Logotype, imagotipo, isologo or isotipo.',
                        'Custom colors.',
                        'Aesthetic design.',
                        '2 Revisions',
                        'Delivery time: 1.5 days'
                    ]
                },
                {
                    title: 'Basic Minecraft Banner',
                    price: '$6 USD',
                    features: [
                        'Server banner',
                        'Custom design',
                        '1 Revision'
                    ]
                }
            ]
        }
    };

    function renderAnuncio(lang) {
        const cards = translations[lang].anuncio;
        content.innerHTML = `
        <div class="disenio-grid">
            ${cards.map((card, i) => `
                <div class="disenio-card${i === 1 ? ' popular' : ''}">
                    <div class="disenio-card-title">${card.title}</div>
                    <div class="disenio-card-price">${card.price}</div>
                    <ul>
                        ${card.features.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                </div>
            `).join('')}
        </div>
        `;
    }

    function renderMinecraft(lang) {
        const cards = translations[lang].minecraft;
        content.innerHTML = `
        <div class="disenio-grid">
            ${cards.map(card => `
                <div class="disenio-card">
                    <div class="disenio-card-title">${card.title}</div>
                    <div class="disenio-card-price">${card.price}</div>
                    <ul>
                        ${card.features.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                </div>
            `).join('')}
        </div>
        `;
    }

    btnAnuncio.addEventListener('click', function() {
        btnAnuncio.classList.add('selected');
        btnMinecraft.classList.remove('selected');
        renderAnuncio(currentLang);
        currentSection = 'anuncio';
    });

    btnMinecraft.addEventListener('click', function() {
        btnMinecraft.classList.add('selected');
        btnAnuncio.classList.remove('selected');
        renderMinecraft(currentLang);
        currentSection = 'minecraft';
    });

    if(document.getElementById('lang-switch')) {
        document.getElementById('lang-switch').addEventListener('change', function() {
            currentLang = this.value;
            if(currentSection === 'anuncio') {
                renderAnuncio(currentLang);
            } else if(currentSection === 'minecraft') {
                renderMinecraft(currentLang);
            }
        });
    }
    // Render por defecto
    if(btnAnuncio.classList.contains('selected')) {
        renderAnuncio(currentLang);
        currentSection = 'anuncio';
    } else if(btnMinecraft.classList.contains('selected')) {
        renderMinecraft(currentLang);
        currentSection = 'minecraft';
    }
});
