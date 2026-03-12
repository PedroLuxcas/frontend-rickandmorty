// TIPOS PARA LOCALIZAÇÃO

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents_count: number;
}

// TIPOS PARA EPISÓDIO

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}

// TIPO PRINCIPAL DO PERSONAGEM

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

// TIPOS PARA RESPOSTA DA API

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pages: number;
  per_page: number;
  has_next: boolean;
  has_prev: boolean;
}

// TIPOS PARA PARÂMETROS

export interface SearchParams {
  name: string;
  page?: number;
  per_page?: number;
}

export interface PaginationParams {
  page: number;
  per_page?: number;
}