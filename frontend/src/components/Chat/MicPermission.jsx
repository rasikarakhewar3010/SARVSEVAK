import React, { useState, useEffect } from 'react';

function MicPermission({ onPermissionGranted }) {
  const [micAllowed, setMicAllowed] = useState(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(() => setMicAllowed(true))
      .catch(() => setMicAllowed(false));
  }, []);

  const toggleMute = () => setIsMuted(!isMuted);

  const handleContinue = () => {
    if (micAllowed) {
      onPermissionGranted(isMuted);
    } else {
      alert('Microphone permission denied. You can still continue with chat.');
      onPermissionGranted(true);
    }
  };

  if (micAllowed === null) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#fff8e1] to-[#ffe0b2] text-[#ff6f00] text-lg font-medium animate-pulse">
        Requesting microphone permission...
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center border border-[#ffd180]">
        <h2 className="text-3xl font-bold mb-6 text-[#ff6f00] drop-shadow-sm">
          Microphone Permission
        </h2>

        {micAllowed ? (
          <>
            <p className="mb-6 text-gray-700 text-base">
              🎙️ Microphone access <span className="font-semibold text-green-600">granted</span>.
              You can mute/unmute before continuing.
            </p>

            <button
              onClick={toggleMute}
              className={`mb-4 px-6 py-3 rounded-full border-2 font-semibold transition-colors duration-300 ${
                isMuted
                  ? 'bg-[#ff6f00] text-white hover:bg-[#e65100]'
                  : 'border-[#ff6f00] text-[#ff6f00] hover:bg-[#ff6f00] hover:text-white'
              }`}
              aria-pressed={isMuted}
            >
              {isMuted ? '🔇 Unmute Microphone' : '🎙️ Mute Microphone'}
            </button>

            <br />

            <button
              onClick={handleContinue}
              className="mt-2 px-8 py-3 rounded-full bg-[#ff9800] text-white font-semibold hover:bg-[#f57c00] transition-colors duration-300"
              aria-label="Continue with microphone"
            >
              Continue
            </button>
          </>
        ) : (
          <>
            <p className="mb-6 text-red-600 font-semibold">
              ❌ Microphone access denied.
            </p>
            <button
              onClick={handleContinue}
              className="px-8 py-3 rounded-full bg-gray-700 text-white font-semibold hover:bg-gray-600 transition-colors duration-300"
              aria-label="Continue without microphone"
            >
              Continue Without Microphone
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default MicPermission;
