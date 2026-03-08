import { useState, useEffect } from 'react';
import { characterService } from '../services/characterService';
import { Character } from '../types/character';

interface UseCharacterReturn {
  character: Character | null;
  loading: boolean;
  error: string | null;
}

export const useCharacter = (id: number): UseCharacterReturn => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        setError(null);
        
        // ⭐ AQUI USA O SERVICE!
        const response = await characterService.getById(id);
        
        if (response.success) {
          setCharacter(response.data);
        } else {
          setError(response.message);
        }
      } catch (err) {
        setError('Failed to load character');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  return { character, loading, error };
};