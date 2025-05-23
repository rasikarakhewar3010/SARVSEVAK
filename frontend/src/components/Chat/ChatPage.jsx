import React, { useState } from 'react';
import MicPermission from './MicPermission';
import LanguageSelect from './LanguageSelect';
import ChatBot from './ChatBot';

function ChatPage() {
  const [step, setStep] = useState(1);
  const [isMicMuted, setIsMicMuted] = useState(false);
  const [language, setLanguage] = useState('');

  const handleMicPermissionGranted = (muted) => {
    setIsMicMuted(muted);
    setStep(2);
  };

  const handleLanguageSelected = (lang) => {
    setLanguage(lang);
    setStep(3);
  };

  return (
    <div style={{ padding: 20 }}>
      {step === 1 && <MicPermission onPermissionGranted={handleMicPermissionGranted} />}
      {step === 2 && <LanguageSelect onLanguageSelected={handleLanguageSelected} />}
      {step === 3 && <ChatBot language={language} isMicMuted={isMicMuted} />}
    </div>
  );
}

export default ChatPage;
