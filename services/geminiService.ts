
import { GoogleGenAI } from "@google/genai";

// Fix: Creating a new GoogleGenAI instance right before making an API call to ensure it uses the most up-to-date API key
export const getGeminiResponse = async (userMessage: string, chatHistory: any[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
  
  const systemInstruction = `
    Você é o Assistente Virtual do Enzo Brassanini. 
    Enzo é um editor de vídeos profissional e criador de thumbnails para YouTube de alto impacto.
    Seu estilo é moderno, focado em retenção (storytelling visual) e CTR (thumbnails chamativas).
    Ele trabalha com softwares como Adobe Premiere, After Effects e Photoshop.
    Seja educado, criativo e profissional. Se perguntarem sobre preços, diga que cada projeto é único e convide-os a entrar em contato via WhatsApp ou E-mail.
    Mantenha as respostas concisas.
  `;

  try {
    // Fix: Moved systemInstruction to config block as per guidelines and used model 'gemini-3-flash-preview'
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...chatHistory.map(msg => ({
          role: msg.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: msg.content }]
        })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: systemInstruction,
      },
    });

    // Fix: Accessed .text property directly (getter)
    return response.text || "Desculpe, tive um problema ao processar sua mensagem.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Opa! Estou descansando um pouco. Tente novamente em alguns instantes.";
  }
};
