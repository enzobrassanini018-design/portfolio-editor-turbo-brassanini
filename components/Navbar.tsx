
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-xl md:text-2xl font-extrabold tracking-tighter cursor-pointer" onClick={() => scrollToSection('home')}>
          <span className="text-blue-500">ENZO</span>
          <span className="text-rose-500">BRASSANINI</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 text-[10px] font-black uppercase tracking-widest text-gray-400">
          <button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">Início</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">Sobre</button>
          <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Serviços</button>
          <button onClick={() => scrollToSection('work')} className="hover:text-white transition-colors">Trabalhos</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contato</button>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => scrollToSection('pricing')}
            className="hidden sm:block px-6 py-2.5 bg-gradient-to-r from-blue-600 to-rose-600 rounded-full text-[10px] font-black hover:scale-105 transition-transform text-white shadow-lg shadow-blue-900/20 uppercase tracking-widest"
          >
            ORÇAMENTO
          </button>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden absolute top-20 left-0 w-full bg-[#050505] border-b border-white/10 transition-all duration-500 overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-8 gap-6 text-center">
          <button onClick={() => scrollToSection('home')} className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">Início</button>
          <button onClick={() => scrollToSection('about')} className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">Sobre</button>
          <button onClick={() => scrollToSection('services')} className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">Serviços</button>
          <button onClick={() => scrollToSection('work')} className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">Trabalhos</button>
          <button onClick={() => scrollToSection('contact')} className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">Contato</button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="mt-4 px-6 py-4 bg-white text-black rounded-2xl text-xs font-black uppercase tracking-widest"
          >
            ORÇAMENTO AGORA
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
