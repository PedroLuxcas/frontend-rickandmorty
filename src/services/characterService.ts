import api from './api';
import { Character, ApiResponse, PaginatedResponse } from '../types';

export const characterService = {
  /**
   * Get all characters with pagination
   * @param page - Page number (default: 1)
   * @param perPage - Items per page (default: 20)
   */
  async getAll(page: number = 1, perPage: number = 20) {
    try {
      const response = await api.get<ApiResponse<PaginatedResponse<Character>>>(
        `/characters/?page=${page}&per_page=${perPage}`
      );
      return response.data;
    } catch (error) {
      console.error('Error in characterService.getAll:', error);
      throw error;
    }
  },

  /**
   * Get a character by ID
   * @param id - Character ID
   */
  async getById(id: number) {
    try {
      const response = await api.get<ApiResponse<Character>>(`/characters/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error in characterService.getById(${id}):`, error);
      throw error;
    }
  },

  /**
   * Search characters by name
   * @param name - Search query
   * @param page - Page number (default: 1)
   * @param perPage - Items per page (default: 20)
   */
  async search(name: string, page: number = 1, perPage: number = 20) {
    try {
      const response = await api.get<ApiResponse<PaginatedResponse<Character>>>(
        `/characters/search?name=${encodeURIComponent(name)}&page=${page}&per_page=${perPage}`
      );
      return response.data;
    } catch (error) {
      console.error(`Error in characterService.search("${name}"):`, error);
      throw error;
    }
  },

  /**
   * Get characters by status
   * @param status - Character status (Alive, Dead, unknown)
   * @param page - Page number (default: 1)
   * @param perPage - Items per page (default: 20)
   */
  async getByStatus(status: string, page: number = 1, perPage: number = 20) {
    try {
      const response = await api.get<ApiResponse<PaginatedResponse<Character>>>(
        `/characters/status?status=${status}&page=${page}&per_page=${perPage}`
      );
      return response.data;
    } catch (error) {
      console.error(`Error in characterService.getByStatus("${status}"):`, error);
      throw error;
    }
  },

  /**
   * Get characters by species
   * @param species - Character species
   * @param page - Page number (default: 1)
   * @param perPage - Items per page (default: 20)
   */
  async getBySpecies(species: string, page: number = 1, perPage: number = 20) {
    try {
      const response = await api.get<ApiResponse<PaginatedResponse<Character>>>(
        `/characters/species?species=${encodeURIComponent(species)}&page=${page}&per_page=${perPage}`
      );
      return response.data;
    } catch (error) {
      console.error(`Error in characterService.getBySpecies("${species}"):`, error);
      throw error;
    }
  },
};