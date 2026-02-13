
import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('enzo_cookie_consent');
    if (!consent) {
      // Pequeno delay para não impactar o LCP
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('enzo_cookie_consent', 'true');
    setIsVisible(false);
    // Recarrega a página ou dispara evento para players saberem que podem carregar
    window.dispatchEvent(new Event('cookieConsentAccepted'));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-32 z-[100] max-w-md animate-in slide-in-from-bottom-10 duration-500">
      <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden group">
        {/* Glow Effect */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl group-hover:bg-blue-600/20 transition-colors"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-rose-600/10 rounded-full blur-2xl group-hover:bg-rose-600/20 transition-colors"></div>

        <div className="relative z-10">
          <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Cookies & Privacidade
          </h4>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            Utilizamos cookies para otimizar sua experiência e garantir que os players de vídeo funcionem corretamente. Ao aceitar, você permite o carregamento de conteúdo de terceiros (YouTube).
          </p>
          <div className="flex gap-4">
            <button 
              onClick={handleAccept}
              className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-rose-600 text-white font-bold rounded-xl text-sm hover:scale-[1.02] transition-transform active:scale-95 shadow-lg shadow-blue-900/20"
            >
              ACEITAR TUDO
            </button>
            <button 
              onClick={() => setIsVisible(false)}
              className="px-4 py-3 bg-white/5 text-gray-400 text-xs font-medium rounded-xl hover:bg-white/10 transition-colors"
            >
              Depois
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
