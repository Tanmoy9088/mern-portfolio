// src/components/MusicPlayer.jsx
import React, { useRef, useState } from 'react';
import { HiPlay, HiPause } from 'react-icons/hi';

function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="fixed bottom-5 left-5 z-50 flex items-center space-x-3 bg-gradient-to-r from-purple-900 to-indigo-800 border border-purple-500 px-4 py-2 rounded-full shadow-lg animate-pulse backdrop-blur-sm">
  {/* <iframe data-testid="embed-iframe" src="https://open.spotify.com/embed/track/6qqrTXSdwiJaq8SO0X2lSe?utm_source=generator&theme=0" width="20%" height="40" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
      <button onClick={toggleMusic} className="text-white text-2xl hover:scale-110 transition-transform">
        {isPlaying ? <HiPause /> : <HiPlay />}
      </button>
      <span className="text-white font-semibold text-sm">
        {isPlaying ? 'Now Playing' : 'Paused'}
      </span>
    </div>
  );
}

export default MusicPlayer;
