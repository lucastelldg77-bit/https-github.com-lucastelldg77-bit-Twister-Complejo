import { motion } from "motion/react";
import { 
  Phone, 
  MapPin, 
  Calendar, 
  Waves, 
  Utensils, 
  Camera, 
  Users, 
  Award, 
  CheckCircle2,
  Tent,
  GraduationCap,
  Beer,
  PartyPopper,
  Target
} from "lucide-react";

// Images mapping
const IMAGES = {
  LOGO: "https://i.ibb.co/YBN88x0S/Gemini-Generated-Image-yk2sscyk2sscyk2s.png",
  HERO: "https://i.ibb.co/Xr29G1RX/Whats-App-Image-2026-04-17-at-13-48-15-2.jpg",
  POOL: "https://i.ibb.co/XfBjPP1J/Whats-App-Image-2026-04-17-at-13-48-16.jpg",
  ACTION_1: "https://i.ibb.co/h1KjKcMj/Whats-App-Image-2026-04-17-at-13-48-15.jpg",
  COLLAGE: "https://i.ibb.co/G3TxGBNy/Whats-App-Image-2026-04-17-at-13-48-17-3.jpg",
  MUD: "https://i.ibb.co/Rpfw58rv/Sin-t-tulo-22.png",
  CAVEMEN: "https://i.ibb.co/PzZGy7MM/Sin-t-tulo-5.png",
  GALLERY_3: "https://i.ibb.co/fzVtPkWY/Sin-t-tulo-7.png"
};

