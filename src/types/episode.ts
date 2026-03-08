// Tipo para um episódio
export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  created_at?: string;
}

// Tipo para um personagem dentro do episódio (versão resumida)
export interface EpisodeCharacter {
  id: number;
  name: string;
  status: string;
  image?: string;
}

// Tipo para resposta detalhada de um episódio
export interface EpisodeDetail extends Episode {
  characters: EpisodeCharacter[];
}

// Tipo para resposta da API com episódios
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

// Tipo para resposta paginada de episódios
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pages: number;
  per_page: number;
  has_next: boolean;
  has_prev: boolean;
}

// Tipo para filtros de episódio
export interface EpisodeFilters {
  season?: string;
  name?: string;
  episode?: string;
}