// src/components/MicPermission.jsx
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const MicPermission = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(() => {
        setTimeout(() => navigate('/language'), 500); // go to language
      })
      .catch(() => alert('Mic access denied. Please allow to continue.'));
  }, [navigate]);

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-[#FF9933]/20 to-[#FF6699]/20">
      <div className="text-center p-8 bg-white rounded-xl shadow-xl">
        <h1 className="text-2xl font-bold mb-4 text-[#FF6699]">Microphone Access</h1>
        <p className="text-gray-600">Please allow microphone access to proceed.</p>
      </div>
    </div>
  );
};

export default MicPermission;
