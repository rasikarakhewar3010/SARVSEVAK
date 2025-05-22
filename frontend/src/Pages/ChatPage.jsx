'use client';
import { useState, useEffect, useRef } from 'react';
import { FaPaperPlane, FaLanguage, FaRegSmile } from 'react-icons/fa';
import { IoMdMenu } from 'react-icons/io';

const ChatPage = () => {
  const [language, setLanguage] = useState('English');
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const messagesEndRef = useRef(null);

  // Sample initial messages in both languages
  const initialMessages = {
    English: [
      { text: 'Namaste! How can I assist you today?', sender: 'bot' },
    ],
    Hindi: [
      { text: 'नमस्ते! मैं आपकी कैसे सहायता कर सकता हूँ?', sender: 'bot' },
    ]
  };

  useEffect(() => {
    setMessages(initialMessages[language]);
  }, [language]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    // Add user message
    setMessages(prev => [...prev, { text: inputMessage, sender: 'user' }]);
    setInputMessage('');

    // Simulate bot response after a delay
    setTimeout(() => {
      const responses = {
        English: [
          "I'm analyzing your request...",
          "That's an interesting question!",
          "Let me find that information for you.",
          "Here's what I discovered..."
        ],
        Hindi: [
          "मैं आपके अनुरोध का विश्लेषण कर रहा हूँ...",
          "यह एक दिलचस्प सवाल है!",
          "मुझे वह जानकारी ढूंढने दीजिए।",
          "मुझे यह जानकारी मिली है..."
        ]
      };

      const randomResponse = responses[language][Math.floor(Math.random() * responses[language].length)];
      setMessages(prev => [...prev, { text: randomResponse, sender: 'bot' }]);
    }, 1000);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'English' ? 'Hindi' : 'English');
  };

  const content = {
    English: {
      title: 'AI Chatbot',
      placeholder: 'Type a message...',
      menu: 'Menu',
      send: 'Send'
    },
    Hindi: {
      title: 'एआई चैटबॉट',
      placeholder: 'संदेश लिखें...',
      menu: 'मेन्यू',
      send: 'भेजें'
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-[#FF9933]/10 to-[#FF6699]/10">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#FF9933] to-[#FF6699] p-4 shadow-md">
        <div className="flex justify-between items-center text-white">
          <div className="flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mr-4 text-xl"
            >
              <IoMdMenu />
            </button>
            <h1 className="text-xl font-bold">{content[language].title}</h1>
          </div>
          <button 
            onClick={toggleLanguage}
            className="flex items-center bg-white/20 px-3 py-1 rounded-full text-sm"
          >
            <FaLanguage className="mr-1" />
            {language === 'English' ? 'हिंदी' : 'English'}
          </button>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-xs md:max-w-md rounded-lg p-3 ${message.sender === 'user' 
                ? 'bg-gradient-to-r from-[#FF9933] to-[#FF6699] text-white rounded-br-none'
                : 'bg-white border border-[#FF9933]/30 rounded-bl-none'}`}
            >
              <p className={message.sender === 'bot' ? 'text-gray-800' : 'text-white'}>
                {message.text}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-[#FF9933]/30 bg-white">
        <div className="flex items-center">
          <button className="p-2 text-[#FF6699]">
            <FaRegSmile size={20} />
          </button>
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder={content[language].placeholder}
            className="flex-1 border border-[#FF9933]/30 rounded-full px-4 py-2 mx-2 focus:outline-none focus:ring-2 focus:ring-[#FF9933]/50"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim()}
            className={`p-2 rounded-full ${inputMessage.trim() 
              ? 'bg-gradient-to-r from-[#FF9933] to-[#FF6699] text-white'
              : 'bg-gray-200 text-gray-400'}`}
          >
            <FaPaperPlane size={18} />
          </button>
        </div>
      </div>

      {/* Side Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-10" onClick={() => setIsMenuOpen(false)}>
          <div 
            className="w-64 h-full bg-white shadow-lg animate-slideIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-[#FF9933]/30">
              <h2 className="text-lg font-semibold text-[#FF9933]">
                {content[language].menu}
              </h2>
            </div>
            <div className="p-4">
              <p className="text-gray-600">
                {language === 'English' 
                  ? 'Chatbot features and settings coming soon!' 
                  : 'चैटबॉट सुविधाएँ और सेटिंग्स जल्द ही आ रही हैं!'}
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes slideIn {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ChatPage;