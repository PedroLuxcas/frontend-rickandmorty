import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
  margin: 20px 0;

  /* Tablet */
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: 12px;
  }

  /* Mobile */
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  /* Mobile pequeno */
  @media (max-width: 320px) {
    grid-template-columns: 1fr;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: #666;
  font-size: 14px;
  border: 1px dashed #333;
  border-radius: 4px;
  grid-column: 1 / -1;

  @media (max-width: 480px) {
    padding: 30px 15px;
    font-size: 13px;
  }
`;