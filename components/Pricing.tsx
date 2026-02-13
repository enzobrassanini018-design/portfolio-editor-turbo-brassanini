
import React, { useState } from 'react';

interface PricingProps {
  onBook: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onBook }) => {
  const [activeTab, setActiveTab] = useState<'shorts' | 'long' | 'thumbnails'>('shorts');

  const shortsPlans = [
    { 
      name: "Básico (Basic)", 
      level: "CORTE, ÁUDIO E LEGENDAS PADRÃO", 
      unitPrice: "35", 
      oldPrice: "50",
      discountLabel: "Save 30%",
      desc: "Ideal para conteúdos rápidos e diretos com qualidade profissional.",
      features: ["VÍDEOS DE ATÉ 60 SEGUNDOS", "CORTE E MONTAGEM", "TRATAMENTO DE ÁUDIO", "LEGENDAS PADRÃO", "ENTREGA EM 24H - 48H"], 
      combos: [
        { qty: "5 VÍDEOS", discount: "COMBO ECONÔMICO (-15%)", price: "150", color: "orange" },
        { qty: "10 VÍDEOS", discount: "PACOTE GROWTH (-20%)", price: "280", color: "green" }
      ],
      color: "blue" 
    },
    { 
      name: "Turbo (High Retention)", 
      level: "LEGENDAS DINÂMICAS, SFX E B-ROLL", 
      unitPrice: "70", 
      oldPrice: "100",
      discountLabel: "Save 30%",
      desc: "Edição magnética focada em retenção e ritmo acelerado.",
      features: ["VÍDEOS DE ATÉ 60 SEGUNDOS", "LEGENDAS DINÂMICAS", "SOUND DESIGN (SFX)", "INSERÇÃO DE B-ROLL", "ENTREGA EM 24H - 48H"], 
      combos: [
        { qty: "5 VÍDEOS", discount: "FIDELIDADE 5 (-14%)", price: "300", color: "orange" },
        { qty: "10 VÍDEOS", discount: "FIDELIDADE 10 (-21%)", price: "550", color: "green" }
      ],
      popular: true, 
      color: "blue" 
    },
    { 
      name: "Premium (Advanced)", 
      level: "MOTION GRAPHICS, 3D E VFX", 
      unitPrice: "130", 
      oldPrice: "180",
      discountLabel: "Early Bird Price",
      desc: "Produção de elite com efeitos visuais avançados e 3D.",
      features: ["VÍDEOS DE ATÉ 60 SEGUNDOS", "MOTION GRAPHICS", "ELEMENTOS 3D", "VFX AVANÇADO", "ENTREGA EM 3 A 5 DIAS ÚTEIS"], 
      combos: [
        { qty: "3 VÍDEOS", discount: "PROJETO ELITE (-15%)", price: "330", color: "orange" },
        { qty: "5 VÍDEOS", discount: "FULL CAMPAIGN (-20%)", price: "520", color: "green" }
      ],
      color: "blue" 
    }
  ];

  const longPlans = [
    { 
      name: "Basic Long-form", 
      level: "CORTES DE ERROS E TRILHA BÁSICA", 
      unitPrice: "140", 
      oldPrice: "200",
      discountLabel: "Limited Time",
      desc: "Foco em limpeza de bruto e áudio cristalino para vídeos de 5-10 min.",
      features: ["VÍDEOS DE 5 A 10 MINUTOS", "TRATAMENTO DE ÁUDIO", "TRILHA SONORA BÁSICA", "LEGENDAS EM MOMENTOS CHAVE", "ENTREGA EM 3-4 DIAS ÚTEIS"], 
      combos: [
        { qty: "2 VÍDEOS", discount: "STARTER PACK (-14%)", price: "240", color: "orange" },
        { qty: "4 VÍDEOS", discount: "MONTHLY BASIC (-20%)", price: "450", color: "green" }
      ],
      color: "rose" 
    },
    { 
      name: "Creator Growth", 
      level: "EDIÇÃO ESTILO DAN.PR E SOUND DESIGN", 
      unitPrice: "320", 
      oldPrice: "450",
      discountLabel: "New Client Offer",
      desc: "Edição dinâmica com uso constante de B-roll e zooms rítmicos.",
      features: ["VÍDEOS DE 5 A 10 MINUTOS", "SOUND DESIGN IMERSIVO (SFX)", "USO CONSTANTE DE B-ROLL", "LEGENDAS DINÂMICAS", "ENTREGA EM 5-7 DIAS ÚTEIS"], 
      combos: [
        { qty: "2 VÍDEOS", discount: "CREATOR PACK (-14%)", price: "550", color: "orange" },
        { qty: "4 VÍDEOS", discount: "CHANNEL ACCELERATOR (-22%)", price: "1000", color: "green" }
      ],
      popular: true, 
      color: "rose" 
    },
    { 
      name: "Authority Doc", 
      level: "STORYTELLING DOCUMENTARY / AE", 
      unitPrice: "750", 
      oldPrice: "1000",
      discountLabel: "Launch Price",
      desc: "O mais alto nível com animações complexas no After Effects e 3D.",
      features: ["VÍDEOS DE 5 A 10 MINUTOS", "ANIMAÇÕES NO AFTER EFFECTS", "INTEGRAÇÃO DE MODELOS 3D", "INFOGRÁFICOS ANIMADOS", "ENTREGA EM 10+ DIAS ÚTEIS"], 
      combos: [
        { qty: "2 VÍDEOS", discount: "PREMIUM DUO (-13%)", price: "1300", color: "orange" },
        { qty: "4 VÍDEOS", discount: "FULL SEASON (-20%)", price: "2400", color: "green" }
      ],
      color: "rose" 
    }
  ];

  const thumbnailPlans = [
    { 
      name: "CTR Standard", 
      level: "MANIPULAÇÃO E ESTRATÉGIA VISUAL", 
      unitPrice: "25", 
      oldPrice: "35",
      discountLabel: "Discounted",
      desc: "Design estratégico focado em cliques e psicologia das cores.",
      features: ["MANIPULAÇÃO DE IMAGEM", "TRATAMENTO DE COR FACIAL", "TIPOGRAFIA DE IMPACTO", "PSICOLOGIA DAS CORES", "ENTREGA EM ATÉ 24H"], 
      combos: [
        { qty: "5 THUMBNAILS", discount: "WEEKLY PACK (-20%)", price: "100", color: "orange" },
        { qty: "10 THUMBNAILS", discount: "MONTHLY BUNDLE (-28%)", price: "180", color: "green" }
      ],
      color: "purple" 
    },
    { 
      name: "Elite Illustrated", 
      level: "PINTURA DIGITAL E ILUSTRAÇÃO", 
      unitPrice: "50", 
      oldPrice: "70",
      discountLabel: "Discounted",
      desc: "Artes exclusivas com elementos desenhados à mão e 3D.",
      features: ["ILUSTRAÇÃO PERSONALIZADA", "RENDERIZAÇÃO 3D", "HIGH-END COMPOSITION", "3 REVISÕES INCLUSAS", "ENTREGA EM 48H - 72H"], 
      combos: [
        { qty: "5 THUMBNAILS", discount: "ELITE BUNDLE (-20%)", price: "200", color: "orange" },
        { qty: "10 THUMBNAILS", discount: "PRODUCER PACK (-30%)", price: "350", color: "green" }
      ],
      popular: true, 
      color: "purple" 
    },
    { 
      name: "Brand Identity", 
      level: "BANNER + PERFIL + 3 THUMBS", 
      unitPrice: "110", 
      oldPrice: "150",
      discountLabel: "Full Pack Deal",
      desc: "Identidade visual completa para profissionalizar seu canal.",
      features: ["BANNER CUSTOMIZADO", "AVATAR/LOGO PROFILATIZADO", "3 THUMBNAILS PADRÃO", "GUIA DE CORES DO CANAL", "ENTREGA EM 3 A 5 DIAS"], 
      combos: [
        { qty: "PACK CANAL", discount: "BEST DEAL (-10%)", price: "100", color: "orange" },
        { qty: "UPDATE MENSAL", discount: "RECURRING SAVINGS", price: "200", color: "green" }
      ],
      color: "purple" 
    }
  ];

  const currentPlans = activeTab === 'shorts' ? shortsPlans : (activeTab === 'long' ? longPlans : thumbnailPlans);

  const theme = activeTab === 'shorts' ? 'blue' : (activeTab === 'long' ? 'rose' : 'purple');

  return (
    <section id="pricing" className="py-24 md:py-32 px-4 md:px-6 bg-[#020202] relative overflow-hidden">
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] opacity-10 rounded-full blur-[80px] md:blur-[160px] pointer-events-none transition-colors duration-1000 ${
        theme === 'blue' ? 'bg-blue-600' : theme === 'rose' ? 'bg-rose-600' : 'bg-purple-600'
      }`}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-8xl font-black mb-8 md:mb-12 tracking-tighter leading-none uppercase">
            INVESTIMENTO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-rose-500">
              & PACOTES
            </span>
          </h2>

          <div className="flex justify-center mb-16 md:mb-24 overflow-x-auto no-scrollbar pb-4">
            <div className="bg-white/5 border border-white/10 p-1.5 md:p-2 rounded-2xl md:rounded-[2.5rem] flex flex-nowrap gap-1 md:gap-2 backdrop-blur-xl shadow-2xl">
              <button onClick={() => setActiveTab('shorts')} className={`px-6 md:px-10 py-3 md:py-5 rounded-xl md:rounded-[2rem] text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${activeTab === 'shorts' ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]' : 'text-gray-500 hover:text-white'}`}>Shorts / Reels</button>
              <button onClick={() => setActiveTab('long')} className={`px-6 md:px-10 py-3 md:py-5 rounded-xl md:rounded-[2rem] text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${activeTab === 'long' ? 'bg-rose-600 text-white shadow-[0_0_20px_rgba(225,29,72,0.5)]' : 'text-gray-500 hover:text-white'}`}>YouTube (Long)</button>
              <button onClick={() => setActiveTab('thumbnails')} className={`px-6 md:px-10 py-3 md:py-5 rounded-xl md:rounded-[2rem] text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${activeTab === 'thumbnails' ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.5)]' : 'text-gray-500 hover:text-white'}`}>Thumbnails</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-stretch">
          {currentPlans.map((plan: any, index: number) => (
            <div 
              key={index} 
              className={`group relative bg-[#080808] border transition-all duration-500 hover:-translate-y-4 flex flex-col h-full rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-10 ${
                plan.popular 
                ? (theme === 'blue' ? 'border-blue-500/50 shadow-[0_0_50px_rgba(59,130,246,0.15)]' : 
                   theme === 'rose' ? 'border-rose-500/50 shadow-[0_0_50px_rgba(225,29,72,0.15)]' : 
                   'border-purple-500/50 shadow-[0_0_50px_rgba(168,85,247,0.15)]')
                : 'border-white/5 hover:border-white/20'
              }`}
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-b overflow-hidden ${
                theme === 'blue' ? 'from-blue-600/10 to-transparent' : 
                theme === 'rose' ? 'from-rose-600/10 to-transparent' : 
                'from-purple-600/10 to-transparent'
              }`}></div>

              {plan.popular && (
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 text-white text-[8px] md:text-[9px] font-black px-6 md:px-8 py-2 md:py-2.5 rounded-full tracking-widest uppercase z-20 shadow-2xl ${
                  theme === 'blue' ? 'bg-blue-600' : theme === 'rose' ? 'bg-rose-600' : 'bg-purple-600'
                }`}>
                  FOCO EM CRESCIMENTO
                </div>
              )}

              <div className="mb-6 md:mb-8 relative z-10">
                <span className={`text-[8px] md:text-[9px] font-black uppercase tracking-widest ${
                   theme === 'blue' ? 'text-blue-500' : 
                   theme === 'rose' ? 'text-rose-500' : 
                   'text-purple-500'
                }`}>{plan.level}</span>
                <h3 className="text-2xl md:text-3xl font-bold mt-2 text-white">{plan.name}</h3>
                
                <div className="mt-6 flex flex-col">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-base md:text-lg text-gray-500 line-through font-bold opacity-60">${plan.oldPrice}</span>
                    <span className={`text-[7px] md:text-[8px] font-black px-2 py-1 rounded bg-emerald-500/10 text-emerald-500 uppercase tracking-widest border border-emerald-500/20`}>
                      {plan.discountLabel}
                    </span>
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-white flex items-baseline">
                    <span className="text-xl md:text-2xl mr-1 font-light opacity-40">$</span>
                    {plan.unitPrice}
                    <span className="text-[9px] md:text-[10px] ml-2 text-gray-500 font-bold uppercase tracking-widest">/ PROJETO</span>
                  </div>
                </div>

                <p className="text-gray-500 text-[11px] md:text-xs mt-6 leading-relaxed font-medium">
                  {plan.desc}
                </p>
              </div>

              <div className="space-y-4 mb-10 md:mb-12 border-t border-white/5 pt-6 md:pt-8 relative z-10">
                {plan.features.map((f: string, i: number) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-1 h-1 rounded-full ${
                      theme === 'blue' ? 'bg-blue-500' : theme === 'rose' ? 'bg-rose-500' : 'bg-purple-500'
                    }`}></div>
                    <span className="text-[8px] md:text-[9px] text-gray-400 font-bold uppercase tracking-widest">{f}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto relative z-10">
                <div className="mb-8">
                  <h4 className="text-[8px] md:text-[9px] text-gray-600 font-black uppercase tracking-[0.2em] mb-4">COMBOS E FIDELIDADE</h4>
                  <div className="space-y-3">
                    {plan.combos.map((combo: any, i: number) => (
                      <div 
                        key={i} 
                        className="flex items-center justify-between p-3 md:p-4 bg-[#111111] rounded-xl md:rounded-2xl border border-white/[0.03]"
                      >
                        <div className="flex flex-col">
                          <span className="text-[10px] md:text-[11px] font-bold text-white uppercase tracking-wider">{combo.qty}</span>
                          <span className={`text-[7px] md:text-[8px] font-black uppercase tracking-tighter ${
                            theme === 'blue' ? 'text-blue-500' : theme === 'rose' ? 'text-rose-500' : 'text-purple-500'
                          }`}>{combo.discount}</span>
                        </div>
                        <div className={`text-xl md:text-2xl font-black ${
                          combo.color === 'orange' ? 'text-orange-500' : 'text-emerald-500'
                        }`}>
                          ${combo.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={onBook} 
                  className={`w-full py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-[9px] md:text-[10px] tracking-widest transition-all duration-500 uppercase shadow-xl relative overflow-hidden group/btn ${
                    plan.popular 
                    ? (theme === 'blue' ? 'bg-blue-600 text-white hover:bg-blue-500' : 
                       theme === 'rose' ? 'bg-rose-600 text-white hover:bg-rose-500' : 
                       'bg-purple-600 text-white hover:bg-purple-500')
                    : 'bg-white text-black hover:bg-gray-200'
                  }`}
                >
                  <span className="relative z-10 block">RESERVAR VAGA</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-16 md:mt-20 text-center text-gray-600 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] max-w-2xl mx-auto leading-relaxed opacity-60">
          * Valores promocionais por tempo limitado. Economize até 30% em pedidos em lote. Para fluxos de trabalho personalizados, entre em contato.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
