export interface ApiResponse<T = any> {
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

// Tipo para erros da API
export interface ApiError {
  message: string;
  status_code?: number;
  data?: any;
}

// Tipo para parâmetros de paginação
export interface PaginationParams {
  page?: number;
  per_page?: number;
}

// Tipo para parâmetros de busca
export interface SearchParams extends PaginationParams {
  name?: string;
}

// Tipo para estado de requisição
export interface RequestState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}