// WhatsApp link
const WHATSAPP_NUMBER = "5493814181238";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] font-sans text-white scroll-smooth selection:bg-accent-pink selection:text-white relative">
      {/* Background Blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-accent-blue rounded-full blur-[120px] opacity-30 animate-pulse"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-accent-pink rounded-full blur-[120px] opacity-20 animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10">
        {/* Floating WhatsApp Button */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ y: -5 }}
      >
        <Phone className="w-6 h-6 fill-current" />
      </motion.a>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 glass-panel border-b border-glass-border">
        <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={IMAGES.LOGO} alt="Twister Logo" className="h-20 w-auto" referrerPolicy="no-referrer" />
            <span className="font-black text-2xl tracking-tight text-white">TWISTER</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
            <a href="#quienes-somos" className="hover:text-white transition-colors">Nosotros</a>
            <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
            <a href="#actividades" className="hover:text-white transition-colors">Actividades</a>
            <a href="#contacto" className="bg-white text-[#0f172a] px-6 py-2.5 rounded-xl hover:scale-105 transition-all font-bold">Contactar</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="inicio" className="relative pt-40 pb-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 glass-panel rounded-[2rem] p-12 md:p-20 grid lg:grid-cols-2 gap-12 items-center shadow-2xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/20 border border-accent-blue/30 text-accent-blue text-xs font-bold uppercase tracking-widest mb-8">
                CURSO PROFESIONAL TWISTER
              </div>
              <h1 className="text-6xl md:text-8xl font-extrabold text-gradient leading-[1.1] mb-8 pb-2">
                Domina la <br />
                Diversión <br />
                Activa.
              </h1>
              <p className="text-xl text-slate-400 mb-10 max-w-lg leading-relaxed">
                Accede al programa detallado del único complejo habilitado en Tucumán y comienza tu transformación recreativa hoy mismo.
              </p>
              <div className="flex flex-wrap gap-6">
                <a 
                  href={WHATSAPP_LINK}
                  className="bg-white text-[#0f172a] px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-white/10 transition-all shadow-xl flex items-center gap-2"
                >
                  ¡Quiero ir! <Phone className="w-5 h-5" />
                </a>
                <a 
                  href="#servicios"
                  className="bg-[#25d366] text-white px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 transition-all shadow-xl flex items-center gap-2"
                >
                  WhatsApp Directo <Camera className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-[9/16] max-h-[70vh] mx-auto rounded-[2rem] overflow-hidden shadow-2xl relative z-10 border border-glass-border glass-card p-2 bg-black/20">
                <iframe 
                  src="https://drive.google.com/file/d/1tuFmb7-i0dbhH8ShoL5iRJDhP_-64Ud0/preview?autoplay=1" 
                  className="w-full h-full rounded-[1.5rem]"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
              <div className="absolute top-1/2 -left-12 w-48 h-48 bg-accent-blue/40 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </section>

        {/* Quienes Somos */}
        <section id="quienes-somos" className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center glass-panel p-12 rounded-[2.5rem] relative overflow-hidden">
              <div className="order-2 md:order-1 relative z-10">
                <img 
                  src={IMAGES.POOL} 
                  alt="Nuestras Piscinas" 
                  className="rounded-3xl shadow-2xl border border-glass-border transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl hidden lg:block shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent-blue rounded-full flex items-center justify-center text-white">
                      <Waves />
                    </div>
                    <div>
                      <div className="font-bold uppercase text-[10px] tracking-widest text-slate-400">HABILITACIÓN</div>
                      <div className="font-black text-xl text-white">SIPROSA</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 relative z-10">
                <span className="badge inline-block px-4 py-1 bg-accent-pink/10 border border-accent-pink/20 text-accent-pink rounded-full text-xs font-bold mb-6">SOBRE NOSOTROS</span>
                <h2 className="text-4xl font-extrabold text-white mb-8 tracking-tight">
                  UN PREDIO <span className="text-gradient">INIGUALABLE</span>
                </h2>
                <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
                  <p>
                    Ubicado a 25 km de San Miguel de Tucumán (Las Talas), contamos con un predio de <strong>2 ½ hectáreas</strong> diseñado para la excelencia.
                  </p>
                  <p>
                    Contamos con quinchos, cocina completa, 2 piscinas con guardavidas y capacidad para 50 personas en habitaciones VIP.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                    <div className="glass-card p-4 rounded-xl flex items-center gap-3">
                      <CheckCircle2 className="text-green-500" /> <span>Seguridad 24hs</span>
                    </div>
                    <div className="glass-card p-4 rounded-xl flex items-center gap-3">
                      <CheckCircle2 className="text-green-500" /> <span>Ambulancia en sitio</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-accent-pink/10 rounded-full blur-[100px] pointer-events-none"></div>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-20">
              <span className="badge px-4 py-1 bg-accent-blue/10 border border-accent-blue/20 text-accent-blue rounded-full text-xs font-bold mb-4 uppercase tracking-[0.2em]">Metodología Exclusiva</span>
              <h2 className="text-5xl font-extrabold text-white mb-6 tracking-tighter">NUESTROS <span className="text-gradient">SERVICIOS</span></h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">Más de 35.000 alumnos ya vivieron la transformación Twister.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Campamentos Egresados", desc: "Primarios y secundarios: máxima diversión con juegos, fiestas temáticas y fogones espectaculares.", icon: <Users /> },
                { title: "Educativos", desc: "Compañerismo, trabajo en equipo y tareas comunitarias para el crecimiento personal.", icon: <GraduationCap /> },
                { title: "Día Recreativo", desc: "Para todas las edades con un plan de juegos adaptado milimétricamente.", icon: <Tent /> },
                { title: "Convivencias", desc: "Ideales para fortalecer vínculos institucionales en un entorno saludable y controlado.", icon: <Target /> },
                { title: "Despedidas", desc: "Cierre de ciclos con mucha diversión, juegos temáticos y momentos emotivos.", icon: <PartyPopper /> },
                { title: "Salidas Educativas", desc: "City tours, granjas y recorridos estratégicos por los puntos clave de Tucumán.", icon: <MapPin /> },
              ].map((service, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="glass-card p-10 rounded-3xl border border-glass-border hover:bg-white/10 transition-all group"
                >
                  <div className="w-16 h-16 bg-white/5 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent-blue transition-colors border border-glass-border">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gradient transition-all">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Actividades Grid */}
        <section id="actividades" className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center glass-panel p-12 md:p-20 rounded-[3rem] relative overflow-hidden">
              <div className="relative z-10">
                <span className="badge px-4 py-1 bg-accent-blue/10 border border-accent-blue/20 text-accent-blue rounded-full text-xs font-bold mb-6">MÁXIMA ADRENALINA</span>
                <h2 className="text-6xl font-extrabold text-white mb-10 leading-tight tracking-tighter">ACTIVIDADES <br /> <span className="text-gradient">ORGANIZADAS</span></h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 glass-card p-8 rounded-3xl border border-glass-border">
                  {[
                    "Tirolesa (100 mtrs)",
                    "Lona enjabonada",
                    "Canchas de Fútbol 5",
                    "Cancha de Voley",
                    "Palestra",
                    "Pista de Lodo",
                    "Metegol Humano",
                    "Mareadito",
                    "Ring de Box",
                    "Pista Supervivencia",
                    "Arquería",
                    "Juegos Olímpicos",
                  ].map((act, i) => (
                    <div key={i} className="flex items-center gap-3 group">
                      <div className="w-2 h-2 rounded-full bg-accent-blue group-hover:scale-150 transition-transform"></div>
                      <span className="font-semibold text-lg text-slate-300 group-hover:text-white transition-colors">{act}</span>
                    </div>
                  ))}
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <img 
                  src={IMAGES.COLLAGE} 
                  alt="Actividades Collage" 
                  className="rounded-[2rem] shadow-2xl border-4 border-glass-border transition-all duration-1000" 
                  referrerPolicy="no-referrer" 
                />
              </motion.div>
              <div className="absolute bottom-[-100px] left-[-100px] w-80 h-80 bg-accent-blue/10 rounded-full blur-[100px] pointer-events-none"></div>
            </div>
          </div>
        </section>

        {/* Galería de Acción */}
        <section className="py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
             <div className="flex items-end justify-between mb-16 border-b border-glass-border pb-10">
               <div>
                 <span className="badge px-4 py-1 bg-accent-pink/10 border border-accent-pink/20 text-accent-pink rounded-full text-xs font-bold mb-4 uppercase tracking-[0.2em]">Momentos Twister</span>
                 <h2 className="text-5xl font-extrabold text-white mb-2 tracking-tighter uppercase">GALERÍA DE <span className="text-gradient">ACCIÓN</span></h2>
                 <p className="text-slate-400 text-lg">Realidad capturada en cada sonrisa de nuestros campamentistas.</p>
               </div>
             </div>
             <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[IMAGES.ACTION_1, IMAGES.MUD, IMAGES.CAVEMEN, IMAGES.GALLERY_3].map((img, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 1 : -1 }}
                    className="glass-card p-2 rounded-3xl border border-glass-border overflow-hidden cursor-pointer"
                  >
                    <img 
                      src={img} 
                      className="rounded-2xl h-64 w-full object-cover transition-all duration-500" 
                      referrerPolicy="no-referrer" 
                    />
                  </motion.div>
                ))}
             </div>
          </div>
        </section>

        {/* Gastronomía */}
        <section id="gastronomia" className="py-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="glass-panel rounded-[4rem] p-12 md:p-24 relative overflow-hidden shadow-2xl border border-glass-border">
              <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                <div className="hidden lg:block relative">
                   <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-6">
                         <div className="h-48 glass-card rounded-[2.5rem] border border-glass-border animate-pulse"></div>
                         <div className="h-72 glass-card shadow-2xl rounded-[2.5rem] flex items-center justify-center p-8 border border-white/20">
                            <Utensils className="w-24 h-24 text-accent-pink drop-shadow-lg" />
                         </div>
                      </div>
                      <div className="space-y-6 pt-16">
                         <div className="h-72 glass-card rounded-[2.5rem] border border-glass-border"></div>
                         <div className="h-48 glass-card rounded-[2.5rem] border border-glass-border opacity-50"></div>
                      </div>
                   </div>
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-panel text-white font-black px-6 py-3 rounded-full shadow-2xl border border-white/20 -rotate-12 backdrop-blur-xl">
                      METODOLOGÍA GOURMET
                   </div>
                </div>
                <div>
                  <span className="badge px-4 py-1 bg-accent-pink/10 border border-accent-pink/20 text-accent-pink rounded-full text-xs font-bold mb-6">ALTA CALIDAD</span>
                  <h2 className="text-6xl font-extrabold text-white mb-10 tracking-tighter">GASTRONOMÍA <span className="text-gradient">RECREATIVA</span></h2>
                  <div className="space-y-8">
                    {[
                      { t: "Desayuno Continental", d: "Te, mate, leche, café, facturas, medialunas, pastaflora, bollos, tortillas y jugos naturales." },
                      { t: "Meriendas Saludables", d: "Adaptadas al clima, acompañadas de exquisitos salados y opciones proteicas de alta calidad." },
                      { t: "Almuerzo y Cena", d: "Hamburguesas premium, pizza casera, milanesas, quipe, asado y pastas. Menús especiales celíacos/veg." }
                    ].map((item, idx) => (
                      <div key={idx} className="glass-card p-8 rounded-[2rem] border border-glass-border hover:bg-white/10 transition-all group">
                        <h4 className="font-bold text-2xl mb-3 text-white flex items-center gap-4">
                           <div className="w-3 h-3 rounded-full bg-accent-pink group-hover:scale-125 transition-transform"></div> {item.t}
                        </h4>
                        <p className="text-slate-400 text-lg group-hover:text-slate-200 transition-colors">{item.d}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-accent-pink/5 rounded-full blur-[120px] pointer-events-none"></div>
              <div className="absolute bottom-[-100px] right-[-100px] w-80 h-80 bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none"></div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contacto" className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="glass-panel p-16 rounded-[4rem] border border-glass-border shadow-2xl relative overflow-hidden backdrop-blur-3xl">
              <div className="grid md:grid-cols-4 gap-16 relative z-10">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-4 mb-10">
                    <img src={IMAGES.LOGO} alt="Twister Logo" className="h-32 w-auto p-3 glass-card rounded-3xl" referrerPolicy="no-referrer" />
                    <span className="font-black text-5xl tracking-tighter text-white uppercase">TWISTER</span>
                  </div>
                  <p className="text-slate-400 max-w-sm text-xl leading-relaxed mb-10">
                     Líderes en transformación recreativa. Más de 10 años redefiniendo la diversión en el norte argentino.
                  </p>
                  <div className="flex gap-4">
                    <a href={WHATSAPP_LINK} className="w-14 h-14 glass-panel rounded-2xl flex items-center justify-center hover:bg-[#25D366] transition-all hover:-translate-y-2 border border-white/10">
                      <Phone className="w-6 h-6 text-white" />
                    </a>
                    <div className="w-14 h-14 glass-panel rounded-2xl flex items-center justify-center hover:bg-accent-pink transition-all hover:-translate-y-2 border border-white/10 cursor-pointer">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xs font-black mb-10 uppercase tracking-[0.3em] text-accent-blue">Contacto Directo</h4>
                  <ul className="space-y-8">
                    <li className="flex items-start gap-4">
                      <Phone className="w-5 h-5 shrink-0 text-accent-blue" />
                      <a href={WHATSAPP_LINK} className="text-slate-300 hover:text-white transition-colors text-lg font-semibold">+54 9 3814 18-1238</a>
                    </li>
                    <li className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 shrink-0 text-accent-blue" />
                      <span className="text-lg text-slate-300">Las Talas, Ruta 157, Tucumán.</span>
                    </li>
                  </ul>
                </div>

                <div className="hidden md:block">
                  <h4 className="text-xs font-black mb-10 uppercase tracking-[0.3em] text-accent-blue">Navegación</h4>
                  <ul className="space-y-4">
                    {["Inicio", "Nosotros", "Servicios", "Actividades"].map((link) => (
                      <li key={link}><a href={`#${link.toLowerCase()}`} className="text-slate-400 hover:text-white transition-colors text-lg flex items-center gap-2 group">
                        <div className="w-0 group-hover:w-3 h-[1px] bg-accent-blue transition-all"></div> {link}
                      </a></li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-24 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                <p className="text-slate-500 font-medium">© 2026 TWISTER COMPLEJO RECREATIVO. CALIDAD GARANTIZADA.</p>
                <div className="flex gap-10">
                   {["SIPROSA", "TURISMO TUCUMÁN"].map(b => (
                     <span key={b} className="text-[10px] font-black tracking-widest text-slate-400 bg-white/5 px-4 py-1 rounded-full border border-white/10 italic shadow-inner">{b}</span>
                   ))}
                </div>
              </div>
              <div className="absolute top-[-100px] right-[-100px] w-80 h-80 bg-accent-blue/10 rounded-full blur-[100px] pointer-events-none"></div>
            </div>
            <div className="text-center mt-12 mb-8 text-[10px] text-slate-600 font-bold uppercase tracking-[0.5em] opacity-30">
              Frosted Glass Design Concept • 2026
            </div>
          </div>
        </footer>
      </main>
    </div>
  </div>
);
}
