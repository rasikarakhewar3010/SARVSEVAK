import { useNavigate } from 'react-router-dom';
import { useChatLanguage } from './ChatLanguageContext';

const chatLanguages = [
  'English', 'Hindi', 'Marathi', 'Tamil', 'Telugu',
  'Gujarati', 'Punjabi', 'Bengali', 'Kannada',
  'Malayalam', 'Urdu', 'Odia'
];

const ChatLanguageSelector = () => {
  const { setLanguage } = useChatLanguage();
  const navigate = useNavigate();

  const handleSelect = (lang) => {
    setLanguage(lang);
    navigate('/chatpage');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FF9933]/10 to-[#FF6699]/10 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-[#FF6699] mt-10 mb-6">Choose Chat Language</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {chatLanguages.map((lang, i) => (
          <button
            key={i}
            className="bg-white border border-[#FF6699] text-[#FF6699] px-6 py-3 rounded-lg font-medium hover:bg-[#FF6699] hover:text-white transition"
            onClick={() => handleSelect(lang)}
          >
            {lang}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatLanguageSelector;
