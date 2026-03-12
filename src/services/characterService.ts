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
   * Busca personagens com paginação
   * @param params Parâmetros de paginação (page, per_page)
   */
  async getCharacters(params: PaginationParams = { page: 1, per_page: 20 }) {
    const { page, per_page = 20 } = params;
    
    const response = await api.get<ApiResponse<PaginatedResponse<Character>>>(
      `/characters/?page=${page}&per_page=${per_page}`
    );
    
    return response.data;
  },

  /**
   * Busca personagens por nome
   * @param params Parâmetros de busca (name, page, per_page)
   */
  async searchCharacters(params: SearchParams) {
    const { name, page = 1, per_page = 20 } = params;
    
    const response = await api.get<ApiResponse<PaginatedResponse<Character>>>(
      `/characters/search?name=${encodeURIComponent(name)}&page=${page}&per_page=${per_page}`
    );
    
    return response.data;
  },

  /**
   * Busca um personagem por ID
   * @param id ID do personagem
   */
  async getCharacterById(id: number) {
    const response = await api.get<ApiResponse<Character>>(`/characters/${id}`);
    return response.data;
  },

  /**
   * Busca personagens por status
   * @param status Status do personagem (Alive, Dead, unknown)
   * @param params Parâmetros de paginação
   */
  async getCharactersByStatus(status: string, params: PaginationParams = { page: 1 }) {
    const { page, per_page = 20 } = params;
    
    const response = await api.get<ApiResponse<PaginatedResponse<Character>>>(
      `/characters/status?status=${status}&page=${page}&per_page=${per_page}`
    );
    
    return response.data;
  },

  /**
   * Busca personagens por espécie
   * @param species Espécie do personagem
   * @param params Parâmetros de paginação
   */
  async getCharactersBySpecies(species: string, params: PaginationParams = { page: 1 }) {
    const { page, per_page = 20 } = params;
    
    const response = await api.get<ApiResponse<PaginatedResponse<Character>>>(
      `/characters/species?species=${encodeURIComponent(species)}&page=${page}&per_page=${per_page}`
    );
    
    return response.data;
  }
};