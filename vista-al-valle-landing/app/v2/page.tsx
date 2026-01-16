'use client';

import '../globals.css';
import React, { useState } from 'react';
import Image from 'next/image';

export default function HomeV2() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const text = encodeURIComponent('Hola, quiero información de Vista al Valle');
    const phone = '50497373342';
    
    // Detectar si es mobile o desktop
    const isMobile = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    let url: string;
    if (isMobile) {
      // Mobile: usar api.whatsapp.com
      url = `https://api.whatsapp.com/send?phone=${phone}&text=${text}`;
    } else {
      // Desktop: usar web.whatsapp.com
      url = `https://web.whatsapp.com/send?phone=${phone}&text=${text}`;
    }
    
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');

        :root {
            --verde-profundo: #183729;
            --dorado-premium: #D6B876;
            --crema-fondo: #EFEFE3;
            --negro-suave: #202525;
        }

        .font-display { font-family: 'Playfair Display', serif; }
        .font-body { font-family: 'Plus Jakarta Sans', sans-serif; }
        
        .gold-glow {
            box-shadow: 0 0 60px rgba(214, 184, 118, 0.2);
        }

        /* Animaciones tipo AOS simuladas en CSS puro */
        @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .animate-fade-up {
            animation: fadeUp 1s ease-out forwards;
            opacity: 0; /* Inicia invisible */
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }

        .glass-nav {
            background: rgba(24, 55, 41, 0.95);
            backdrop-filter: blur(10px);
        }
      `}</style>

      <div className="bg-[#EFEFE3] text-[#202525] font-body min-h-screen selection:bg-[#D6B876] selection:text-white">
        
        {/* NAVBAR */}
        <nav className="fixed top-0 left-0 w-full z-50 glass-nav border-b border-white/10 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <a href="#" className="font-display text-2xl text-white tracking-wide">
                    VISTA AL <span className="text-[#D6B876]">VALLE</span>
                </a>
                
                <div className="hidden md:flex items-center gap-8">
                    <a href="#beneficios" className="text-white/80 hover:text-[#D6B876] text-sm font-medium transition-colors">BENEFICIOS</a>
                    <a href="#ubicacion" className="text-white/80 hover:text-[#D6B876] text-sm font-medium transition-colors">UBICACIÓN</a>
                    <a href="#contacto" className="bg-[#D6B876] hover:bg-[#c4a662] text-[#183729] px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:-translate-y-0.5 shadow-lg">
                        AGENDAR VISITA
                    </a>
                </div>
            </div>
        </nav>

        {/* HERO SECTION */}
        <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden bg-[#183729]">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")'}}></div>
            
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D6B876]/20 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <div className="animate-fade-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[#D6B876] text-xs font-bold tracking-widest uppercase mb-8">
                        <span className="w-2 h-2 rounded-full bg-[#D6B876] animate-pulse"></span>
                        Parcelamiento Premium
                    </div>
                    
                    <h1 className="font-display text-5xl lg:text-7xl text-white leading-[1.1] mb-8">
                        Invierte en <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B876] to-[#Fbf6e3]">Tierra Firme</span>
                    </h1>
                    
                    <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl">
                        La única salida al norte de Tegucigalpa sin tráfico. Terrenos desde 232m² en un entorno de privacidad, clima fresco y plusvalía asegurada.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="https://wa.me/50497373342?text=Hola,%20quiero%20informaci%C3%B3n%20de%20Vista%20al%20Valle" target="_blank" rel="noopener noreferrer" className="bg-[#D6B876] hover:bg-[#c4a662] text-[#183729] px-8 py-4 rounded-none text-base font-bold transition-all shadow-[0_0_30px_rgba(214,184,118,0.3)] hover:shadow-[0_0_50px_rgba(214,184,118,0.5)] text-center">
                            WHATSAPP: 9737-3342
                        </a>
                        <button 
                          onClick={() => setIsVideoOpen(true)}
                          className="px-8 py-4 rounded-none border border-white/30 text-white hover:bg-white/5 transition-all text-center flex items-center justify-center gap-3"
                        >
                            <svg className="w-5 h-5 text-[#D6B876]" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                            VER VIDEO
                        </button>
                    </div>
                </div>

                <div className="relative animate-fade-up delay-200 hidden lg:block">
                    <div className="absolute inset-0 bg-[#D6B876] rounded-full blur-[100px] opacity-20"></div>
                    {/* Imagen principal */}
                    <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/5] group">
                         <Image 
                           src="/foto-hero1.webp" 
                           alt="Vista Panorámica al Valle"
                           width={800}
                           height={1000}
                           className="w-full h-full object-cover"
                           priority={true}
                         />
                         {/* Degradado inferior para legibilidad del texto */}
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center pb-10">
                            <p className="text-white text-sm tracking-widest uppercase">Vista Panorámica al Valle</p>
                         </div>
                    </div>
                </div>
            </div>
        </header>

        {/* HOW IT WORKS / PROCESO */}
        <section className="py-24 px-6 relative bg-[#EFEFE3]" id="beneficios">
             <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Grid de imágenes (Estilo del paste.txt) */}
                    <div className="grid grid-cols-2 gap-4 animate-fade-up">
                        <Image 
                          src="/1.webp" 
                          alt="Foto Terreno 1"
                          width={400}
                          height={256}
                          className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <Image 
                          src="/2.webp" 
                          alt="Foto Vistas"
                          width={400}
                          height={256}
                          className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 mt-12"
                          loading="lazy"
                        />
                        <Image 
                          src="/3.webp" 
                          alt="Foto Clima"
                          width={400}
                          height={256}
                          className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <Image 
                          src="/4.webp" 
                          alt="Foto Calle"
                          width={400}
                          height={256}
                          className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 mt-12"
                          loading="lazy"
                        />
                    </div>

                    {/* Contenido Texto */}
                    <div className="animate-fade-up delay-100">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#183729]/5 text-[#183729] text-xs font-bold tracking-widest uppercase mb-6">
                            Sin Complicaciones
                        </div>
                        <h2 className="font-display text-4xl lg:text-5xl text-[#183729] mb-6">
                            Tu terreno en 4 pasos simples.
                        </h2>
                        <p className="text-[#202525]/80 text-lg mb-12 leading-relaxed">
                            Hemos eliminado la burocracia. Invertir en tu patrimonio en la salida al norte es tan directo como parece.
                        </p>

                        <div className="space-y-6">
                            {/* Step 1 */}
                            <div className="flex gap-6 group">
                                <div className="w-12 h-12 rounded-full bg-[#D6B876]/20 text-[#183729] flex items-center justify-center font-display font-bold text-xl group-hover:bg-[#D6B876] transition-colors">01</div>
                                <div>
                                    <h4 className="font-display text-xl text-[#183729] mb-1">Agenda tu Visita</h4>
                                    <p className="text-[#202525]/60 text-sm">Conoce el terreno físico y siente el clima fresco.</p>
                                </div>
                            </div>
                            
                            {/* Step 2 */}
                            <div className="flex gap-6 group">
                                <div className="w-12 h-12 rounded-full bg-[#D6B876]/20 text-[#183729] flex items-center justify-center font-display font-bold text-xl group-hover:bg-[#D6B876] transition-colors">02</div>
                                <div>
                                    <h4 className="font-display text-xl text-[#183729] mb-1">Elige tu Parcela</h4>
                                    <p className="text-[#202525]/60 text-sm">Desde 232m² hasta esquinas premium.</p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex gap-6 group">
                                <div className="w-12 h-12 rounded-full bg-[#D6B876]/20 text-[#183729] flex items-center justify-center font-display font-bold text-xl group-hover:bg-[#D6B876] transition-colors">03</div>
                                <div>
                                    <h4 className="font-display text-xl text-[#183729] mb-1">Reserva y Firma</h4>
                                    <p className="text-[#202525]/60 text-sm">Proceso legal transparente y dominio pleno.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                             <a href="https://wa.me/50497373342?text=Hola,%20quiero%20informaci%C3%B3n%20de%20Vista%20al%20Valle" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-[#183729] font-bold border-b-2 border-[#D6B876] pb-1 hover:text-[#D6B876] transition-colors">
                                INICIAR PROCESO AHORA
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                             </a>
                        </div>
                    </div>
                </div>
             </div>
        </section>

        {/* PARCELAS / CARDS */}
        <section className="py-24 px-6 bg-white" id="parcelas">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 animate-fade-up">
                    <h2 className="font-display text-4xl text-[#183729] mb-4">Opciones Disponibles</h2>
                    <p className="text-[#202525]/60">Elige el espacio que se adapta a tu visión.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="group border border-[#183729]/10 overflow-hidden hover:border-[#D6B876] transition-all duration-300 hover:shadow-xl bg-[#FAFAF8]">
                        <Image src="/vav1.jpeg" alt="Parcela A" width={400} height={192} className="w-full h-48 object-cover" loading="lazy" />
                        <div className="p-6">
                            <h3 className="font-display text-2xl text-[#183729] mb-2">Parcela A</h3>
                            <p className="text-[#D6B876] font-bold mb-4">Desde 232 m²</p>
                            <ul className="space-y-2 mb-8 text-sm text-[#202525]/70">
                                <li className="flex items-center gap-2">✓ Topografía accesible</li>
                                <li className="flex items-center gap-2">✓ Acceso a calle interna</li>
                                <li className="flex items-center gap-2">✓ Factibilidad servicios</li>
                            </ul>
                            <button className="w-full py-3 border border-[#183729] text-[#183729] font-bold text-sm hover:bg-[#183729] hover:text-white transition-colors">
                                COTIZAR
                            </button>
                        </div>
                    </div>

                    {/* Card 2 - Featured */}
                    <div className="group border border-[#D6B876] overflow-hidden relative bg-white shadow-2xl transform md:-translate-y-4 transition-transform duration-300 hover:md:-translate-y-5">
                        <div className="relative">
                            <Image src="/vav2.jpeg" alt="Parcela Premium" width={400} height={192} className="w-full h-48 object-cover" loading="lazy" />
                            {/* Badge flotante encima de la imagen */}
                            <div className="absolute top-4 right-4 bg-[#183729] text-[#D6B876] px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-lg z-10 rounded">
                                Más Vendido
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="font-display text-2xl text-[#183729] mb-2">Parcela Premium</h3>
                            <p className="text-[#D6B876] font-bold mb-4">Desde 300 m²</p>
                            <ul className="space-y-2 mb-8 text-sm text-[#202525]/70">
                                <li className="flex items-center gap-2">✓ Vistas panorámicas</li>
                                <li className="flex items-center gap-2">✓ Ubicación elevada</li>
                                <li className="flex items-center gap-2">✓ Mayor privacidad</li>
                            </ul>
                            <button className="w-full py-3 bg-[#183729] text-[#D6B876] font-bold text-sm hover:bg-[#0f231a] transition-colors">
                                COTIZAR
                            </button>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="group border border-[#183729]/10 overflow-hidden hover:border-[#D6B876] transition-all duration-300 hover:shadow-xl bg-[#FAFAF8]">
                        <Image src="/vav3.jpeg" alt="Parcela Corner" width={400} height={192} className="w-full h-48 object-cover" loading="lazy" />
                        <div className="p-6">
                            <h3 className="font-display text-2xl text-[#183729] mb-2">Parcela Corner</h3>
                            <p className="text-[#D6B876] font-bold mb-4">Desde 280 m²</p>
                            <ul className="space-y-2 mb-8 text-sm text-[#202525]/70">
                                <li className="flex items-center gap-2">✓ Doble acceso</li>
                                <li className="flex items-center gap-2">✓ Mayor fachada</li>
                                <li className="flex items-center gap-2">✓ Ideal inversión</li>
                            </ul>
                            <button className="w-full py-3 border border-[#183729] text-[#183729] font-bold text-sm hover:bg-[#183729] hover:text-white transition-colors">
                                COTIZAR
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA FINAL DARK */}
        <section className="py-24 px-6 bg-[#183729] text-white text-center relative overflow-hidden" id="contacto">
             <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")'}}></div>
             <div className="max-w-3xl mx-auto relative z-10 animate-fade-up">
                 <h2 className="font-display text-4xl lg:text-5xl mb-6">¿Listo para asegurar tu patrimonio?</h2>
                 <p className="text-white/70 text-lg mb-10">Agenda una visita hoy mismo. Sin compromiso. Solo la oportunidad de ver tu futuro.</p>
                 
                 <div className="flex flex-col sm:flex-row justify-center gap-4">
                     <a href="tel:+50489124723" className="border border-white/30 text-white px-8 py-4 font-bold hover:bg-white/10 transition-colors">
                        LLAMAR: 8912-4723
                     </a>
                     <a href="https://wa.me/50497373342?text=Hola,%20quiero%20informaci%C3%B3n%20de%20Vista%20al%20Valle" target="_blank" rel="noopener noreferrer" className="bg-[#D6B876] text-[#183729] px-8 py-4 font-bold hover:bg-[#c4a662] transition-colors shadow-lg">
                        WHATSAPP: 9737-3342
                     </a>
                 </div>
             </div>
        </section>

        <footer className="bg-[#11251c] text-white/40 py-12 text-center text-sm">
            <p>© 2026 Vista al Valle. Todos los derechos reservados.</p>
        </footer>

        {/* Modal de Video */}
        {isVideoOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setIsVideoOpen(false)}
          >
            <div 
              className="relative max-w-5xl w-full mx-4 aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón de cerrar */}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-[#D6B876] transition-colors text-2xl font-bold"
                aria-label="Cerrar video"
              >
                ✕
              </button>
              
              {/* Video */}
              <video
                autoPlay
                controls
                muted
                preload="none"
                playsInline
                className="w-full h-full rounded-lg"
                src="/vista-al-valle.mp4"
              >
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
          </div>
        )}

        {/* Botón flotante de WhatsApp */}
        <a
          href="https://wa.me/50497373342?text=Hola,%20quiero%20informaci%C3%B3n%20de%20Vista%20al%20Valle"
          onClick={handleWhatsAppClick}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-pulse cursor-pointer"
          aria-label="Contactar por WhatsApp"
        >
          <svg 
            className="w-8 h-8 text-white" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.77.966-.944 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>

      </div>
    </>
  );
}
