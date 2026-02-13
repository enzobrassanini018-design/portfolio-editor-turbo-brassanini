
import React from 'react';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/10 rounded-full blur-[100px] md:blur-[140px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-rose-600/10 rounded-full blur-[100px] md:blur-[140px] animate-pulse [animation-delay:2s]"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 px-6 max-w-7xl mx-auto w-full">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left order-2 lg:order-1 w-full">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 md:mb-8 backdrop-blur-sm mx-auto lg:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[9px] md:text-xs font-black tracking-[0.2em] uppercase text-blue-400">Editor High-End & Thumbnail Strategist</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 tracking-tighter leading-[1.1]">
            SEU CONTEÚDO <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-white to-rose-500 text-glow-blue">
              COM RETENÇÃO
            </span>
          </h1>
          
          <p className="text-gray-400 text-base md:text-xl mb-10 md:mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light tracking-wide">
            Especialista em storytelling visual e psicologia de retenção. <br className="hidden md:block" />
            Transformo vídeos comuns em <span className="text-white font-semibold">experiências cinematográficas</span> que dominam a atenção e geram cliques.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <button 
              onClick={() => scrollTo('featured-projects')}
              className="group relative px-8 py-4 bg-white text-black font-black rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-500 overflow-hidden shadow-2xl tracking-widest w-full sm:w-auto text-[10px] uppercase"
            >
              <span className="relative z-10">Ver Portfólio</span>
              <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>
            <button 
              onClick={() => scrollTo('about')}
              className="px-8 py-4 bg-transparent border border-white/10 text-white font-black rounded-2xl hover:bg-white/5 transition-all backdrop-blur-sm tracking-widest w-full sm:w-auto text-[10px] uppercase"
            >
              Sobre Mim
            </button>
            <button 
              onClick={() => scrollTo('pricing')}
              className="px-8 py-4 bg-transparent border border-white/10 text-white font-black rounded-2xl hover:bg-white/5 transition-all backdrop-blur-sm tracking-widest w-full sm:w-auto text-[10px] uppercase"
            >
              ORÇAMENTO
            </button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 relative flex justify-center items-center order-1 lg:order-2 w-full max-w-[320px] md:max-w-none">
          <div className="absolute inset-0 border border-blue-500/10 rounded-full scale-[1.2] animate-pulse pointer-events-none"></div>
          <div className="relative z-10 w-56 h-56 sm:w-72 sm:h-72 lg:w-[420px] lg:h-[420px] animate-float">
            <div className="absolute -top-6 -right-6 px-3 py-1.5 bg-blue-600/10 border border-blue-500/20 backdrop-blur-xl rounded-lg z-20 hidden md:block">
               <span className="text-[8px] font-black text-blue-400 tracking-widest uppercase">Rendering... 84%</span>
            </div>

            <div className="absolute inset-0 border-2 border-white/10 rounded-[2.5rem] md:rounded-[3rem] -rotate-6 scale-105"></div>
            <div className="absolute inset-0 border-2 border-blue-500/20 rounded-[2.5rem] md:rounded-[3rem] rotate-3 scale-100"></div>
            
            <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] md:rounded-[3rem] border border-white/20 bg-[#080808] shadow-2xl group">
              <img 
                src="https://i.postimg.cc/Qxf21tFh/perfil-vendas.png" 
                alt="Enzo Brassanini" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent opacity-40"></div>
            </div>

            {/* Name Label - Responsive Padding */}
            <div className="absolute -bottom-6 sm:-bottom-10 left-1/2 -translate-x-1/2 w-[110%] bg-black/80 backdrop-blur-2xl border border-white/10 px-4 sm:px-8 py-3 sm:py-5 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="text-center">
                    <span className="block text-[8px] sm:text-[10px] text-blue-400 font-black tracking-[0.3em] uppercase mb-1 opacity-80">Creative Video Editor</span>
                    <h2 className="text-base sm:text-2xl lg:text-3xl font-black tracking-tighter whitespace-nowrap">
                        <span className="text-white">ENZO</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-rose-500 ml-1.5 sm:ml-2">BRASSANINI</span>
                    </h2>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
