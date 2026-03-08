import api from './api';
import { Location, ApiResponse, PaginatedResponse } from '../types';

export const locationService = {
  /**
   * Get all locations with pagination
   * @param page - Page number (default: 1)
   * @param perPage - Items per page (default: 20)
   */
  async getAll(page: number = 1, perPage: number = 20) {
    try {
      const response = await api.get<ApiResponse<PaginatedResponse<Location>>>(
        `/locations/?page=${page}&per_page=${perPage}`
      );
      return response.data;
    } catch (error) {
      console.error('Error in locationService.getAll:', error);
      throw error;
    }
  },

  /**
   * Get a location by ID
   * @param id - Location ID
   */
  async getById(id: number) {
    try {
      const response = await api.get<ApiResponse<Location>>(`/locations/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error in locationService.getById(${id}):`, error);
      throw error;
    }
  },

  /**
   * Get locations by type
   * @param type - Location type (Planet, Dimension, etc.)
   * @param page - Page number (default: 1)
   * @param perPage - Items per page (default: 20)
   */
  async getByType(type: string, page: number = 1, perPage: number = 20) {
    try {
      const response = await api.get<ApiResponse<PaginatedResponse<Location>>>(
        `/locations/type?type=${encodeURIComponent(type)}&page=${page}&per_page=${perPage}`
      );
      return response.data;
    } catch (error) {
      console.error(`Error in locationService.getByType("${type}"):`, error);
      throw error;
    }
  },

  /**
   * Get locations by dimension
   * @param dimension - Dimension name
   * @param page - Page number (default: 1)
   * @param perPage - Items per page (default: 20)
   */
  async getByDimension(dimension: string, page: number = 1, perPage: number = 20) {
    try {
      const response = await api.get<ApiResponse<PaginatedResponse<Location>>>(
        `/locations/dimension?dimension=${encodeURIComponent(dimension)}&page=${page}&per_page=${perPage}`
      );
      return response.data;
    } catch (error) {
      console.error(`Error in locationService.getByDimension("${dimension}"):`, error);
      throw error;
    }
  },

  /**
   * Search locations by name
   * @param name - Search query
   * @param page - Page number (default: 1)
   * @param perPage - Items per page (default: 20)
   */
  async search(name: string, page: number = 1, perPage: number = 20) {
    try {
      const response = await api.get<ApiResponse<PaginatedResponse<Location>>>(
        `/locations/search?name=${encodeURIComponent(name)}&page=${page}&per_page=${perPage}`
      );
      return response.data;
    } catch (error) {
      console.error(`Error in locationService.search("${name}"):`, error);
      throw error;
    }
  },
};