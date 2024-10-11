export function About() {
  return (
    <section className="relative mt-24 w-full h-screen bg-khaki" id="about">
      <div className="absolute w-full h-full bg-khaki">
        <div className="w-2/5 h-full overflow-hidden">
          <img
            src="/city.jpg"
            alt="bg_image_blurred"
            className="w-full h-full object-cover blur-md scale-105"
          />
        </div>
      </div>
      <div className="relative z-10 w-full h-full grid grid-cols-12 grid-rows-12 py-20 pr-20 pl-40">
        <div className="col-span-4 col-start-2 row-span-full h-full overflow-hidden">
          <img
            src="/city.jpg"
            alt="gameboy_image"
            className="w-full h-full object-cover content-center"
          />
        </div>
        <div className="col-span-4 row-span-1 col-start-9 text-almond text-9xl text-end font-secondary">
          About Me
        </div>
        <div className="col-span-6 col-start-7 row-span-11 row-start-3 text-4xl text-justify text-almond font-secondary">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            nobis quasi debitis porro dolorum exercitationem sed, voluptatibus
            molestiae quos praesentium rerum quae eum dolores officiis officia
            odit aliquam neque recusandae!
          </p>
          <p className="mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            illum. Iste libero quibusdam consequuntur, optio officiis vel quas
            vero nulla reprehenderit.
          </p>
        </div>
      </div>
    </section>
  );
}
