import React, { useState } from 'react';
import * as S from './Home.styles';
import { LoadingScreen } from '../components/LoadingScreen';

const Home: React.FC = () => {
  const [characters, setCharacters] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const fetchCharacters = async () => {
    if (!search) return;
    setLoading(true);
    
    try {
      const resp = await fetch(`https://rickandmortyapi.com/api/character/?name=${search}`);
      const data = await resp.json();
      
      setTimeout(() => {
        setCharacters(data.results || []);
        setLoading(false);
        setHasSearched(true);
      }, 1500);
    } catch {
      setLoading(false);
    }
  };

  return (
    <S.Container>
      {/* Logo colorido */}
      <img 
        src="/images/name.png" 
        alt="Rick and Morty" 
        style={{ width: '450px', zIndex: 1 }} 
      />
      
      <S.SearchBox>
        <input 
          placeholder="Search characters" 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && fetchCharacters()}
        />
        <button onClick={fetchCharacters}>SEARCH</button>
      </S.SearchBox>

      {/* Grid de personagens (P&B, colorido no hover) */}
      {hasSearched && !loading && (
        <S.CharacterGrid>
          {characters.map((char) => (
            <S.Card key={char.id}>
              <img src={char.image} alt={char.name} />
              <div className="info">
                <h3>{char.name}</h3>
                <p>{char.species} - {char.status}</p>
              </div>
            </S.Card>
          ))}
        </S.CharacterGrid>
      )}

      {/* Overlay de Loading com Blur */}
      {loading && <LoadingScreen />}
      
    </S.Container>
  );
};

export default Home;