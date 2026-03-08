// Tipo para uma localização
export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  created_at?: string;
  residents_count: number;
}

export interface LocationCharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  image?: string;
}

export interface LocationDetail extends Location {
  residents: LocationCharacter[];
}

// Tipo para resposta da API com localizações
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

// Tipo para resposta paginada de localizações
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pages: number;
  per_page: number;
  has_next: boolean;
  has_prev: boolean;
}

// Tipo para filtros de localização
export interface LocationFilters {
  type?: string;
  dimension?: string;
  name?: string;
}