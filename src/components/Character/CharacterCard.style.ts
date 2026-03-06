import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.background.card};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all 0.3s;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  flex: 1;
`;

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const StatusDot = styled.span<{ $status: string }>`
  width: 10px;
  height: 10px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: ${({ $status, theme }) => {
    switch ($status) {
      case 'Alive': return theme.colors.status.alive;
      case 'Dead': return theme.colors.status.dead;
      default: return theme.colors.status.unknown;
    }
  }};
`;

export const StatusText = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const CharacterName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const CharacterInfo = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};

  strong {
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: 500;
  }
`;

export const LastEpisode = styled.div`
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing.sm};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.text.muted};

  strong {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;