import Particles from "react-tsparticles";

import { loadFull } from "tsparticles";

export default function FloatingParticles() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      init={particlesInit}
      className="absolute inset-0 z-10"
      options={{
        fullScreen: false,

        background: {
          color: "transparent",
        },

        particles: {
          number: {
            value: 45,
          },

          color: {
            value: "#ff0000",
          },

          opacity: {
            value: 0.18,
          },

          size: {
            value: { min: 1, max: 5 },
          },

          move: {
            enable: true,
            speed: 0.4,
          },

          links: {
            enable: false,
          },
        },
      }}
    />
  );
}