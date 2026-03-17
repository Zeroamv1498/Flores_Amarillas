/* ==============================================
   SCRIPT MÁGICO ESTUDIO GHIBLI - Para Vanessa
   Elementos interactivos con magia y ternura
   ============================================== */

// ========== MODAL SORPRESA ==========
function mostrarSorpresa() {
    // Crear modal estilo Ghibli
    const modalHTML = `
        <div class="modal fade" id="sorpresaGhibli" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content" style="background: linear-gradient(145deg, #fff5ee, #ffe6f0); border-radius: 80px; border: 6px solid #f9b83c; box-shadow: 0 40px 80px rgba(249, 184, 60, 0.3);">
                    
                    <div class="modal-header" style="border-bottom: 3px solid #f9b83c; justify-content: center; position: relative;">
                        <div style="position: absolute; left: 20px; top: 15px; font-size: 2rem;">🐷</div>
                        <h5 class="modal-title" style="color: #f7b2b2; font-family: 'Quicksand', sans-serif; font-size: 2.2rem; font-weight: 600;">
                            ✧ Nota secreta ✧
                        </h5>
                        <div style="position: absolute; right: 20px; top: 15px; font-size: 2rem;">🌸</div>
                        <button type="button" class="btn-close position-absolute top-0 end-0 m-3" data-bs-dismiss="modal"></button>
                    </div>
                    
                    <div class="modal-body text-center p-5">
                        <!-- Kodama flotante (espíritu del bosque) -->
                        <div style="font-size: 5rem; margin-bottom: 20px; animation: floatKodama 4s infinite;">
                            🐷✨🐷
                        </div>
                        
                        <p style="font-size: 3rem; color: #f9b83c; font-weight: 600; margin-bottom: 10px; text-shadow: 3px 3px 0 #fff0b5;">
                            Vanessa
                        </p>
                        
                        <p style="font-size: 2rem; color: #96c0b7; font-style: italic; margin-bottom: 25px;">
                            "“Los límites son tres: el cielo, la imaginación y tú misma.” – El viaje de Chihiro"
                        </p>
                        
                        <div style="background: rgba(255, 255, 255, 0.5); backdrop-filter: blur(8px); border-radius: 60px; padding: 25px; margin: 25px 0;">
                            <p style="font-size: 1.8rem; color: #b3a1d9; margin-bottom: 15px;">
                               🌻 🌻 🌻 🌻 🌻
                            </p>
                            <p style="font-size: 2.5rem; color: #f7b2b2; font-weight: 600; letter-spacing: 5px;">
                                Te amo
                            </p>
                            <p style="font-size: 2rem; color: #b3a1d9; margin-top: 15px;">
                                Gracias por existir 💛
                            </p>
                        </div>

                        <div style="font-size: 2.5rem; margin: 25px 0; color: #ffc0cb;">
                            🐷 🌻 🐷 🌻 🐷 🌻
                        </div>
                        
                        <p style="font-size: 1.4rem; color: #8b6e4b; background: rgba(255, 255, 255, 0.5); padding: 10px; border-radius: 40px;">
                           💛 Espero que te guste y lo guarde como un bonito recuerdo 💛
                        </p>
                    </div>
                    
                    <div class="modal-footer" style="border-top: 3px solid #f9b83c; justify-content: center;">
                        <button type="button" class="btn" style="background: #f9b83c; color: white; border-radius: 60px; padding: 15px 50px; font-size: 1.3rem; border: 3px solid #ffd966;" data-bs-dismiss="modal">
                            💛 Cerrar recuerdo 💛
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Agregar animación específica para el modal
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatKodama {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(5deg); }
        }
    `;
    document.head.appendChild(style);
    
    // Insertar y mostrar modal
    if (!document.getElementById('sorpresaGhibli')) {
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
    
    const modal = new bootstrap.Modal(document.getElementById('sorpresaGhibli'));
    modal.show();
}

// ========== CREAR ELEMENTOS MÁGICOS ==========

// Crear polvo de estrellas
function createStardust() {
    const stardust = document.createElement('div');
    stardust.className = 'stardust';
    stardust.style.position = 'fixed';
    stardust.style.top = Math.random() * 100 + '%';
    stardust.style.left = Math.random() * 100 + '%';
    stardust.style.fontSize = (15 + Math.random() * 20) + 'px';
    stardust.style.animationDelay = Math.random() * 3 + 's';
    stardust.style.animationDuration = (3 + Math.random() * 4) + 's';
    stardust.innerHTML = ['✨', '🌟', '💫', '⭐', '✧'][Math.floor(Math.random() * 5)];
    document.body.appendChild(stardust);
    
    setTimeout(() => stardust.remove(), 5000);
}

// Crear semillas mágicas
function createMagicSeed() {
    const seed = document.createElement('div');
    seed.className = 'magic-seed';
    seed.style.position = 'fixed';
    seed.style.top = Math.random() * 100 + '%';
    seed.style.left = Math.random() * 100 + '%';
    seed.style.fontSize = (18 + Math.random() * 25) + 'px';
    seed.style.animationDelay = Math.random() * 2 + 's';
    seed.style.animationDuration = (6 + Math.random() * 4) + 's';
    seed.innerHTML = ['🌱', '🍃', '🌿', '🍂', '🌸'][Math.floor(Math.random() * 5)];
    document.body.appendChild(seed);
    
    setTimeout(() => seed.remove(), 7000);
}

// Crear kodamas (espíritus del bosque)
function createKodama() {
    const kodama = document.createElement('div');
    kodama.style.position = 'fixed';
    kodama.style.bottom = '10px';
    kodama.style.right = '10px';
    kodama.style.fontSize = '3rem';
    kodama.style.opacity = '0.2';
    kodama.style.pointerEvents = 'none';
    kodama.style.animation = 'floatKodama 8s infinite';
    kodama.innerHTML = '🐷';
    document.body.appendChild(kodama);
    
    // No lo removemos, es permanente pero tenue
}

// ========== ANIMACIÓN DE FLORES AL HACER CLIC ==========

// Hacer que las flores reaccionen al clic
document.addEventListener('DOMContentLoaded', function() {
    const flores = document.querySelectorAll('.flor');
    
    flores.forEach((flor, index) => {
        flor.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Animación de la flor clickeada
            this.style.animation = 'none';
            this.offsetHeight; // Reflow
            this.style.animation = 'gentleSway 6s infinite ease-in-out';
            
            // Crear estrellas alrededor de la flor
            for (let i = 0; i < 8; i++) {
                setTimeout(() => {
                    const estrella = document.createElement('div');
                    estrella.style.position = 'fixed';
                    estrella.style.left = e.clientX + (Math.random() - 0.5) * 100 + 'px';
                    estrella.style.top = e.clientY + (Math.random() - 0.5) * 100 + 'px';
                    estrella.style.fontSize = (20 + Math.random() * 30) + 'px';
                    estrella.style.color = '#f9b83c';
                    estrella.style.pointerEvents = 'none';
                    estrella.style.zIndex = '9999';
                    estrella.style.animation = 'twinkle 1s forwards';
                    estrella.innerHTML = ['✨', '🌟', '💫', '⭐'][Math.floor(Math.random() * 4)];
                    document.body.appendChild(estrella);
                    
                    setTimeout(() => estrella.remove(), 1000);
                }, i * 50);
            }
            
            // Sonido imaginario (no podemos reproducir audio real sin interacción)
            console.log('🌸 ¡Magia Ghibli activada! 🌸');
        });
    });
    
    // También hacer que los cerditos reaccionen
    const cerditos = document.querySelectorAll('.cerdito-card');
    
    cerditos.forEach(cerdito => {
        cerdito.addEventListener('click', function() {
            const cerditoEmoji = this.querySelector('.cerdito');
            cerditoEmoji.style.animation = 'none';
            cerditoEmoji.offsetHeight;
            cerditoEmoji.style.animation = 'piggyWiggle 0.5s infinite';
            
            setTimeout(() => {
                cerditoEmoji.style.animation = 'piggyWiggle 4s infinite';
            }, 1000);
            
            // Crear corazones
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const corazon = document.createElement('div');
                    corazon.style.position = 'fixed';
                    corazon.style.left = this.getBoundingClientRect().left + 50 + (Math.random() - 0.5) * 60 + 'px';
                    corazon.style.top = this.getBoundingClientRect().top + 30 + 'px';
                    corazon.style.fontSize = '2rem';
                    corazon.style.pointerEvents = 'none';
                    corazon.style.zIndex = '9999';
                    corazon.style.animation = 'float 2s forwards';
                    corazon.innerHTML = ['❤️', '🧡', '💛', '💚', '💙'][Math.floor(Math.random() * 5)];
                    document.body.appendChild(corazon);
                    
                    setTimeout(() => corazon.remove(), 2000);
                }, i * 150);
            }
        });
    });
});

