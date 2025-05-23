import React, { useState, useEffect, useRef } from 'react';

function ChatBot({ language, isMicMuted }) {
  const [messages, setMessages] = useState([
    { from: 'bot', text: `🙏 Hello! You're chatting in ${language.toUpperCase()}. How may I assist you today?` },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { from: 'user', text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: 'bot',
          text: `🪔 You said: "${input.trim()}"\n(Language: ${language}, Mic muted: ${isMicMuted ? 'Yes' : 'No'})`,
        },
      ]);
    }, 1000);

    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fff8e1] to-[#ffe0b2] p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-[#ffcc80] overflow-hidden">
        <div className="bg-[#ff9800] text-white px-6 py-4 flex items-center justify-between">
          <h2 className="text-lg font-bold">SARVSEVAK CHATBOT ({language.toUpperCase()})</h2>
          <span className="text-sm">
            Mic: {isMicMuted ? 'Muted 🔇' : 'On 🎙️'}
          </span>
        </div>

        <div className="h-[420px] overflow-y-auto px-6 py-4 bg-white space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`rounded-2xl px-4 py-2 max-w-[75%] whitespace-pre-wrap shadow ${
                  msg.from === 'user'
                    ? 'bg-[#ff9800] text-white rounded-tr-none'
                    : 'bg-gray-100 text-gray-900 rounded-tl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="px-6 py-4 bg-white border-t border-[#ffe0b2]">
          <textarea
            rows={3}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="w-full p-3 border border-[#ffcc80] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffa726] resize-none"
          />
          <button
            onClick={sendMessage}
            className="mt-3 w-full py-2 bg-[#ff9800] text-white font-semibold rounded-full hover:bg-[#fb8c00] transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
