import React, { useState } from 'react';
import { SearchContainer, SearchWrapper, SearchInput, SearchButton } from './SearchBar.styles';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeholder = 'Search characters...' }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <SearchContainer>
      <form onSubmit={handleSubmit}>
        <SearchWrapper>
          <SearchInput
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
          />
          <SearchButton type="submit">Search</SearchButton>
        </SearchWrapper>
      </form>
    </SearchContainer>
  );
};

export default SearchBar;