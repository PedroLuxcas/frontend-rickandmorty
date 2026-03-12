import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useCharacter } from '@/hooks/useCharacter';
import SearchBar from '@/components/SearchBar/SearchBar';
import CharacterGrid from '@/components/CharacterGrid/CharacterGrid';
import CharacterDetail from '@/components/CharacterDetail/CharacterDetail';
import LoadingScreen from '@/components/LoadingScreen/LoadingScreen';
import Pagination from '@/components/Pagination/Pagination';
import * as S from './Home.styles';

const Home: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState('');
  
  const {
    characters,
    loading,
    error,
    page,
    totalPages,
    totalResults,
    hasSearched,
    selectedCharacter,
    detailLoading,
    searchCharacters,
    loadMore,
    loadCharacter,
    clearSelectedCharacter
  } = useCharacter();

  useEffect(() => {
    if (id) {
      loadCharacter(parseInt(id));
    }
  }, [id, loadCharacter]);

  useEffect(() => {
    const query = searchParams.get('q');
    const pageParam = searchParams.get('page');
    
    if (query) {
      setSearchInput(query);
      searchCharacters(query, pageParam ? parseInt(pageParam) : 1);
    }
  }, [searchParams, searchCharacters]);

  const handleSearch = () => {
    if (searchInput.trim()) {
      searchCharacters(searchInput.trim());
    }
  };

  const handlePageChange = (newPage: number) => {
    loadMore(newPage);
  };

  const handleCharacterClick = (characterId: number) => {
    loadCharacter(characterId);
  };

  return (
    <>
      <S.BackgroundImage />
      <S.Overlay />
      
      <S.Container>
        <S.Logo src="/images/name.png" alt="Rick and Morty" />

        <SearchBar
          value={searchInput}
          onChange={setSearchInput}
          onSearch={handleSearch}
          disabled={loading}
          placeholder="Search character"
        />

        {loading && <LoadingScreen message="Loading" />}

        {error && !loading && (
          <S.ErrorMessage>{error}</S.ErrorMessage>
        )}

        {hasSearched && !loading && !error && (
          <>
            {characters.length > 0 ? (
              <>
                <S.ResultsInfo>
                  Found {totalResults} characters
                  {totalPages > 1 && ` - Page ${page} of ${totalPages}`}
                </S.ResultsInfo>

                <CharacterGrid
                  characters={characters}
                  onCharacterClick={handleCharacterClick}
                  selectedCharacterId={selectedCharacter?.id}
                />

                <Pagination
                  currentPage={page}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            ) : (
              <S.ResultsInfo>
                No characters found for "{searchInput}"
              </S.ResultsInfo>
            )}
          </>
        )}

        {detailLoading && <LoadingScreen message="Loading character..." />}

        {selectedCharacter && (
          <CharacterDetail
            {...selectedCharacter}
            onClose={clearSelectedCharacter}
          />
        )}
      </S.Container>
    </>
  );
};

export default Home;