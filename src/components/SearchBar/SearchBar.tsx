import React from 'react';
import * as S from './SearchBar.styles';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  disabled?: boolean;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  onSearch,
  disabled = false,
  placeholder = "Search character"
}) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !disabled) {
      onSearch();
    }
  };

  return (
    <S.Container>
      <S.Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        disabled={disabled}
      />
      <S.Button onClick={onSearch} disabled={disabled}>
        Search
      </S.Button>
    </S.Container>
  );
};

export default SearchBar;