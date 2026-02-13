
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PortfolioGrid from './components/PortfolioGrid';
import CookieConsent from './components/CookieConsent';
import Pricing from './components/Pricing';
import ContactModal from './components/ContactModal';

// Componente para elementos decorativos animados espalhados pelo site
const BackgroundDecorations = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Linhas Neon Flutuantes */}
      <div className="neon-line top-[20%] opacity-20" style={{ animationDelay: '2s' }}></div>
      <div className="neon-line top-[50%] right-0 opacity-10 bg-gradient-to-l from-transparent via-rose-500/50 to-transparent" style={{ animationDelay: '5s' }}></div>
      <div className="neon-line top-[80%] opacity-15" style={{ animationDelay: '8s' }}></div>

      {/* Ícones de Edição Flutuantes */}
      <div className="absolute top-[15%] left-[10%] opacity-10 animate-float-slow">
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <div className="absolute top-[40%] right-[15%] opacity-10 animate-float">
        <svg className="w-16 h-16 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div className="absolute bottom-[20%] left-[20%] opacity-5 animate-float-fast">
         <div className="text-[100px] font-black text-white/5 select-none tracking-tighter">00:00:24</div>
      </div>
      <div className="absolute top-[70%] right-[5%] opacity-10 animate-float-slow">
        <svg className="w-10 h-10 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className={`relative min-h-screen bg-[#050505] ${isContactModalOpen ? 'overflow-hidden h-screen' : ''}`}>
      <BackgroundDecorations />
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        
        <About />
        
        {/* Services Section */}
        <section id="services" className="py-24 bg-black/40 border-y border-white/5 relative">
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
            <div className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-600/20 text-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-blue-600/30 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">Edição de Vídeo</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Cortes, efeitos, correção de cor e sound design pensados para maximizar a retenção do seu espectador.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-rose-500/30 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-rose-600/20 text-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-rose-600/30 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-rose-400 transition-colors">Thumbnails de Impacto</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Capas estratégicas focadas em psicologia das cores e elementos que despertam a curiosidade (High CTR).
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-600/20 text-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-purple-600/30 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">Branding para Canais</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Criação de identidade visual completa, banners e elementos on-screen para profissionalizar seu canal.
              </p>
            </div>
          </div>
        </section>

        <PortfolioGrid onRequestProject={() => setIsContactModalOpen(true)} />

        <Pricing onBook={() => setIsContactModalOpen(true)} />

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0d0d0d] to-black p-12 rounded-[2rem] border border-white/10 text-center relative overflow-hidden group">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-1000"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-rose-600/10 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-1000"></div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Vamos elevar o nível do seu canal?</h2>
            <p className="text-gray-400 mb-10 text-lg">Estou disponível para novos projetos e parcerias fixas.</p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Contatos Diretos
              </button>
              <a 
                href="#" 
                className="flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:scale-105 transition-transform"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Direto
              </a>
            </div>
          </div>
        </section>
      </main>

      <CookieConsent />

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />

      <footer className="py-12 border-t border-white/5 text-center text-gray-500 text-sm relative z-10 bg-black/50 backdrop-blur-sm">
        <p>© {new Date().getFullYear()} Enzo Brassanini. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
