import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

export const PageButton = styled.button<{ $active?: boolean; $disabled?: boolean }>`
  min-width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $active, theme }) => 
    $active ? theme.colors.primary : theme.colors.background.card};
  color: ${({ $active, theme }) => 
    $active ? theme.colors.text.light : theme.colors.text.primary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ $active }) => $active ? '600' : '400'};
  cursor: ${({ $disabled }) => $disabled ? 'not-allowed' : 'pointer'};
  opacity: ${({ $disabled }) => $disabled ? 0.5 : 1};
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background-color: ${({ $active, theme }) => 
      $active ? theme.colors.primaryDark : theme.colors.primaryLight}20;
  }
`;

export const PageInfo = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0 ${({ theme }) => theme.spacing.sm};
`;