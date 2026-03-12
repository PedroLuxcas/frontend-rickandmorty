import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/images/background-image.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: grayscale(100%) contrast(120%);
  z-index: -2;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: -1;
`;

export const Logo = styled.img`
  width: 300px;
  height: auto;
  margin: 20px auto 30px;
  display: block;
  filter: drop-shadow(0 0 15px #00FF00);
  transition: all 0.3s;

  @media (max-width: 768px) {
    width: 250px;
    margin: 15px auto 25px;
  }

  @media (max-width: 480px) {
    width: 200px;
    margin: 10px auto 20px;
  }
`;

export const ResultsInfo = styled.div`
  color: #888;
  font-size: 14px;
  margin: 15px 0;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 13px;
    margin: 10px 0;
  }
`;

export const ErrorMessage = styled.div`
  color: #ff4444;
  text-align: center;
  margin: 20px 0;
  padding: 15px;
  border: 1px solid #ff4444;
  border-radius: 4px;
  background: rgba(255, 68, 68, 0.1);
  font-size: 14px;

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 13px;
  }
`;