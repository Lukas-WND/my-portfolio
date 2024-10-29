import { About } from "./components/about/About";
import { Header } from "./components/Header";
import { HomeHero } from "./components/Home";
import { Projects } from "./components/projects/Projects";

function App() {
  return (
    <main className="w-full bg-dark-ciano relative overflow-hidden">
      <Header />
      <HomeHero />
      <About />
      <Projects />
    </main>
  );
}

export default App;
