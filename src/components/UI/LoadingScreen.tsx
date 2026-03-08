import React from 'react';
import * as S from './LoadingScreen.styles';

interface LoadingScreenProps {
  message?: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ message = 'Loading...' }) => {
  return (
    <S.LoadingContainer>
      <S.Spinner />
      <S.LoadingText>{message}</S.LoadingText>
      <S.LoadingDots>
        <span></span>
        <span></span>
        <span></span>
      </S.LoadingDots>
    </S.LoadingContainer>
  );
};

export default LoadingScreen;