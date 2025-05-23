import { Routes, Route, Navigate } from 'react-router-dom';
import MicPage from './MicPage';
import LanguagePage from './LanguagePage';
import ChatPage from '../components/Chat/ChatBot';

const ChatContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="mic" />} />
      <Route path="mic" element={<MicPage />} />
      <Route path="language" element={<LanguagePage />} />
      <Route path="chat" element={<ChatPage />} />
    </Routes>
  );
};

export default ChatContainer;
