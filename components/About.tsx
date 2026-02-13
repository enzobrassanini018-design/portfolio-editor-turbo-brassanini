
import React, { useState } from 'react';

const About: React.FC = () => {
  const [showSkillsContent, setShowSkillsContent] = useState(false);

  const skills = [
    {
      title: "Motion 2D/3D",
      desc: "Animações complexas e elementos tridimensionais que elevam drasticamente o valor de produção do seu vídeo.",
      color: "blue"
    },
    {
      title: "Sonoplastia Vibrante",
      desc: "Sound design imersivo que guia a emoção do espectador e preenche cada frame com impacto real.",
      color: "rose"
    },
    {
      title: "Storytelling Estratégico",
      desc: "Roteirização visual focada em manter o ritmo alto e a curiosidade constante do início ao fim.",
      color: "blue"
    },
    {
      title: "Design de Thumbs (CTR)",
      desc: "Criação de capas estratégicas com manipulação avançada, focadas em psicologia das cores e gatilhos de clique.",
      color: "rose"
    },
    {
      title: "Color Grading Imersivo",
      desc: "Tratamento de cor profissional para criar atmosferas únicas e definir uma identidade visual marcante.",
      color: "blue"
    },
    {
      title: "Engenharia de Cliques",
      desc: "Composição de thumbnails que dominam o feed e aumentam a taxa de cliques (CTR) organicamente.",
      color: "rose"
    }
  ];

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-1/2 -right-1/4 w-[500px] h-[500px] bg-rose-600/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 -left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
          
          {/* Lado Visual */}
          <div className="flex-1 relative lg:sticky lg:top-32">
            <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 bg-[#0a0a0a] aspect-square lg:aspect-auto lg:h-[600px] group">
              <img 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800" 
                alt="Setup de Edição e Design" 
                className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000 group-hover:opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              
              <div className="absolute bottom-12 left-12 right-12">
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <span className="block text-3xl font-black text-blue-500 mb-1">+3</span>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-tight">Anos de Experiência</span>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <span className="block text-3xl font-black text-rose-500 mb-1">CTR+</span>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-tight">Design Estratégico</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Badge flutuante */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-600 to-rose-600 rounded-full flex items-center justify-center p-0.5 shadow-2xl animate-float">
               <div className="w-full h-full bg-[#050505] rounded-full flex flex-col items-center justify-center text-center p-2">
                  <span className="text-xl font-black leading-none">18</span>
                  <span className="text-[8px] font-bold text-gray-500 uppercase tracking-tighter">Anos de Idade</span>
               </div>
            </div>
          </div>

          {/* Conteúdo de Texto */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/20 to-rose-600/20 border border-white/10 mb-10 shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)] transition-all duration-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs md:text-sm font-black tracking-[0.3em] uppercase text-white">
                Quem é <span className="text-blue-400">Enzo</span> <span className="text-rose-400">Brassanini</span>?
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tight leading-tight">
              DOMINANDO O CLIQUE E A <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-rose-500">RETENÇÃO DE ELITE</span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed tracking-wide mb-12">
              <p>
                Meu nome é <span className="text-white font-bold">Enzo Leonardo Brassanini</span>. O que começou há 3 anos como uma curiosidade técnica, evoluiu para uma obsessão por resultados e performance no YouTube, unindo a arte da <span className="text-blue-400 font-bold">edição dinâmica</span> com a estratégia por trás de <span className="text-rose-400 font-bold">thumbnails impossíveis de ignorar</span>.
              </p>
              <p>
                Decidi entrar no mercado profissional como <span className="text-white font-bold">Editor e Thumbmaker</span> para aplicar cada estratégia de psicologia visual, ritmo de corte e design de impacto que refinei ao longo de milhares de horas. Meu objetivo não é apenas "fazer um vídeo", é construir a porta de entrada (Thumb) e o caminho (Edição) para o sucesso do seu canal.
              </p>
              <p>
                Diferente da maioria, eu entendo que a <span className="text-rose-400 font-bold">thumbnail é o gatilho da curiosidade</span> e a <span className="text-blue-400 font-bold">edição é o motor da retenção</span>. Sem uma boa thumb, ninguém clica; sem uma boa edição, ninguém fica. Eu domino os dois pilares para transformar seu conteúdo em autoridade.
              </p>
            </div>

            {/* SEÇÃO EXPANSÍVEL DE SKILLS */}
            <div className="mb-12">
              <button 
                onClick={() => setShowSkillsContent(!showSkillsContent)}
                className="flex items-center gap-4 px-8 py-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group w-full md:w-auto"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em]">Ver Minha Arsenal Técnico</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 text-blue-500 transition-transform duration-500 ${showSkillsContent ? 'rotate-180' : ''}`} 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 transition-all duration-700 ease-in-out overflow-hidden ${showSkillsContent ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className={`p-6 bg-black/40 border rounded-2xl transition-all duration-500 hover:scale-[1.02] ${skill.color === 'blue' ? 'border-blue-500/20 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]' : 'border-rose-500/20 hover:border-rose-500/50 hover:shadow-[0_0_20px_rgba(225,29,72,0.1)]'}`}
                  >
                    <h4 className={`text-sm font-black uppercase tracking-widest mb-3 ${skill.color === 'blue' ? 'text-blue-400' : 'text-rose-400'}`}>
                      {skill.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-medium tracking-wide">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-16">
              <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-gray-300">
                # EDITING
              </div>
              <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-gray-300">
                # THUMBMAKER
              </div>
              <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-gray-300">
                # ESTRATEGISTA
              </div>
            </div>

            <div className="mt-16">
               <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-4 text-white font-black text-sm tracking-widest uppercase"
               >
                 <span>Ver planos e valores</span>
                 <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                 </div>
               </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
