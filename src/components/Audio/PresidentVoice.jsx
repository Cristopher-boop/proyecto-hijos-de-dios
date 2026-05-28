import { useEffect, useRef } from "react";

import sound from "../../assets/audio/voz3.mp3";

export default function PresidentVoice() {
  const audioRef = useRef(null);

  const hasPlayedRef = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;

    // VOLUMEN FUERTE
    audio.volume = 1;

    let unlocked = false;

    // DESBLOQUEAR AUDIO
    const unlockAudio = () => {
      unlocked = true;
    };

    window.addEventListener("click", unlockAudio);

    // DETECTAR SCROLL
    const handleScroll = async () => {
      const section = document.getElementById("president");

      if (!section) return;

      const rect = section.getBoundingClientRect();

      const visible =
        rect.top <= window.innerHeight * 0.5 &&
        rect.bottom >= window.innerHeight * 0.5;

      // ENTRÓ A LA SECCIÓN
      if (visible && unlocked && !hasPlayedRef.current) {
        try {
          hasPlayedRef.current = true;

          audio.currentTime = 0;

          await audio.play();

          console.log("voz3 iniciada");
        } catch (err) {
          console.log("error voz3");
        }
      }

      // SALIÓ DE LA SECCIÓN
      if (!visible) {
        hasPlayedRef.current = false;
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("click", unlockAudio);

      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <audio ref={audioRef}>
      <source src={sound} type="audio/mp3" />
    </audio>
  );
}