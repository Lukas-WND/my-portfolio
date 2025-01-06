import { About } from "./components/about/About";
import { Header } from "./components/Header";
import { HomeHero } from "./components/Home";
import { Skills } from "./components/skills/Skills";

function App() {
  return (
    <main className="w-full bg-dark-ciano relative overflow-hidden">
      <Header />
      <HomeHero />
      <About />
      <Skills />
    </main>
  );
}

export default App;
