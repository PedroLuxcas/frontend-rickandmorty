import { useState, useEffect } from 'react';
import { episodeService } from '../services/episodeService';
import { Episode } from '../types';

interface UseEpisodesReturn {
  episodes: Episode[];
  loading: boolean;
  error: string | null;
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
  total: number;
}

export const useEpisodes = (initialPage: number = 1): UseEpisodesReturn => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(initialPage);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // ⭐ AQUI USA O SERVICE!
        const response = await episodeService.getAll(page);
        
        if (response.success) {
          setEpisodes(response.data.items);
          setTotalPages(response.data.pages);
          setTotal(response.data.total);
        } else {
          setError(response.message);
        }
      } catch (err) {
        setError('Failed to load episodes');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEpisodes();
  }, [page]);

  return {
    episodes,
    loading,
    error,
    page,
    setPage,
    totalPages,
    total,
  };
};