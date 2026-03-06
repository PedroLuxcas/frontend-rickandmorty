import React, { useState } from 'react';
import { useCharacters } from '@hooks/useCharacters';
import CharacterCard from '../components/Character/CharacterCard';
import SearchBar from '../components/Search/SearchBar';
import LoadingScreen from '../components/UI/LoadingScreen';
import EmptyState from '../components/UI/EmptyState';
import {
  PageContainer,
  Header,
  Title,
  Subtitle,
  ResultsInfo,
  ResultsCount,
  Grid,
  PaginationContainer,
  PageButton,
  PageInfo,
} from './CharactersPage.styles';

const CharactersPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { 
    characters, 
    loading, 
    error, 
    page, 
    setPage, 
    totalPages, 
    total 
  } = useCharacters(searchQuery);

  if (loading) {
    return (
      <PageContainer>
        <Header>
          <Title>Characters</Title>
          <Subtitle>Meet all characters from the Rick and Morty universe</Subtitle>
        </Header>
        <SearchBar onSearch={setSearchQuery} />
        <LoadingScreen message="Loading characters..." />
      </PageContainer>
    );
  }

  if (error || characters.length === 0) {
    return (
      <PageContainer>
        <Header>
          <Title>Characters</Title>
          <Subtitle>Meet all characters from the Rick and Morty universe</Subtitle>
        </Header>
        <SearchBar onSearch={setSearchQuery} />
        <EmptyState 
          title="No characters found"
          message={searchQuery 
            ? `No results for "${searchQuery}". Try another search!`
            : "No characters available at the moment."}
        />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Header>
        <Title>Characters</Title>
        <Subtitle>Meet all characters from the Rick and Morty universe</Subtitle>
      </Header>

      <SearchBar onSearch={setSearchQuery} placeholder="Search by name..." />

      <ResultsInfo>
        <ResultsCount>
          Showing <strong>{characters.length}</strong> of <strong>{total}</strong> characters
        </ResultsCount>
        {searchQuery && (
          <ResultsCount>
            Search results for: <strong>"{searchQuery}"</strong>
          </ResultsCount>
        )}
      </ResultsInfo>

      <Grid>
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </Grid>

      <PaginationContainer>
        <PageButton 
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}
          $disabled={page === 1}
        >
          Previous
        </PageButton>
        
        {[...Array(Math.min(5, totalPages))].map((_, i) => {
          let pageNum = page;
          if (page <= 3) {
            pageNum = i + 1;
          } else if (page >= totalPages - 2) {
            pageNum = totalPages - 4 + i;
          } else {
            pageNum = page - 2 + i;
          }
          
          if (pageNum > 0 && pageNum <= totalPages) {
            return (
              <PageButton
                key={pageNum}
                onClick={() => setPage(pageNum)}
                $active={pageNum === page}
              >
                {pageNum}
              </PageButton>
            );
          }
          return null;
        })}
        
        <PageInfo>of {totalPages}</PageInfo>
        
        <PageButton 
          onClick={() => setPage(p => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          $disabled={page === totalPages}
        >
          Next
        </PageButton>
      </PaginationContainer>
    </PageContainer>
  );
};

export default CharactersPage;