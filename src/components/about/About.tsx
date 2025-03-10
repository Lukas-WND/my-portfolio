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

    // gsap.to(".sphere", {
    //   borderRadius: "2.5rem",
    //   duration: 0.5,
    //   scrollTrigger: {
    //     trigger: ".sphere",
    //     start: "top 60%",
    //     end: "top top",
    //   },
    // });

    ScrollTrigger.create({
      trigger: imagesRef.current,
      endTrigger: "#texts",
      pin: true,
      start: "top 80px",
      end: "bottom bottom",
    });

    ScrollTrigger.create({
      trigger: bgRef.current,
      endTrigger: container.current,
      pin: true,
      start: "top top",
      end: "bottom bottom",
    });

    contentArray.forEach((item, index: number) => {
      if (index !== 0) {
        ScrollTrigger.create({
          animation: gsap.to(`.im${index + 1}`, {
            opacity: 1,
          }),
          trigger: item,
          scrub: true,
          start: "top center",
          end: "top center",
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
      className="w-full min-h-screen relative bg-walnut rounded-t-3xl"
    >
      {/* <div className="absolute top-0 w-full rounded-full z-[1] aspect-square bg-walnut sphere"></div> */}

      <div className="relative z-[2] sec">
        <div className="absolute w-2/5 max-h-screen" ref={bgRef}>
          <div className="relative w-full h-screen overflow-hidden">
            <div className="im1">
              <img
                src="/perfil.jpg"
                alt="cidade"
                className="absolute h-full w-full blur-md scale-105 object-cover transition-opacity duration-700"
              />
            </div>
            <img
              src="/compose.jpg"
              alt="cidade"
              className="absolute opacity-0 h-full w-full blur-md scale-105 object-cover transition-opacity duration-300 im2"
            />
            <img
              src="/embedded.jpg"
              alt="cidade"
              className="absolute opacity-0 h-full w-full blur-md scale-105 object-cover transition-opacity duration-300 im3"
            />
          </div>
        </div>

        <div className="relative grid grid-cols-12 w-full h-full pt-20 pr-20 pl-40 about-content">
          <Images />

          <div className="col-span-6 col-start-7 h-full text-khaki" id="texts">
            <article className="h-[calc(100vh-5rem)] w-full content">
              <h2 className="w-full text-9xl font-secondary text-almond text-end">
                About Me
              </h2>
              <div className="text-4xl font-secondary mt-10 text-justify">
                <p>Hello, my name is Lukas!</p>
                <br />
                <p>
                  I am a technology-driven software developer, committed to
                  creating efficient and well-structured solutions. I have
                  experience in{" "}
                  <strong className="text-almond">front-end</strong> and{" "}
                  <strong className="text-almond">back-end</strong> development,
                  with a strong interest in the{" "}
                  <strong className="text-almond">
                    Internet of Things (IoT)
                  </strong>
                  , which is also the topic of my thesis. Currently, I am
                  exploring new technologies to optimize embedded systems and
                  their internet communication.
                </p>
                <br />
                <p>
                  In this portfolio, you will find more details about my skills,
                  projects, and experiences. Feel free to explore!
                </p>
              </div>
            </article>
            <article className="h-[calc(100vh-5rem)] w-full content">
              <h2 className="w-full text-9xl font-secondary text-almond text-end">
                Experience
              </h2>
              <div className="text-4xl font-secondary  mt-10 text-justify">
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
              </div>
            </article>
            <article className="h-[calc(100vh-5rem)] w-full content">
              <h2 className="w-full text-9xl font-secondary text-almond text-end">
                Education
              </h2>
              <div className="text-4xl font-secondary  mt-10 text-justify">
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
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
