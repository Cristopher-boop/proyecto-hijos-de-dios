import { useEffect, useRef } from "react";

import sound from "../../assets/audio/voz.mp3";

export default function HeroSound() {
  const audioRef = useRef(null);

  const hasPlayedRef = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;

    // VOLUMEN MÁS FUERTE
    audio.volume = 1;

    let unlocked = false;

    // DESBLOQUEAR AUDIO CON PRIMER CLICK
    const unlockAudio = async () => {
      if (unlocked) return;

      unlocked = true;

      console.log("Audio desbloqueado");
    };

    window.addEventListener("click", unlockAudio);

    // DETECTAR SCROLL
    const handleScroll = async () => {
      const hero = document.getElementById("hero");

      if (!hero) return;

      const rect = hero.getBoundingClientRect();

      const visible =
        rect.top <= window.innerHeight * 0.5 &&
        rect.bottom >= window.innerHeight * 0.5;

      // SI ENTRA AL HERO
      if (visible && unlocked && !hasPlayedRef.current) {
        try {
          hasPlayedRef.current = true;

          audio.currentTime = 0;

          await audio.play();

          console.log("Reproduciendo voz");
        } catch (err) {
          console.log("Error reproduciendo voz");
        }
      }

      // SI SALE DEL HERO
      if (!visible) {
        hasPlayedRef.current = false;
      }
    };

    window.addEventListener("scroll", handleScroll);

    // EJECUTAR AL INICIO
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