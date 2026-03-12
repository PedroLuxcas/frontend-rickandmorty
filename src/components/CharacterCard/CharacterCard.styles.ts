import styled from 'styled-components';

export const Card = styled.div<{ $isSelected?: boolean }>`
  background: #1a1a1a;
  border: 1px solid ${({ $isSelected }) => $isSelected ? '#00FF00' : '#333'};
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  /* Efeito hover */
  &:hover {
    border-color: #00FF00;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 255, 0, 0.2);
  }

  /* Efeito quando selecionado */
  ${({ $isSelected }) => $isSelected && `
    border-color: #00FF00;
    box-shadow: 0 0 15px rgba(0, 255, 0, 0.3);
  `}

  /* Responsividade */
  @media (max-width: 768px) {
    /* Ajustes para tablet */
  }

  @media (max-width: 480px) {
    /* Ajustes para mobile */
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 140px;
  overflow: hidden;
  background: #000;
  position: relative;

  @media (max-width: 480px) {
    height: 120px;
  }
`;

export const Image = styled.img<{ $isSelected?: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
  
  /* Estado normal - preto e branco */
  filter: grayscale(100%);
  opacity: 0.7;

  /* Efeito hover - colorido */
  ${Card}:hover & {
    filter: grayscale(0%);
    opacity: 1;
    transform: scale(1.05);
  }

  /* Efeito quando selecionado - colorido */
  ${({ $isSelected }) => $isSelected && `
    filter: grayscale(0%);
    opacity: 1;
  `}
`;

export const Content = styled.div`
  padding: 12px;

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

export const Name = styled.h3<{ $isSelected?: boolean }>`
  font-size: 14px;
  font-weight: normal;
  margin: 0 0 4px 0;
  color: ${({ $isSelected }) => $isSelected ? '#00FF00' : '#888'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.2s ease;

  /* Efeito hover */
  ${Card}:hover & {
    color: #00FF00;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const Species = styled.p<{ $isSelected?: boolean }>`
  font-size: 12px;
  margin: 0;
  color: ${({ $isSelected }) => $isSelected ? '#999' : '#666'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.2s ease;

  /* Efeito hover */
  ${Card}:hover & {
    color: #999;
  }

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

export const SelectedOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid #00FF00;
  pointer-events: none;
  animation: pulse 1.5s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% {
      opacity: 0.3;
    }
    50% {
      opacity: 0.8;
    }
  }
`;