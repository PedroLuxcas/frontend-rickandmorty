import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import Home from './pages/Home';
import { CharacterDetail } from '@/pages/CharacterDetail';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;