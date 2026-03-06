import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useCharacter } from '@hooks/useCharacters';
import LoadingScreen from '@components/UI/LoadingScreen';
import EmptyState from '@components/UI/EmptyState';
import {
  Container,
  BackButton,
  DetailCard,
  DetailHeader,
  DetailImage,
  DetailInfo,
  DetailName,
  DetailStatus,
  InfoGrid,
  InfoItem,
  Section,
  LocationCard,
  EpisodeBadge,
} from './CharacterDetailPage.styles';

const CharacterDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { character, loading, error } = useCharacter(Number(id));

  if (loading) return <LoadingScreen message="Loading character..." />;
  if (error || !character) return <EmptyState title="Character not found" />;

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>
        <FaArrowLeft /> Back
      </BackButton>

      <DetailCard>
        <DetailHeader>
          <DetailImage src={character.image} alt={character.name} />
          <DetailInfo>
            <DetailStatus $status={character.status}>
              <span>●</span> {character.status}
            </DetailStatus>
            <DetailName>{character.name}</DetailName>
            
            <InfoGrid>
              <InfoItem>
                <h3>Species</h3>
                <p>{character.species}</p>
              </InfoItem>
              <InfoItem>
                <h3>Gender</h3>
                <p>{character.gender}</p>
              </InfoItem>
              <InfoItem>
                <h3>Type</h3>
                <p>{character.type || 'Unknown'}</p>
              </InfoItem>
              <InfoItem>
                <h3>Total Episodes</h3>
                <p>{character.total_episodes}</p>
              </InfoItem>
            </InfoGrid>
          </DetailInfo>
        </DetailHeader>

        {character.last_episode && (
          <Section>
            <h2>Last Episode</h2>
            <LocationCard>
              <h3>{character.last_episode.name}</h3>
              <p><strong>Episode:</strong> {character.last_episode.episode}</p>
              <p><strong>Air Date:</strong> {character.last_episode.air_date}</p>
            </LocationCard>
          </Section>
        )}

        <Section>
          <h2>Locations</h2>
          {character.origin && (
            <LocationCard>
              <h3>Origin</h3>
              <p><strong>Name:</strong> {character.origin.name}</p>
              <p><strong>Residents:</strong> {character.origin.residents_count}</p>
            </LocationCard>
          )}
          {character.current_location && (
            <LocationCard>
              <h3>Current Location</h3>
              <p><strong>Name:</strong> {character.current_location.name}</p>
              <p><strong>Residents:</strong> {character.current_location.residents_count}</p>
            </LocationCard>
          )}
        </Section>

        {/* You can add episodes list here if needed */}
      </DetailCard>
    </Container>
  );
};

export default CharacterDetailPage;