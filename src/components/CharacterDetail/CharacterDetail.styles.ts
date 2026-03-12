import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Modal = styled.div`
  background: #111;
  border: 2px solid #00FF00;
  border-radius: 12px;
  max-width: 800px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 0 30px rgba(0, 255, 0, 0.3);

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #222;
  }

  &::-webkit-scrollbar-thumb {
    background: #00FF00;
    border-radius: 4px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: 2px solid #00FF00;
  color: #00FF00;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: all 0.3s;

  &:hover {
    background: #00FF00;
    color: #000;
  }
`;

export const Content = styled.div`
  padding: 30px;
`;

export const Header = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 30px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border: 2px solid #00FF00;
  border-radius: 8px;
`;

export const Info = styled.div`
  flex: 1;
`;

export const Name = styled.h2`
  font-size: 32px;
  color: #00FF00;
  margin-bottom: 10px;
`;

export const Status = styled.p<{ $status: string }>`
  font-size: 18px;
  color: ${({ $status }) => 
    $status === 'Alive' ? '#00FF00' : 
    $status === 'Dead' ? '#FF0000' : 
    '#FFFF00'};
  margin-bottom: 10px;
`;

export const BasicInfo = styled.div`
  color: #00FF00;
  opacity: 0.9;
  line-height: 1.8;
  font-size: 16px;
`;

export const Section = styled.div`
  margin-bottom: 30px;
`;

export const SectionTitle = styled.h3`
  font-size: 20px;
  color: #00FF00;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const About = styled.p`
  color: #00FF00;
  line-height: 1.6;
  opacity: 0.9;
  font-size: 16px;
`;

export const LocationsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const LocationCard = styled.div`
  border: 2px solid #00FF00;
  padding: 15px;
  border-radius: 8px;
`;

export const LocationType = styled.div`
  font-size: 14px;
  color: #00FF00;
  opacity: 0.7;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

export const LocationName = styled.div`
  font-size: 16px;
  color: #00FF00;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const LocationDimension = styled.div`
  font-size: 14px;
  color: #00FF00;
  opacity: 0.8;
  margin-bottom: 10px;
`;

export const ResidentsCount = styled.div`
  font-size: 14px;
  color: #00FF00;
  border-top: 1px solid #00FF00;
  padding-top: 10px;
  margin-top: 10px;
`;

export const LastEpisode = styled.div`
  border: 2px solid #00FF00;
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
`;

export const EpisodeName = styled.div`
  font-size: 18px;
  color: #00FF00;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const EpisodeCode = styled.div`
  font-size: 14px;
  color: #00FF00;
  opacity: 0.8;
  margin-bottom: 5px;
`;

export const EpisodeDate = styled.div`
  font-size: 14px;
  color: #00FF00;
  opacity: 0.7;
`;