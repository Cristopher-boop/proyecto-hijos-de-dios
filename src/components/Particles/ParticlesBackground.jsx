import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "transparent",
        },

        fpsLimit: 120,

        particles: {
          color: {
            value: "#ff0000",
          },

          links: {
            enable: false,
          },

          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: 0.4,
          },

          number: {
            value: 60,
          },

          opacity: {
            value: 0.2,
          },

          shape: {
            type: "circle",
          },

          size: {
            value: { min: 1, max: 4 },
          },
        },

        detectRetina: true,
      }}
      className="absolute inset-0"
    />
  );
}