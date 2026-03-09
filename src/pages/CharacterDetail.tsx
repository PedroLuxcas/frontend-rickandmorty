import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  background: #000;
  display: flex;
  width: 850px;
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid #333;
  position: relative;

  .close-btn {
    position: absolute;
    top: 20px; left: 20px;
    background: #333;
    border: 1px solid #fff;
    color: white;
    padding: 5px 15px;
    cursor: pointer;
    border-radius: 5px;
    z-index: 2;
  }

  .image-side { width: 45%; }
  .info-side { 
    width: 55%; 
    padding: 60px 40px; 
    color: white;
    h2 { font-size: 1.8rem; margin: 10px 0; }
    label { color: #83b82a; font-size: 0.7rem; letter-spacing: 2px; }
    p { color: #aaa; margin-bottom: 30px; }
  }
`;

export const CharacterDetail = ({ char, onClose }: any) => (
  <ModalOverlay onClick={onClose}>
    <ModalBox onClick={e => e.stopPropagation()}>
      <button className="close-btn" onClick={onClose}>Close</button>
      <div className="image-side">
        <img src={char.image} style={{ width: '100%' }} />
      </div>
      <div className="info-side">
        <label>ABOUT</label>
        <h2>{char.name}</h2>
        <p>{char.name} is a {char.species}. He is {char.status} and well.</p>
        
        <label>ORIGIN</label>
        <h3>{char.origin.name}</h3>
      </div>
    </ModalBox>
  </ModalOverlay>
);