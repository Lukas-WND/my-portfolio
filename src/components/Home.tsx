export function HomeHero() {
  return (
    <section className="relative h-screen">
      <div className="absolute w-full h-full flex items-center justify-center">
        <div className="h-full aspect-square rotate-[300deg] overflow-hidden p-[2px]">
          <div className="absolute bg-gradient-to-r from-dark-ciano to-khaki from-50% w-[200%] h-[200%] -left-1/2 -top-1/2 animate-spin"></div>
          <div className="relative w-full h-full bg-dark-ciano"></div>
        </div>
      </div>
      <div className="relative w-full h-full flex flex-col items-center justify-center text-[300px] leading-[0.85] tracking-wider">
        <h2 className="text-almond">I'm Lukas</h2>
        <h2 className="text-dark-ciano stroke-khaki">I'm Lukas</h2>
        <h2 className="text-almond">I'm Lukas</h2>
      </div>
    </section>
  );
}