// ========== INICIALIZAR MAGIA ==========

// Crear elementos flotantes periódicamente
function startGhibliMagic() {
    // Crear polvo de estrellas cada 2 segundos
    setInterval(createStardust, 2000);
    
    // Crear semillas mágicas cada 3 segundos
    setInterval(createMagicSeed, 3000);
    
    // Crear kodama al inicio
    createKodama();
    
    // Crear algunas estrellas fijas
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            createStardust();
        }, i * 500);
    }
}

// Iniciar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', startGhibliMagic);

// También iniciar al cargar la ventana (por si acaso)
window.addEventListener('load', function() {
    // Pequeña lluvia de estrellas al cargar
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createStardust();
        }, i * 100);
    }
});

// ========== MENSAJE EN CONSOLA (SORPRESA OCULTA) ==========

console.log('%c🌸 Para Vanessa - Mensaje Secreto 🌸', 'font-size: 20px; color: #f7b2b2;');
console.log('%c🐷 Eres la persona más especial del mundo 🐷', 'font-size: 16px; color: #f9b83c;');
console.log('%c💛 Te amo mi amor 💛', 'font-size: 16px; color: #96c0b7;');

// ========== CONTROL DE MÚSICA PARA VANESSA ==========
let musicaActivada = false;
let audioElement = document.getElementById('cancion-vanessa');
let botonMusica = document.getElementById('boton-musica-cute');
let iconoMusica = document.getElementById('nota-icono');
let textoMusica = document.getElementById('texto-musica-cute');

// Configurar volumen
if (audioElement) {
    audioElement.volume = 0.5;
}

// Función para reproducir/pausar
function toggleMusica() {
    if (!audioElement) {
        console.error('Elemento de audio no encontrado');
        return;
    }
    
    if (!musicaActivada) {
        let playPromise = audioElement.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                musicaActivada = true;
                iconoMusica.textContent = '🔊';
                textoMusica.textContent = 'Pausar canción';
                botonMusica.classList.add('musica-activa');
            }).catch(error => {
                alert('Haz clic en el botón para reproducir la música');
            });
        }
    } else {
        audioElement.pause();
        musicaActivada = false;
        iconoMusica.textContent = '🎵';
        textoMusica.textContent = 'Reproducir canción para Vanessa';
        botonMusica.classList.remove('musica-activa');
    }
}

// Cuando termina la canción
if (audioElement) {
    audioElement.addEventListener('ended', function() {
        musicaActivada = false;
        iconoMusica.textContent = '🎵';
        textoMusica.textContent = 'Reproducir canción para Vanessa';
        botonMusica.classList.remove('musica-activa');
    });
}