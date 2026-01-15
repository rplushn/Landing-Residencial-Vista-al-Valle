import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      
      {/* 1. Header / Barra de Navegación */}
      <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold text-green-800">
            Vista al Valle
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#inicio" className="hover:text-green-700 transition">Inicio</a>
            <a href="#modelos" className="hover:text-green-700 transition">Modelos</a>
            <a href="#ubicacion" className="hover:text-green-700 transition">Ubicación</a>
            <a href="#contacto" className="hover:text-green-700 transition">Contacto</a>
          </nav>
          <button className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition">
            Agendar Visita
          </button>
        </div>
      </header>

      {/* 2. Hero Section (Portada) */}
      <main className="pt-20">
        <section id="inicio" className="relative h-[90vh] flex items-center justify-center bg-gray-50">
          <div className="text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Tu nuevo hogar <br/>
              <span className="text-green-700">conectado con la naturaleza</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Descubre la tranquilidad de vivir rodeado de áreas verdes, con la seguridad y plusvalía que tu familia merece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-700 text-white text-lg px-8 py-4 rounded-full hover:bg-green-800 transition shadow-lg">
                Ver Modelos de Casas
              </button>
              <button className="bg-white text-gray-900 border border-gray-200 text-lg px-8 py-4 rounded-full hover:bg-gray-50 transition">
                Descargar Brochure
              </button>
            </div>
          </div>
        </section>

        {/* Aquí iremos agregando las demás secciones... */}
      </main>

      <footer className="bg-gray-900 text-white py-12 text-center">
        <p>© 2026 Residencial Vista al Valle. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
