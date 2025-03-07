import { About } from "./components/about/About";
import { Contact } from "./components/Contact/Contact";
import { Header } from "./components/Header";
import { HomeHero } from "./components/Home";
import { Projects } from "./components/projects/Projects";
import { Skills } from "./components/skills/Skills";

function App() {
  return (
    <main className="w-full bg-dark-ciano relative overflow-hidden">
      <Header />
      <HomeHero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
