import styled from 'styled-components';

// ============================================
// OVERLAY E MODAL
// ============================================

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
    align-items: flex-start;
    overflow-y: auto;
  }
`;

export const Modal = styled.div`
  background: #111;
  border: 1px solid #333;
  max-width: 1000px;
  width: 100%;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8);
  overflow: hidden;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: 1px solid #444;
  color: #fff;
  width: 36px;
  height: 36px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.2s;

  &:hover {
    border-color: #00FF00;
    color: #00FF00;
  }

  @media (max-width: 768px) {
    top: 15px;
    right: 15px;
    width: 32px;
    height: 32px;
  }
`;

// ============================================
// LAYOUT PRINCIPAL - Desktop (imagem à direita)
// ============================================

export const DesktopLayout = styled.div`
  display: flex;
  min-height: 500px;

  @media (max-width: 768px) {
    display: none; /* Esconde no mobile */
  }
`;

export const InfoSection = styled.div`
  flex: 1;
  padding: 40px;
  background: #111;
  position: relative;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #111 0%, #1a1a1a 100%);
    z-index: -1;
  }
`;

export const ImageSection = styled.div`
  flex: 0.9;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;

  &::before {
    content: '';
    position: absolute;
    top: -10%;
    left: -10%;
    right: -10%;
    bottom: -10%;
    background: inherit;
    filter: blur(15px);
    opacity: 0.5;
    z-index: 0;
  }
`;

export const CharacterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 1;
  transform: perspective(1000px) rotateY(-5deg) scale(1.1);
  box-shadow: -20px 20px 30px rgba(0, 0, 0, 0.6);
  transition: transform 0.3s ease;
  border-left: 1px solid #333;

  &:hover {
    transform: perspective(1000px) rotateY(-3deg) scale(1.15);
  }
`;

// ============================================
// LAYOUT MOBILE (imagem em cima, info embaixo)
// ============================================

export const MobileLayout = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileImageContainer = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  overflow: hidden;
  background: #000;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;
    filter: blur(10px);
    opacity: 0.5;
    z-index: 0;
  }
`;

export const MobileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 1;
  transform: scale(1.1);
`;

export const MobileContent = styled.div`
  padding: 25px;
  background: #111;
`;

// ============================================
// INFORMAÇÕES DO PERSONAGEM
// ============================================

export const Name = styled.h1`
  font-size: 32px;
  color: #fff;
  margin: 0 0 5px 0;
  font-weight: 400;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Species = styled.p`
  font-size: 16px;
  color: #888;
  margin: 0 0 25px 0;

  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 20px;
  }
`;

export const Section = styled.div`
  margin-bottom: 25px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 14px;
  color: #666;
  margin: 0 0 8px 0;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const AboutText = styled.p`
  font-size: 15px;
  color: #ccc;
  line-height: 1.6;
  margin: 0;
  max-width: 90%;

  @media (max-width: 768px) {
    font-size: 14px;
    max-width: 100%;
  }
`;

export const LocationInfo = styled.div`
  margin-top: 10px;
`;

export const LocationType = styled.div`
  font-size: 13px;
  color: #666;
  margin-bottom: 2px;
`;

export const LocationName = styled.div`
  font-size: 16px;
  color: #fff;
  margin-bottom: 2px;
  font-weight: 400;
`;

export const LocationDimension = styled.div`
  font-size: 14px;
  color: #888;
  margin-bottom: 8px;
`;

export const ResidentsCount = styled.div`
  font-size: 14px;
  color: #00FF00;
  display: flex;
  align-items: center;
  gap: 5px;

  span {
    color: #666;
  }
`;

export const PlanetSymbol = styled.span`
  color: #666;
  font-size: 16px;
`;

// ============================================
// GRID DE LOCALIZAÇÕES (Desktop)
// ============================================

export const LocationsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 20px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
    margin: 15px 0;
  }
`;

export const LocationCard = styled.div`
  border-left: 2px solid #333;
  padding-left: 15px;

  &:hover {
    border-left-color: #00FF00;
  }
`;

// ============================================
// FOOTER MOBILE
// ============================================

export const MobileFooter = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin-top: 25px;
    padding-top: 20px;
    border-top: 1px solid #333;
  }
`;

export const MobileName = styled.div`
  font-size: 18px;
  color: #fff;
  margin-bottom: 4px;
`;

export const MobileSpecies = styled.div`
  font-size: 14px;
  color: #666;
`;