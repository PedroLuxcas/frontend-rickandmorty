import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
`;

export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  background-color: ${({ theme }) => theme.colors.background.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.border};
  }
`;

export const DetailCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background.card};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

export const DetailHeader = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}10 0%, transparent 100%);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const DetailImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 250px;
    height: 250px;
  }
`;

export const DetailInfo = styled.div`
  flex: 1;
`;

export const DetailName = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const DetailStatus = styled.div<{ $status: string }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  background-color: ${({ $status, theme }) => {
    switch ($status) {
      case 'Alive': return `${theme.colors.status.alive}20`;
      case 'Dead': return `${theme.colors.status.dead}20`;
      default: return `${theme.colors.status.unknown}20`;
    }
  }};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin: ${({ theme }) => theme.spacing.xl} 0;
`;

export const InfoItem = styled.div`
  h3 {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.text.muted};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  p {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: 500;
  }
`;

export const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xl};
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  h2 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

export const LocationCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: ${({ theme }) => theme.spacing.xs};

    strong {
      color: ${({ theme }) => theme.colors.text.primary};
      font-weight: 500;
    }
  }
`;

export const EpisodeBadge = styled.div`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primary}10;
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 0.9rem;
  margin-right: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  border: 1px solid ${({ theme }) => theme.colors.primary}30;
`;