import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function About() {
  const container = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const imageBgRef = useRef<HTMLImageElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  const sections = [
    {
      img: "/city.jpg",
      title: "About Me",
      content: (
        <article className="text-4xl text-almond font-secondary text-justify mt-10 pl-10">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquam
            officiis, id, fugiat ut eligendi recusandae ducimus corrupti dolorum
            nemo obcaecati labore eaque in quisquam sint quis! Facilis, quis
            commodi!
          </p>
          <p className="mt-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            illum sint inventore esse velit reprehenderit amet magni nobis
            dignissimos? Earum consequatur ipsam rem, qui ratione repellat
            cupiditate obcaecati provident ullam.
          </p>
        </article>
      ),
    },
    {
      img: "/gameboy.jpg",
      title: "Works",
      content: (
        <article className="text-4xl text-almond font-secondary text-justify mt-10 pl-10">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquam
            officiis, id, fugiat ut eligendi recusandae ducimus corrupti dolorum
            nemo obcaecati labore eaque in quisquam sint quis! Facilis, quis
            commodi!
          </p>
          <p className="mt-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            illum sint inventore esse velit reprehenderit amet magni nobis
            dignissimos? Earum consequatur ipsam rem, qui ratione repellat
            cupiditate obcaecati provident ullam.
          </p>
        </article>
      ),
    },
    {
      img: "/50.jpg",
      title: "Education",
      content: (
        <article className="text-4xl text-almond font-secondary text-justify mt-10 pl-10">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquam
            officiis, id, fugiat ut eligendi recusandae ducimus corrupti dolorum
            nemo obcaecati labore eaque in quisquam sint quis! Facilis, quis
            commodi!
          </p>
          <p className="mt-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            illum sint inventore esse velit reprehenderit amet magni nobis
            dignissimos? Earum consequatur ipsam rem, qui ratione repellat
            cupiditate obcaecati provident ullam.
          </p>
        </article>
      ),
    },
  ];

  useGSAP(
    () => {
      gsap.set(container.current, { scale: 0.8 });

      gsap.to(container.current, {
        scale: 1,
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "center bottom",
          scrub: true,
        },
      });

      sections.forEach((section, index) => {
        ScrollTrigger.create({
          markers: true,
          trigger: `#section-${index}`,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            gsap.to(imageRef.current, {
              opacity: 0,
              onComplete: () => {
                if (imageRef.current) {
                  imageRef.current.src = section.img;
                }
                gsap.to(imageRef.current, { opacity: 1 });
              },
            });
          },
          
        });
      });
    },
    { scope: container }
  );

  return (
    <section
      id="about"
      ref={container}
      className="mt-24 w-full min-h-screen bg-khaki"
    >
      <div className="w-full h-full grid grid-cols-12">
        <div className="col-span-4 sticky top-0 w-full h-screen">
          <div className="relative w-full h-full ">
            <div className="absolute w-full h-full overflow-hidden">
              <div className="relative inset-0 h-full blur-md">
                {sections.map((item, idx) => (
                  <img
                    key={idx}
                    ref={imageBgRef}
                    src={item.img}
                    alt="cidade_bg"
                    className="h-full scale-105 object-cover"
                  />
                ))}
              </div>
            </div>
            <div className="ml-20 relative w-full h-full flex justify-end items-center overflow-hidden">
              <div className="w-[80%]">
                <img
                  ref={imageRef}
                  src="/city.jpg"
                  alt="cidade"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <aside className="col-span-7 col-start-6 p-20 w-full flex flex-col gap-72">
          {sections.map((item, idx) => (
            <div id={`section-${idx}`} key={idx} className="relative w-full">
              <h2 className="text-9xl text-walnut font-secondary w-full text-end">
                {item.title}
              </h2>
              {item.content}
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
