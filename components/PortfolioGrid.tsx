
import React, { useState } from 'react';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project; onSelect: (p: Project) => void }> = ({ project, onSelect }) => {
  const getBadgeConfig = () => {
    if (project.category === 'thumbnail') {
      return {
        label: 'Thumbnail',
        styles: 'bg-purple-950/80 border-purple-400 text-purple-100 shadow-[0_0_20px_rgba(168,85,247,0.5)]'
      };
    }
    if (project.videoType === 'long') {
      return {
        label: 'YouTube Long',
        styles: 'bg-blue-950/80 border-blue-400 text-blue-100 shadow-[0_0_20px_rgba(59,130,246,0.5)]'
      };
    }
    return {
      label: 'Shorts/Reels',
      styles: 'bg-rose-950/80 border-rose-400 text-rose-100 shadow-[0_0_20px_rgba(225,29,72,0.5)]'
    };
  };

  const badge = getBadgeConfig();

  return (
    <div 
      className="group relative bg-[#0a0a0a] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-700 flex flex-col h-full shadow-2xl hover:-translate-y-3"
    >
      <div className="aspect-[16/10] overflow-hidden relative bg-black">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
        
        <div 
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer bg-black/70 backdrop-blur-sm"
          onClick={() => onSelect(project)}
        >
          <div className="px-6 py-3 md:px-8 md:py-4 bg-white text-black font-black text-[10px] tracking-widest rounded-xl md:rounded-2xl translate-y-6 group-hover:translate-y-0 transition-transform duration-500 shadow-2xl">
            VER CASE COMPLETO
          </div>
        </div>

        <div className={`absolute top-4 left-4 md:top-6 md:left-6 px-3 py-1 md:px-4 md:py-1.5 backdrop-blur-md border rounded-full transition-all duration-500 ${badge.styles}`}>
           <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest">
              {badge.label}
           </span>
        </div>
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-1">
        <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors leading-tight">{project.title}</h3>
        <p className="text-xs md:text-sm text-gray-500 leading-relaxed mb-6 line-clamp-2 italic tracking-wide">{project.description}</p>
        
        <button 
          onClick={() => onSelect(project)}
          className="mt-auto flex items-center gap-3 text-[9px] md:text-[10px] font-black tracking-widest text-gray-400 hover:text-white transition-colors group/btn"
        >
          DETALHES TÉCNICOS
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover/btn:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const PROJECTS: Project[] = [
  { 
    id: 1, 
    title: 'Quiz Espacial: 30 Fatos', 
    category: 'video', 
    videoType: 'long',
    imageUrl: 'https://img.youtube.com/vi/M_hMyDnXo9s/maxresdefault.jpg', 
    description: 'Edição ultra-dinâmica focada em Gen Z. Uso intensivo de motion graphics e sound design imersivo.',
    youtubeId: 'M_hMyDnXo9s',
    client: 'Quiz do dia',
    software: ['Premiere Pro', 'After Effects'],
    skills: ['Retenção Acelerada', 'Sound Design'],
    results: 'Retenção média de 70% nos primeiros 2 minutos de vídeo.'
  },
  { 
    id: 10, 
    title: 'Minimalismo Digital', 
    category: 'video', 
    videoType: 'short',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=450', 
    description: 'Short rítmico com legendas dinâmicas e overlays de textura. Foco total em retenção de 15 segundos.',
    client: 'Produtividade Pro',
    software: ['Premiere Pro'],
    skills: ['Legendas Dinâmicas', 'Cortes Rápidos'],
    results: 'Viralizou com 1.2M de views no Reels em 48 horas.'
  },
  { 
    id: 3, 
    title: 'Cidades Invisíveis', 
    category: 'video', 
    videoType: 'long',
    imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=800&h=450', 
    description: 'Documentário autoral explorando a solidão urbana através de color grading melancólico e ritmo lento.',
    youtubeId: 'dQw4w9WgXcQ', 
    client: 'Independente',
    software: ['Premiere Pro', 'DaVinci Resolve'],
    skills: ['Color Grading Cinema', 'Storytelling'],
    results: 'Vencedor do prêmio local de melhor edição experimental.'
  },
  { 
    id: 11, 
    title: 'Upgrade de Setup', 
    category: 'video', 
    videoType: 'short',
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800&h=450', 
    description: 'Transições invisíveis e sound design SFX para tech showcase em formato vertical.',
    client: 'TechVibe',
    software: ['After Effects'],
    skills: ['VFX Transições', 'Sound Design'],
    results: 'Aumento de 25% no engajamento da marca no TikTok.'
  },
  { 
    id: 7, 
    title: 'Creepypasta: NÃO CONFIE', 
    category: 'thumbnail', 
    imageUrl: 'https://i.postimg.cc/cJXfhpG5/não_confie.jpg', 
    description: 'Design de horror psicológico. Foco em iluminação de contorno (Rim Light) e atmosfera de suspense.',
    client: 'Canal Medo Oculto',
    software: ['Adobe Photoshop', 'Lightroom'],
    skills: ['Psicologia das Cores', 'Composição de Terror', 'High CTR'],
    results: 'Taxa de clique (CTR) estabilizada em 14.8%, resultando em mais de 500 mil visualizações orgânicas.'
  },
  { 
    id: 8, 
    title: 'O Bom vs O Ruim', 
    category: 'thumbnail', 
    imageUrl: 'https://i.postimg.cc/j2wsm7w6/thumb-bom-ruim.jpg', 
    description: 'Thumbnail estratégica de comparação. Utiliza gatilhos mentais de autoridade e contraste visual extremo.',
    client: 'Canal de Estratégia',
    software: ['Adobe Photoshop'],
    skills: ['Design de Comparação', 'Copywriting Visual', 'A/B Testing'],
    results: 'Aumento de 40% na taxa de cliques em relação à versão anterior.'
  },
  { id: 2, title: 'Gameplay: O Desafio', category: 'thumbnail', imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800&h=450', description: 'Thumbnail vibrante para nicho de games.' },
  { id: 4, title: 'Estratégia YouTube 2024', category: 'thumbnail', imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800&h=450', description: 'Capa estilo corporativo/clean para tutoriais.' },
  { id: 6, title: 'Podcast: O Futuro da IA', category: 'thumbnail', imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800&h=450', description: 'Thumbnail com foco em autoridade e tecnologia.' },
];

type FilterType = 'all' | 'long' | 'short' | 'thumbnail';

interface PortfolioGridProps {
  onRequestProject?: () => void;
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ onRequestProject }) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter(p => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'long') return p.category === 'video' && p.videoType === 'long';
    if (activeFilter === 'short') return p.category === 'video' && p.videoType === 'short';
    if (activeFilter === 'thumbnail') return p.category === 'thumbnail';
    return true;
  });

  const counts = {
    all: PROJECTS.length,
    long: PROJECTS.filter(p => p.videoType === 'long').length,
    short: PROJECTS.filter(p => p.videoType === 'short').length,
    thumbnail: PROJECTS.filter(p => p.category === 'thumbnail').length,
  };

  return (
    <section id="work" className="py-24 px-4 md:px-6 max-w-7xl mx-auto overflow-hidden">
      <div id="featured-projects" className="flex flex-col items-center mb-16 md:mb-20">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-4xl md:text-7xl font-black mb-4 md:mb-6 tracking-tighter uppercase leading-none">
            PROJETOS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-rose-500 text-glow-blue">EM DESTAQUE</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-lg font-light italic">Selecione uma especialidade para explorar.</p>
        </div>

        <div className="w-full overflow-x-auto no-scrollbar pb-4 flex justify-start md:justify-center">
          <div className="flex flex-nowrap md:flex-wrap gap-2 md:gap-3 p-2 bg-white/5 border border-white/10 rounded-2xl md:rounded-[2rem] backdrop-blur-2xl">
            {[
              { id: 'all', label: 'Todos', count: counts.all, color: 'white' },
              { id: 'long', label: 'Vídeos Longos', count: counts.long, color: 'blue' },
              { id: 'short', label: 'Shorts / Reels', count: counts.short, color: 'blue' },
              { id: 'thumbnail', label: 'Thumbnails', count: counts.thumbnail, color: 'rose' },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id as FilterType)}
                className={`relative px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-[1.5rem] text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all duration-500 flex items-center gap-2 whitespace-nowrap ${
                  activeFilter === filter.id 
                    ? 'text-white' 
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {activeFilter === filter.id && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${filter.color === 'blue' ? 'from-blue-600 to-blue-400' : filter.color === 'rose' ? 'from-rose-600 to-rose-400' : 'from-gray-800 to-gray-700'} rounded-xl md:rounded-[1.5rem] -z-10 shadow-lg`}></div>
                )}
                {filter.label}
                <span className={`text-[8px] px-1.5 py-0.5 rounded-full border ${activeFilter === filter.id ? 'bg-white/20 border-white/20 text-white' : 'bg-white/5 border-white/10 text-gray-500'}`}>
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div 
        key={activeFilter} 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 min-h-[400px] animate-portfolio-window"
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 lg:p-12 bg-black/98 backdrop-blur-3xl" onClick={() => setSelectedProject(null)}>
          <div className="relative w-full max-w-7xl max-h-[90vh] bg-[#050505] rounded-3xl md:rounded-[3rem] overflow-hidden border border-white/10 flex flex-col lg:flex-row" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 md:top-10 md:right-10 z-50 p-3 md:p-5 bg-white/5 text-white rounded-full hover:bg-rose-600 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex-[1.2] bg-black flex items-center justify-center p-4 md:p-8 border-b lg:border-b-0 lg:border-r border-white/5 relative group/img overflow-hidden">
               <img 
                src={selectedProject.imageUrl} 
                className="max-w-full max-h-[40vh] lg:max-h-full object-contain rounded-xl md:rounded-3xl" 
                alt={selectedProject.title}
              />
              {selectedProject.youtubeId && (
                <a 
                  href={`https://www.youtube.com/watch?v=${selectedProject.youtubeId}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center opacity-0 lg:group-hover/img:opacity-100 transition-opacity duration-500"
                >
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-rose-600 rounded-full flex items-center justify-center shadow-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </a>
              )}
            </div>

            <div className="flex-1 p-8 md:p-12 lg:p-20 overflow-y-auto">
              <h2 className="text-3xl md:text-5xl font-black mb-6 md:mb-10 text-glow-blue leading-tight tracking-tight">{selectedProject.title}</h2>
              
              <div className="space-y-8 md:space-y-12">
                <section>
                  <h4 className="text-[9px] md:text-[10px] font-black text-blue-500 uppercase tracking-widest mb-4">Briefing & Estratégia</h4>
                  <p className="text-gray-400 text-sm md:text-xl leading-relaxed font-light tracking-wide">{selectedProject.description}</p>
                </section>

                {selectedProject.results && (
                  <section>
                    <h4 className="text-[9px] md:text-[10px] font-black text-rose-500 uppercase tracking-widest mb-4">Resultados Alcançados</h4>
                    <div className="p-6 md:p-8 bg-white/[0.03] rounded-2xl md:rounded-[2rem] border border-white/5 text-sm md:text-xl font-medium text-gray-200 italic">
                      "{selectedProject.results}"
                    </div>
                  </section>
                )}

                <div>
                  <h4 className="text-[9px] md:text-[10px] font-black text-gray-600 uppercase tracking-widest mb-4">Tecnologias</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.software?.map(s => (
                      <span key={s} className="px-3 py-1.5 md:px-4 md:py-2 bg-white/5 rounded-lg text-[8px] md:text-[10px] font-bold text-gray-400 border border-white/5 tracking-wider">{s}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 md:mt-20">
                <button 
                  onClick={() => {
                    setSelectedProject(null);
                    if (onRequestProject) onRequestProject();
                  }}
                  className="w-full py-4 md:py-6 bg-gradient-to-r from-blue-600 to-rose-600 text-white font-black text-xs md:text-sm tracking-widest rounded-xl md:rounded-2xl shadow-xl uppercase"
                >
                  SOLICITAR PROJETO SIMILAR
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioGrid;
