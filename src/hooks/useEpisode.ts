import { useState, useEffect } from 'react';
import { episodeService } from '../services/episodeService';
import { Episode } from '../types/episode';

interface UseEpisodeReturn {
  episode: Episode | null;
  loading: boolean;
  error: string | null;
}

export const useEpisode = (id: number): UseEpisodeReturn => {
  const [episode, setEpisode] = useState<Episode | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEpisode = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        setError(null);
        
        // ⭐ AQUI USA O SERVICE!
        const response = await episodeService.getById(id);
        
        if (response.success) {
          setEpisode(response.data);
        } else {
          setError(response.message);
        }
      } catch (err) {
        setError('Failed to load episode');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEpisode();
  }, [id]);

  return { episode, loading, error };
};