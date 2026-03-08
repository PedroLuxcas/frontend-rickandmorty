import api from './api';
import { Episode, ApiResponse, PaginatedResponse } from '../types/episode';

export const episodeService = {
  /**
   * Get all episodes with pagination
   * @param page - Page number (default: 1)
   * @param perPage - Items per page (default: 20)
   */
  async getAll(page: number = 1, perPage: number = 20) {
    try {
      const response = await api.get<ApiResponse<PaginatedResponse<Episode>>>(
        `/episodes/?page=${page}&per_page=${perPage}`
      );
      return response.data;
    } catch (error) {
      console.error('Error in episodeService.getAll:', error);
      throw error;
    }
  },

  /**
   * Get an episode by ID
   * @param id - Episode ID
   */
  async getById(id: number) {
    try {
      const response = await api.get<ApiResponse<Episode>>(`/episodes/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error in episodeService.getById(${id}):`, error);
      throw error;
    }
  },

  /**
   * Get episode by code (e.g., S01E01)
   * @param code - Episode code
   */
  async getByCode(code: string) {
    try {
      const response = await api.get<ApiResponse<Episode>>(
        `/episodes/code?code=${encodeURIComponent(code)}`
      );
      return response.data;
    } catch (error) {
      console.error(`Error in episodeService.getByCode("${code}"):`, error);
      throw error;
    }
  },

  /**
   * Get episodes by season
   * @param season - Season (e.g., S01, S02)
   * @param page - Page number (default: 1)
   * @param perPage - Items per page (default: 20)
   */
  async getBySeason(season: string, page: number = 1, perPage: number = 20) {
    try {
      const response = await api.get<ApiResponse<PaginatedResponse<Episode>>>(
        `/episodes/season?season=${season}&page=${page}&per_page=${perPage}`
      );
      return response.data;
    } catch (error) {
      console.error(`Error in episodeService.getBySeason("${season}"):`, error);
      throw error;
    }
  },

  /**
   * Search episodes by name
   * @param name - Search query
   * @param page - Page number (default: 1)
   * @param perPage - Items per page (default: 20)
   */
  async search(name: string, page: number = 1, perPage: number = 20) {
    try {
      const response = await api.get<ApiResponse<PaginatedResponse<Episode>>>(
        `/episodes/search?name=${encodeURIComponent(name)}&page=${page}&per_page=${perPage}`
      );
      return response.data;
    } catch (error) {
      console.error(`Error in episodeService.search("${name}"):`, error);
      throw error;
    }
  },
};