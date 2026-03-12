import api from './api';
import { 
  Character, 
  ApiResponse, 
  PaginatedResponse,
  SearchParams,
  PaginationParams 
} from '../types/character';

export const characterService = {
  /**
   * Search characters with pagination
   * @param params Parameters for pagination (page, per_page)
   */
  async getCharacters(params: PaginationParams = { page: 1, per_page: 20 }) {
    const { page, per_page = 20 } = params;
    
    const response = await api.get<ApiResponse<PaginatedResponse<Character>>>(
      `/characters/?page=${page}&per_page=${per_page}`
    );
    
    return response.data;
  },

  /**
   * Search characters by name
   * @param params Parameters for search (name, page, per_page)
   */
  async searchCharacters(params: SearchParams) {
    const { name, page = 1, per_page = 20 } = params;
    
    const response = await api.get<ApiResponse<PaginatedResponse<Character>>>(
      `/characters/search?name=${encodeURIComponent(name)}&page=${page}&per_page=${per_page}`
    );
    
    return response.data;
  },

  /**
   * Search for a character by ID
   * @param id Character ID
   */
  async getCharacterById(id: number) {
    const response = await api.get<ApiResponse<Character>>(`/characters/${id}`);
    return response.data;
  },

  /**
   * Search characters by status
   * @param status Character Status (Alive, Dead, unknown)
   * @param params Pagination parameters
   */
  async getCharactersByStatus(status: string, params: PaginationParams = { page: 1 }) {
    const { page, per_page = 20 } = params;
    
    const response = await api.get<ApiResponse<PaginatedResponse<Character>>>(
      `/characters/status?status=${status}&page=${page}&per_page=${per_page}`
    );
    
    return response.data;
  },

  /**
   * Search characters by species
   * @param species Character species
   * @param params Pagination parameters
   */
  async getCharactersBySpecies(species: string, params: PaginationParams = { page: 1 }) {
    const { page, per_page = 20 } = params;
    
    const response = await api.get<ApiResponse<PaginatedResponse<Character>>>(
      `/characters/species?species=${encodeURIComponent(species)}&page=${page}&per_page=${per_page}`
    );
    
    return response.data;
  }
};