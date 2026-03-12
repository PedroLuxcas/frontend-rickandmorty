import React from 'react';
import * as S from './CharacterDetail.styles';

export interface CharacterDetailProps {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  origin: {
    name: string;
    type: string;
    dimension: string;
    residents_count: number;
  } | null;
  current_location: {
    name: string;
    type: string;
    dimension: string;
    residents_count: number;
  } | null;
  last_episode: {
    name: string;
    episode: string;
    air_date: string;
  } | null;
  onClose: () => void;
}

const CharacterDetail: React.FC<CharacterDetailProps> = ({
  name,
  status,
  species,
  type,
  gender,
  image,
  origin,
  current_location,
  last_episode,
  onClose
}) => {
  // Monta o texto ABOUT
  const about = `${name} is a ${gender.toLowerCase()} ${species}. ${type ? `Type: ${type}. ` : ''}He is ${status.toLowerCase()} and well. Last seen in ${last_episode?.air_date || 'Unknown'}.`;

  // Fecha ao clicar no overlay
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <S.Overlay onClick={handleOverlayClick}>
      <S.Modal>
        <S.CloseButton onClick={onClose}>×</S.CloseButton>
        
        <S.Content>
          <S.Header>
            <S.Image src={image} alt={name} />
            <S.Info>
              <S.Name>{name}</S.Name>
              <S.Status $status={status}>{status}</S.Status>
              <S.BasicInfo>
                <div><strong>Species:</strong> {species}</div>
                {type && <div><strong>Type:</strong> {type}</div>}
                <div><strong>Gender:</strong> {gender}</div>
              </S.BasicInfo>
            </S.Info>
          </S.Header>

          <S.Section>
            <S.SectionTitle>ABOUT</S.SectionTitle>
            <S.About>{about}</S.About>
          </S.Section>

          <S.Section>
            <S.SectionTitle>LOCATIONS</S.SectionTitle>
            <S.LocationsGrid>
              {origin && (
                <S.LocationCard>
                  <S.LocationType>ORIGIN</S.LocationType>
                  <S.LocationType>{origin.type}</S.LocationType>
                  <S.LocationName>{origin.name}</S.LocationName>
                  <S.LocationDimension>{origin.dimension}</S.LocationDimension>
                  <S.ResidentsCount>{origin.residents_count} residents</S.ResidentsCount>
                </S.LocationCard>
              )}
              
              {current_location && (
                <S.LocationCard>
                  <S.LocationType>LOCATION</S.LocationType>
                  <S.LocationType>{current_location.type}</S.LocationType>
                  <S.LocationName>{current_location.name}</S.LocationName>
                  <S.LocationDimension>{current_location.dimension}</S.LocationDimension>
                  <S.ResidentsCount>{current_location.residents_count} residents</S.ResidentsCount>
                </S.LocationCard>
              )}
            </S.LocationsGrid>
          </S.Section>

          {last_episode && (
            <S.Section>
              <S.SectionTitle>LAST EPISODE</S.SectionTitle>
              <S.LastEpisode>
                <S.EpisodeName>{last_episode.name}</S.EpisodeName>
                <S.EpisodeCode>{last_episode.episode}</S.EpisodeCode>
                <S.EpisodeDate>{last_episode.air_date}</S.EpisodeDate>
              </S.LastEpisode>
            </S.Section>
          )}
        </S.Content>
      </S.Modal>
    </S.Overlay>
  );
};

export default CharacterDetail;