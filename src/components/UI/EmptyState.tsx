import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './EmptyState.styles';

interface EmptyStateProps {
  title?: string;
  message?: string;
  showButton?: boolean;
  buttonText?: string;
  buttonPath?: string;
  onButtonClick?: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No results found',
  message = 'Try adjusting your search',
  showButton = true,
  buttonText = 'Go back',
  buttonPath = '/characters',
  onButtonClick,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      navigate(buttonPath);
    }
  };

  return (
    <S.EmptyContainer>
      <S.EmptyIcon>🔍</S.EmptyIcon>
      <S.EmptyTitle>{title}</S.EmptyTitle>
      <S.EmptyMessage>{message}</S.EmptyMessage>
      {showButton && (
        <S.EmptyButton onClick={handleClick}>
          {buttonText}
        </S.EmptyButton>
      )}
    </S.EmptyContainer>
  );
};

export default EmptyState;