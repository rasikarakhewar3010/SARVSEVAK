import { Routes, Route } from 'react-router-dom';
import AuthPage from './components/Login/AuthPage';
import HomePage from './Pages/HomePage';
import NotFound from './Pages/NotFound'; // Optional for 404 page
import LanguageSelector from './components/LanguageSelector';
import { LanguageProvider } from './components/LanguageContext';
import ChatPage from './Pages/ChatPage';  // Import ChatPage from Pages folder
import GuidePage from './Pages/GuidePage';

function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/language" element={<LanguageSelector />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LanguageProvider>
  );
}

export default App;
