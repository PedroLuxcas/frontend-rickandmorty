import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  position: relative;

  /* BACKGROUND SEMPRE PRETO E BRANCO */
  &::before {
    content: '';
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: url('/images/background-image.jpg') no-repeat center center;
    background-size: cover;
    filter: grayscale(100%) brightness(0.3); /* Cinza e escuro */
    z-index: -1;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  gap: 10px;
  margin: 40px 0;
  z-index: 1;

  input {
    background: rgba(0, 0, 0, 0.7);
    border: 1px solid #555;
    color: white;
    padding: 12px 20px;
    border-radius: 4px;
    width: 300px;
    outline: none;
    &:focus { border-color: #83b82a; }
  }

  button {
    background: transparent;
    border: 1px solid #fff;
    color: white;
    padding: 10px 25px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s;
    &:hover { background: #fff; color: #000; }
  }
`;

export const CharacterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 30px;
  max-width: 1200px;
  width: 100%;
  z-index: 1;
`;

export const Card = styled.div`
  background: #000;
  border-radius: 10px;
  border: 2px solid #333;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  img { 
    width: 100%; 
    display: block; 
    filter: grayscale(100%); /* Personagem começa P&B */
    transition: filter 0.4s ease;
  }

  .info {
    padding: 15px;
    color: white;
    h3 { font-size: 1rem; margin: 0; }
    p { font-size: 0.8rem; color: #777; margin-top: 5px; }
  }

  &:hover {
    border-color: #83b82a;
    transform: translateY(-8px);
    box-shadow: 0 10px 20px rgba(131, 184, 42, 0.2);

    img {
      filter: grayscale(0%); /* Fica colorido no HOVER */
    }
  }
`;