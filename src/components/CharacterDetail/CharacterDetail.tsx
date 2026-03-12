import React from 'react';
import * as S from './CharacterDetail.styles';

export interface CharacterDetailProps {
  name: string;
  species: string;
  status: string;
  gender: string;
  type: string;
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
  last_episode?: {
    name: string;
    episode: string;
    air_date: string;
  } | null;
  onClose: () => void;
}

const CharacterDetail: React.FC<CharacterDetailProps> = ({
  name,
  species,
  status,
  gender,
  type,
  image,
  origin,
  current_location,
  last_episode,
  onClose
}) => {
  // Formata o texto ABOUT
  const aboutText = `${name} is a ${gender.toLowerCase()} ${species}. He is ${status.toLowerCase()} and well. Last seen in ${last_episode?.air_date || 'Unknown'}.`;

  // Fecha ao clicar no overlay
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <S.Overlay onClick={handleOverlayClick}>
      <S.Modal>
        <S.CloseButton onClick={onClose}>✕</S.CloseButton>
        
        {/* ===== LAYOUT DESKTOP ===== */}
        <S.DesktopLayout>
          {/* Lado esquerdo - Informações */}
          <S.InfoSection>
            <S.Name>{name}</S.Name>
            <S.Species>{species}</S.Species>

            <S.Section>
              <S.SectionTitle>ABOUT</S.SectionTitle>
              <S.AboutText>{aboutText}</S.AboutText>
            </S.Section>

            <S.LocationsGrid>
              {/* Origin */}
              {origin && (
                <S.LocationCard>
                  <S.SectionTitle>ORIGIN</S.SectionTitle>
                  <S.LocationInfo>
                    <S.LocationType>{origin.type}</S.LocationType>
                    <S.LocationName>{origin.name}</S.LocationName>
                    <S.LocationDimension>{origin.dimension}</S.LocationDimension>
                    <S.ResidentsCount>
                      <S.PlanetSymbol>⊙</S.PlanetSymbol>
                      <span>{origin.residents_count} residents</span>
                    </S.ResidentsCount>
                  </S.LocationInfo>
                </S.LocationCard>
              )}

              {/* Current Location */}
              {current_location && (
                <S.LocationCard>
                  <S.SectionTitle>LOCATION</S.SectionTitle>
                  <S.LocationInfo>
                    <S.LocationType>{current_location.type}</S.LocationType>
                    <S.LocationName>{current_location.name}</S.LocationName>
                    <S.LocationDimension>{current_location.dimension}</S.LocationDimension>
                    <S.ResidentsCount>
                      <S.PlanetSymbol>⊙</S.PlanetSymbol>
                      <span>{current_location.residents_count} residents</span>
                    </S.ResidentsCount>
                  </S.LocationInfo>
                </S.LocationCard>
              )}
            </S.LocationsGrid>
          </S.InfoSection>

          {/* Lado direito - Imagem com efeito 3D */}
          <S.ImageSection>
            <S.CharacterImage src={image} alt={name} />
          </S.ImageSection>
        </S.DesktopLayout>

        {/* ===== LAYOUT MOBILE ===== */}
        <S.MobileLayout>
          <S.MobileImageContainer>
            <S.MobileImage src={image} alt={name} />
          </S.MobileImageContainer>
          
          <S.MobileContent>
            <S.Name>{name}</S.Name>
            <S.Species>{species}</S.Species>

            <S.Section>
              <S.SectionTitle>ABOUT</S.SectionTitle>
              <S.AboutText>{aboutText}</S.AboutText>
            </S.Section>

            <S.LocationsGrid>
              {/* Origin - Mobile */}
              {origin && (
                <S.LocationCard>
                  <S.SectionTitle>ORIGIN</S.SectionTitle>
                  <S.LocationInfo>
                    <S.LocationType>{origin.type}</S.LocationType>
                    <S.LocationName>{origin.name}</S.LocationName>
                    <S.LocationDimension>{origin.dimension}</S.LocationDimension>
                    <S.ResidentsCount>
                      <S.PlanetSymbol>⊙</S.PlanetSymbol>
                      <span>{origin.residents_count} residents</span>
                    </S.ResidentsCount>
                  </S.LocationInfo>
                </S.LocationCard>
              )}

              {/* Current Location - Mobile */}
              {current_location && (
                <S.LocationCard>
                  <S.SectionTitle>LOCATION</S.SectionTitle>
                  <S.LocationInfo>
                    <S.LocationType>{current_location.type}</S.LocationType>
                    <S.LocationName>{current_location.name}</S.LocationName>
                    <S.LocationDimension>{current_location.dimension}</S.LocationDimension>
                    <S.ResidentsCount>
                      <S.PlanetSymbol>⊙</S.PlanetSymbol>
                      <span>{current_location.residents_count} residents</span>
                    </S.ResidentsCount>
                  </S.LocationInfo>
                </S.LocationCard>
              )}
            </S.LocationsGrid>

            <S.MobileFooter>
              <S.MobileName>{name}</S.MobileName>
              <S.MobileSpecies>{species}</S.MobileSpecies>
            </S.MobileFooter>
          </S.MobileContent>
        </S.MobileLayout>
      </S.Modal>
    </S.Overlay>
  );
};

export default CharacterDetail;