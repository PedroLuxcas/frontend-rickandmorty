import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from '../src/components/Layout/Header';
import Footer from '@components/Layout/Footer';
import CharactersPage from '../src/pages/CharactersPage';
import CharacterDetailPage from '../src/pages/CharacterDetailPage';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CharactersPage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/character/:id" element={<CharacterDetailPage />} />
          {/* Add more routes for episodes and locations */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;