// Tipos para Location (usado dentro de Character)
export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents_count: number;
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}

export interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Male' | 'Female' | 'Genderless' | 'unknown';
  image: string;
  origin: Location | null;
  current_location: Location | null;
  last_episode: Episode | null;
  total_episodes: number;
}

// Tipo para respostas paginadas
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pages: number;
  per_page: number;
  has_next: boolean;
  has_prev: boolean;
}