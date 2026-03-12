import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import Home from '@/pages/Home/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          {/* Rota principal - Home com busca */}
          <Route path="/" element={<Home />} />
          
          {/* Rota com parâmetro de busca (ex: /search?q=Rick) */}
          <Route path="/search" element={<Home />} />
          
          {/* Rota com ID do personagem (ex: /character/1) */}
          <Route path="/character/:id" element={<Home />} />
          
          {/* Rota com busca + página (ex: /search/Rick/page/2) */}
          <Route path="/search/:query/page/:page" element={<Home />} />
          
          {/* Rota curinga - qualquer outra rota vai para Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;