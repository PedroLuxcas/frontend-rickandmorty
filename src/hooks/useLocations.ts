import { useState, useEffect } from 'react';
import { locationService } from '../services/locationService';
import { Location } from '../types';

interface UseLocationsReturn {
  locations: Location[];
  loading: boolean;
  error: string | null;
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
  total: number;
}

export const useLocations = (initialPage: number = 1): UseLocationsReturn => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(initialPage);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // ⭐ AQUI USA O SERVICE!
        const response = await locationService.getAll(page);
        
        if (response.success) {
          setLocations(response.data.items);
          setTotalPages(response.data.pages);
          setTotal(response.data.total);
        } else {
          setError(response.message);
        }
      } catch (err) {
        setError('Failed to load locations');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, [page]);

  return {
    locations,
    loading,
    error,
    page,
    setPage,
    totalPages,
    total,
  };
};