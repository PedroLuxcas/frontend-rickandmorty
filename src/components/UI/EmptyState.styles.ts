import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
`;

export const EmptyIcon = styled.div`
  font-size: 5rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  animation: ${float} 3s ease-in-out infinite;
`;

export const EmptyTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-weight: 600;
`;

export const EmptyMessage = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 400px;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const EmptyButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.light};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 500;
  font-size: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;