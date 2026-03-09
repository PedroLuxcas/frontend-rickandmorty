import styled from 'styled-components';

const BlurOverlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(15px); /* O efeito de desfoque */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Content = styled.div`
  text-align: center;
  color: white;
  img { 
    width: 200px; 
    border-radius: 15px; 
    /* Imagem de loading é colorida conforme o original */
  }
  p { 
    margin-top: 20px; 
    font-size: 1.2rem; 
    letter-spacing: 4px; 
    text-transform: uppercase;
  }
`;

export const LoadingScreen = () => (
  <BlurOverlay>
    <Content>
      <img src="/images/loading-image.jpg" alt="Loading" />
      <p>Loading</p>
    </Content>
  </BlurOverlay>
);