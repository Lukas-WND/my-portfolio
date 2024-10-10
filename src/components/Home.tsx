export function HomeHero() {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="w-4/5 relative text-dark-ciano">
        <div className="absolute w-full h-full flex items-center justify-center">
          <div className="h-[120%] aspect-square rotate-[300deg] overflow-hidden p-[2px]">
            <div className="absolute bg-gradient-to-r from-dark-ciano to-khaki from-50% w-[200%] h-[200%] -left-1/2 -top-1/2 animate-spin-slow"></div>
            <div className="relative w-full h-full bg-dark-ciano"></div>
          </div>
        </div>
        <div className="relative h-full text-center content-center text-[300px] leading-[0.85] tracking-wider">
          <h2 className="text-almond animate-text-rise-from-behind">I'm Lukas</h2>
          <h2 className="text-inherit stroke-khaki animate-text-rise-from-behind">I'm Lukas</h2>
          <h2 className="text-almond animate-text-rise-from-behind">I'm Lukas</h2>
        </div>
      </div>
    </section>
  );
}
