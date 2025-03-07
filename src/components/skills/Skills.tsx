import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Skills() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const itemsList: Element[] = gsap.utils.toArray(".item");

    itemsList.forEach((item) => {
      ScrollTrigger.create({
        animation: gsap.to(item, {
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.2,
          ease: "back.out",
        }),
        trigger: item,
        start: "top center",
        end: "bottom center",
        toggleActions: "play reverse play reverse",
      });
    });
  });

  const skillsList: string[] = [
    "TypeScript",
    "React",
    "UX/UI",
    "Node.js",
    "NestJS",
    "Next.js",
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-rich-black">
      <div className="w-full leading-1 px-20 py-10">
        <h2 className="text-9xl text-white font-secondary">Skills</h2>
        <p></p>
      </div>
      <ul className="my-20 flex flex-col items-center">
        {skillsList.map((skill, idx) => (
          <li
            key={idx}
            className="item blur-[6px] font-secondar text-white opacity-35 text-[10rem] leading-none transition-all duration-300"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
