import React from 'react';
import CharacterCard, { CharacterCardProps } from '../CharacterCard/CharacterCard';
import * as S from './CharacterGrid.styles';

interface CharacterGridProps {
  characters: Array<Omit<CharacterCardProps, 'onClick' | 'isSelected'>>;
  onCharacterClick: (id: number) => void;
  selectedCharacterId?: number | null;
  emptyMessage?: string;
}

const CharacterGrid: React.FC<CharacterGridProps> = ({
  characters,
  onCharacterClick,
  selectedCharacterId,
  emptyMessage = "No characters found"
}) => {
  if (characters.length === 0) {
    return <S.EmptyState>{emptyMessage}</S.EmptyState>;
  }

  return (
    <S.Grid>
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          id={character.id}
          name={character.name}
          species={character.species}
          image={character.image}
          isSelected={character.id === selectedCharacterId}
          onClick={onCharacterClick}
        />
      ))}
    </S.Grid>
  );
};

export default CharacterGrid;