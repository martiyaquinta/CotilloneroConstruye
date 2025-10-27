import { useState } from 'react';
import {
  Home,
  Hammer,
  Grid3x3,
  Building2,
  Lightbulb,
  Phone,
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight,
  MessageCircle
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  before: string;
  after: string;
}

function App() {
  const [currentProject, setCurrentProject] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: "Veterinaria Napaleofú",
      description: "Optimización del espacio y mejora térmica mediante cielorrasos en drywall y diseño consciente.",
      before: "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=800",
      after: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Hogar Familiar Tandil",
      description: "Tabiques divisorios livianos para redefinir ambientes con luz natural y funcionalidad.",
      before: "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800",
      after: "https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Consultorio Médico",
      description: "Revestimientos y frentes exteriores que protegen y embellecen con materiales sustentables.",
      before: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800",
      after: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleWhatsAppContact = () => {
    window.open('https://wa.me/5492494000000?text=Hola%2C%20quisiera%20consultar%20sobre%20un%20proyecto', '_blank');
  };

  return (
    <div className="bg-bone">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bone/95 backdrop-blur-sm border-b border-cement-gray/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Home className="w-6 h-6 text-navy" />
              <span className="text-xl font-semibold text-navy">Cotillonero Construye</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#inicio" className="text-navy hover:text-aqua transition-colors">Inicio</a>
              <a href="#nosotros" className="text-navy hover:text-aqua transition-colors">Nosotros</a>
              <a href="#servicios" className="text-navy hover:text-aqua transition-colors">Servicios</a>
              <a href="#obras" className="text-navy hover:text-aqua transition-colors">Obras</a>
              <a href="#contacto" className="text-navy hover:text-aqua transition-colors">Contacto</a>
            </div>
            <button
              onClick={handleWhatsAppContact}
              className="flex items-center gap-2 px-4 py-2 bg-aqua text-navy rounded-full hover:shadow-lg transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/inicio.jpg"
            alt="Construcción"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-bone via-sand/90 to-aqua/30" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-navy leading-tight">
              Creamos espacios que<br />
              <span className="text-aqua">se sienten bien</span>
            </h1>

            <p className="text-xl md:text-2xl text-navy/80 max-w-3xl mx-auto font-light">
              Construcción en seco con enfoque sustentable<br />
              y de diseño consciente
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy text-white rounded-full hover:bg-navy/90 hover:shadow-xl transition-all duration-300 text-lg font-medium"
              >
                Solicitar presupuesto
              </a>
              <a
                href="#obras"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-navy text-navy rounded-full hover:bg-navy hover:text-bone transition-all duration-300 text-lg font-medium"
              >
                Ver proyectos
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-navy/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-navy/40 rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* Nosotros Section */}
      <section id="nosotros" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-navy">
                Sobre<br />
                <span className="text-aqua">Cotillonero Construye</span>
              </h2>

              <div className="space-y-4 text-lg text-navy/80 leading-relaxed">
                <p>
                  Fundado por <strong>Agustín Alvarez</strong> en Tandil, Buenos Aires, Argentina,
                  Cotillonero Construye nace de la unión entre el oficio tradicional y una visión
                  contemporánea del construir.
                </p>
                <p>
                  Creemos que construir es más que levantar paredes: es crear lugares que mejoran
                  la vida de quienes los habitan.
                </p>
                <p className="font-medium text-navy">
                  Combinamos técnica, estética y bienestar en cada proyecto, aplicando principios
                  de neuroarquitectura y sustentabilidad.
                </p>
              </div>

              <div className="pt-6 space-y-3">
                <p className="text-2xl font-light text-navy/70 italic">
                  "Habitar también es cuidar."
                </p>
                <p className="text-2xl font-light text-navy/70 italic">
                  "Cada espacio puede mejorar tu forma de vivir."
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/agustintrabajando.png"
                  alt="Agustín Álvarez trabajando"
                  className="w-full h-full object-cover"
                />  
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-aqua/20 rounded-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-24 px-6 bg-sand">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Nuestros <span className="text-aqua">Servicios</span>
            </h2>
            <p className="text-xl text-navy/70 max-w-3xl mx-auto">
              Cada servicio está pensado para crear ambientes que conectan con las personas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-white p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-aqua/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-aqua transition-colors">
                <Hammer className="w-8 h-8 text-navy group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">
                Drywall y Cielorrasos
              </h3>
              <p className="text-navy/70 leading-relaxed">
                Funcionalidad, estética y confort térmico en espacios interiores.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-aqua/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-aqua transition-colors">
                <Grid3x3 className="w-8 h-8 text-navy group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">
                Tabiques Divisorios
              </h3>
              <p className="text-navy/70 leading-relaxed">
                Diseño adaptable con materiales livianos y eficientes.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-aqua/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-aqua transition-colors">
                <Building2 className="w-8 h-8 text-navy group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">
                Frentes y Revestimientos
              </h3>
              <p className="text-navy/70 leading-relaxed">
                Protección y diseño exterior con materiales de calidad.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-aqua/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-aqua transition-colors">
                <Lightbulb className="w-8 h-8 text-navy group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">
                Diseño Consciente
              </h3>
              <p className="text-navy/70 leading-relaxed">
                Aplicación de neuroarquitectura y sustentabilidad.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-2xl font-light text-navy/70 italic">
              "Construimos con propósito y conciencia."
            </p>
          </div>
        </div>
      </section>

      {/* Obras Section */}
      <section id="obras" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Nuestras <span className="text-aqua">Obras</span>
            </h2>
            <p className="text-xl text-navy/70 max-w-3xl mx-auto">
              Proyectos que transforman espacios y mejoran la calidad de vida
            </p>
          </div>

          <div className="relative">
            <div className="bg-sand rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/images/quinchoantes.jpg"
                    alt="Antes"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-navy/90 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Antes
                  </div>
                </div>

                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/images/quinchodespues.jpg"
                    alt="Después"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-aqua/90 text-navy px-4 py-2 rounded-full text-sm font-medium">
                    Después
                  </div>
                </div>
              </div>

              <div className="text-center space-y-4">
                <h3 className="text-2xl font-semibold text-navy">
                  {projects[currentProject].title}
                </h3>
                <p className="text-lg text-navy/70 max-w-2xl mx-auto">
                  {projects[currentProject].description}
                </p>

                <div className="flex justify-center gap-4 pt-6">
                  <button
                    onClick={prevProject}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-navy hover:text-white transition-colors shadow-md"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <div className="flex items-center gap-2">
                    {projects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentProject(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentProject ? 'bg-navy w-8' : 'bg-navy/30'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextProject}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-navy hover:text-white transition-colors shadow-md"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-24 px-6 bg-sand">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Hablemos de tu <span className="text-aqua">Proyecto</span>
            </h2>
            <p className="text-xl text-navy/70">
              Cada proyecto empieza con una buena charla. Contame tu idea.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-navy mb-6">Información de contacto</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-aqua/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <p className="font-medium text-navy">Teléfono</p>
                    <p className="text-navy/70">+54 9 2261400285</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-aqua/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <p className="font-medium text-navy">Email</p>
                    <p className="text-navy/70">cotilloneroconstruye@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-aqua/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <p className="font-medium text-navy">Ubicación</p>
                    <p className="text-navy/70">Tandil y zona, Buenos Aires, Argentina</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={handleWhatsAppContact}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-aqua text-navy rounded-full hover:shadow-xl transition-all duration-300 text-lg font-medium"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contactar por WhatsApp
                </button>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-navy mb-6">Envianos un mensaje</h3>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border-2 border-cement-gray/30 focus:outline-none focus:border-aqua transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border-2 border-cement-gray/30 focus:outline-none focus:border-aqua transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border-2 border-cement-gray/30 focus:outline-none focus:border-aqua transition-colors"
                    placeholder="+54 9 ..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-cement-gray/30 focus:outline-none focus:border-aqua transition-colors resize-none"
                    placeholder="Contanos sobre tu proyecto..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-navy text-white rounded-full hover:bg-navy/90 hover:shadow-xl transition-all duration-300 text-lg font-medium"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-navy text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Home className="w-6 h-6 text-aqua" />
                <span className="text-white font-semibold">Cotillonero Construye</span>
              </div>
              <p className="text-white/70">
                Construcción en seco con enfoque sustentable y diseño consciente en Tandil y la zona, Buenos Aires.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Enlaces rápidos</h4>
              <div className="space-y-2">
                <a href="#inicio" className="block text-white/70 hover:text-aqua transition-colors">Inicio</a>
                <a href="#nosotros" className="block text-white/70 hover:text-aqua transition-colors">Nosotros</a>
                <a href="#servicios" className="block text-white/70 hover:text-aqua transition-colors">Servicios</a>
                <a href="#obras" className="block text-white/70 hover:text-aqua transition-colors">Obras</a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Horarios</h4>
              <p className="text-white/70 mb-2">Lunes a Viernes: 8:00 - 18:00</p>
              <p className="text-white/70">Sábados: 9:00 - 13:00</p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/20 text-center">
            <p className="text-white/50 text-sm">
              © 2025 Cotillonero Construye - Agustín Álvarez. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <button
        onClick={handleWhatsAppContact}
        className="fixed bottom-8 right-8 w-16 h-16 bg-aqua text-white rounded-full flex items-center justify-center hover:shadow-2xl hover:scale-110 transition-all duration-300 z-50"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </button>
    </div>
  );
}

export default App;
