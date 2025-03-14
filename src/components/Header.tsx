import { useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Nav {
  label: string;
  href: string;
}

function Github() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="bi bi-github fill-khaki hover:fill-white transition-colors ease-in-out duration-300 h-9 w-9"
      viewBox="0 0 16 16"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
    </svg>
  );
}

function Linkedin() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="bi bi-linkedin fill-khaki hover:fill-blue-500 transition-colors ease-in-out duration-300 h-9 w-9"
      viewBox="0 0 16 16"
    >
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
    </svg>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  gsap.registerPlugin(ScrollTrigger);

  // Animação de retração do menu desktop
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#home",
        start: "bottom 10%",
        scrub: true,
      },
    });

    tl.to(".header-pc", { y: -100 });
    tl.to(".hamburger", { opacity: 1, duration: 0.3 });
  });

  // Animação do menu lateral
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    gsap.to(".mobile-menu", { x: isOpen ? "100%" : "0%", duration: 0.5 });
  };

  const menu: Nav[] = [
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Projects", href: "/#projects" },
    { label: "Contact Me", href: "/#contact" },
  ];

  return (
    <div className="fixed px-4 py-2 z-50 w-full">
      {/* Navbar Desktop */}
      <header className="h-9 relative hidden md:flex header-pc duration-500">
        <div className="h-full flex items-center justify-between w-full">
          <div className="flex gap-5 items-center">
          <a href="https://www.linkedin.com/in/lukas-wendel/" target="_blank">
              <Linkedin />
            </a>
            <a href="https://github.com/Lukas-WND" target="_blank">
              <Github />
            </a>
          </div>
          <nav className="flex gap-3 h-full items-center">
            {menu.map((item, idx) => (
              <a href={item.href} className="h-full" key={idx}>
                <div className="w-40 h-full text-center content-center text-almond bg-gunmetal rounded-md font-secondary text-xl">
                  {item.label}
                </div>
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Botão de Hambúrguer (Aparece no Mobile) */}
      <button
        className="md:hidden fixed top-4 right-4 z-50 hamburger opacity-0"
        onClick={toggleMenu}
      >
        <div className="w-8 h-1 bg-white mb-1"></div>
        <div className="w-8 h-1 bg-white mb-1"></div>
        <div className="w-8 h-1 bg-white"></div>
      </button>

      {/* Menu Lateral (Mobile) */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-gunmetal py-16 px-6 transform translate-x-full mobile-menu`}
      >
        <button className="absolute top-6 right-6" onClick={toggleMenu}>
          ✖
        </button>
        <nav className="flex flex-col gap-5">
          {menu.map((item, idx) => (
            <a
              href={item.href}
              className="text-white text-lg"
              key={idx}
              onClick={toggleMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
