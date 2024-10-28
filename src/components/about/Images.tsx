import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Images() {
  const imagesRef = useRef<HTMLDivElement>(null);
  const imagesArray: Element[] = gsap.utils.toArray(imagesRef.current);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: imagesRef.current,
      endTrigger: "#texts",
      pin: true,
      start: "top 80px",
      end: "bottom bottom",
    });

    gsap.to(".mask", {
      maskPosition: "0% 0%",
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".mask",
        start: "top 80px",
      },
    });
  });

  return (
    <div
      className="col-span-4 col-start-2 w-full h-[calc(100vh-10rem)] relative"
      ref={imagesRef}
    >
      <div className="im w-full h-full absolute z-30">
        <div className="mask bg-[url('/city.jpg')] bg-cover bg-center bg-no-repeat h-full w-full relative [mask-image:url('/city.jpg')] [mask-repeat:no-repeat] [mask-position:-50%-50%]"></div>
      </div>
      <div className="im w-full h-full absolute z-20">
        <div className="mask bg-[url('/gameboy.jpg')] bg-cover bg-center bg-no-repeat h-full w-full relative [mask-image:url('/city.jpg')] [mask-repeat:no-repeat] [mask-position:-50%-50%]"></div>
      </div>
      <div className="im w-full h-full absolut z-10">
        <div className="mask bg-[url('/50.jpg')] bg-cover bg-center bg-no-repeat h-full w-full relative [mask-image:url('/city.jpg')] [mask-repeat:no-repeat] [mask-position:-50%-50%]"></div>
      </div>
    </div>
  );
}
