import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Images() {
  const imagesRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const contentArray: Element[] = gsap.utils.toArray(".content");
    ScrollTrigger.create({
      trigger: imagesRef.current,
      endTrigger: "#texts",
      pin: true,
      start: "top 80px",
      end: "bottom bottom",
    });

    contentArray.forEach((item, idx: number) => {
      if (idx > 0) {
        ScrollTrigger.create({
          animation: gsap.to(`.mask-${idx}`, {
            maskPosition: "0% 0%",
          }),
          trigger: item,
          start: "top center",
          end: "top center",
          scrub: true,
        });
      }
    });
  });

  return (
    <div
      className="col-span-4 col-start-2 w-full h-[calc(100vh-10rem)] relative"
      ref={imagesRef}
    >
      <div className="im w-full h-full absolute">
        <div className="bg-[url('/perfil.jpg')] bg-cover bg-center bg-no-repeat h-full w-full relative"></div>
      </div>
      <div className="im w-full h-full absolute">
        <div className="mask-1 bg-[url('/compose.jpg')] bg-cover bg-center bg-no-repeat h-full w-full relative [mask-image:url('/city.jpg')] [mask-repeat:no-repeat] [mask-position:-50%-50%] transition-all ease-out duration-500"></div>
      </div>
      <div className="im w-full h-full absolute">
        <div className="mask-2 bg-[url('/embedded.jpg')] bg-cover bg-center bg-no-repeat h-full w-full relative [mask-image:url('/city.jpg')] [mask-repeat:no-repeat] [mask-position:-50%-50%] transition-all ease-out duration-500"></div>
      </div>
    </div>
  );
}
