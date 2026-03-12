import React from 'react';
import * as S from './LoadingScreen.styles';

interface LoadingScreenProps {
  message?: string;
  imageUrl?: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  message = 'Loading',
  imageUrl = '/images/loading-image.jpg'
}) => {
  return (
    <S.Overlay>
      <S.Container>
        <S.Image src={imageUrl} alt="Loading" />
        <S.Text>{message}</S.Text>
      </S.Container>
    </S.Overlay>
  );
};

export default LoadingScreen;