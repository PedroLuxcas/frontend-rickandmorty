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
          {/* Main route - Home with search */}
          <Route path="/" element={<Home />} />
          
          {/* Rota with search parameter (e.g., /search?q=Rick) */}
          <Route path="/search" element={<Home />} />
          
          {/* Route with character ID (e.g., /character/1) */}
          <Route path="/character/:id" element={<Home />} />
          
          {/* Route with search + page (e.g., /search/Rick/page/2) */}
          <Route path="/search/:query/page/:page" element={<Home />} />
          
          {/* Wildcard route - any other route goes to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;