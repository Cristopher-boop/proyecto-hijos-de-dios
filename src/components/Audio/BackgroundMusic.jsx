import { useEffect, useRef, useState } from "react";

import {
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";

import music from "../../assets/audio/left2.mp3";

export default function BackgroundMusic() {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const [volume, setVolume] = useState(0.3);

  // AUTOPLAY
  useEffect(() => {
    const playMusic = async () => {
      try {
        audioRef.current.volume = volume;

        await audioRef.current.play();

        setIsPlaying(true);
      } catch (error) {
        console.log("Autoplay bloqueado");
      }
    };

    playMusic();
  }, []);

  // CAMBIAR VOLUMEN
  const handleVolume = (e) => {
    const value = parseFloat(e.target.value);

    setVolume(value);

    audioRef.current.volume = value;
  };

  // PLAY / PAUSE
  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* AUDIO */}
      <audio
        ref={audioRef}
        loop
      >
        <source src={music} type="audio/mp3" />
      </audio>

      {/* CONTROL PANEL */}
      <div className="fixed bottom-8 right-8 z-[999] flex items-center gap-4 bg-black/40 backdrop-blur-2xl border border-white/10 px-5 py-4 rounded-2xl shadow-[0_0_30px_rgba(255,0,0,0.2)]">
        
        {/* BUTTON */}
        <button
          onClick={toggleMusic}
          className="text-white hover:text-red-500 transition"
        >
          {isPlaying ? (
            <FaVolumeUp size={24} />
          ) : (
            <FaVolumeMute size={24} />
          )}
        </button>

        {/* SLIDER */}
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolume}
          className="
            w-32
            accent-red-600
            cursor-pointer
          "
        />
      </div>
    </>
  );
}