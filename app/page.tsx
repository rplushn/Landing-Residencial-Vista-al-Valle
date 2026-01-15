import React from 'react';

export default function Home() {
  return (
    <>
      <style>{`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            /* Verdes sobrios */
            --verde-principal: #2d5a4a;
            --verde-secundario: #3d7561;
            --verde-hover: #1f4035;
            
            /* Beiges/Neutros */
            --beige-claro: #f5f1ed;
            --beige-medio: #ebe6e1;
            --blanco-roto: #fafaf8;
            
            /* Texto */
            --negro-texto: #1a1a1a;
            --gris-suave: #6b6b6b;
            --blanco-texto: #ffffff;
            
            /* Acentos */
            --acento-dorado: #c9a876;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            color: var(--negro-texto);
            background-color: var(--blanco-roto);
            line-height: 1.6;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* HEADER / NAVBAR */
        header {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            z-index: 1000;
            border-bottom: 1px solid rgba(45, 90, 74, 0.1);
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
            max-width: 1400px;
            margin: 0 auto;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--verde-principal);
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .nav-menu {
            display: flex;
            gap: 2rem;
            list-style: none;
        }

        .nav-menu a {
            text-decoration: none;
            color: var(--negro-texto);
            font-size: 0.9rem;
            transition: color 0.3s ease;
            font-weight: 500;
        }

        .nav-menu a:hover {
            color: var(--verde-principal);
        }

        .nav-cta {
            background: var(--verde-principal);
            color: white;
            padding: 0.7rem 1.5rem;
            text-decoration: none;
            font-weight: 600;
            transition: background 0.3s ease;
            border-radius: 4px;
        }

        .nav-cta:hover {
            background: var(--verde-hover);
        }

        @media (max-width: 768px) {
            .nav-menu {
                display: none;
            }
        }

        /* ============================================
           SECCIÓN 1: HERO + VIDEO (ANIMACIONES PODEROSAS)
           ============================================ */
        .hero {
            margin-top: 60px;
            background: linear-gradient(135deg, var(--beige-claro) 0%, var(--blanco-roto) 100%);
            padding: 100px 0;
            min-height: 90vh;
            display: flex;
            align-items: center;
            overflow: hidden;
        }

        .hero-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }

        /* Animaciones Hero */
        @keyframes heroTextSlide {
            0% { opacity: 0; transform: translateX(-50px); }
            100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes heroFadeInUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes videoZoom {
            0% { opacity: 0; transform: scale(0.9); }
            100% { opacity: 1; transform: scale(1); }
        }

        @keyframes highlightPulse {
            0% { color: var(--negro-texto); }
            50% { color: var(--verde-principal); }
            100% { color: var(--verde-principal); }
        }

        .hero-text h1 {
            font-size: 3.8rem;
            line-height: 1.1;
            margin-bottom: 1.5rem;
            color: var(--negro-texto);
            animation: heroTextSlide 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        .hero-text h1 .highlight {
            color: var(--verde-principal);
            animation: highlightPulse 2s ease-out 0.5s forwards;
        }

        .hero-text .subheading {
            font-size: 1.2rem;
            color: var(--gris-suave);
            margin-bottom: 2.5rem;
            opacity: 0;
            animation: heroFadeInUp 0.8s ease-out 0.4s forwards;
        }

        .cta-group {
            display: flex;
            gap: 1rem;
            opacity: 0;
            animation: heroFadeInUp 0.8s ease-out 0.6s forwards;
        }

        .btn {
            padding: 1rem 2.5rem;
            border: none;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
            border-radius: 4px; /* ÚNICO BORDE RADIUS */
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .btn-primary {
            background: var(--verde-principal);
            color: white;
        }

        .btn-primary:hover {
            background: var(--verde-hover);
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(45, 90, 74, 0.2);
        }

        .btn-secondary {
            background: transparent;
            color: var(--negro-texto);
            border: 1px solid var(--negro-texto);
        }

        .btn-secondary:hover {
            background: var(--negro-texto);
            color: white;
        }

        .hero-video {
            position: relative;
            padding-bottom: 56.25%;
            height: 0;
            overflow: hidden;
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
            opacity: 0;
            animation: videoZoom 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) 0.2s forwards;
            background: #000;
        }

        .hero-video iframe,
        .hero-video video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none;
        }

        .video-placeholder {
            width: 100%;
            height: 100%;
            background: #1a1a1a;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.2rem;
            text-align: center;
            padding: 2rem;
        }

        @media (max-width: 768px) {
            .hero-content {
                grid-template-columns: 1fr;
                gap: 2rem;
            }

            .hero-text h1 {
                font-size: 2.5rem;
            }

            .hero {
                padding: 60px 0;
                text-align: center;
            }

            .cta-group {
                justify-content: center;
            }
        }

        /* ============================================
           SECCIÓN 2: BENEFICIOS (SOBRIO)
           ============================================ */
        .benefits-section {
            padding: 100px 0;
            background: white;
        }

        .section-title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 4rem;
            color: var(--negro-texto);
            font-weight: 300;
        }

        .section-title b {
            font-weight: 700;
            color: var(--verde-principal);
        }

        .benefits-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2px; /* Espacio mínimo para el grid */
            background: var(--beige-medio); /* Color de las líneas */
            border: 1px solid var(--beige-medio);
        }

        .benefit-card {
            background: white;
            padding: 3rem;
            transition: all 0.3s ease;
        }

        .benefit-card:hover {
            background: var(--beige-claro);
        }

        .benefit-icon {
            font-size: 2rem;
            margin-bottom: 1.5rem;
            color: var(--verde-principal);
        }

        .benefit-title {
            font-size: 1.2rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: var(--negro-texto);
        }

        .benefit-desc {
            font-size: 0.95rem;
            color: var(--gris-suave);
            line-height: 1.7;
        }

        /* ============================================
           SECCIÓN 3: UBICACIÓN (MAPA)
           ============================================ */
        .location-section {
            background: var(--beige-claro);
            padding: 100px 0;
        }

        .location-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0;
        }

        .location-info {
            padding: 4rem;
            background: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .location-info h3 {
            font-size: 2rem;
            margin-bottom: 2rem;
            color: var(--verde-principal);
        }

        .location-list {
            list-style: none;
        }

        .location-list li {
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
            gap: 1rem;
            font-size: 1.1rem;
            color: var(--negro-texto);
        }

        .location-list li span {
            color: var(--verde-principal);
            font-weight: bold;
        }

        .map-frame {
            width: 100%;
            height: 100%;
            min-height: 400px;
            background: #eee;
        }

        @media (max-width: 768px) {
            .location-container {
                grid-template-columns: 1fr;
            }
            .location-info {
                padding: 2rem;
            }
        }

        /* ============================================
           SECCIÓN 4: PARCELAS (GRID)
           ============================================ */
        .plots-section {
            padding: 100px 0;
            background: white;
        }

        .plots-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .plot-card {
            background: var(--blanco-roto);
            border: 1px solid var(--beige-medio);
            transition: transform 0.3s ease;
        }

        .plot-card:hover {
            transform: translateY(-10px);
            border-color: var(--verde-principal);
        }

        .plot-image {
            height: 250px;
            background: #ddd;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #666;
            font-size: 0.9rem;
        }

        .plot-content {
            padding: 2rem;
        }

        .plot-title {
            font-size: 1.4rem;
            margin-bottom: 0.5rem;
            color: var(--negro-texto);
        }

        .plot-size {
            color: var(--verde-principal);
            font-weight: 700;
            margin-bottom: 1.5rem;
            display: block;
        }

        .plot-features {
            list-style: none;
            margin-bottom: 2rem;
        }

        .plot-features li {
            margin-bottom: 0.5rem;
            color: var(--gris-suave);
            font-size: 0.9rem;
        }

        .btn-plot {
            width: 100%;
            padding: 1rem;
            background: white;
            border: 1px solid var(--negro-texto);
            color: var(--negro-texto);
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .btn-plot:hover {
            background: var(--negro-texto);
            color: white;
        }

        /* ============================================
           SECCIÓN 5: CARACTERÍSTICAS (OSCURA)
           ============================================ */
        .features-dark {
            background: #1a1a1a;
            color: white;
            padding: 100px 0;
        }

        .features-dark h2 {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 4rem;
            color: white;
            font-weight: 300;
        }

        .features-grid-dark {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 3rem;
        }

        .feature-item-dark {
            text-align: center;
            padding: 1rem;
        }

        .feature-icon-dark {
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
            color: var(--verde-secundario);
            display: block;
        }

        .feature-title-dark {
            font-size: 1.2rem;
            margin-bottom: 1rem;
            color: white;
        }

        .feature-desc-dark {
            color: rgba(255, 255, 255, 0.6);
            font-size: 0.95rem;
            line-height: 1.6;
        }

        /* ============================================
           SECCIÓN 6: CTA FINAL
           ============================================ */
        .cta-final {
            background: var(--verde-principal);
            padding: 100px 0;
            text-align: center;
            color: white;
        }

        .cta-container {
            max-width: 800px;
            margin: 0 auto;
        }

        .cta-final h2 {
            font-size: 3rem;
            margin-bottom: 1.5rem;
            line-height: 1.1;
        }

        .cta-final p {
            font-size: 1.2rem;
            margin-bottom: 3rem;
            opacity: 0.9;
        }

        .cta-buttons {
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            flex-wrap: wrap;
        }

        .btn-white {
            background: white;
            color: var(--verde-principal);
            padding: 1rem 2.5rem;
            border: none;
            font-weight: 700;
            font-size: 1.1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            border-radius: 4px;
        }

        .btn-white:hover {
            background: var(--beige-claro);
            transform: translateY(-2px);
        }

        .btn-whatsapp {
            background: #25D366;
            color: white;
            padding: 1rem 2.5rem;
            border: none;
            font-weight: 700;
            font-size: 1.1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            border-radius: 4px;
        }

        .btn-whatsapp:hover {
            background: #128C7E;
            transform: translateY(-2px);
        }

        /* FOOTER */
        footer {
            background: #111;
            color: #666;
            padding: 3rem 0;
            text-align: center;
            font-size: 0.9rem;
        }

        footer p {
            margin-bottom: 0.5rem;
        }
      `}</style>

      {/* HEADER */}
      <header>
        <nav>
            <a href="#" class="logo">Vista al Valle</a>
            <ul class="nav-menu">
                <li><a href="#beneficios">Beneficios</a></li>
                <li><a href="#ubicacion">Ubicación</a></li>
                <li><a href="#parcelas">Parcelas</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
            <a href="https://wa.me/50489502917" target="_blank" class="nav-cta">WhatsApp</a>
        </nav>
      </header>

      {/* SECCIÓN 1: HERO */}
      <section class="hero">
        <div class="container">
            <div class="hero-content">
                <div class="hero-text">
                    <h1>Tu pedazo de tierra <br><span class="highlight">sin el caos de la ciudad</span></h1>
                    <p class="subheading">Parcelas desde 232 m² • Salida al Norte • Aldea Santa Cruz</p>
                    <div class="cta-group">
                        <a href="https://wa.me/50489502917" target="_blank" class="btn btn-primary">Información WhatsApp</a>
                        <a href="#ubicacion" class="btn btn-secondary">Ver Ubicación</a>
                    </div>
                </div>
                <div class="hero-video">
                    <div class="video-placeholder">
                        {/* REEMPLAZAR CON TU VIDEO */}
                        Video Principal del Proyecto
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* SECCIÓN 2: BENEFICIOS */}
      <section class="benefits-section" id="beneficios">
        <div class="container">
            <h2 class="section-title">¿Por qué invertir en <b>Vista al Valle</b>?</h2>
            <div class="benefits-grid">
                <div class="benefit-card">
                    <div class="benefit-icon">🚗</div>
                    <div class="benefit-title">Cero Tráfico</div>
                    <div class="benefit-desc">La única salida de Tegucigalpa que fluye. Ahorra 2 horas diarias de vida.</div>
                </div>
                <div class="benefit-card">
                    <div class="benefit-icon">🌲</div>
                    <div class="benefit-title">Clima Fresco</div>
                    <div class="benefit-desc">Microclima de montaña, rodeado de pinos y vegetación natural.</div>
                </div>
                <div class="benefit-card">
                    <div class="benefit-icon">🔒</div>
                    <div class="benefit-title">Privacidad Total</div>
                    <div class="benefit-desc">Zona tranquila, segura y alejada del ruido urbano.</div>
                </div>
                <div class="benefit-card">
                    <div class="benefit-icon">💰</div>
                    <div class="benefit-title">Precios Accesibles</div>
                    <div class="benefit-desc">Terrenos económicos con alta proyección de plusvalía.</div>
                </div>
                <div class="benefit-card">
                    <div class="benefit-icon">⛰️</div>
                    <div class="benefit-title">Vistas Panorámicas</div>
                    <div class="benefit-desc">Topografía que permite vistas privilegiadas del valle.</div>
                </div>
                <div class="benefit-card">
                    <div class="benefit-icon">📍</div>
                    <div class="benefit-title">Ubicación Premium</div>
                    <div class="benefit-desc">A solo 2km de Posta El Durazno, acceso directo CA-5.</div>
                </div>
            </div>
        </div>
      </section>

      {/* SECCIÓN 3: UBICACIÓN */}
      <section class="location-section" id="ubicacion">
        <div class="container">
            <div class="location-container">
                <div class="location-info">
                    <h3>Ubicación Estratégica</h3>
                    <ul class="location-list">
                        <li><span>📍</span> 2 km adelante de Posta El Durazno</li>
                        <li><span>🛣️</span> Acceso directo carretera CA-5</li>
                        <li><span>⏱️</span> 15 minutos al centro de la ciudad</li>
                        <li><span>⛰️</span> Aldea Santa Cruz (Zona Alta)</li>
                    </ul>
                </div>
                <div class="map-frame">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.043567891234!2d-87.234567!3d14.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDA3JzM0LjQiTiA4N8KwMTQnMDUuNiJX!5e0!3m2!1ses!2shn!4v1614567890123!5m2!1ses!2shn" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy"></iframe>
                </div>
            </div>
        </div>
      </section>

      {/* SECCIÓN 4: PARCELAS */}
      <section class="plots-section" id="parcelas">
        <div class="container">
            <h2 class="section-title">Nuestras <b>Parcelas</b></h2>
            <div class="plots-grid">
                <div class="plot-card">
                    <div class="plot-image">Vista Parcela Tipo A</div>
                    <div class="plot-content">
                        <h3 class="plot-title">Parcela Estándar</h3>
                        <span class="plot-size">Desde 232 m²</span>
                        <ul class="plot-features">
                            <li>• Topografía semi-plana</li>
                            <li>• Acceso a calle interna</li>
                            <li>• Factibilidad de servicios</li>
                        </ul>
                        <button class="btn-plot">Consultar Precio</button>
                    </div>
                </div>
                <div class="plot-card">
                    <div class="plot-image">Vista Parcela Tipo B</div>
                    <div class="plot-content">
                        <h3 class="plot-title">Parcela Mirador</h3>
                        <span class="plot-size">Desde 300 m²</span>
                        <ul class="plot-features">
                            <li>• Vistas panorámicas</li>
                            <li>• Ubicación en parte alta</li>
                            <li>• Mayor privacidad</li>
                        </ul>
                        <button class="btn-plot">Consultar Precio</button>
                    </div>
                </div>
                <div class="plot-card">
                    <div class="plot-image">Vista Parcela Tipo C</div>
                    <div class="plot-content">
                        <h3 class="plot-title">Parcela Esquina</h3>
                        <span class="plot-size">Desde 280 m²</span>
                        <ul class="plot-features">
                            <li>• Doble frente</li>
                            <li>• Mayor área aprovechable</li>
                            <li>• Acceso privilegiado</li>
                        </ul>
                        <button class="btn-plot">Consultar Precio</button>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* SECCIÓN 5: CARACTERÍSTICAS (DARK) */}
      <section class="features-dark">
        <div class="container">
            <h2>Características del Proyecto</h2>
            <div class="features-grid-dark">
                <div class="feature-item-dark">
                    <span class="feature-icon-dark">🛣️</span>
                    <h3 class="feature-title-dark">Calle Interna</h3>
                    <p class="feature-desc-dark">Acceso vehicular habilitado a todos los lotes con calle de tierra compactada y mantenida.</p>
                </div>
                <div class="feature-item-dark">
                    <span class="feature-icon-dark">📝</span>
                    <h3 class="feature-title-dark">Dominio Pleno</h3>
                    <p class="feature-desc-dark">Propiedad legal garantizada. Escrituración directa e inmediata al cancelar.</p>
                </div>
                <div class="feature-item-dark">
                    <span class="feature-icon-dark">💧</span>
                    <h3 class="feature-title-dark">Factibilidad</h3>
                    <p class="feature-desc-dark">Zona con acceso a fuentes de agua y postería eléctrica cercana para conexión futura.</p>
                </div>
            </div>
        </div>
      </section>

      {/* SECCIÓN 6: CTA FINAL */}
      <section class="cta-final" id="contacto">
        <div class="container">
            <div class="cta-container">
                <h2>Invierte en tu futuro hoy</h2>
                <p>Agenda una visita para conocer el terreno. Sin compromisos.</p>
                <div class="cta-buttons">
                    <a href="tel:+50497373342" class="btn-white">Llamar: 9737-3342</a>
                    <a href="https://wa.me/50489502917" target="_blank" class="btn-whatsapp">
                        <span>📱</span> WhatsApp: 8950-2917
                    </a>
                </div>
            </div>
        </div>
      </section>

      <footer>
        <div class="container">
            <p>Vista al Valle - Aldea Santa Cruz, Salida al Norte.</p>
            <p>© 2026 Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}
