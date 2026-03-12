import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px auto;
  max-width: 500px;
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px 12px;
  background: transparent;
  border: 1px solid #333;
  color: #fff;
  font-size: 14px;
  transition: all 0.2s;

  &::placeholder {
    color: #666;
  }

  &:focus {
    outline: none;
    border-color: #00FF00;
  }

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 16px; /* Melhor para mobile */
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background: transparent;
  border: 1px solid #333;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  min-width: 100px;

  &:hover:not(:disabled) {
    border-color: #00FF00;
    color: #00FF00;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 16px;
    width: 100%;
  }
`;