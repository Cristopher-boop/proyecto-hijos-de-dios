export default function NoiseOverlay() {
  return (
    <div
      className="absolute inset-0 opacity-[0.06] mix-blend-screen pointer-events-none z-30"
      style={{
        backgroundImage:
          "url('https://grainy-gradients.vercel.app/noise.svg')",
      }}
    />
  );
}