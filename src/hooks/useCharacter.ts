import { useState, useCallback } from 'react';
import { characterService } from '@/services/characterService';
import { Character } from '../types/character';

interface UseCharacterReturn {
  // Estados
  characters: Character[];
  loading: boolean;
  error: string | null;
  page: number;
  totalPages: number;
  totalResults: number;
  searchQuery: string;
  hasSearched: boolean;
  
  // Estados do detalhe
  selectedCharacter: Character | null;
  detailLoading: boolean;
  
  // Funções
  searchCharacters: (query: string, pageNum?: number) => Promise<void>;
  loadMore: (pageNum: number) => Promise<void>;
  loadCharacter: (id: number) => Promise<void>;
  clearSelectedCharacter: () => void;
  resetSearch: () => void;
}

export const useCharacter = (): UseCharacterReturn => {
  // Estados da listagem
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  
  // Estados do detalhe
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);

  /**
   * Busca personagens por nome
   */
  const searchCharacters = useCallback(async (query: string, pageNum: number = 1) => {
    if (!query.trim()) {
      setError('Por favor, digite um nome para buscar');
      return;
    }
    
    setLoading(true);
    setError(null);
    setHasSearched(true);
    setSearchQuery(query);
    setPage(pageNum);
    
    try {
      console.log(`🔍 Buscando por: "${query}" - Página ${pageNum}`);
      
      const response = await characterService.searchCharacters({
        name: query,
        page: pageNum,
        per_page: 20
      });
      
      console.log('📦 Resposta da API:', response);
      
      if (response.success) {
        setCharacters(response.data.items);
        setTotalPages(response.data.pages);
        setTotalResults(response.data.total);
        
        if (response.data.items.length === 0) {
          setError(`Nenhum personagem encontrado para "${query}"`);
        }
      } else {
        setError(response.message || 'Erro ao buscar personagens');
      }
    } catch (err: any) {
      console.error('❌ Erro detalhado:', err);
      
      if (err.code === 'ERR_NETWORK') {
        setError('Não foi possível conectar ao servidor. Verifique se o backend está rodando em http://localhost:5000');
      } else if (err.response) {
        setError(`Erro ${err.response.status}: ${err.response.data?.message || 'Erro no servidor'}`);
      } else {
        setError('Erro ao buscar personagens. Tente novamente.');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Carrega mais personagens (mudança de página)
   */
  const loadMore = useCallback(async (pageNum: number) => {
    if (!searchQuery) return;
    
    setLoading(true);
    setError(null);
    setPage(pageNum);
    
    try {
      const response = await characterService.searchCharacters({
        name: searchQuery,
        page: pageNum,
        per_page: 20
      });
      
      if (response.success) {
        setCharacters(response.data.items);
        setTotalPages(response.data.pages);
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError('Erro ao carregar página');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [searchQuery]);

  /**
   * Carrega detalhes de um personagem
   */
  const loadCharacter = useCallback(async (id: number) => {
    setDetailLoading(true);
    setError(null);
    
    try {
      console.log(`🔍 Buscando personagem ID: ${id}`);
      
      const response = await characterService.getCharacterById(id);
      
      console.log('📦 Resposta do personagem:', response);
      
      if (response.success) {
        setSelectedCharacter(response.data);
      } else {
        setError(response.message || 'Erro ao carregar personagem');
      }
    } catch (err: any) {
      console.error('❌ Erro ao carregar personagem:', err);
      
      if (err.code === 'ERR_NETWORK') {
        setError('Não foi possível conectar ao servidor');
      } else {
        setError('Erro ao carregar detalhes do personagem');
      }
    } finally {
      setDetailLoading(false);
    }
  }, []);

  /**
   * Limpa o personagem selecionado
   */
  const clearSelectedCharacter = useCallback(() => {
    setSelectedCharacter(null);
  }, []);

  /**
   * Reseta a busca
   */
  const resetSearch = useCallback(() => {
    setCharacters([]);
    setSearchQuery('');
    setHasSearched(false);
    setPage(1);
    setError(null);
  }, []);

  return {
    // Estados
    characters,
    loading,
    error,
    page,
    totalPages,
    totalResults,
    searchQuery,
    hasSearched,
    
    // Estados do detalhe
    selectedCharacter,
    detailLoading,
    
    // Funções
    searchCharacters,
    loadMore,
    loadCharacter,
    clearSelectedCharacter,
    resetSearch
  };
};