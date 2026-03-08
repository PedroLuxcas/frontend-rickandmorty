import { useState, useEffect } from 'react';
import { characterService } from '../services/characterService';
import { Character } from '../types/character';

interface UseCharactersReturn {
  characters: Character[];
  loading: boolean;
  error: string | null;
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
  total: number;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const useCharacters = (initialQuery: string = ''): UseCharactersReturn => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>(initialQuery);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // ⭐ AQUI USA O SERVICE!
        let response;
        if (searchQuery) {
          // Usa o search do service
          response = await characterService.search(searchQuery, page);
        } else {
          // Usa o getAll do service
          response = await characterService.getAll(page);
        }
        
        if (response.success) {
          setCharacters(response.data.items);
          setTotalPages(response.data.pages);
          setTotal(response.data.total);
        } else {
          setError(response.message);
        }
      } catch (err) {
        setError('Failed to load characters');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [page, searchQuery]); // Recarrega quando página ou busca mudar

  return {
    characters,
    loading,
    error,
    page,
    setPage,
    totalPages,
    total,
    searchQuery,
    setSearchQuery,
  };
};