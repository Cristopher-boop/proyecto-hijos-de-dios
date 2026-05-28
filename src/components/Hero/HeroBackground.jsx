import palacio from "../../assets/palacio.png";

export default function HeroBackground() {
  return (
    <>
      <img
        src={palacio}
        className="absolute inset-0 w-full h-full object-cover scale-110 animate-pulse"
      />

      <div className="absolute inset-0 bg-black/80" />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />

      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-red-700/20 rounded-full blur-[180px]" />
    </>
  );
}