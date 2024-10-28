import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Images } from "./Images";

export function About() {
  const container = useRef<HTMLElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const contentArray: Element[] = gsap.utils.toArray(".content");
    const tl = gsap.timeline();

    gsap.to(".sphere", {
      scale: 1.5,
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "top top",
        scrub: 0.7,
      },
    });
    // .from(".sec", {
    //   y: 300,
    //   opacity: 0.2,
    //   ease: "back",
    //   scrollTrigger: {
    //     trigger: ".sec",
    //     scrub: true,
    //     start: "top center",
    //     end: "top 70%",
    //   },
    // });

    ScrollTrigger.create({
      trigger: imagesRef.current,
      endTrigger: "#texts",
      pin: true,
      start: "top 80px",
      end: "bottom bottom",
      scrub: true,
    });

    ScrollTrigger.create({
      trigger: bgRef.current,
      endTrigger: container.current,
      pin: true,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    });

    contentArray.forEach((item, index: number) => {
      if (index !== 0) {
        ScrollTrigger.create({
          animation: gsap.to(`.im${index + 1}`, {
            opacity: 100,
          }),
          trigger: item,
          scrub: true,
          start: "top center",
          end: "top 25%",
        });

        ScrollTrigger.create({
          animation: gsap.from(item, { paddingTop: 100, opacity: 0 }),
          trigger: item,
          scrub: true,
          start: "top 80%",
          end: "top center",
        });
      }
    });
  });

  return (
    <section
      id="about"
      ref={container}
      className="w-full min-h-screen relative bg-walnut rounded-t-full"
    >
      <div className="absolute w-full rounded-full z-[1] aspect-square bg-walnut sphere"></div>

      <div className="relative z-[2] h-full w-full sec">
        <div className="absolute w-2/5 max-h-screen" ref={bgRef}>
          <div className="relative w-full h-screen overflow-hidden">
            <div className="im1">
            <img
              src="/city.jpg"
              alt="cidade"
              className="absolute h-full w-full blur-md scale-105 object-cover transition-opacity duration-300 "
            />
            </div>
            <img
              src="/gameboy.jpg"
              alt="cidade"
              className="absolute opacity-0 h-full w-full blur-md scale-105 object-cover transition-opacity duration-300 im2"
            />
            <img
              src="/50.jpg"
              alt="cidade"
              className="absolute opacity-0 h-full w-full blur-md scale-105 object-cover transition-opacity duration-300 im3"
            />
          </div>
        </div>

        <div className="relative grid grid-cols-12 w-full h-full pt-20 pr-20 pl-40 about-content">
          <Images />

          <div className="col-span-6 col-start-7 h-full text-khaki" id="texts">
            <div className="h-[calc(100vh-5rem)] w-full content">
              <h2 className="w-full text-9xl font-secondary text-almond text-end">
                About Me
              </h2>
              <article className="text-4xl font-secondary  mt-10 text-justify">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  non, ut iure officia voluptatibus, unde quo quaerat pariatur
                  sequi, minus neque totam commodi quasi animi asperiores maxime
                  ratione cumque. Eveniet.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Similique ad quae nobis exercitationem dolore doloribus
                  assumenda velit odit, beatae repudiandae accusamus dolores
                  error dolorem enim pariatur blanditiis dolor, perspiciatis
                  natus?
                </p>
              </article>
            </div>
            <div className="h-[calc(100vh-5rem)] w-full content">
              <h2 className="w-full text-9xl font-secondary text-almond text-end">
                Works
              </h2>
              <article className="text-4xl font-secondary  mt-10 text-justify">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  non, ut iure officia voluptatibus, unde quo quaerat pariatur
                  sequi, minus neque totam commodi quasi animi asperiores maxime
                  ratione cumque. Eveniet.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Similique ad quae nobis exercitationem dolore doloribus
                  assumenda velit odit, beatae repudiandae accusamus dolores
                  error dolorem enim pariatur blanditiis dolor, perspiciatis
                  natus?
                </p>
              </article>
            </div>
            <div className="h-[calc(100vh-5rem)] w-full content">
              <h2 className="w-full text-9xl font-secondary text-almond text-end">
                Education
              </h2>
              <article className="text-4xl font-secondary  mt-10 text-justify">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  non, ut iure officia voluptatibus, unde quo quaerat pariatur
                  sequi, minus neque totam commodi quasi animi asperiores maxime
                  ratione cumque. Eveniet.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Similique ad quae nobis exercitationem dolore doloribus
                  assumenda velit odit, beatae repudiandae accusamus dolores
                  error dolorem enim pariatur blanditiis dolor, perspiciatis
                  natus?
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
