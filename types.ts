
export interface Project {
  id: number;
  title: string;
  category: 'video' | 'thumbnail';
  videoType?: 'long' | 'short'; // Novo campo para categorização
  imageUrl: string;
  description: string;
  youtubeId?: string;
  client?: string;
  software?: string[];
  skills?: string[];
  results?: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
