import { About } from "./components/About";
import { Header } from "./components/Header";
import { HomeHero } from "./components/Home";

function App() {
  return (
    <main className="w-full bg-dark-ciano ">
      <Header />
      <HomeHero />
      <About />
    </main>
  );
}

export default App;
