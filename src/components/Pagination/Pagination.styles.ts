import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 30px 0;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 4px;
    margin: 20px 0;
  }
`;

export const Button = styled.button<{ $active?: boolean }>`
  min-width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid ${({ $active }) => $active ? '#00FF00' : '#333'};
  color: ${({ $active }) => $active ? '#00FF00' : '#666'};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  padding: 0 8px;

  &:hover:not(:disabled) {
    border-color: #00FF00;
    color: #00FF00;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    min-width: 32px;
    height: 32px;
    font-size: 13px;
    padding: 0 6px;
  }

  @media (max-width: 320px) {
    min-width: 28px;
    height: 28px;
    font-size: 12px;
  }
`;

export const Dots = styled.span`
  color: #666;
  font-size: 14px;
  padding: 0 4px;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;