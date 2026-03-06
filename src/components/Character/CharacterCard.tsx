import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Character } from '../../types/character';
import {
  Card,
  CardImage,
  CardContent,
  StatusContainer,
  StatusDot,
  StatusText,
  CharacterName,
  CharacterInfo,
  LastEpisode,
} from './CharacterCard.style';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/character/${character.id}`)}>
      <CardImage src={character.image} alt={character.name} />
      <CardContent>
        <StatusContainer>
          <StatusDot $status={character.status} />
          <StatusText>{character.status}</StatusText>
        </StatusContainer>
        
        <CharacterName>{character.name}</CharacterName>
        
        <CharacterInfo>
          <strong>Species:</strong> {character.species}
        </CharacterInfo>
        
        <CharacterInfo>
          <strong>Gender:</strong> {character.gender}
        </CharacterInfo>
        
        {character.last_episode && (
          <LastEpisode>
            <strong>Last episode:</strong> {character.last_episode.name}
          </LastEpisode>
        )}
      </CardContent>
    </Card>
  );
};

export default CharacterCard;