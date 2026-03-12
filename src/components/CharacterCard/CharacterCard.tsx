import React from 'react';
import * as S from './CharacterCard.styles';

export interface CharacterCardProps {
  id: number;
  name: string;
  species: string;
  image: string;
  isSelected?: boolean;
  onClick: (id: number) => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  id,
  name,
  species,
  image,
  isSelected = false,
  onClick
}) => {
  return (
    <S.Card 
      $isSelected={isSelected}
      onClick={() => onClick(id)}
    >
      <S.ImageWrapper>
        <S.Image 
          src={image} 
          alt={name}
          $isSelected={isSelected}
        />
      </S.ImageWrapper>
      
      <S.Content>
        <S.Name $isSelected={isSelected}>
          {name}
        </S.Name>
        <S.Species $isSelected={isSelected}>
          {species}
        </S.Species>
      </S.Content>
    </S.Card>
  );
};

export default CharacterCard;