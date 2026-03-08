import { useState, useEffect } from 'react';
import { locationService } from '../services/locationService';
import { Location } from '../types';

interface UseLocationReturn {
  location: Location | null;
  loading: boolean;
  error: string | null;
}

export const useLocation = (id: number): UseLocationReturn => {
  const [location, setLocation] = useState<Location | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        setError(null);
        
        const response = await locationService.getById(id);
        
        if (response.success) {
          setLocation(response.data);
        } else {
          setError(response.message);
        }
      } catch (err) {
        setError('Failed to load location');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLocation();
  }, [id]);

  return { location, loading, error };
};