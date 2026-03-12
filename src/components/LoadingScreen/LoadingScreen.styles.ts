import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const Container = styled.div`
  text-align: center;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 30px;
  object-fit: contain;
  filter: drop-shadow(0 0 10px #00FF00);
`;

export const Text = styled.div`
  font-family: "Courier New", monospace;
  font-size: 28px;
  color: #00FF00;
  margin: 5px 0;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
`;