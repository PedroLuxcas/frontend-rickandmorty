import React, { useState } from 'react';
import * as S from './SearchBar.styles';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  initialValue?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder = 'Search...',
  initialValue = '',
}) => {
  const [query, setQuery] = useState(initialValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <S.SearchContainer>
      <form onSubmit={handleSubmit}>
        <S.SearchWrapper>
          <S.SearchInput
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
          />
          {query && (
            <S.ClearButton type="button" onClick={handleClear}>
              ✕
            </S.ClearButton>
          )}
          <S.SearchButton type="submit">Search</S.SearchButton>
        </S.SearchWrapper>
      </form>
    </S.SearchContainer>
  );
};

export default SearchBar;